<template>
	<div class="wrapper">
		<div class="overlay"></div>
		<div
			class="container px-3 py-5"
			style="
				background-color: rgba(255, 255, 255, 0.6);
				margin-top: 150px;
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
						<a
							href="https://buy.stripe.com/bIYaFGewDeIscNi3cd"
							target="_blank"
							class="btn btn-lg btn-primary w-100"
							style="align-self: flex-end"
							>Buy Individual Subscription</a
						>
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
						<a
							href="https://buy.stripe.com/8wM29a0FN9o83cIdQQ"
							target="_blank"
							class="btn btn-lg btn-primary w-100"
							style="align-self: flex-end"
							>Buy Server Subscription</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>

</style>