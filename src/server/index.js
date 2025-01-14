const express = require("express");
const cors = require("cors");
const employees = require("../mock/employees.json");

const app = express();
app.use(cors());

app.get("/employees", (req, res) => {
    const { search = "", page = 1, limit = 5 } = req.query;
    const filtered = employees.filter(emp =>
        `${emp.lastName} ${emp.firstName} ${emp.middleName}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );
    const start = (page - 1) * limit;
    const end = start + parseInt(limit, 10);
    res.json({ data: filtered.slice(start, end), total: filtered.length });
});

app.get("/employees/:id", (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id, 10));
    if (employee) res.json(employee);
    else res.status(404).send("Employee not found");
});

app.listen(4000, () => console.log("API running on http://localhost:4000"));
