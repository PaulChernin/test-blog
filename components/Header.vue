<template lang="pug">
header(class='header')
    NuxtLink(to='/')
        img(src='/images/logo.svg' height='32' width='133')
</template>

<style scoped land="scss">
.header {
    height: 85px;
    padding: 28px 0 25px;
    display: flex;
    justify-content: center;
}
</style>
