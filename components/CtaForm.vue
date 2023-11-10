<template lang="pug">
section(class='cta-form')
    img(src='/images/cta-form.png' class='cta-form__image')
    form
        h2(class='cta-form__header') Стань участником проекта
        fieldset(class='cta-form__fieldset')
            input(placeholder='Имя' class='input' name='name')
            input(placeholder='Телефон' class='input' name='phone')
            input(placeholder='Email' class='input' name='email')
        button(type='submit' class='button button--primary') Присоединиться
</template>

<style lang="scss">
.cta-form {
    padding: 60px;
    background-color: var(--color-dark);
    display: flex;
    flex-direction: row;
    gap: 60px;

    @media (max-width: 1100px) {
        flex-direction: column;
    }

    @media (max-width: 500px) {
        padding: 10px;
    }

    &__image {
        width: 45%;

        @media (max-width: 1100px) {
            width: 100%;
        }
    }

    &__header {
        color: var(--color-white);
        font: var(--font-h2);
    }

    &__fieldset {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin: 50px 0;
    }
}
</style>
