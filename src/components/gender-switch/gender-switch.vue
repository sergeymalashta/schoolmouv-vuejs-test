<template>
	<div class="gender-switch">
		<input type="radio" id="girl" :value="'Girl'" v-model="gender" />
		<label for="girl">Fille</label>
		<input type="radio" id="boy" :value="'Boy'" v-model="gender" />
		<label for="boy">Garçon</label>
	</div>
</template>

<script>
export default {
	props: ['value'],
	data() {
		return {
			gender: ''
		};
	}
};
</script>
