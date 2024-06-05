// import { createSlice } from "@reduxjs/toolkit";

// export const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     getAllProduct: (state, action) => {
//       state.products = action.payload;
//     },
//     deleteProduct: (state, action) => {
//         state.products = state.products.filter(product => product._id !== action.payload);
//       },
//       updateProducts: (state, action) => {
//         state.products = action.payload;
//       },
//       modifierProduct: (state, action) => {
//         state.products = state.products.map((product) =>
//           product._id === action.payload._id ? action.payload : product
//         );
//       },
//   },


// });


// export const { getAllProduct , deleteProduct, updateProducts , modifierProduct} = productSlice.actions;

// export const selectProducts = (state) => state.product;
// export default productSlice.reducer; 
