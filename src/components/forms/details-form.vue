<template>
	<form class="form details-form" @submit.prevent="handleSubmit">
		<div class="row">
			<gender-switch v-model="formData.gender" />
		</div>
		<div class="row in-line">
			<custom-input
				v-model="formData.firstname"
				:placeholderTxt="'Prénom'"
				:isValid="true"
			/>
			<custom-input
				v-model="formData.firstname"
				:placeholderTxt="'Nom'"
				:isValid="true"
			/>
		</div>
		<div class="row">
			<div class="details-form--selection-group">
				<span class="details-form--selection-group_label">Classe</span>
				<div class="details-form--custom-select">
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
			formData: {
				gender: 'Boy',
				firstname: '',
				lastname: '',
				degree: ''
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
