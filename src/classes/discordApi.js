import { keys } from "../constants/localStorageKeys.js";
import { client } from "../constants/client.js";
import { authStorage } from "../classes/authStorage.js";

class DiscordApi {
    async getRequest(path) {
        const data = await this.request(path, {
            method: "GET",
            headers: {
                Authorization:
                    localStorage.getItem(keys.tokenType) +
                    " " +
                    localStorage.getItem(keys.accessToken),
            },
        });
        return data;
    }

    async request(path, request) {
        if (localStorage.getItem(keys.expiresAt) < Date.now() && localStorage.getItem(keys.expiresAt) != null) {
            await this.refreshLogin();
        }

        const res = await fetch("https://discord.com/api/" + path, request).catch(
            console.log
        );
        if (!res) return res;

        const data = await res.json().catch(console.log);
        return data;
    }

    async refreshLogin() {
        const payload = new URLSearchParams();

        payload.append('client_id', client.id);
        payload.append('client_secret', client.secret);
        payload.append('grant_type', 'refresh_token');
        payload.append('refresh_token', localStorage.getItem(keys.refreshToken));

        const res = await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: payload,
        });

        const data = await res.json().catch(console.log);

        console.log("REFRESH DATA", data);
        if (!data) return data;

        authStorage.storeLoginData(data);
    }
}

export const discordApi = new DiscordApi();
