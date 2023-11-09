<script setup>
defineProps(['data']);
</script>

<template lang="pug">
section(class='image-block')
    figure
        img(:src='data.src' class='image-block__image')
        figcaption(v-if='data.caption' class='image-block__caption') {{ data.caption }}
</template>

<style lang="scss">
.image-block {
    &__image {
        border-radius: 2px 220px 2px 2px;
    }

    &__caption {
        margin-top: 15px;
        text-align: right;
        font: var(--font-body2);
        color: var(--color-gray);
    }
}
</style>
