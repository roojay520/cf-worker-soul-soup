import sourceData from './data';

const initRandomSentence = (data) => {
  const index = Math.floor(Math.random() * data.length);
  return JSON.stringify({ id: index, title: data[index] });
};

async function handleRequest() {
  const init = {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  };
  const res = new Response(initRandomSentence(sourceData), init);
  return res;
}

export default handleRequest;
