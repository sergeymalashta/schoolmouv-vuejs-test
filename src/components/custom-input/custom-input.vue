<template>
	<div class="custom-input">
		<input :type="type" v-model="inputStr" :placeholder="placeholderTxt" />
	</div>
</template>

<script>
	export default {
		props: {
			value: {},
			type: {
				type: String,
				default: 'test'
			},
			placeholderTxt: {
				type: String,
				default: ''
			},
			isValid: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				inputStr: ''
			};
		}
	};
</script>
