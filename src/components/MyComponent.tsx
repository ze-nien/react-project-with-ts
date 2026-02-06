import React, { useEffect, useState } from "react";

type product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  const [data, setData] = useState<product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <p>{data.id}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.price}</p>
          <p>{data.discountPercentage}</p>
          <p>{data.rating}</p>
          <p>{data.stock}</p>
          <p>{data.brand}</p>
          <p>{data.category}</p>
          <p>{data.thumbnail}</p>
          {data.images.map((img) => (
            <img src={img} />
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
