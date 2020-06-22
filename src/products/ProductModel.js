import { types } from "mobx-state-tree";

const Product = types.model("Product", {
  id: types.string,
  image: types.string,
  title: types.string,
  price: types.string,
});

export default Product;
