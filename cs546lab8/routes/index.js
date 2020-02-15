const peopleRoutes = require("./people");


const constructorMethod = app => {
    app.use("/", peopleRoutes);


    app.use("*", (req, res) => {
        res.status(404);
    });
};

module.exports = constructorMethod;