import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStoreI, ProductsType } from "../types";

export const useCart = create(
  persist<CartStoreI>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductsType) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item) => item._id === data._id
        );

        if (existingItems) {
          return currentItems;
        }
        set({ items: [...get().items, data] });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
