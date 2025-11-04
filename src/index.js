const express = require("express");
const { usersRoutes } = require("./users/routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

app.use("/api/users", usersRoutes);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));

module.exports = { app };
