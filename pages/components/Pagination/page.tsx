import React, { useState, useEffect } from "react";
import Buttons from "./buttons";
import Pagination from "@mui/material/Pagination";

const Paginatin = () => {
  const [arrRender, setArrRender] = useState<number[]>([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pagePerNum = 4;
  let pageNum = arr.length / pagePerNum;

  useEffect(() => {
    setArrRender(arr.slice(0, pagePerNum));
  }, []);

  const onSelectButton = (value: number) => {
    setArrRender(
      arr.slice(value * pagePerNum - pagePerNum, value * pagePerNum)
    );
  };

  return (
    <div>
      {arrRender.map((val, ind) => {
        return <li key={ind}>{val}</li>;
      })}

      <Buttons pageNum={pageNum} onSelectButton={onSelectButton} />
    </div>
  );
};

export default Paginatin;
