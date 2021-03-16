import { Router } from 'itty-router';
import sourceData from './data';

function getRandom(start: number, end: number) {
  var num = Math.floor(Math.random() * (end - start + 1) + start);
  return num;
}

const getData = (id?: number | string) => {
  let index = id;
  if (index) index = Number(id);
  const maxLen = sourceData.length;
  if (!Number.isInteger(index) || (index as number) >= maxLen || (index as number) < 1) {
    index = getRandom(1, maxLen);
  }
  const data = { id: index, title: sourceData[(index as number) - 1] };

  return new Response(JSON.stringify(data));
};

async function handleRequest(request: Request) {
  const router = Router();

  router.get('/:id', async (req) => getData(req.params?.id)).get('*', () => getData());

  return router.handle(request);
}

export default handleRequest;
