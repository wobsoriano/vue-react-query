import { QueryObserver } from 'react-query/core';
import { onUnmounted, reactive, toRefs, readonly, inject } from 'vue';

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
    const queryClient = inject('queryClient');

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
