<template>
	<div class="applicationContainer">
		<Navbar :key="authReloadKey" />
		<router-view></router-view>
	</div>
	<!-- <Footer /> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Navbar,
		Footer,
	},
	watch: {
		"$store.state.authUser": function (newVal, oldVal) {
			this.authReloadKey++;
		},
	},
	data() {
		return {
			authReloadKey: 0,
		};
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@300;400;500;600;700&display=swap");

/* 
██████   ██████   ██████  ████████ 
██   ██ ██    ██ ██    ██    ██    
██████  ██    ██ ██    ██    ██    
██   ██ ██    ██ ██    ██    ██    
██   ██  ██████   ██████     ██    
*/
:root {
	--navbar-height: 60px;

	--primary: #1f1f1f;
	--secondary: #535353 !important;
	--accent: rgb(0, 94, 255) !important;
	--accent2: rgb(8, 255, 0) !important;
	--old-blurple: #7289da !important;
	--new-blurple: #5865f2 !important;

	--primaryRGB: 31, 31, 31 !important;
	--secondaryRGB: 83, 83, 83 !important;
	--accentRGB: 0, 94, 255 !important;
	--accent2RGB: 7, 255, 0 !important;

	--primary-dark: hsl(0, 0%, 5%) !important;
	--secondary-dark: hsl(0, 0%, 20%) !important;
	--accent-dark: hsl(218, 100%, 30%) !important;
	--accent2-dark: hsl(118, 100%, 30%) !important;

	--red-gradient-left: linear-gradient(
		to left,
		var(--primary),
		var(--primary-dark) 45%
	);

	--red-gradient-right: linear-gradient(
		to right,
		var(--primary),
		var(--primary-dark) 45%
	);

	--blue-gradient-left: linear-gradient(
		to left,
		var(--secondary),
		#004377 45%
	);

	--blue-gradient-right: linear-gradient(
		to right,
		var(--secondary),
		#004377 45%
	);

	--grey-gradient-left: linear-gradient(to left, var(--accent2), #353535 45%);

	--grey-gradient-right: linear-gradient(
		to right,
		var(--accent2),
		#353535 45%
	);
}

.applicationContainer {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

body {
	background-image: url("@/assets/img/v2.jpg");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	backdrop-filter: blur(10px);
	color: rgb(20, 20, 20);
	font-family: "Montserrat", sans-serif;
	line-height: 1.75;
	min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	/* font-family: "Rajdhani", sans-serif; */
}

h1 {
	font-size: 350%;
}

h2 {
	font-size: 300%;
}

h3 {
	font-size: 250%;
}

h4 {
	font-size: 200%;
}

h5 {
	font-size: 150%;
}

h6 {
	font-size: 130%;
}

/* 
███████  ██████ ██████   ██████  ██      ██      ██████   █████  ██████  
██      ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████ ██      ██████  ██    ██ ██      ██      ██████  ███████ ██████  
     ██ ██      ██   ██ ██    ██ ██      ██      ██   ██ ██   ██ ██   ██ 
███████  ██████ ██   ██  ██████  ███████ ███████ ██████  ██   ██ ██   ██ 
*/
.dark-scroll-bar {
	scrollbar-width: thin !important;
	scrollbar-color: var(--accent) transparent !important;
	overflow-y: auto !important;
	/* margin-right: 5px !important; */
}

/* Works on Chrome, Edge, and Safari */
::-webkit-scrollbar {
	width: 10px !important;
}

::-webkit-scrollbar-track {
	background: rgb(8, 8, 8) !important;
}

::-webkit-scrollbar-thumb {
	background-color: var(--accent) !important;
	border-radius: 100px !important;
	width: px !important;
	border: 3px solid var(--accent) !important;
}

.white-scroll-bar::-webkit-scrollbar,
.white-scroll-bar ::-webkit-scrollbar {
	width: 10px !important;
}

.white-scroll-bar::-webkit-scrollbar-track,
.white-scroll-bar ::-webkit-scrollbar-track {
	background: transparent !important;
}

.white-scroll-bar::-webkit-scrollbar-thumb,
.white-scroll-bar ::-webkit-scrollbar-thumb {
	background-color: white !important;
	border-radius: 100px !important;
	width: 4px !important;
	border: 3px solid white !important;
}

/*
 ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██      ███████ 
██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██      ██      
██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██      ███████ 
██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██           ██ 
 ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████ ███████  
 */
.carousel__pagination-button {
	height: calc(var(--vc-pgn-height) * 1.5) !important;
	width: calc(var(--vc-pgn-width) * 1.5) !important;
}

.carousel__pagination-button--active {
	background-color: white !important;
	box-shadow: 0px 0px 1px 1px var(--accent2);
}

.carousel__pagination {
	padding: 0 !important;
}

.carousel__icon {
	width: calc(var(--vc-icn-width) * 2) !important;
	height: calc(var(--vc-icn-width) * 2) !important;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	background-color: transparent;
	width: calc(var(--vc-nav-width) * 2) !important;
	height: calc(var(--vc-nav-height) * 2) !important;
	color: white !important;
}

.carousel__prev {
	left: 30px !important;
}

.carousel__next {
	right: 30px !important;
}

/* 
███████  ██████  █████  ██      ███████      ██████  █████  ██████   ██████  ██    ██ ███████ ███████ ██      
██      ██      ██   ██ ██      ██          ██      ██   ██ ██   ██ ██    ██ ██    ██ ██      ██      ██      
███████ ██      ███████ ██      █████       ██      ███████ ██████  ██    ██ ██    ██ ███████ █████   ██      
     ██ ██      ██   ██ ██      ██          ██      ██   ██ ██   ██ ██    ██ ██    ██      ██ ██      ██      
███████  ██████ ██   ██ ███████ ███████      ██████ ██   ██ ██   ██  ██████   ██████  ███████ ███████ ███████ 
*/
.scale-carousel .carousel__slide > .carousel__item {
	transform: scale(0.8);
	opacity: 0.5;
	transition: 0.5s;
}

.scale-carousel .carousel__slide--next > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(25px);
}

.scale-carousel .carousel__slide--prev > .carousel__item {
	opacity: 0.9;
	transform: scale(0.9) translate(-25px);
}

.scale-carousel .carousel__slide--active > .carousel__item {
	opacity: 1;
	transform: scale(1.1);
}

/* 
 ██████  ███████ ███    ██ ███████ ██████   █████  ██      
██       ██      ████   ██ ██      ██   ██ ██   ██ ██      
██   ███ █████   ██ ██  ██ █████   ██████  ███████ ██      
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██ ██      
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██ ███████ 
*/
.justify-large {
	hyphens: auto;
	text-align: justify;
	text-justify: distribute;
	text-align-last: left;
}

p {
	margin: 0 !important;
}

.success {
	transform: translateX(-10px);
}

.btn {
	border-radius: 10px !important;
}

.btn-primary,
.btn-primary:visited,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:active:focus {
	background-color: var(--accent);
	color: rgb(255, 255, 255);
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
}

.btn-primary:hover {
	background-color: var(--accent-dark) !important;
}

.btn-secondary,
.btn-secondary:visited,
.btn-secondary:active,
.btn-secondary:focus,
.btn-secondary:active:focus {
	background-color: var(--accent2);
	color: black;
	border: none;
	outline: none;
	box-shadow: none;
	transition: all 0.25s ease-in-out;
}

.btn-secondary:hover {
	color: white;
	background-color: var(--accent2-dark) !important;
}

.primary-section {
	border-bottom: 5px solid var(--primary);
}

.secondary-section {
	border-bottom: 5px solid var(--secondary);
}

.accent-section {
	border-bottom: 5px solid var(--accent);
}

.large {
	font-size: 3.5rem;
}

p.large {
	font-size: 1.3rem;
}

.normal {
	font-weight: normal;
}

.center {
	text-align: center;
}

.italicized {
	font-style: italic;
}

.primary {
	color: var(--primary);
}

.secondary {
	color: var(--secondary);
}

.white,
.white:hover,
.white:active,
.white:active:focus,
.white:focus,
.white:visited {
	color: white !important;
}

.primary {
	color: var(--primary);
}

.secondary {
	color: var(--secondary);
}

.accent {
	color: var(--accent);
}

.accent2 {
	color: var(--accent2);
}

hr.primary {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--primary);
	border-radius: 20px;
	opacity: 1;
}

hr.secondary {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--secondary);
	border-radius: 20px;
	opacity: 1;
}

