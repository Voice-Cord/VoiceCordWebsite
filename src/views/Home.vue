<template>
	<div class="wrapper cool-background">
		<!-- HERO -->
		<header>
			<img src="@/assets/img/HomePage/Light.png" class="background" />
			<img src="@/assets/img/HomePage/Stage.png" class="foreground" />
			<img src="@/assets/img/HomePage/Crowd.png" class="fgfg" />
			<div class="container hero-content">
				<div class="row block-center">
					<div class="ms-md-5 ps-md-5 col-lg-5 col-md-7 col-12">
						<h1
							class="title"
							style="display: flex; justify-content: center"
						>
							<img src="@/assets/img/Logo/VoiceCordFull.png" />
						</h1>
						<hr class="white-hr" />
						<h5 class="white">
							Tired of typing long messages? VoiceCord is a
							Discord bot to send voice messages on discord!
						</h5>
						<div class="mt-3 row block-center">
							<div class="col-6">
								<a
									href="https://discord.com/oauth2/authorize?client_id=1061725454366687232&permissions=8&scope=bot"
									target="_blank"
									class="btn btn-primary btn-md w-100"
									>Invite to Server</a
								>
							</div>
							<div class="col-6">
								<a
									href="mailto:voicecordhelp@gmail.com"
									target="_blank"
									class="btn btn-primary btn-md w-100"
									>Contact Us</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- CONTENT -->
		<div class="overflow">
			<section>
				<div
					class="mx-auto pt-5 mb-3"
					style="
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
					"
				>
					<div class="container">
						<h1 class="center mt-4 mb-4">What is VoiceCord?</h1>
						<div class="row block-center gy-4 gx-3">
							<div
								class="col-xxl-6 col-12"
								style="
									display: flex;
									justify-content: center;
									flex-direction: column;
									align-items: center;
								"
							>
								<iframe
									style="
										width: 100%;
										max-width: 560px;
										height: 315px;
									"
									src="https://www.youtube.com/embed/cQDnnMgopOo"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
							<div
								class="col-xxl-6 col-12"
								style="
									display: flex;
									justify-content: center;
									flex-direction: column;
									align-items: center;
								"
							>
								<iframe
									style="
										width: 100%;
										max-width: 560px;
										height: 315px;
									"
									src="https://www.youtube.com/embed/kAkvCwdeeTM"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-5 pt-3 container">
					<h1 class="center mt-4 mb-4">Premium Features</h1>
					<div
						class="mx-auto mb-5 row gy-4"
						style="width: 75% !important"
					>
						<div class="col-xl-4 col-12">
							<div class="d-flex" style="justify-content: center">
								<div class="card" style="width: 18rem">
									<img
										class="card-img-top"
										src="@/assets/img/PremiumFeatures/LongerMessages.png"
										alt="Card image cap"
									/>
									<div class="card-body">
										<p
											class="card-text"
											style="color: black"
										>
											Longer voice messages (up to 1 hour)
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-4 col-12">
							<div class="d-flex" style="justify-content: center">
								<div class="card" style="width: 18rem">
									<img
										class="card-img-top"
										src="@/assets/img/PremiumFeatures/VoiceMessageThread.png"
										alt="Card image cap"
									/>
									<div class="card-body">
										<p
											class="card-text"
											style="color: black"
										>
											Continuous voice message thread
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="col-xl-4 col-12">
							<div class="d-flex" style="justify-content: center">
								<div class="card" style="width: 18rem">
									<img
										class="card-img-top"
										src="@/assets/img/PremiumFeatures/CustomBackground.png"
										alt="Card image cap"
									/>
									<div class="card-body">
										<p
											class="card-text"
											style="color: black"
										>
											Custom voice message background
											(coming soon)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	</div>
</template>

<script>
import Parallax from "@/components/Parallax.vue";
import SkewBox from "@/components/SkewBox.vue";
import Footer from "@/components/Footer.vue";
import { discordApi } from "@/classes/discordApi";
import { authService } from "@/classes/authService";

