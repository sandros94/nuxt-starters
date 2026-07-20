<script setup lang="ts">
const { name, message } = useGreeting()
</script>

<template>
  <UCard>
    <template #header>
      <p data-testid="greeting">{{ message }}</p>
    </template>

    <UInput v-model="name" data-testid="name-input" placeholder="Your name" />
  </UCard>
</template>
