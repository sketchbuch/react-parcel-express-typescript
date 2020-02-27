import combineRouters from 'koa-combine-routers';
import rootRouter from './root/root';

const router = combineRouters(rootRouter);

export default router;
