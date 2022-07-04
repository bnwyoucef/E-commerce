import React from "react";
import { client } from "../lib/client";
import {
  Cart,
  Footer,
  Product,
  NavBar,
  Layout,
  HeroBanner,
  FooterBanner,
} from "../components";

const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h1>Best Selling products</h1>
        <p>Speakers of many various</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner bannerData={bannerData && bannerData[0]} />
    </>
  );
};

//fetch the data from the server side (sanity)
export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};

export default index;
