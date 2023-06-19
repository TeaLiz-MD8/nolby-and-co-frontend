import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartFavorite: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const item = state.cartItems.find((p) => p.id === action.payload.id);
        if (item) {
            item.quantity++;
            item.attributes.price = item.oneQuantityPrice * item.quantity;
        } else {
            state.cartItems.push({...action.payload, quantity: 1});
        }
    },

    addToFavoriteCart: (state, action) => {
      const item = state.cartFavorite.find((p) => p.id === action.payload.id);
      if (item) {
          item.quantity++;
          item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
          state.cartFavorite.push({...action.payload, quantity: 1});
      }
  },


    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id ) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val
          }
          return{...p, [action.payload.key] : action.payload.val}

        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter ((p) => p.id !== action.payload.id)
    },

    removeFromFavoriteCart: (state, action) => {
      state.cartFavorite = state.cartFavorite.filter ((p) => p.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart, addToFavoriteCart, removeFromFavoriteCart} = cartSlice.actions

export default cartSlice.reducer