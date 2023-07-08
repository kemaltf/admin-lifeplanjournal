import Layout from "@/components/organism/Layout";
import Link from "next/link";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <Layout>
      <Link className="bg-blue-900 text-white rounded-md py-1 px-2" href={"/products/new"}>
        Add New Product
      </Link>
    </Layout>
  );
};

export default Products;
