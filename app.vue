<template lang="pug">
div(class='page')
    div(class='page__container')
        Header(class='page__header')
        Content
        Footer(class='page__footer')
</template>

<style lang="scss">
@import url("~/assets/styles/index.scss");

.page {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__container {
        max-width: 1340px;
    }

    &__header {
        margin-bottom: 30px;
    }

    &__footer {
        margin-top: 200px;
    }
}
</style>