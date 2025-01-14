import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import Pagination from "../components/Pagination";
import { fetchEmployees } from "../services/api";

const EmployeeListPage: React.FC = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchEmployees(search, page).then((data) => {
            setEmployees(data.data);
            setTotal(data.total);
        });
    }, [search, page]);

    return (
        <div>
            <SearchBar onSearch={setSearch} />
            <EmployeeList employees={employees} />
            <Pagination total={total} currentPage={page} onPageChange={setPage} />
        </div>
    );
};

export default EmployeeListPage;
