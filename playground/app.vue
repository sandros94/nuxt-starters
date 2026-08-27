<script setup lang="ts">
const { $greeting, $greetingVersion } = useNuxtApp()
</script>

<template>
  <main>
    <h1>my-module playground</h1>

    <MyModuleGreeting />

    <p data-testid="plugin-greeting">{{ $greeting('Nuxt') }}</p>
    <p data-testid="module-version">{{ $greetingVersion }}</p>
  </main>
</template>
