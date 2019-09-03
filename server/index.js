const express = require("express");
const app = express();
const upcomingController = require("./controllers/upcomingController")
const MemoryController = require("./controllers/MemoryController")


app.use(express.json());

app.get("/api/upcomings", upcomingController.getUpcoming)
app.post("/api/upcomings", upcomingController.addUpcoming)
app.delete("/api/upcomings/:id", upcomingController.deleteUpcoming)
app.delete("/api/memories/:id", MemoryController.deleteMemory)
app.get("/api/memories", MemoryController.getMemory)
app.put("/api/memories/:id", MemoryController.moveEvent)





app.listen(8005, () => {
    console.log("Listening on 8005")
});