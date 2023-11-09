export const useContentStore = defineStore('pageStore', () => {
    const content = ref(null);
    const errorState = ref(null);

    const fetchContent = async (path) => {
        const { data, error } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${path}`);

        errorState.value = error.value;
        content.value = data.value;
    };

    return {
        content,
        fetchContent,
        error: errorState
    };
});