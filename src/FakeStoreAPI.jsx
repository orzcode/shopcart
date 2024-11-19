import { useState, useEffect } from "react";

// {
//   "id": 9,
//   "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//   "price": 64,
//   "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//   "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
// }

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
