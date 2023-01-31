import { Db, MongoClient } from "mongodb";

export default class Database {
    private static dbInstance: Db;

    private constructor() {}

    public static async getInstance(): Promise<Db> {
        if (this.dbInstance) return this.dbInstance;

        const uri: string = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
        const client = new MongoClient(uri);
        await client.connect();

        this.dbInstance = client.db();
        return this.dbInstance;
    }
}
