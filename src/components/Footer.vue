<template>
	<div class="footer">
		<div>Designed & Built by Vanessa Roycroft</div>
		<a href="https://github.com/vmroycroft/paragon-guild" target="_blank" title="GitHub"><img :src="'./assets/images/github.png'" class="footer__img"/></a>
	</div>
</template>

<script>
export default {
	name: 'Footer'
};
</script>

<style scoped>
.footer {
	width: 100%;
	z-index: 1;
	font-size: 0.8rem;
	text-align: center;
	padding: 1rem 0 0.5rem 0;
	color: #313131;
	background-color: #060606;
}

.footer__img {
	margin-top: 6px;
	height: 25px;
	width: auto;
}
</style>
