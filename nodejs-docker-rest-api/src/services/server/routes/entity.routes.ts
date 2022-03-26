import Router from '@koa/router';
import { getEntityByIdController, getAllEntitiesController } from '../../controllers/entity';


const router = new Router({
    prefix: '/entity'
});


router.get('entity/id', '/:id', getEntityByIdController);
router.get('entity/', '/', getAllEntitiesController);

export default router;
