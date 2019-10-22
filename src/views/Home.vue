<template>
  <div class="home">
    <sign-up-form @submit-form="$router.push({ name: 'details' })" />
  </div>
</template>

<script>
import { SignUpForm } from '../components/forms';

export default {
  components: {
    SignUpForm
  }
}
</script>
