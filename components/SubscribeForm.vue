<template lang="pug">
form(class='subscribe-form')
    h3(class='subscribe-form__header') Подпишись на рассылку
    input(type='email' placeholder='Email' class='input' name='email' autocomplete='email')
    button(type='submit' class='button button--primary') Подписаться
</template>

<style lang="scss">
.subscribe-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 27px;
    background-color: var(--color-dark);
    color: var(--color-white);
    gap: 37px;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: start;
    }

    &__header {
        font: var(--font-h3);
        flex-grow: 1;
    }
}
</style>
