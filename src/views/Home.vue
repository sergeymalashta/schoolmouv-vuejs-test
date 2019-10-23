<template>
  <div class="home">
    <sign-up-form @submit-form="submitForm" :errorRequest="errors" />
  </div>
</template>

<script>
import { SignUpForm } from '../components/forms';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    SignUpForm
  },
	computed: {
		...mapGetters('auth', ['errors'])
	},
	methods: {
		...mapActions('auth', ['sendRequestLoginForm']),
		async submitForm(formData) {
			const result = await this.sendRequestLoginForm(formData);
			if (result) {
				this.$router.push({ name: 'details' })
			}
		}
	}
}
</script>
