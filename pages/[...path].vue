<script setup>
import { useContentStore } from '~/store/content';

const route = useRoute();

const contentStore = useContentStore();
const { fetchContent } = contentStore;
const { content } = storeToRefs(contentStore);

await fetchContent(route.path);

useHead({
    title: content.value.meta.title
});

useSeoMeta({
    description: content.value.meta.description
});
</script>

<template lang="pug">
div(class='page')
    div(class='page__container')
        Header(class='page__header')
        Main
        Footer(class='page__footer')
</template>

<style lang="scss">
@import url("~/assets/styles/index.scss");

.page {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__container {
        max-width: 1340px;
    }

    &__header {
        margin-bottom: 30px;
    }

    &__footer {
        margin-top: 200px;
    }
}
</style>