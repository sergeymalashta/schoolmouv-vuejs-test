<template>
	<form class="form signup-form" @submit.prevent="handleSubmit">
		<div class="row">
			<custom-input
				v-model="formData.email"
				type="text"
				:placeholderTxt="'Email'"
				:isValid="formValidation.email"
			/>
		</div>
		<div class="row">
			<custom-input
				v-model="formData.password"
				type="password"
				:placeholderTxt="'Mot de passe'"
				:isValid="formValidation.password"
			/>
		</div>
		<div class="row">
			<input type="submit" class="btn" value="Je m'inscris"/>
		</div>
	</form>
</template>

<script>
	import { CustomInput } from '../custom-input';

	const formFields = {
		email: '',
		password: ''
	};

	export default {
		components: {
			CustomInput
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
				const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				this.formValidation.email = Boolean(this.formData.email && mailRegExp.test(this.formData.email));
				this.formValidation.password = Boolean(this.formData.password.length);
				return this.formValidation.email && this.formValidation.password;
			},
			handleSubmit() {
				if(this.validationForm()) {
					this.$emit('submit-form', this.formData);
				}
			}
		}
	}
</script>
