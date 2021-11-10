import { toast } from 'react-toastify';

/**
 * @name notifySucces
 * @description Notification Succes used on Saga generators after getting response.
 * @param {object} msg Message we get from params
 * @returns {} Library notification
 */
 export const notifySucces = (msg, customConfig) => {
    msg = typeof msg == 'string' ? msg : JSON.stringify(msg);
    toast.success(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...customConfig,
    });
  };
  /**
   * @name notifyError
   * @description Notification Error used on Saga generators after getting response.
   * @param {object} msg Message we get from params
   * @returns {} Library notification
   */
  export const notifyError = (err, customConfig) => {
    let msg = typeof err == 'string' ? err : JSON.stringify(err);
  
    toast.error(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...customConfig,
    });
  };


  /**
 * @name fetchWrapper
 * @description Used on services requests as a fetch wrapper (axios-like)
 * @param {object} endpoint Endpoint of api
 * @param {boolean} withToken boolean > if true > takes token from redux state and place on api
 * @param {object} body use body only in post request > if it has body mthod becomes POST automatically >if body isnt set its GET request
 * @param {object} customConfig this object is assigned to to object of fetch request, you can override headers,body,method etc...
 * @returns {Promise} Returns a promise that is handeled in Redux Generators by ( yield call() )
 */

export const fetchWrapper = async (
    endpoint,
    { withToken = false, body, ...customConfig } = {}
  ) => {
    const token = window?.store?.getState?.()?.auth?.user?.token;
    const headers = {};
  
    const config = {
      method: body || withToken ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        Accept: 'application/json',
        ...customConfig.headers,
      },
    };
    if (body || withToken) {
      const bodyWithToken = {
        token,
        ...body,
      };
      if (token && withToken) {
        config.body = JSON.stringify(bodyWithToken);
      } else {
        config.body = JSON.stringify(body);
      }
    }
    try {
      const res = await window.fetch(`${endpoint}`, config);
      const contentType = await res.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await res?.json?.();
        return data;
      } else {
        return await res.text();
      }
    } catch (err) {
      return err;
    }
  };