import Axios from 'axios';

import * as REQUEST_CONSTANTS from './Request.constants';
import type { RequestReceivingPayload, RequestSendingPayload } from './Request.types';

/**
 * HTTP Request handler.
 *
 * @remarks
 * This handler utilizes data from various registry items mounted to its parent WebexCore Object.
 *
 * @public
 */
class Request {
  /**
   * Send an HTTP Request with the provided payload.
   *
   * @param payload - Payload definition to use when sending an HTTP Request.
   * @returns - HTTP Request response.
   */
  public static send(payload: RequestSendingPayload): Promise<RequestReceivingPayload> {
    const config = {
      data: payload.body,
      headers: payload.headers,
      method: payload.method,
      params: payload.query,
      url: payload.url,
    };

    return Axios.request(config)
      .then((response): RequestReceivingPayload => ({
        body: response.data,
        headers: response.headers,
        status: response.status,
      }));
  }

  /**
   * Constants associated with the Request interface.
   *
   * @returns - Constants associated with this Request interface.
   */
  public static get CONSTANTS() {
    return { ...REQUEST_CONSTANTS };
  }
}

export default Request;
