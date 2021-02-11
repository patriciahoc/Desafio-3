import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProdutosTypes } from "../../../types/Produtos";

const Home = () => {

  
  const [produtos, setProdutos] = useState<ProdutosTypes[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resposta) => setProdutos(resposta.data));
  },[]);

  return (
    <>
      <h1>Produtos</h1>
      <div className="container-item">
        {produtos.map((item) => (
          <div key={item.id}>
            <h3>Produto: {item.title}</h3>
            <p> Preço: {item.price}</p>
            <Link to={`/produto/${item.id}`}>Comprar</Link>
          </div>
        ))}
      </div>

    </>
  );
};

export default Home;
