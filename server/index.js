const express = require("express");
const app = express();
//const PORT = process.env.PORT || 3001;

//const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"] })
});



app.listen(3001, () => {
    console.log("Server is running on port 3001");

});