import Router from '@koa/router';
import { getEntityById, getAllEntities } from '../../controllers/entity';


const router = new Router({
    prefix: '/entity'
});


router.get('entity/id', '/:id', getEntityById);
router.get('entity/', '/', getAllEntities);

export default router;
