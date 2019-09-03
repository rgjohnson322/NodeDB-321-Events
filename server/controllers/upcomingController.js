const upComings = [
];

const getUpcoming = (req,res) => {
    res.json(upComings);
};

const addUpcoming = (req,res) => {
    upComings.push(req.body);
    res.json(upComings);
};

const deleteUpcoming = (req, res) => {
    upComings.splice(+req.params.id, 1)
    res.json(upComings)
}

module.exports = {
    getUpcoming,
    addUpcoming,
    deleteUpcoming,
    upComings
}