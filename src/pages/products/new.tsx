import Layout from "@/components/organism/Layout/adminlayout";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

function NewProduct({}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product Name</label>
        <input type="text" placeholder="product name" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
        <label>Description</label>
        <textarea placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>
        <label>Price</label>
        <input type="number" placeholder="price" value={price} onChange={(ev) => setPrice(ev.target.value)}></input>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}

export default NewProduct;
