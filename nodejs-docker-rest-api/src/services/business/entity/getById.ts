import { findOne } from '../../mongodb';


export async function getEntityById(id): Promise<any> {
    const entity = { id, name: 'Entity name', description: 'This is the entity name for the Entity REST API' };
    //const entity = await findOne({ id });
    return entity;
}
