<template lang="pug">
section(class='cta-form')
    img(src='/images/cta-form.png')
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
