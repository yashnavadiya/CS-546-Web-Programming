const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;
const { ObjectId } = require("mongodb").ObjectID;
module.exports = {

    async create(name, animalType) {
        if (!name) throw "You must provide animal name";

        if (!animalType)
            throw "You must provide an animal type";

        const animalCollection = await animals();
        let newAnimal = {
            name: name,
            animalType: animalType
        };
        const insertInfo = await animalCollection.insertOne(newAnimal);
        if (insertInfo.insertedCount === 0) throw "Could not add animal";

        const newId = insertInfo.insertedId;

        const animal = await this.get(newId);
        return animal;
    },

    async getAll() {
        const animalCollection = await animals();

        const animal = await animalCollection.find({}).toArray();

        return animal;
    },

    async get(id) {

        if (!id) throw "Id not provided, plese provide it";
        const animalCollection = await animals();
        const aget = await animalCollection.findOne({ _id: ObjectId(id) });
        if (aget === null) throw "No animal with that id";
        return aget;
    },

    async remove(id) {
        if (!id) throw "Id not provided, plese provide it";

        const animalCollection = await animals();
        var a = await this.get(id);
        const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) {
            throw `unable to remove animal with id of ${id}`;
        }
        else
            return a;
    },

    async rename(id, newName) {
        if (!id) throw "Id not provided, plese provide it";
        const animalCollection = await animals();
        let newdata = { $set: { name: newName } };
        const ab = await animalCollection.updateOne({ _id: ObjectId(id) }, newdata);
        if (ab.modifiedCount === 0) {
            throw "could not rename animal successfully";
        }
        else
            return await this.get(id);

    }




};