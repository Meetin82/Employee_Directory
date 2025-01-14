import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
    total: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(total / 5);
    return (
        <MuiPagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            sx={{ margin: "20px auto", display: "flex", justifyContent: "center" }}
        />
    );
};

export default Pagination;
