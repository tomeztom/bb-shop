import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // List of items in the cart
        totalQuantity: 0, // Total number of items in the cart
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                // Subtract the quantity of the removed item from totalQuantity
                state.totalQuantity -= existingItem.quantity;
                // Remove the item from the items array
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
        updateCartItemQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity += quantity - existingItem.quantity;
                existingItem.quantity = quantity;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
