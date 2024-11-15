import { useState, useEffect } from "react";

const useFakeAPI = () => {
  const [fakeItem, setFakeItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        // Select a random index
        const randomIndex = Math.floor(Math.random() * response.length);
        setFakeItem(response[randomIndex]); // Use the randomly selected item
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { fakeItem, error, loading };
};

export default useFakeAPI;
