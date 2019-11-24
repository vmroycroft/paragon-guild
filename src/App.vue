<template>
	<div id="app">
		<v-app>
			<v-navigation-drawer app>
				<!-- -->
			</v-navigation-drawer>

			<v-app-bar
				app
				flat
				color="rgba(0,0,0,0.85)"
				class="d-none d-md-flex justify-center"
			>
				<v-btn text>Home</v-btn>
				<v-btn text>Forum</v-btn>
				<v-btn text>Classes</v-btn>
				<v-img
					src="./assets/images/tabard.png"
					max-height="55"
					max-width="55"
					:contain="true"
				></v-img>
				<v-btn text>Apply</v-btn>
				<v-btn text>Events</v-btn>
				<v-btn text>Inventory</v-btn>
			</v-app-bar>

			<v-content>
				<v-container fluid>
					<router-view></router-view>
				</v-container>
			</v-content>

			<!-- <v-footer app> </v-footer> -->
		</v-app>
	</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style>
@font-face {
	font-family: "New Vera";
	src: url("~/assets/fonts/New Vera/New Vera.woff2") format("woff2"),
		url("~/assets/fonts/New Vera/New Vera.woff") format("woff");
	font-weight: 300;
	font-style: normal;
}

html,
body,
.v-application {
	font-family: "Titillium Web", "Roboto", sans-serif !important;
	font-size: 16px; /* fallback if calc() is not supported */
	font-size: responsive 14px 16px; /* https://www.rucksackcss.org/docs/#responsive-type */
	line-height: 1.5;
}
</style>
