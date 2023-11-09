<script setup>
import { useContentStore } from '~/store/content';

const blocks = {
    text_block: resolveComponent('TextBlock'),
    article_intro_block: resolveComponent('ArticleIntroBlock'),
    subscribe_form_block: resolveComponent('SubscribeForm'),
    image_block: resolveComponent('ImageBlock'),
    article_list_block: resolveComponent('ArticleListBlock'),
    cta_form_block: resolveComponent('CtaForm')
};

const contentStore = useContentStore();
const { content } = storeToRefs(contentStore);
</script>

<template lang="pug">
main(class='content')
    template(v-for='block in content.body' :key='block.id')
        component(:is='blocks[block.type]' :data='block.data')
</template>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 100px;
}
</style>
