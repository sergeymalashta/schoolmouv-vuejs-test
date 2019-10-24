<template>
	<form class="form details-form" @submit.prevent="handleSubmit">
		<div class="row">
			<gender-switch v-model="formData.gender" />
		</div>
		<div class="row in-line">
			<custom-input
				v-model="formData.firstname"
				:placeholderTxt="'Prénom'"
				:isValid="formValidation.firstname"
			/>
			<custom-input
				v-model="formData.lastname"
				:placeholderTxt="'Nom'"
				:isValid="formValidation.lastname"
			/>
		</div>
		<div class="row">
			<div class="details-form--selection-group">
				<span class="details-form--selection-group_label">Classe</span>
				<div :class="['details-form--custom-select', { 'errored': !formValidation.degree }]">
					<select v-model="formData.degree">
						<option disabled value="">Liste</option>
						<option :value="item.name" v-for="item in degreeList" :key="item.id">{{	item.name	}}</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row">
			<input type="submit" value="C'est parti" class="btn"/>
		</div>
	</form>
</template>

<script>
import { GenderSwitch } from '../gender-switch';
import { CustomInput } from '../custom-input';

const formFields = {
	gender: '',
	firstname: '',
	lastname: '',
	degree: ''
};

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
			formData: Object.assign({}, formFields),
			formValidation: Object.assign({}, Object.entries(formFields).reduce((acc, [key]) => ({
				...acc,
				[key]: true
			}), {}))
		};
	},
	methods: {
		validationForm() {
			this.formValidation.firstname = Boolean(this.formData.firstname.length);
			this.formValidation.lastname = Boolean(this.formData.lastname.length);
			this.formValidation.degree = Boolean(this.formData.degree);
			return this.formValidation.firstname && this.formValidation.lastname && this.formValidation.degree;
		},
		handleSubmit() {
			if(this.validationForm()) {
				this.$emit('submit-form', this.formData);
			}
		}
	}
}
</script>
