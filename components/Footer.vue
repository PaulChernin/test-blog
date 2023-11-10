<template lang="pug">
footer(class='footer')
    div(class='footer__main')
        div
            img(src='/images/logo.svg' height='32' width='133')
            p(class='footer__text') Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
        address(class='footer__contacts')
            div email
            div(class='footer__email') testblogsupport@gmail.com
            div(class='socials')
                img(src='/icons/social-fb.svg' height='30' width='30')
                img(src='/icons/social-vk.svg' height='30' width='30')
                img(src='/icons/social-ig.svg' height='30' width='30')
                img(src='/icons/social-tg.svg' height='30' width='30')
    SubscribeForm
</template>

<style lang="scss">
.footer {
    border-top: 1px solid var(--color-gray);
    padding-top: 50px;
    font: var(--font-body2);
    color: var(--color-gray);

    &__main {
        margin-bottom: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 800px) {
            flex-direction: column;
            align-items: start;
            gap: 30px;
        }
    }

    &__text {
        margin-top: 20px;
        max-width: 426px;
    }

    &__contacts {
        width: 312px;
    }

    &__email {
        margin: 2px 0 24px;
        font: var(--font-body2-ubuntu);
        color: var(--color-dark);
    }
}

.socials {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>
