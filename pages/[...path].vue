<script setup>
const blocks = {
    text_block: resolveComponent('TextBlock'),
    article_intro_block: resolveComponent('ArticleIntroBlock'),
    subscribe_form_block: resolveComponent('SubscribeForm'),
    image_block: resolveComponent('ImageBlock'),
    article_list_block: resolveComponent('ArticleListBlock')
};

const route = useRoute();

const { data } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${route.path}`);
useHead({
    title: data.value.meta.title
});

useSeoMeta({
    description: data.value.meta.description
});
</script>

<template lang="pug">
div(class='page')
    div(class='page__container')
        Header(class='page__header')
        Content
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