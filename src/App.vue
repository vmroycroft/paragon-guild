<template>
	<div id="app" v-scroll="onScroll">
		<v-app>
			<v-navigation-drawer app>
				<!-- -->
			</v-navigation-drawer>

			<v-app-bar app flat color="#0d181f" class="d-none d-md-flex justify-center">
				<v-toolbar-title class="paragon-font hidden animated fadeOut">Paragon</v-toolbar-title>
				<v-btn text>Home</v-btn>
				<v-btn text>Forum</v-btn>
				<v-btn text>Classes</v-btn>
				<v-img src="./assets/images/tabard.png" max-height="55" max-width="55" :contain="true"></v-img>
				<v-btn text>Apply</v-btn>
				<v-btn text>Events</v-btn>
				<v-btn text>Inventory</v-btn>
			</v-app-bar>

			<v-content>
				<!-- <v-container> -->
				<!-- <v-container fluid> -->
				<router-view></router-view>
				<!-- </v-container> -->
			</v-content>

			<!-- <v-footer app> </v-footer> -->
		</v-app>
	</div>
</template>

<script>
import EventBus from './EventBus';

export default {
	name: 'app',
	methods: {
		onScroll() {
			EventBus.$emit('scroll');
		}
	}
};
</script>

<style>
@import '~animate.css';

@font-face {
	font-family: 'New Vera';
	src: url('~/assets/fonts/New Vera/New Vera.woff2') format('woff2'), url('~/assets/fonts/New Vera/New Vera.woff') format('woff');
	font-weight: 300;
	font-style: normal;
}

html,
body,
.v-application {
	font-family: 'Titillium Web', 'Roboto', sans-serif !important;
	font-size: 16px; /* fallback if calc() is not supported */
	font-size: responsive 16px 18px; /* https://www.rucksackcss.org/docs/#responsive-type */
	line-height: 1.5;
}

hr {
	background: url(~/assets/images/emblem.png) no-repeat top center;
	background-size: contain;
	display: block;
	height: 18px;
	border: 0;
	position: relative;
	width: 50%;
	margin: 0 auto;
}

hr:before,
hr:after {
	content: '';
	display: block;
	position: absolute;
	background: #101e3c;
	height: 2px;
	top: 8px;
}

hr:before {
	left: 0;
	right: 50%;
	margin-right: 25px;
	background: linear-gradient(to right, rgb(13, 24, 31, 0), rgba(13, 24, 31, 0.5), rgba(13, 24, 31, 1));
}

hr:after {
	right: 0;
	left: 50%;
	margin-left: 25px;
	background: linear-gradient(to left, rgb(13, 24, 31, 0), rgba(13, 24, 31, 0.5), rgba(13, 24, 31, 1));
}

ul {
	margin-bottom: 16px;
}

.hidden {
	visibility: hidden;
}

.paragon-font {
	font-family: 'New Vera';
	font-weight: 100;
	color: #ad8965;
}
</style>
