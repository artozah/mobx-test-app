import { types } from "mobx-state-tree";
import Product from "./products/ProductModel";

const RootStore = types
  .model({
    products: types.array(Product),
  })
  .actions((self) => ({
    fetchProducts() {
      fetch("https://raw.githubusercontent.com/traa/apiplp/master/db.json")
        .then((response) => response.json())
        .then(self.fetchProductsSuccess)
        .catch(self.fetchProductsError);
    },
    fetchProductsSuccess(data) {
      const products = data.pageItems.map((item) => ({
        id: item.code,
        title: item.brandName,
        image: item.imageURLs[0],
        price: item.price,
      }));

      self.products = products;
    },
    fetchProductsError(error) {
      console.log(error);
    },
  }))
  .views((self) => ({
    filteredProducts(title, page) {
      const start = (page - 1) * 10;
      const filtered = title
        ? self.products.filter((product) =>
            product.title.toLowerCase().includes(title.toLowerCase())
          )
        : self.products;

      return filtered.slice(start, start + 10);
    },
  }));

export default RootStore;
