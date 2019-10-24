<template>
	<div class="overlay" v-if="modals.length">
		<transition appear name="fade" mode="out-in">
			<div>
				<template v-for="(md, i) in modals">
					<div class="modal" :key="i">
						<div class="close">
							<span @click="hideModal(md.type)"></span>
						</div>
						<component
							:is="md.type"
							v-bind="md.props"
							@closeModal="hideModal"
						>
						</component>
					</div>
				</template>
			</div>
		</transition>
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

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
