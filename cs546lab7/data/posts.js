const mongoCollections = require("../data/collections");
const posts = mongoCollections.posts;
const { ObjectId } = require("mongodb").ObjectID;
const animal = require("../data/animals");
const animals = mongoCollections.animals;

module.exports = {

    async createpost(title, author, content) {
        if (!title)
            throw "You must provide title";
        if (!author)
            throw "You must provide an author";
        if (!content)
            throw "You must provide content";
        if (typeof title !== 'string')
            throw "title is not of proper type";
        if (typeof content !== 'string')
            throw "content is not of proper type";
        const postCollection = await posts();
        const animaldata = await animal.get(author);
        let newpost = {
            title: title,
            content: content,
            author: {
                id: author,
                name: `${animaldata.name}`
            }
        };
        const insertInfo = await postCollection.insertOne(newpost);
        if (insertInfo.insertedCount === 0) throw "Could not add post";
        const newId = insertInfo.insertedId;
        await animals.addPostToAnimals(author, newId, title);
        const post = await this.getbyid(newId);
        return post;
    },

    async getallposts() {
        const postCollection = await posts();
        const post = await postCollection.find({}).toArray();
        return post;
    },

    async getbyid(id) {
        if (!id) throw "Id not provided, plese provide it";
        const postCollection = await posts();
        const pget = await postCollection.findOne({ _id: ObjectId(id) });
        if (pget === null) throw "No post with that id";
        return pget;
    },

    async remove(id) {
        if (!id) throw "Id not provided, plese provide it";
        const postCollection = await posts();
        const data = await this.getbyid(id);
        let deletedpost = {
            deleted: true, data
        }
        const deletionInfo = await postCollection.removeOne({ _id: ObjectId(id) });
        if (deletionInfo.deletedCount === 0) {
            throw `unable to remove post with id of ${id}`;
        }
        else
            return deletedpost;
    },

    async update(id, newTitle, newContent) {
        if (!id) throw "Id not provided, plese provide it";
        if (!newTitle) throw "new title not provided, plese provide it";
        if (!newContent) throw "new content not provided, plese provide it";
        const postCollection = await posts();
        let newdata = { $set: { title: newTitle, content: newContent } };
        const ab = await postCollection.updateOne({ _id: ObjectId(id) }, newdata);
        if (ab.modifiedCount === 0) {
            throw "could not update post successfully";
        }
        else
            return await this.getbyid(id);

    }




};