<template>
	<div>
		<v-img
			src="./assets/images/construction.png"
			class="header-background"
		></v-img>
	</div>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style scoped>
.header-background {
	height: 70vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
}

/* Mobile devices */
@media only screen and (max-width: 414px) {
}
</style>
