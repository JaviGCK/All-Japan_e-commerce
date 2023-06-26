import { useState } from 'react';
import { ProductProps } from '../../types/produtc';

export const useFetchData = () => {
  const url = "/src/assets/db/data.json"
  const [jsonData, setJsonData] = useState<ProductProps[] | null>(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response) throw new Error('Error getting data from JSON file');
        const fetchedData = await response.json();
        setJsonData(fetchedData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  return jsonData;
};
