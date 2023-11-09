<script setup>
defineProps(['data']);
</script>

<template lang="pug">
section(v-html='data' class='text-block')
</template>

<style lang="scss">
.text-block {
    max-width: 884px;

    & h2 {
        font: var(--font-h2);
        margin: 50px 0;
    }

    & h3 {
        font: var(--font-h3);
        margin: 34px 0;
    }

    & p {
        margin: 20px 0;
    }

    & blockquote {
        position: relative;
        padding-left: calc(80px + 36px);
        margin: 40px 0;
        color: var(--color-gray);

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 80px;
            height: 64px;
            background-image: url('/icons/quote.svg');
        }

        & p {
            font: var(--font-body1-italic);
        }

        & footer {
            font: var(--font-body2);
        }
    }

    & ul {
        margin: 15px 0 20px;
        padding-left: 115px;
        list-style-type: none;

        & li {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;

            &::before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 1px;
                transform: rotate(45deg);
                background-color: var(--color-dark);
            }
        }
    }
}
</style>
