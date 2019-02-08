import { create } from 'fans-rest';

const client = create();

export default {
  get: url => client.get(url),
  post: (url, body) => client.post(url, body),
};
