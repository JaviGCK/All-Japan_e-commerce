
export const getFetchData = async() => {
  const url = "http://localhost:3000/products"
        const response = await fetch(url);
        if (!response) throw new Error('Error getting data from JSON file');
        const fetchedData = await response.json();
        return fetchedData; 
    };
