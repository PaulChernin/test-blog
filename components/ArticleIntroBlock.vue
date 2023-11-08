<script setup>
const props = defineProps(['title', 'image', 'reading_time', 'views_count', 'short_description']);
</script>

<template lang="pug">
section(class='article-intro')
    img(:src='props.image' class='article-intro__image')
    div(class='article-intro__container')
        h1(class='article-intro__header') {{ props.title }}
        div(class='article-intro__stats')
            div(class='article-intro__stats-item')
                img(src='/icons/time.svg')
                div {{ props.reading_time }} мин время чтения
            div(class='article-intro__stats-item')
                img(src='/icons/eye.svg')
                div {{ props.views_count }} прочитали статью
        p {{ props.short_description }}
</template>

<style lang="scss">
.article-intro {
    height: 580;
    display: flex;
    flex-direction: row;
    gap: 30px;

    &__image {
        height: 100%;
        width: 540px;
        border-radius: 2px 220px 2px 2px;
    }

    &__container {
        margin-top: 90px;
    }

    &__header {
        font: var(--font-h1);
        margin-bottom: 30px;
    }

    &__stats {
        font: var(--font-body2);
        color: var(--color-gray);
        margin-bottom: 50px;
    }

    &__stats-item {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
    }
}
</style>
