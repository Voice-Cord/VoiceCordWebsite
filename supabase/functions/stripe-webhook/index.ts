// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.8.0";

// esm.sh is used to compile stripe-node to be compatible with ES modules.
import Stripe from "https://esm.sh/stripe@11.9.1";

const stripe = Stripe(Deno.env.get("STRIPE_API_KEY"), {
    // This is needed to use the Fetch API rather than relying on the Node http
    // package.
    httpClient: Stripe.createFetchHttpClient(),
});
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider();

console.log("Hello from Stripe Webhook v1!")

serve(async (request) => {
    const signature = request.headers.get("Stripe-Signature");

    // First step is to verify the event. The .text() method must be used as the
    // verification relies on the raw request body rather than the parsed JSON.
    const body = await request.text();
    let receivedEvent;
    // console.log("BODY", body);
    // console.log("SIGNATURE", signature);

    try {
        receivedEvent = await stripe.webhooks.constructEventAsync(
            body,
            signature,
            Deno.env.get("STRIPE_WEBHOOK_SIGNING_SECRET"),
            undefined,
            cryptoProvider
        );
    } catch (err) {
        return new Response(err.message, { status: 418 });
    }

    const action = receivedEvent.data.object.object;

    let supabaseClient;

    try {
        supabaseClient = createClient(
            // Supabase API URL - env var exported by default.
            Deno.env.get('SBASE_URL') ?? '',
            // Supabase API ANON KEY - env var exported by default.
            Deno.env.get('SBASE_ANON_KEY') ?? '',
        );
    }
    catch (err) {
        return new Response(err.message, { status: 418 });
    }

    // If the event indicates payment completion
    if (action == "checkout.session") {
        // Get the custom fields array
        const customFields = receivedEvent.data.object.custom_fields;

        // Confirm it's no longer than two indices long
        if (customFields.length > 2) {
            console.log("Invalid customFields:", customFields);
        }
        else {
            let serverID, userID;

            // Get userID and serverID (if it exists)
            for (let i = 0; i < customFields.length; i++) {
                if (customFields[i].key == "serverid") {
                    serverID = customFields[i].numeric.value;
                }
                else if (customFields[i].key == "userid") {
                    userID = customFields[i].numeric.value;
                }
                else {
                    console.log("Invalid field:", customFields[i], customFields[i].key, customFields[i].key == "serverid", customFields[i].key == "userid");
                }
            }

            if (serverID && userID == "") {
                console.log("No User ID provided");
            }
            else if (serverID && userID) {
                console.log("SERVER ID:", serverID);
                console.log("USER ID:", userID);

                const res = await supabaseClient
                    .from('server-subscriptions')
                    .insert([
                        { 'order_id': 'temp', 'user_id': userID, 'server_id': serverID }
                    ]);
                console.log("Server subscription successful", res);
            }
            else if (userID) {
                const res = await supabaseClient
                    .from('user-subscriptions')
                    .insert([
                        { 'order_id': 'temp', 'user_id': userID }
                    ]);
                console.log("User subscription successful", res);
            }
            else {
                console.log("serverID and userID are both null");
            }
        }
    }
    else {
        console.log("Invalid action:", action);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

// npx supabase functions serve --no-verify-jwt stripe-webhook --env-file ./supabase/functions/stripe-webhook/.env
// stripe listen --forward-to localhost:54321/functions/v1/
// stripe trigger payment_intent.succeeded

// npx supabase functions deploy --no-verify-jwt --legacy-bundle stripe-webhook
// npx supabase secrets set --env-file ./supabase/functions/stripe-webhook/.env