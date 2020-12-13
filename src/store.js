import { onUnmounted, reactive, toRefs, readonly } from 'vue'
import create from 'zustand/vanilla'

export const store = create((set) => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
}))

const state = reactive(store.getState());

export const useStore = () => {
    const unsubscribe = store.subscribe(newValue => {
        Object.keys(newValue).forEach((key) => {
            state[key] = newValue[key]
        });
    });

    onUnmounted(() => {
        unsubscribe()
    });

    return toRefs(readonly(state));
}