import { create } from "zustand";

export const useFilterStore = create((set) => ({
    brands: [],
    prices: [],
    products: [],
    setBrands: (arrBrands) => set({brands: arrBrands}),
    setPrices: (arrPrices) => set({prices: arrPrices}),
    setProducts: (arrProducts) => set({products: arrProducts})
}))