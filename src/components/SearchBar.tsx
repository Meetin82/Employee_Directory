import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <TextField
            fullWidth
            label="Поиск по ФИО"
            variant="outlined"
            onChange={(e) => onSearch(e.target.value)}
            sx={{ margin: "20px auto", maxWidth: "80%" }}
        />
    );
};

export default SearchBar;
