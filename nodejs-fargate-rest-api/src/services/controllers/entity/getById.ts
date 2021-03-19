import { Context } from 'koa';
import { findOne } from '../../mongodb';


export default async function run(ctx: Context): Promise<any> {
    const { id } = ctx.params;
    const entity = { id, name: 'Entity name', description: 'This is the entity name for the Entity REST API' };
    //const entity = await findOne({ id });
    ctx.body = {
        data: entity,
    };
}
