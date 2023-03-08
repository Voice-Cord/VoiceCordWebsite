<template>
	<div style="padding-top: 150px;">
		<div
			class="container px-3 py-5"
			style="
				background-color: rgba(255, 255, 255, 0.6);
				border-radius: 1rem;
			"
		>
			<h1 class="center">VoiceCord Tiers</h1>
			<div class="row mt-4" style="display: flex">
				<div class="col-4 px-5">
					<h4 class="center">Free</h4>
					<ul>
						<li>$0/month</li>
						<li>Access free tier of VoiceCord in all servers</li>
						<li>Messages limited to 10 seconds long</li>
					</ul>
				</div>
				<div
					class="col-4 px-5"
					style="flex-grow: 1; display: flex; flex-direction: column"
				>
					<h4 class="center">Individual</h4>
					<ul>
						<li>$5/month, auto-renewing</li>
						<li>Access VoiceCord Premium in all servers</li>
						<li>Limited to one user</li>
						<li>Messages limited to 1 hour long</li>
					</ul>
					<div
						style="
							flex-grow: 1;
							display: flex;
							align-content: flex-end;
						"
					>
						<div style="align-self: flex-end">
							<a
								:href="`https://buy.stripe.com/eVa9BC3RZgQA00w3ce?client_reference_id=${authUser.id}`"
								target="_blank"
								class="btn btn-md btn-primary w-100 mb-2"
								>Monthly Individual Subscription</a
							>
							<a
								:href="`https://buy.stripe.com/6oE4hi74bascfZu5kp?client_reference_id=${authUser.id}`"
								target="_blank"
								class="btn btn-md btn-primary w-100"
								>Yearly Individual Subscription</a
							>
						</div>
					</div>
				</div>
				<div
					class="col-4 px-5"
					style="flex-grow: 1; display: flex; flex-direction: column"
				>
					<h4 class="center">Server</h4>
					<ul>
						<li>$10/month, auto-renewing</li>
						<li>
							Access to VoiceCord Premium for everyone within a
							single server
						</li>
						<li>Messages limited to 1 hour long</li>
					</ul>
					<div
						style="
							flex-grow: 1;
							display: flex;
							align-content: flex-end;
						"
					>
						<router-link
							class="btn btn-md btn-primary w-100"
							style="align-self: flex-end"
							to="/servers"
						>
                        Select Server...
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			authUser: {
				id: "",
			},
		};
	},
	async mounted() {
		const user = this.$store.getters.getAuthUser;

		if (user) {
			this.authUser = user;
		} else {
			this.$router.push({ name: "Home" });
		}
	},
};
</script>

<style>
</style>
