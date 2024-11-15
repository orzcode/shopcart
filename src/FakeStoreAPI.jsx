import { useState, useEffect } from "react";

const useFakeAPI = () => {
	const [fakeItem, setFakeItem] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  fetch('https://fakestoreapi.com/products/category/electronics', { mode: "cors" })
		.then((response) => {
		  if (response.status >= 400) {
			throw new Error("server error");
		  }
		  return response.json();
		})
		.then((response) => setFakeItem(response[0]))
		.catch((error) => setError(error))
		.finally(() => setLoading(false));
	}, []);
  
	return { fakeItem, error, loading };
  };

export default useFakeAPI