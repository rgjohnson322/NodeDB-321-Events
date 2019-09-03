const {upComings} = require("./upcomingController")

const Memories = [
];

const getMemory = (req, res) => {
    res.json(Memories)
}
const moveEvent = (req,res) => {
    let myEvent = upComings.splice(+req.params.id, 1);
    console.log(myEvent)
    Memories.unshift(myEvent[0])
    res.json(Memories);
};

const deleteMemory = (req, res) => {
    Memories.splice(+req.params.id, 1)
    res.json(Memories)
}

// const editMemory = (req, res) => {

//     res.json(Memories)
// }

module.exports = {
    moveEvent,
    deleteMemory,
    getMemory,
    // editMemory
}