export const useContentStore = defineStore('pageStore', () => {
    const content = ref(null);

    const fetchContent = async (path) => {
        const { data } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${path}`)
        content.value = data.value
    }

    return {
        content,
        fetchContent
    }
});