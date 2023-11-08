<template lang="pug">
form(class='subscribe-form')
    h3(class='subscribe-form__header') Подпишись на рассылку
    input(type='email' placeholder='Email' class='input')
    button(type='submit' class='button button--primary') Подписаться
</template>

<style lang="scss">
.subscribe-form {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--color-dark);
    color: var(--color-white);
    gap: 37px;

    &__header {
        font: var(--font-h3);
        flex-grow: 1;
    }
}
</style>
