import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStoreI } from "../types";

export const useCart = create(
  persist<CartStoreI>(
    (set, get) => ({
      items: [],

      addItem: (data) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item) => item._id === data._id
        );

        if (existingItems) {
          return currentItems;
        }
        set({
          items: [...get().items, data],
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
      },
      removeAll: () => set({ items: [] }),

      changeQuantity: (quantity: number, id: string) => {
        const currentItems = get().items;
        set({
          items: currentItems.map((item) =>
            item._id === id ? { ...item, quantity } : item
          ),
        });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
