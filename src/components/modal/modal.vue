<template>
	<div class="popup" v-if="modals.length" @click="hideModal()">
		<div class="popup-container">
			<transition-group
				name="fade"
				mode="out-in"
			>
				<div v-for="modal in modals" :key="`modal_${modal.id}`">
					<component :is="modal.type" />
				</div>
			</transition-group>
		</div>
	</div>
</template>


<script>
import ResultModal from './result-modal.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapGetters } = createNamespacedHelpers('ui');

export default {
	components: {
		ResultModal
	},
	computed: {
		...mapGetters([
			'modals'
		])
	},
	methods: {
		...mapActions([
			'showModal',
			'hideModal'
		])
	}
};
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
