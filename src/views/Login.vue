<template>
	<div
		class="h-100 w-100 d-flex"
		style="
			height: 100vh !important;
			align-items: center;
			justify-content: center;
		"
	>
		<h1 class="title">Redirecting...</h1>
	</div>
</template>

<script>

export default {
	async mounted() {
		window.location.href =
			"https://discord.com/api/oauth2/authorize?client_id=1061725454366687232&redirect_uri=https%3A%2F%2Fwww.voicecord.app&response_type=code&scope=identify%20guilds";
	},
};
</script>

<style>
</style>
