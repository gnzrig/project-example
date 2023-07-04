import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function Paginate() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    // Perform any actions based on the selected page value
  };
  return (
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      onChange={handleChange}
    />
  );
}
