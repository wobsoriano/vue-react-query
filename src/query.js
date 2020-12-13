import { QueryObserver } from 'react-query/core';
import { getCurrentInstance, onUnmounted, reactive, toRefs, readonly } from 'vue';

const initialState = {
    status: 'loading',
    data: undefined,
    error: null,
    isError: false,
    isFetching: true,
    isLoading: true,
    refetch: () => {}
}

export function useQuery(queryKey, queryFn, options) {
    // app is declared in main.js of Vue app
    // app.config.globalProperties.queryClient = new QueryClient()
    const app = getCurrentInstance();
    const { queryClient } = app.appContext.config.globalProperties;

    const state = reactive(initialState);

    const observer = new QueryObserver(queryClient, {
        queryKey,
        queryFn,
        ...options
    });
    
    // Watch this query and update state
    const unsubscribe = observer.subscribe(result => {
        Object.keys(initialState).forEach((key) => {
            state[key] = result[key]
        });
    });

    onUnmounted(() => {
        unsubscribe();
    });

    return toRefs(readonly(state))
}