import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SingleRow from "../mainLayout/singlerow/singleRow";
import ItemCard from "../mainLayout/items/itemsCard";
import SingleItem from "./SingleItem";
import ItemCard2 from "../mainLayout/items/itemsCard2";

// import ItemCard2 from "./itemsCard2";

function ItemList({ currentItems, loading, setCurrentPage }) {
  return (
    <Grid item md={8} sm={9}>
      <Grid container>
        <SingleRow setCurrentPage={setCurrentPage} />
        <Grid container style={{ marginTop: "2rem" }}>
          {/* <ItemCard2 items={items} />  */}
          <ItemCard currentItems={currentItems} loading={loading} />
        </Grid>
        <SingleRow />
      </Grid>
    </Grid>
  );
}

export default ItemList;
