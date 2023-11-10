<script setup>
defineProps(['image', 'link', 'title'])
</script>

<template lang="pug">
li(class='article-preview')
    img(:src='image' class='article-preview__image')
    h3(class='article-preview__title') {{ title }}
    NuxtLink(:to='link' class='button') Читать
</template>

<style lang="scss">
.article-preview {
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
