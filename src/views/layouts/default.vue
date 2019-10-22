<template>
	<div>
		<main-header />
		<router-view />
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
