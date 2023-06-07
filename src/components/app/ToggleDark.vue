<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
})

// const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <i inline-block align-middle i="dark:carbon-sun carbon-moon" />
  </button>
</template>

<style scoped lang="scss">
button {
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color);
}
</style>
