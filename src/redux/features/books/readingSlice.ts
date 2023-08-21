import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IReadingList {
  books: IBook[];
}

const initialReadingListState: IReadingList = {
  books: [],
};

const readingListSlice = createSlice({
  name: "readingList",
  initialState: initialReadingListState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<IBook>) => {
      if (!state.books.some((book) => book._id === action.payload._id)) {
        state.books.push(action.payload!);
      }
    },
    removeFromReadingList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book?._id !== action.payload._id
      );
    },
  },
});

export const { addToReadingList, removeFromReadingList } =
  readingListSlice.actions;

export default readingListSlice.reducer;
