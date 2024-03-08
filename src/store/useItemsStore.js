import { create } from "zustand";

export const useItemsStore = create((set) => ({
    items: [],
    isLoading: true,
    offset: 0,
    limit: 50,
    setItems: (newItems) => set({items: newItems}),
    upOffset: () => set(state => ({offset: state.offset + 50})),
    downOffset: () => set(state => ({offset: state.offset - 50})),
    setOffset: (newOffset) => set({offset: newOffset}),
    setLimit: (lim) => set({limit: lim}),
    setIsLoading: (bool) => set({isLoading: bool})
}))