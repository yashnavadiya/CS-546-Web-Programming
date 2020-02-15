const animalroutes = require('./animals');
const postRoutes = require("./posts");

const constructorMethod = app => {
    app.use("/animals", animalroutes);
    app.use('/posts', postRoutes);
    //app.use("/users", userRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod