import { Context } from 'koa';
import { getAllEntities } from '../../business/entity';


export async function getAllEntitiesController(ctx: Context): Promise<any> {
    const entities = getAllEntities();
    ctx.body = {
        data: entities,
    };
}
