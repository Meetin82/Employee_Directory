import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
import { fetchEmployee } from "../services/api";

const EmployeeCardPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        if (id) {
            fetchEmployee(id).then(setEmployee);
        }
    }, [id]);

    return <>{employee && <EmployeeCard employee={employee} />}</>;
};

export default EmployeeCardPage;
