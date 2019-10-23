<template>
	<div :class="['custom-input', { 'active': focused && isValid, 'errored': !isValid }]">
		<!--<div class="custom-input&#45;&#45;text">{{ placeholderTxt }}</div>-->
		<input
			:type="type"
			autocomplete="off"
			v-model="inputStr"
			:placeholder="placeholderTxt"
			readonly
			@focus="onFocus"
			@blur="focused = false"
		/>
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
				inputStr: '',
				focused: false
			};
		},
		methods: {
			onFocus(el) {
				this.focused = true;
				el.target.removeAttribute('readonly');
			}
		}
	};
</script>
