<template>
	<div class="details">
		<details-form
			:degreeList="degreeList"
			@submit-form="createUser"
		/>
	</div>
</template>

<script>
import { DetailsForm } from '../components/forms';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: {
		DetailsForm
	},
	computed: {
		...mapGetters('ui', ['degreeList'])
	},
	mounted() {
		this.getDegreeList();
	},
	methods: {
		...mapActions('ui', ['getDegreeList']),
		...mapActions('auth', ['createUser'])
	}
};
</script>
