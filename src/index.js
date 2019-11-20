import { Router } from 'service-worker-router';
import random from './random';

async function handleRequest(request) {
  const router = new Router();

  router.get('*', random);

  const result = router.handleRequest(request);
  const res = await result.handlerPromise;
  return res;
}

export default handleRequest;