hr.accent {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--accent);
	border-radius: 20px;
	opacity: 1;
}

hr.accent2 {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--accent2);
	border-radius: 20px;
	opacity: 1;
}

.no-decor,
.no-decor:hover,
.no-decor:focus,
.no-decor:active,
.no-decor:visited {
	text-decoration: none;
	color: var(--primary);
}

.white-shadow {
	text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
		0 0 5px #fff, 0 0 6px #fff, 0 0 7px #fff;
}

.black-shadow {
	text-shadow: 0 0 5px #000;
}

.link,
.link:focus,
.link:active,
.link:visited {
	color: var(--primary);
	font-weight: 500;
}

.link:hover {
	color: var(--primary-dark);
}

.accent-link,
.accent-link:focus,
.accent-link:active,
.accent-link:visited {
	color: var(--accent);
	font-weight: 500;
}

.accent-link:hover {
	color: var(--accent-dark);
}

.accent2-link,
.accent2-link:focus,
.accent2-link:active,
.accent2-link:visited {
	color: var(--accent2);
	font-weight: 500;
}

.accent2-link:hover {
	color: var(--accent2-dark);
}

.primary-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid var(--primary);
	border-radius: 20px;
	opacity: 1;
}

.white-hr {
	margin: 0 0 15px 0;
	border-bottom: 4px solid white;
	border-radius: 20px;
	opacity: 1;
}

