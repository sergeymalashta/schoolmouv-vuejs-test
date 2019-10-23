<template>
	<div :class="['custom-input', { 'active': focused && isValid, 'errored': !isValid }]">
		<input
			:type="type"
			autocomplete="off"
			v-model="inputStr"
			:placeholder="placeholderTxt"
			readonly
			@input="$emit('input', inputStr)"
			@focus="onFocus"
			@blur="focused = false"
		/>
		<span class="custom-input--error-message">{{ errorTxt }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			value: {},
			type: {
				type: String,
				default: 'text'
			},
			placeholderTxt: {
				type: String,
				default: ''
			},
			errorTxt: {
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
