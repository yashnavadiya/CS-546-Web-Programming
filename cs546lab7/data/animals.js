const mongoCollections = require("../data/collections");
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
            animalType: animalType,
            likes: [],
            posts: []
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

        const data = await this.get(id);
        let deletedanimal = {
            deleted: true, data
        }
        const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) {
            throw `unable to remove animal with id of ${id}`;
        }
        else
            return deletedanimal;
    },

    async addPostToAnimals(userId, postId, postTitle) {

        console.log("currentUser");


        const animalCollection = await animals();
        console.log("currentUser1");
        await animalCollection.updateOne(
            { _id: userId },
            { $addToSet: { posts: { _id: postId, title: postTitle } } }
        );
        console.log("currentUser2");
        //     if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        //       throw 'Update failed';

        //  return await this.get(userId);

    },

    async update(id, newName, newanimaltype) {
        if (!id) throw "Id not provided, plese provide it";
        const animalCollection = await animals();
        let newdata = { $set: { name: newName, animalType: newanimaltype } };
        const ab = await animalCollection.updateOne({ _id: ObjectId(id) }, newdata);
        if (ab.modifiedCount === 0) {
            throw "could not update animal successfully";
        }
        else
            return await this.get(id);

    }




};