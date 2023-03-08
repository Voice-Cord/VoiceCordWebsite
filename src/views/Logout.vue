<template></template>

<script>
export default {
	async mounted() {
		localStorage.removeItem("discord.accessToken");
		localStorage.removeItem("discord.refreshToken");
        localStorage.removeItem("discord.expiresAt");
		localStorage.removeItem("discord.tokenType");
        this.$store.commit("setAuth", null);
        this.$router.push("/");
	},
};
</script>

<style>
</style>
