import { useState, useEffect } from "react";

export const fetchData = async () => {
  try {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
          );
          const newData = await response.json();
          setData(newData);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
};
