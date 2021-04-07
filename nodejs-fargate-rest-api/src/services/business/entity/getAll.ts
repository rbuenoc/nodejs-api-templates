import { find } from '../../mongodb';


export async function getAllEntities(): Promise<any> {
    throw new Error('This is an intentional error to show the behavior against unhandled errors. Remove this from code.');
    const entities = await find({});
    return entities;
}
