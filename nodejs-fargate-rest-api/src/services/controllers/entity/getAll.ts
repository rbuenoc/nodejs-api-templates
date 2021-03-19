import { Context } from 'koa';
import { find } from '../../mongodb';


export default async function run(ctx: Context): Promise<any> {
    throw new Error('This is an intentional error to show the behavior against unhandled errors. Remove this from code.');
    const entities = await find({});
    ctx.body = {
        data: entities,
    };
}
