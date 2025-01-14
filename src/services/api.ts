export const fetchEmployees = async (search: string, page: number) => {
    const response = await fetch(
        `http://localhost:4000/employees?search=${search}&page=${page}&limit=5`
    );
    return response.json();
};

export const fetchEmployee = async (id: string) => {
    const response = await fetch(`http://localhost:4000/employees/${id}`);
    return response.json();
};
