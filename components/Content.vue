<script setup>
const blocks = {
    text_block: resolveComponent('TextBlock'),
    article_intro_block: resolveComponent('ArticleIntroBlock')
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
main(class='content')
    template(v-for='block in data.body' :key='block.id')
        component(:is='blocks[block.type]' :data='block.data')
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
    gap: 100px;
}
</style>
