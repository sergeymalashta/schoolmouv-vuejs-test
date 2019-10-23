<template>
	<div class="gender-switch">
		<div class="gender-switch--group">
			<label for="girl">Fille</label>
			<input type="radio" id="girl" :value="'Girl'" v-model="gender" />
		</div>
		<div class="gender-switch--group">
			<label for="boy">Garçon</label>
			<input type="radio" id="boy" :value="'Boy'" v-model="gender" />
		</div>
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
