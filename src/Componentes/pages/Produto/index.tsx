import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProdutosTypes } from "../../../types/Produtos";

const Produto = () => {
  const [produto, setProduto] = useState<ProdutosTypes>();
  const { slug } = useParams<any>();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${slug}`)
      .then((resposta) => setProduto(resposta.data));
  });

  return (
    <div className="container">
      <div className="header-container">
        <h1>Produto: {produto?.id}</h1>
      </div>
      <div className="description-item">
        <h3>{produto?.title}</h3>
        <p>{produto?.price}</p>
      </div>
    </div>
  );
};

export default Produto;
