import { useState, useEffect } from "react";

export const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Fetch data from URL
      const response = await fetch(url);
      const data = await response.json();

      // Save fetched data to local storage
      const jsonData = await JSON.stringify(data);
      localStorage.setItem("data", jsonData);

      // Set data from local storage
      const jsonLocal = localStorage.getItem("data");
      setData(JSON.parse(jsonLocal));
      setLoading(false);

    }
    fetchData();

  }, []);

  return { data, loading };

};
