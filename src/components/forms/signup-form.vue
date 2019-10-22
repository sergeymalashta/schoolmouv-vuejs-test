<template>
	<form class="signup-form" @submit.prevent="handleSubmit">
		<div class="row">
			<custom-input
				v-model="formData.email"
				type="email"
				:placeholderTxt="'Email'"
				:isValid="true"
			/>
		</div>
		<div class="row">
			<custom-input
				v-model="formData.password"
				type="password"
				:placeholderTxt="'Mot de passe'"
				:isValid="true"
			/>
		</div>
		<input type="submit" class="btn"/>
	</form>
</template>

<script>
	import { CustomInput } from '../custom-input';
	export default {
		components: {
			CustomInput
		},
		data() {
			return {
				formData: {
					email: '',
					password: ''
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
