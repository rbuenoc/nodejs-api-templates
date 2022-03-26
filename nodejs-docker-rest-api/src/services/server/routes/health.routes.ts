import Router from '@koa/router';


const router = new Router({
    prefix: '/health'
});


router.get('health/', '/', (ctx: any) => {
    ctx.body = { status: 'UP' };
});

export default router;
