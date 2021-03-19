export async function run(id): Promise<any> {
    //throw new Error('This is an intentional error to show the behavior against unhandled errors. Remove this from code.');
    const entity = { id, name: 'Entity name', description: 'This is the entity name for the Entity REST API' };
    //const entity = await findOne({ id });
    return entity;
}