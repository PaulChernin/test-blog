<script setup>
const props = defineProps(['data']);
</script>

<template lang="pug">
section(v-html='props.data')
</template>

<style module>

</style>
