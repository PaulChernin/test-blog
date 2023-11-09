<script setup>
defineProps(['data']);
</script>

<template lang="pug">
section(class='article-list')
    h2(class='article-list__header') {{ data.title }}
    ul(class='article-list__container')
        template(v-for='article in data.articles' :key='article.link')
            ArticleListBlockItem(v-bind='article' class='article-list__item')
</template>

<style lang="scss">
.article-list {
    &__header {
        font: var(--font-h2);
        margin-bottom: 50px;
    }

    &__container {
        display: flex;
        flex-direction: row;
        gap: 60px 30px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &__item {
        max-width: 30%;
    }
}
</style>
