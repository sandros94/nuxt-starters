<script setup lang="ts">
import { useGreeting } from '../composables/useGreeting'

const { name, message } = useGreeting()
</script>

<template>
  <div class="my-module-greeting">
    <p data-testid="greeting">{{ message }}</p>
    <input v-model="name" data-testid="name-input" placeholder="Your name" />
  </div>
</template>
