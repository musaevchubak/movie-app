import React from 'react';
import {Pagination} from "@mui/material";
import style from './CustomPagination.module.css';

const CustomPagination = ({setPage, numOfPages = 5}) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
  };

  return (
    <div className={style.customPag}>
      <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        color="secondary"
      />
    </div>
  );
};

export default CustomPagination;
