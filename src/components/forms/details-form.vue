<template>
	<form class="details-form" @submit.prevent="handleSubmit">
		<div class="row">
			<gender-switch v-model="formData.gender" />
		</div>
		<div class="row">
			<custom-input
				v-model="formData.firstname"
				:placeholderTxt="'Prénom'"
				:isValid="true"
			/>
			<custom-input
				v-model="formData.firstname"
				:placeholderTxt="'Nom'"
				:isValid="true"
			/>
		</div>
		<div class="row">
			<span>Classe</span>
			<select v-model="formData.degree">
				<option disabled value="">Выберите один из вариантов</option>
				<option>А</option>
				<option>Б</option>
				<option>В</option>
			</select>
		</div>
		<input type="submit" class="btn"/>
	</form>
</template>

<script>
import { GenderSwitch } from '../gender-switch';
import { CustomInput } from '../custom-input';
export default {
	components: {
		GenderSwitch,
		CustomInput
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
	},
	methods: {
		handleSubmit() {
			this.$emit('submit-form', this.formData);
		}
	}
}
</script>
