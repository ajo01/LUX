import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJjUFURGxvC08iDDUDlBxmraju3oruCZOzGQ5TA1Lkq0fJ4-JcRX9heko5EMziyrjreF2ypDz_aTx1C1sgV8AGK0jwf4rAC5jGBlfVkc2QUiK4qqbkFP820TM&usqp=CAE",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$15",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1603332211000",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Graphics T shirt",
    price: "$25",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEeu-WQQP9FITvzdk5tUodX_DxiyJSpsiVvzY2mqIjO_tzrZpTUVddYwFmtNvnxylw0tO2Oc&usqp=CAc",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
