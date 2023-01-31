import { Collection } from "mongodb";
import Database from "./Database";

export default class ContactFormModel {
    public readonly website: string = "turquoise.homes";

    constructor(public createdAt: Date, public payload: object) {}

    public static async save(payload: object): Promise<void> {
        try {
            const contactForm = new ContactFormModel(new Date(), payload);

            const collection: Collection = await this.getCollection();
            await collection.insertOne(contactForm);
        } catch (error) {
            console.error(`ContactFormModel.save >> ${payload}`, error);
        }
    }

    private static async getCollection(): Promise<Collection> {
        const collectionName: string = "ContactForm";
        return (await Database.getInstance()).collection(collectionName);
    }
}
