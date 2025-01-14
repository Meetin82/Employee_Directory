import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {PHOTO_PLACEHOLDER} from "../configs/config";

interface Employee {
    photo?: string;
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: string;
    department: string;
    post: string;
}

const EmployeeCard: React.FC<{ employee: Employee }> = ({ employee }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
            <CardMedia
                component="img"
                height="300"
                image={employee.photo || PHOTO_PLACEHOLDER}
                alt="Фото сотрудника"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Дата рождения: {new Date(employee.birthDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Департамент: {employee.department}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Должность: {employee.post}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EmployeeCard;
