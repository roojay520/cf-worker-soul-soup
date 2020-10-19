import { Router } from 'itty-router';
import sourceData from './data';

type Obj = {
  [propName: string]: string;
};

interface Req extends Request {
  params?: Obj;
  query?: Obj;
}

const getData = (id?: number | string) => {
  let index = id;
  if (index) index = +index;
  const maxLen = sourceData.length;
  if (!Number.isInteger(index) || (index as number) > maxLen) {
    index = Math.floor(Math.random() * maxLen);
  }
  const data = { id: index, title: sourceData[index as number] };

  return new Response(JSON.stringify(data));
};

async function handleRequest(request: Request) {
  const router = Router();

  router.get('/:id', async (req: Req) => getData(req.params?.id)).get('*', () => getData());

  return router.handle(request);
}

export default handleRequest;
