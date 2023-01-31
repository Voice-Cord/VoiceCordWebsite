<template>

</template>

<script>
import { supabase } from "@/supabase";

export default {
    async mounted() {
        const { error } = await supabase.auth.signOut();
        this.$router.push("/")
    }
}
</script>

<style>

</style>