<template></template>

<script>
import { authService } from '@/classes/authService';
import store from '@/store';

export default {
	async mounted() {
		authService.logout(this.$store);
		console.log("logout")
        this.$router.push("/");
	},
};
</script>

<style>
</style>
