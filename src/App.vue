<template>
	<div id="app">
		<v-app>
			<v-content>
				<!-- <v-container fluid> -->
				<v-toolbar flat color="transparent" class="toolbar">
					<img src="../public/assets/images/tabard.png" />
					<v-toolbar-title>Paragon</v-toolbar-title>
					<!-- <div class="flex-grow-1"></div> -->
					<v-spacer></v-spacer>
					<v-toolbar-items class="hidden-sm-and-down">
						<v-btn text>Link 1</v-btn>
						<v-btn text>Link 2</v-btn>
						<v-btn text>Link 3</v-btn>
					</v-toolbar-items>
				</v-toolbar>
				<v-menu class="hidden-md-and-up">
					<v-toolbar-side-icon v-slot:activator="{ on }"></v-toolbar-side-icon>
					<v-list>
						<v-list-tile>
							<v-list-tile-content>
								<v-list-tile-title>Link 1</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile>
							<v-list-tile-content>
								<v-list-tile-title>Link 2</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<v-list-tile>
							<v-list-tile-content>
								<v-list-tile-title>Link 3</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</v-list>
				</v-menu>
				<router-view></router-view>
				<!-- </v-container> -->
			</v-content>
		</v-app>
	</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style>
html,
body {
	font-family: "Titillium Web", "Roboto", sans-serif;
	font-size: 16px; /* fallback if calc() is not supported */
	font-size: responsive 14px 16px; /* https://www.rucksackcss.org/docs/#responsive-type */
	line-height: 1.5;
}

.toolbar {
	z-index: 1000;
}

/* Mobile devices */
@media only screen and (max-width: 414px) {
}
</style>
