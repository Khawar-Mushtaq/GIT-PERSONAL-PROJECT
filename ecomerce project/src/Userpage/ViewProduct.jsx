import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const ViewProduct = () => {
  const [dataProduct, setProduct] = useState("");
  useEffect(() => {
    getallProducts();
  }, []);

  const getallProducts = async () => {
    await axios
      .get("http://localhost:4000/api/Product/getproduct")
      .then((response) => {
        return setProduct(response.data.products);
      })

      .catch((error) => console.error(`Error:${error}`));
  };
  console.log(dataProduct);
  return (
    <div>
      {/* {dataProduct.map((dataProduct) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img src={dataProduct.file} />
            <CardBody>
              <CardTitle tag="h5">{dataProduct.Pname}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {dataProduct.Pmodel}
              </CardSubtitle>
              <CardText>
                <p>{dataProduct.price}</p>
                <br></br>
                <p>{dataProduct.Hardisk}</p>
                <br></br>
                <p>{dataProduct.Ram}</p>
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })} */}
    </div>
  );
};

export default ViewProduct;
