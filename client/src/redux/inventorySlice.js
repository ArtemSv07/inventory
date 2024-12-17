// import { logout } from "../auth/operations";
// import { selectContactFilter } from "../filters/selectors";

import {
  // createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getProducts } from "./productsOps";

const handlePending = (state) => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    orders: [],
    products: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, (state, action) => {
        (state.loading = false),
          (state.orders = action.payload.orders),
          (state.products = action.payload.products);
        console.log(state.products);
      })
      .addCase(getProducts.rejected, handleRejected);

    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addContact.rejected, handleRejected)

    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.items = state.items.filter(({ id }) => id !== action.payload.id);
    //   })
    //   .addCase(deleteContact.rejected, handleRejected)

    //   .addCase(logout.fulfilled, (state) => {
    //     state.items = [];
    //     state.loading = false;
    //     state.error = null;
    //   })

    //   .addCase(patchContact.fulfilled, (state, action) => {
    //     state.change = false;
    //     const index = state.items.findIndex(
    //       ({ id }) => id === action.payload.id
    //     );
    //     if (index !== -1) {
    //       state.items[index] = { ...state.items[index], ...action.payload };
    //     }
    //   });
  },
});

export default inventorySlice.reducer;
export const selectOrders = (state) => state.inventory.orders;
export const selectProducts = (state) => state.inventory.products;
// export const selectFiltered = createSelector(
//   [selectItems, selectContactFilter],
//   (contacts, filter) => {
//     return contacts.filter(
//       ({ name, number }) =>
//         name.toLowerCase().includes(filter.toLowerCase()) ||
//         number.includes(filter)
//     );
//   }
// );
