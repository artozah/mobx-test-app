import React, { useEffect } from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Search from "../components/Search";

const page = observable.box(1);
const title = observable.box("");
const handlePaginationChange = (_, targetPage) => {
  page.set(targetPage);
};
const handleSearchChange = (event) => {
  const value = event.target.value;

  if (value) {
    page.set(1);
  }
  title.set(event.target.value);
};

function Products({ store }) {
  useEffect(() => {
    store.fetchProducts();
  }, []);

  return (
    <div>
      <Search onChange={handleSearchChange} />
      <Grid container direction="row" justify="center" alignItems="center">
        {store.filteredProducts(title.get(), page.get()).map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Grid>
      <Box p={3}>
        <Pagination
          page={page.get()}
          count={store.products.length / 10}
          onChange={handlePaginationChange}
        />
      </Box>
    </div>
  );
}

export default inject("store")(observer(Products));
