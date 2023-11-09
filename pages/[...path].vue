<script setup>
import { useContentStore } from '~/store/content';

const route = useRoute();

const contentStore = useContentStore();
const { fetchContent } = contentStore;
const { error } = storeToRefs(contentStore);

await fetchContent(route.path);
</script>

<template lang="pug">
template(v-if='error')
    Error(:error='error')
template(v-else)
    PageLayout
</template>

<style lang="scss">

</style>