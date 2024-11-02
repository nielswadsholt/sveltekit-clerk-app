import { MongoClient } from 'mongodb';
import { MONGO_DB } from '$env/static/private'

type DbDocument = {
    message: string;
}

export const loadMessage = async (user_id: string) => {
    const client = new MongoClient(MONGO_DB);

    try {
        await client.connect();
        const db = client.db('sveltekit-clerk-app');
        const collection = db.collection(user_id + ":messages");
        const projection = { message: 1, _id: 0 };
        const data = await collection.find().project(projection).next();
        var document: DbDocument = JSON.parse(JSON.stringify(data));

        return document.message;
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
}