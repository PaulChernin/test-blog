<script setup>
const { error } = defineProps(['error']);

useHead({ title: error.statusCode });
useSeoMeta({ description: error.statusMessage });
</script>

<template lang="pug">
h1(class='h1') {{ error.statusCode }}
</template>

<style lang="scss">
.h1 {
    font: var(--font-h1);
}
</style>
