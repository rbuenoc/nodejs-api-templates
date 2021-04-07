import { Context } from 'koa';
import { getEntityById } from '../../business/entity';
import { logInfo } from '../../../common/logging';


export async function getEntityByIdController(ctx: Context): Promise<any> {
    const { id } = ctx.params;
    const entity = await getEntityById({ id });
    logInfo({ input: ctx.params, output: entity }, 'entity-get');
    ctx.body = {
        data: entity,
    };
}
