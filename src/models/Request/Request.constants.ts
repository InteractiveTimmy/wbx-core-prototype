import type { RequestMethod } from './Request.types';

const METHODS: Record<string, RequestMethod> = {
  DELETE: 'delete',
  GET: 'get',
  PATCH: 'patch',
  POST: 'post',
  PUT: 'put',
};

export { METHODS };
