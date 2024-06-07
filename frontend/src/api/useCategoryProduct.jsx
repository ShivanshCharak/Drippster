import { useState, useEffect } from "react";

function useCategoryProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let dataPool = [];
      for (let i = 1; i <= 6; i++) {  // Corrected the loop to include the 6th category
        try {
          const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${i}`);
          if (response.ok) {
            const res = await response.json();
            dataPool.push(res); 
          } else {
            console.error(`Error fetching category ${i}:`, response.statusText);
          }
        } catch (error) {
          console.error(`Error fetching category ${i}:`, error);
        }
      }
      setData(dataPool);
    };

    fetchData();
  }, []);

  return data;
}

export default useCategoryProduct;
