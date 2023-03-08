<template>
	<div>
		<div class="nav-pad">
			<div class="container py-5">
				<h1 class="white center">Servers</h1>
				<div class="row gy-4">
					<div
						v-for="guild in guilds"
						:key="guild"
						class="col-xl-3 col-md-6 col-12"
					>
						<div class="card" style="width: 18rem; box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;">
							<img
								class="card-img-top"
								:src="guild.icon"
								alt="Card image cap"
							/>
							<div class="card-body">
								<h6 class="card-text center" style="color: black">
									{{ guild.name }}
								</h6>
								<div class="row block-center">
									<div class="col-6">
										<a
											:href="guild.monthlySubscription"
											target="_blank"
											class="btn btn-md btn-primary w-100"
											>Monthly</a
										>
									</div>
									<div class="col-6">
										<a
											:href="guild.yearlySubscription"
											target="_blank"
											class="btn btn-md btn-primary w-100"
											>Yearly</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { discordGetRequest } from '@/functions/discordApi';

export default {
	data() {
		return {
			guilds: [],
		};
	},
	async mounted() {
		const user = this.$store.getters.getAuth;
        const monthlySubscriptionLink = "https://buy.stripe.com/6oE8xy9cjgQAdRm9AD";
        const yearlySubscriptionLink = "https://buy.stripe.com/6oEdRS9cj6bWaFa004";

		if (user) {
			const guilds = await discordGetRequest('users/@me/guilds')
			if (!guilds) return;

			this.guilds = guilds;

			this.guilds.forEach((guild) => {
				if (guild.icon) {
					guild.icon = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
				} else {
					guild.icon = require("@/assets/img/Logo/TransparentBGFace.png");
				}

                guild.monthlySubscription = `${monthlySubscriptionLink}?client_reference_id=${user.id}_${guild.id}`;
                guild.yearlySubscription = `${yearlySubscriptionLink}?client_reference_id=${user.id}_${guild.id}`;
			});
		}
	},
};
</script>

<style>
</style>
