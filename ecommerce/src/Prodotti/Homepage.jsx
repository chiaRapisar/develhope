import { useState } from "react";
import { useEffect } from "react";

export function Prodotti() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProducts(data);
      console.log(products)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

}
// async function fetchData() {
//     try(
//         const resp = await fetch('https://fakestoreapi.com/products')
//                   const data = await resp.json();
//                      setData(data);
//                      console.log(data)

//     )catch (error){
//         console.log(error)
//     }

// }
// useEffect(()=>{fetchData(),[]})
