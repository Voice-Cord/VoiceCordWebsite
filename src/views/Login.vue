<template>
	<div
		class="h-100 w-100 d-flex"
		style="height: 100vh!important; align-items: center; justify-content: center"
	>
		<h1 class="title">Redirecting...</h1>
	</div>
</template>

<script>
import { supabase } from "@/supabase";

export default {
	async mounted() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "discord",
		});

		if (error) {
			console.log(error);
		}
	},
};
</script>

<style>
</style>