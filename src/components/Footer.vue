<template>
	<footer id="largeFooter">
		<div class="top-bg">
			<div class="container">
				<div class="footer-content">
					<div class="row block-center">
						<!-- MIC -->
						<div class="col-2">
							<router-link to="/">
								<img
									src="../assets/img/Logo/VoiceCordFull.png"
									style="height: 100px !important"
								/>
							</router-link>
						</div>

						<!-- SPACER -->
						<div class="col-1"></div>

						<div class="col-3">
							<h4 class="accent">Terms of Service</h4>
							<hr class="accent" />
                            <router-link to="/tos" class="accent-link">View VoiceCord ToS</router-link>
						</div>

						<div class="col-3">
							<h4 class="accent2">Discord Server</h4>
							<hr class="accent2" />
                            <a href="https://discord.gg/dQxrxkhBBz" class="accent2-link" target="_blank">https://discord.gg/dQxrxkhBBz</a>
						</div>

						<div class="col-3">
							<h4 class="accent">Support Email</h4>
							<hr class="accent" />
							<span
								v-html="showEM('plehdroceciov', 'moc.liamg')"
							></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-bg">
			<div class="container">
				<hr class="white-hr" />
				<p class="white">
					VoiceCord &copy; {{ new Date().getFullYear() }}
				</p>
			</div>
		</div>
	</footer>

	<footer id="smallFooter">
		<div class="container py-4">
			<hr class="white-hr" />
			<div class="footer-content">
				<img
					src="../assets/img/Logo/Microphone.png"
					class="cube"
					height="44"
					alt="Logo"
					title="Logo"
					style="
						display: inline-block;
						float: left;
					"
				/>
				<p class="white my-0 py-0 ms-2">
					VoiceCord &copy; {{ new Date().getFullYear() }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			email: "",
		};
	},
	methods: {
		showEM(userName, emServer) {
			userName = this.stringReverse(userName);
			emServer = this.stringReverse(emServer);

			var emLink = userName + "@" + emServer;
			return (
				"<a class='accent-link' href='mailto:" +
				emLink +
				"'>" +
				emLink +
				"</a>"
			);
		},
		stringReverse(textString) {
			if (!textString) return "";
			var revString = "";
			for (let i = textString.length - 1; i >= 0; i--)
				revString += textString.charAt(i);
			return revString;
		},
	},
};
</script>

<style>
#smallFooter {
	display: none;
}

.top-bg {
	/* background-image: url("../assets/img/BGBG.jpg"),
		linear-gradient(to top, rgb(25, 25, 25), rgba(133, 133, 133, 0.322));
	background-blend-mode: overlay;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center; */
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
	overflow: visible;
	padding-top: 50px;
	height: 100px;
    border-top: 5px solid var(--accent);
}

.bottom-bg {
	background-color: var(--primary);
	position: relative;
	z-index: -1;
	height: 200px;
}

.bottom-bg .container {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
    padding-bottom: 20px;
}

#largeFooter .footer-content {
	background-color: #0e0e0e;
	height: 150px;
	z-index: 10;
	left: 50%;
	border-radius: 30px;
	padding: 2rem;
}

.footer-content h2 {
	margin-bottom: 2px;
}

.icon {
	font-size: 1.2rem;
	text-align: center;
	margin: auto;
}

.col-10.mailing-list {
	padding-right: 0 !important;
}

.col-2.mailing-list {
	padding-left: 0 !important;
	height: 30px !important;
}

.mailing-list .btn,
.mailing-list .btn:visited,
.mailing-list .btn:active,
.mailing-list .btn:focus,
.mailing-list .btn:active:focus {
	background-color: var(--primary);
	color: rgb(255, 255, 255);
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
	font-weight: 500;
	height: 30px !important;
	padding: 0;
	width: 100%;
	border-bottom-left-radius: 0 !important;
}

.mailing-list .btn:hover {
	background-color: var(--secondary);
}

.mailing-list input {
	border: none;
	border-bottom: 2px solid var(--primary);
	background-color: transparent;
	color: var(--primary);
	font-size: 1rem;
	font-weight: 500;
	padding: 0;
	width: 100%;
	outline: none;
	height: 30px !important;
}

@media (max-width: 1199.9px) {
	#largeFooter {
		display: none;
	}

	#smallFooter {
		display: block;
	}

	footer {
		background-color: var(--primary);
		position: relative;
		z-index: -1;
	}

	.footer-content {
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.icon {
		font-size: 1.2rem;
		text-align: center;
		margin: auto;
	}

	.col-10.mailing-list {
		padding-right: 0 !important;
	}

	.col-2.mailing-list {
		padding-left: 0 !important;
		height: 30px !important;
	}

	.mailing-list .btn,
	.mailing-list .btn:visited,
	.mailing-list .btn:active,
	.mailing-list .btn:focus,
	.mailing-list .btn:active:focus {
		background-color: var(--primary);
		color: rgb(255, 255, 255);
		border: none;
		outline: none;
		box-shadow: none;
		transition: all 0.25s ease-in-out;
		font-weight: 500;
		height: 30px !important;
		padding: 0;
		width: 100%;
		border-bottom-left-radius: 0 !important;
	}

	.mailing-list .btn:hover {
		background-color: var(--secondary);
	}

	.mailing-list input {
		border: none;
		border-bottom: 2px solid var(--primary);
		background-color: transparent;
		color: var(--primary);
		font-size: 1rem;
		font-weight: 500;
		padding: 0;
		width: 100%;
		outline: none;
		height: 30px !important;
	}
}
</style>