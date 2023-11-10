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
        img(src='/icons/arrow-left.svg' class='slider__icon')
    div(class='slider__container')
        template(v-for='(image, i) in data' :key='i')
            img(:src='image' class='slider__slide' :style='{left: `${(i - current) * 100}%`}')
    button(@click='next' class='slider__button')
        img(src='/icons/arrow-right.svg' class='slider__icon')
</template>

<style lang="scss">
.slider {
    display: flex;
    flex-direction: row;
    gap: 54px;
    align-items: center;
    width: 100%;

    @media (max-width: 800px) {
        gap: 20px;
    }

    &__container {
        height: 550px;
        position: relative;
        flex-grow: 1;
        overflow: hidden;

        @media (max-width: 1100px) {
            width: 100%;
            height: auto;
            aspect-ratio: 2 / 1;
        }
    }

    &__slide {
        position: absolute;
        top: 0;
        height: 100%;
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

        @media (max-width: 800px) {
            width: 30px;
            height: 30px;
        }
    }

    &__icon {
        @media (max-width: 800px) {
            transform: scale(50%);
        }
    }
}
</style>
