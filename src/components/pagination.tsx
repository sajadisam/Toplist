"use client";
import ResponsivePagination from 'react-responsive-pagination';

interface PaginationProps {
  currentPage: number,
  maxPages: number,
  setCurrentPage: (page: number) => void,
}

export default async function Pagination(props: PaginationProps) {

  return <>
    <ResponsivePagination
      current={props.currentPage}
      total={props.maxPages}
      onPageChange={props.setCurrentPage}
    />
  </>;

}

