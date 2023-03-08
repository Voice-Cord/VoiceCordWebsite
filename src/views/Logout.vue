<template></template>

<script>
export default {
	async mounted() {
		localStorage.removeItem("discord.accessToken");
		localStorage.removeItem("discord.refreshToken");
		localStorage.removeItem("discord.tokenType");
        this.$store.commit("setAuth", "");
	},
};
</script>

<style>
</style>