<template lang="pug">
form(class='form')
    h3(class='form_header') Подпишись на рассылку
    input(type='email' placeholder='Email' class='input')
    button(type='submit' class='button button__primary') Подписаться
</template>

<style lang="scss">
.form {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--color-dark);
    color: var(--color-white);
    gap: 37px;

    &_header {
        font: var(--font-h3);
        flex-grow: 1;
    }
}
</style>