export default {
	components: {
		SkewBox,
		Parallax,
		Footer,
	},
	data() {
		return {};
	},
	methods: {
		async saveUser() {
			const user = await discordApi.getRequest("users/@me");
			if (!user) return user;

			if (!user.avatar) {
				user.avatar = `https://cdn.discordapp.com/embed/avatars/${
					user.discriminator % 5
				}.png`;
			} else {
				user.avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
			}

			// Add user data to store
			console.log("save user: ", user);
			this.$store.commit("setAuthUser", user);
		},
	},
	async mounted() {
		// Check for url parameter "code"
		const code = this.$route.query.code;

		// If access token exists in local storage, get user data from Discord API
		if (authService.isLoggedIn()) {
			this.saveUser();
		}

		// If code URL param exists, get access token from Discord API and save it into local storage
		else if (code) {
			const data = await authService.login(code);
			this.saveUser();
		}
	},
};
</script>

<style>
.cool-background {
	background-image: url("../assets/img/v2.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	backdrop-filter: blur(10px);
}

.wrapper {
	height: 100vh;
	overflow-y: visible;
	overflow-x: hidden;
	perspective: 20px;
}

header {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	transform-style: preserve-3d;
	z-index: -1;
}

.hero-content {
	transform: translateZ(-7px) scale(1.4);
}

.hero-content .btn {
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.hero-content img {
	width: 100%;
}

.background {
	transform: translateZ(-20px) scaleY(2) scaleX(2.01);
	object-position: right top;
	backdrop-filter: blur(5px);
	background-color: rgba(0, 0, 0, 0.6);
}

.foreground {
	transform: translateX(-2px) translateZ(-10px) scale(1.6);
	object-position: right center;
}

.fgfg {
	transform: translateX(0px) translateZ(3px) scale(0.851);
	object-position: right;
	pointer-events: none;
	height: 150% !important;
}

.bgbg,
.background,
.foreground,
.fgfg {
	position: absolute;
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
}

.title {
	font-size: 5rem;
	color: white;
	text-shadow: 0 0 5px black;
}

section {
	height: 100%;
	width: 100%;
	background-color: var(--primary);
	color: white;
}

.card {
	border: 0 !important;
}

.overlay {
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	position: fixed;
	top: 0;
	left: 0;
	width: calc(100vw);
	height: 100%;
	z-index: -1;
}

.overflow {
	z-index: 5;
}

@media (max-width: 1399.9px) {
	.wrapper {
		perspective: none;
	}

	header {
		height: 80vh;
		overflow: hidden;
	}

	.background,
	.foreground,
	.fgfg,
	.hero-content {
		transform: translate(0) scale(1);
	}

	header {
		transform-style: flat;
		z-index: 1;
	}

	.hero-content img {
		margin: auto;
		max-height: 140px;
		width: unset;
	}
}

@media (max-width: 997.9px) {
	.wrapper {
		perspective: none;
	}

	header {
		height: 60vh;
	}

	.background,
	.foreground,
	.fgfg,
	.hero-content {
		transform: translate(0) scale(1);
	}

	header {
		transform-style: flat;
		z-index: 0;
	}

	.hero-content .btn {
		height: 40px;
	}

	.hero-content img {
		margin: auto;
		margin-top: 30px;
		max-height: 110px;
	}
}

@media (max-width: 767.9px) {
	.hero-content {
		background-color: rgba(0, 0, 0, 0.7);
		padding: 2rem;
		border-radius: 2rem;
		margin-top: 80px;
	}

	.hero-content img {
		margin-top: 0;
		max-height: 90px;
	}

	.hero-content .btn {
		height: 60px;
	}

	.background,
	.foreground {
		object-position: top right;
		object-fit: cover;
	}

	.fgfg {
		object-position: bottom;
		object-fit: cover;
		transform: translateY(-50px);
	}
}
</style>
