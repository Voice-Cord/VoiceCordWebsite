<template>
	<div>
		<nav class="p-0 m-0 navbar navbar-dark navbar-expand-xl align-middle">
			<div class="w-100 contain">
				<div class="row block-center">
					<router-link to="/" class="col-2 me-0 navbar-brand">
						<img
							src="@/assets/logo.png"
							height="50"
							alt="Logo"
							title="Logo"
						/>
					</router-link>

					<button
						v-if="false"
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						@click="toggleNav"
						style="height: 44px !important; width: 44px !important"
					>
						<span v-if="!isOpen" class="navbar-toggler-icon"></span>
						<i
							style="
								font-size: 1.5em !important;

								width: 30px !important;

								margin: auto;
							"
							v-if="isOpen"
							class="fa-solid fa-xmark"
						></i>
					</button>

					<div
						class="col-8"
						style="display: flex; justify-content: center"
					>
						<div
							class="nav-items"
							id="navbarResponsive"
							:style="
								useHamburger
									? (isOpen
											? 'transform: translateY(0); height: calc(100vh - 60px)!important;'
											: 'transform: translateY(-1000px); height: calc(100vh - 60px)!important;') +
									  ' overflow-y: scroll!important'
									: 'transform: translateY(0)'
							"
						>
							<div class="navbar-nav">
								<div class="nav-item">
									<router-link to="/" class="nav-link"
										>Home</router-link
									>
								</div>

								<div class="nav-item">
									<router-link
										to="/documentation"
										class="nav-link"
										>Docs</router-link
									>
								</div>

								<div class="nav-item">
									<router-link to="/support" class="nav-link"
										>Support</router-link
									>
								</div>
								<div class="nav-item">
									<div class="nav-link">
										<a
											href=""
											class="btn btn-secondary btn-md"
											target="_blank"
										>
											Invite
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="col-2"
						style="display: flex; justify-content: end"
					>
						<div
							class="nav-items"
							id="navbarResponsive"
							:style="
								useHamburger
									? (isOpen
											? 'transform: translateY(0); height: calc(100vh - 60px)!important;'
											: 'transform: translateY(-1000px); height: calc(100vh - 60px)!important;') +
									  ' overflow-y: scroll!important'
									: 'transform: translateY(0)'
							"
						>
							<div class="navbar-nav">
								<div class="nav-item" v-if="!isLoggedIn">
									<div class="nav-link">
										<router-link
											to="/login"
											class="btn btn-primary btn-md"
											>Login</router-link
										>
									</div>
								</div>

                                <div class="nav-item" v-if="!isLoggedIn">
									<div class="nav-link">
										<router-link
											to="/login"
											class="btn btn-primary btn-md"
											>Login</router-link
										>
									</div>
								</div>

								<div class="nav-item" v-if="isLoggedIn">
									<Dropdown
										:header="`<img src='${
											authUser && authUser.pfp
												? authUser.pfp
												: 'https://www.knack.com/images/about/default-profile.png'
										}' style='height: 40px; border: 2px solid var(--FSCred); border-radius: 50%; background-color: var(--FSCgrey)'>`"
										:useRouterLinks="true"
										:width="'120px'"
										:pageWidth="width"
										:dropContent="
											authUser &&
											authUser.registrationComplete &&
											authUser.privilege == 4
												? [
														{
															path: '/profile',

															title: 'Profile',
														},
														{
															path: '/admin',

															title: 'Admin',
														},
														{
															path: '/manage-courses',

															title: 'Manage Courses',
														},
														{
															path: '/logout',

															title: 'Log Out',
														},
												  ]
												: [
														{
															path: '/profile',

															title: 'Profile',
														},
														{
															path: '/logout',

															title: 'Log Out',
														},
												  ]
										"
										:useArrow="false"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<div class="page-cover" v-if="isOpen && useHamburger"></div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
	name: "Navbar",
	props: ["authUser"],
	components: {
		Dropdown,
	},
	watch: {
		width: function () {
			if (this.width < 1200) {
				this.useHamburger = true;
			} else {
				this.useHamburger = false;
				this.$emit("close");
			}
		},
		$route(to, from) {
			this.isOpen = false;
		},
		authUser: function (newVal, oldVal) {
			this.isLoggedIn = newVal != null ? true : false;
		},
		"$store.state.cubeLifeMode": function (newVal, oldVal) {
			this.cubeLifeMode = newVal;
		},
	},

	data() {
		return {
			isOpen: false,
			useHamburger: false,
			width: 0,
			isLoggedIn: false,
			cubeLifeMode: false,
		};
	},
	methods: {
		toggleNav() {
			this.isOpen = !this.isOpen;

			if (this.isOpen && this.useHamburger) {
				this.$emit("open");
			} else {
				this.$emit("close");
			}
		},
	},
	async mounted() {
		window.addEventListener("resize", () => {
			this.width = window.innerWidth;
		});

		this.width = window.innerWidth;
	},
};
</script>

<style>
nav {
	width: 100%;
	z-index: 50;
}

.contain {
	/* display: flex;
	flex-wrap: inherit;
	align-items: center;
	justify-content: center;
	padding-right: var(--bs-gutter-x, 0.75rem);
	padding-left: var(--bs-gutter-x, 0.75rem); */
}

nav,
.navbar,
.navbar-dark,
.navbar-expand-xl {
	width: 100%;
	padding: 0 20px !important;
	height: var(--navbar-height) !important;
	position: fixed;
	top: 0;
}

.nav-items {
	height: 60px !important;
}

.nav-items.mobile {
	display: none;
}

/* .navbar-brand img {

filter: invert(72%) sepia(54%) saturate(296%) hue-rotate(1deg) brightness(96%)

contrast(86%);

} */

.nav-link {
	color: white !important;
	width: fit-content !important;
	height: var(--navbar-height);
	text-align: center;
	font-size: 14pt;
	transition: box-shadow 0.5s;
	display: flex;
	padding: 0px 25px !important;
	align-content: center;
	align-items: center;
	justify-content: center;
}

.nav-item:hover {
	transition: all linear 200ms;
}

.nav-item::before:hover {
	color: var(--primary);
	background-color: rgba(255, 255, 255, 0.15);
}

.row {
	width: 100% !important;
}

.nav-item {
	padding: 0 !important;
	align-content: center;
	height: 60px !important;
	transition: all linear 200ms;
}

.nav-items .router-link-active {
	font-weight: bold;
}

@media (max-width: 1199.98px) {
	.navbar-toggler {
		float: right;
		color: var(--primary) !important;
		font-size: 1.25rem;
		line-height: 1;
		background-color: transparent;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		transition: box-shadow 0.15s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	.navbar-toggler:focus {
		box-shadow: none;
	}

	.navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28186, 12, 47, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
	}

	.nav-items {
		position: absolute;
		top: var(--navbar-height);
		left: 0;
		width: 100vw;
		height: unset !important;
		transition: all 0.5s ease-in-out;
		transform-origin: left top;
	}

	.nav-item {
		background-color: transparent !important;
		margin: 0;
		height: unset !important;
	}

	.page-cover {
		width: 1000vw !important;
		height: 1000vh !important;
		overflow: hidden;
		z-index: 49;
		background-color: transparent;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.85);
	}

	.nav-link {
		text-align: left !important;
		padding-left: 2rem !important;
		width: 100% !important;
		justify-content: left;
	}

	.nav-items .router-link-active {
		background: linear-gradient(
			to right,
			rgba(var(--FSCredRGB), 0.5),
			transparent
		);
	}
}
</style>
