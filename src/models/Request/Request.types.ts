/**
 * Allowed HTTP Request methods.
 */
export type RequestMethod = 'delete' | 'get' | 'patch' | 'post' | 'put';

/**
 * Sending Payload for HTTP Requests.
 */
export interface RequestSendingPayload {
  body: unknown;
  headers: Record<string, string>;
  method: RequestMethod;
  query: URLSearchParams;
  url: string;
}

/**
 * Receiving Payload for HTTP Requests.
 */
export interface RequestReceivingPayload {
  body: unknown,
  headers: Record<string, string>;
  status: number;
}
