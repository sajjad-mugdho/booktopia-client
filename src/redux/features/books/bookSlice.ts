import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IWishlist {
  books: IBook[];
}

const initialWishlistState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      if (!state.books.some((book) => book._id === action.payload._id)) {
        state.books.push(action.payload!);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book?._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
