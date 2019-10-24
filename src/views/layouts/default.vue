<template>
	<div>
		<main-header />
		<transition name="slideRight">
			<router-view />
		</transition>
	</div>
</template>

<script>
import { MainHeader } from '../../components/common/header';

export default {
	components: {
		MainHeader
	}
};
</script>