.row.block-center {
	width: unset !important;
}

.nav-pad {
	padding-top: 60px;
}

.vertical-center {
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
}

.mb-sm-4 {
	margin-bottom: 0 !important;
}

.bold {
	font-weight: bold;
}

.blur {
	backdrop-filter: blur(5px);
}

.strong-blur {
	backdrop-filter: blur(10px);
}

/*
███    ███ ███████ ██████  ██  █████       ██████  ██    ██ ███████ ██████  ██ ███████ ███████ 
████  ████ ██      ██   ██ ██ ██   ██     ██    ██ ██    ██ ██      ██   ██ ██ ██      ██      
██ ████ ██ █████   ██   ██ ██ ███████     ██    ██ ██    ██ █████   ██████  ██ █████   ███████ 
██  ██  ██ ██      ██   ██ ██ ██   ██     ██ ▄▄ ██ ██    ██ ██      ██   ██ ██ ██           ██ 
██      ██ ███████ ██████  ██ ██   ██      ██████   ██████  ███████ ██   ██ ██ ███████ ███████ 
*/
/* 
BOOTSTRAP BREAKPOINTS:
  xs: 475px
  sm: 576px
  md: 768px
  lg: 992px
  xl: 1200px
  xxl: 1400px
*/
@media (max-width: 1199.9px) {
	h1 {
		font-size: 300%;
	}

	h2 {
		font-size: 250%;
	}

	h3 {
		font-size: 200%;
	}

	h4 {
		font-size: 175%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 991.9px) {
	h1 {
		font-size: 250%;
	}

	h2 {
		font-size: 200%;
	}

	h3 {
		font-size: 175%;
	}

	h4 {
		font-size: 150%;
	}

	h5 {
		font-size: 125%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 767.9px) {
	h1 {
		font-size: 220%;
	}

	h2 {
		font-size: 180%;
	}

	h3 {
		font-size: 160%;
	}

	h4 {
		font-size: 140%;
	}

	h5 {
		font-size: 120%;
	}

	h6 {
		font-size: 100%;
	}
}

@media (max-width: 474.9px) {
	body {
		font-size: 10pt;
	}

	.justify-large {
		text-align: left;
	}
}
</style>
