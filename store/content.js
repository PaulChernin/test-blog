export const useContentStore = defineStore('pageStore', () => {
    const config = useRuntimeConfig();
    
    const content = ref(null);
    const errorState = ref(null);

    const fetchContent = async (path) => {
        const { data, error } = await useFetch(`${config.public.apiUrl}/page/?path=${path}`);

        errorState.value = error.value;
        content.value = data.value;
    };

    return {
        content,
        fetchContent,
        error: errorState
    };
});