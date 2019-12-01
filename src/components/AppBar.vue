<template>
	<div>
		<!-- Navigation drawer for mobile -->
		<v-navigation-drawer app temporary floating color="#0d181f" v-model="drawer" :right="true" class="hidden-md-and-up">
			<v-list>
				<v-list-item v-for="item in items" :key="item" link>
					<v-list-item-content>
						<v-list-item-title class="text-uppercase">{{ item }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app flat color="#0d181f">
			<v-toolbar-title class="paragon-font">Paragon</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn v-for="item in items" :key="item" text>
					{{ item }}
				</v-btn>
			</v-toolbar-items>
			<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: 'AppBar',
	data() {
		return {
			drawer: null,
			items: ['Home', 'Forum', 'Classes', 'Apply', 'Events', 'Inventory']
		};
	}
};
</script>

<style scoped>
@media (max-width: 375px) {
	.v-toolbar__title {
		font-size: 1.8rem !important;
		left: initial;
	}
}
</style>
