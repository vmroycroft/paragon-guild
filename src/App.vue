<template>
	<div id="app">
		<v-app>
			<AppBar />
			<v-content>
				<router-view></router-view>
			</v-content>
			<Footer />
		</v-app>
	</div>
</template>

<script>
import AppBar from './components/AppBar';
import Footer from './components/Footer';

export default {
	name: 'app',
	components: {
		AppBar,
		Footer
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
	background: url(~/assets/images/emblem.svg) no-repeat top center;
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
	background: linear-gradient(to right, rgb(50, 112, 123, 0), rgba(50, 112, 123, 0.5), rgba(50, 112, 123, 1));
}

hr:after {
	right: 0;
	left: 50%;
	margin-left: 25px;
	background: linear-gradient(to left, rgb(50, 112, 123, 0), rgba(50, 112, 123, 0.5), rgba(50, 112, 123, 1));
}

ul {
	margin-bottom: 16px;
	list-style-type: circle;
	list-style-position: inside;
}

.paragon-font {
	font-family: 'New Vera';
	font-weight: 100;
	color: #ad8965;
}

.v-toolbar__title {
	font-size: 2rem !important;
	align-self: flex-end;
	position: fixed;
	left: 1.5rem;
}

.wrapper {
	max-width: 70%;
	margin: 0 auto;
}

@media (max-width: 960px) {
	.wrapper {
		max-width: 90%;
	}
}
</style>
