<template>
	<form class="sign-up">
		<gender-switch v-model="formData.gender" />
	</form>
</template>

<script>
import { GenderSwitch } from '../gender-switch';
export default {
	components: {
		GenderSwitch
	},
	props: {
		degreeList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			formData: {
				gender: null,
				firstname: '',
				lastname: '',
				degree: ''
			}
		};
	}
}
</script>
