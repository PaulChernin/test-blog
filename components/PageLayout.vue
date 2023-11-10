<script setup>
import { useContentStore } from '~/store/content';

const contentStore = useContentStore();
const { content } = storeToRefs(contentStore);

useHead({ title: content.value.meta.title });
useSeoMeta({ description: content.value.meta.description });
</script>

<template lang="pug">
div(class='page')
    div(class='page__container')
        Header(class='page__header')
        Main
        Footer(class='page__footer')
</template>

<style lang="scss">
.page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 50px;

    @media (max-width: 500px) {
        padding: 0 10px;
    }

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
