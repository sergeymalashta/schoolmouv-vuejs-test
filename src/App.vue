<template>
	<div id="app">
		<router-view/>
		<modal />
	</div>
</template>

<script>
import { Modal } from './components/modal';

export default {
	components: {
		Modal
	}
};
</script>

<style lang="scss">
	@import "~vue2-animate/src/sass/vue2-animate";
	@import "assets/styles/index";
</style>
