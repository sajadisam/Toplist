"use client";

import ResponsivePagination from 'react-responsive-pagination';
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 5;
  return <>
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  </>;

}

