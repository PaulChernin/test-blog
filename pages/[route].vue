<script setup>
const blocks = {
    text_block: resolveComponent('textBlock')
}

const route = useRoute();

const { data } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${route.path}`);

useHead({
    title: data.value.meta.title
});

useSeoMeta({
    description: data.value.meta.description
});
</script>

<template>
    <div>
        <template v-for="block in data.body">
            <component :is="blocks[block.type]" :data="block.data" :id="block.id"/>
        </template>
    </div>
</template>

<style module>

</style>
