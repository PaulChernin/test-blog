<script setup>
const { data } = defineProps(['data']);

const current = ref(0);

const prev = () => {
    if (current.value > 0) {
        current.value--;
    }
};

const next = () => {
    if (current.value < data.length - 1) {
        current.value++;
    }
};
</script>

<template lang="pug">
section(class='slider')
    button(@click='prev' class='slider__button')
        img(src='/icons/arrow-left.svg')
    div(class='slider__container')
        template(v-for='(image, i) in data' :key='i')
            img(:src='image' class='slider__slide' :style='{left: `${(i - current) * 100}%`}')
    button(@click='next' class='slider__button')
        img(src='/icons/arrow-right.svg')
</template>

<style lang="scss">
.slider {
    display: flex;
    flex-direction: row;
    gap: 54px;
    align-items: center;

    &__container {
        height: 550px;
        width: 1112px;
        position: relative;
        overflow: hidden;
    }

    &__slide {
        position: absolute;
        top: 0;
        transition: left 0.3s ease;
    }

    &__button {
        background-color: var(--color-dark);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
}
</style>
