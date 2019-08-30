const express = require("express");
const app = express();
const upcomingController = require("./controllers/upcomingController")


app.use(express.json());

app.get("/api/upcomings", upcomingController.getUpcoming)
app.post("/api/upcomings", upcomingController.addUpcoming)
app.delete("/api/upcomings/:id", upcomingController.deleteUpcoming)





app.listen(8005, () => {
    console.log("Listening on 8005")
});