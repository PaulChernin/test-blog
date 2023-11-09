<script setup>
defineProps(['image', 'link', 'title'])
</script>

<template lang="pug">
li(class='article-list-item')
    img(:src='image' class='article-list-item__image')
    h3(class='article-list-item__title') {{ title }}
    NuxtLink(:to='link' class='button') Читать
</template>

<style lang="scss">
.article-list-item {
    max-width: 427px;

    &__image {
        width: 100%;
        height: 320px;
    }

    &__title {
        font: var(--font-h3);
        margin: 20px 0 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
</style>
