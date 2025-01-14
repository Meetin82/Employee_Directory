import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    department: string;
    post: string;
}

interface EmployeeListProps {
    employees: Employee[];
}

const  EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
    const navigate = useNavigate();

    const handleRowClick = (id: number) => {
        navigate(`/employee/${id}`);
    };

    return (
        <TableContainer component={Paper} sx={{ margin: "20px auto", maxWidth: "80%" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Ф.И.О.</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Департамент</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Должность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((emp) => (
                        <TableRow
                            key={emp.id}
                            hover
                            onClick={() => handleRowClick(emp.id)}
                            sx={{ cursor: "pointer" }}
                        >
                            <TableCell>{`${emp.lastName} ${emp.firstName} ${emp.middleName}`}</TableCell>
                            <TableCell>{emp.department}</TableCell>
                            <TableCell>{emp.post}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeList;
