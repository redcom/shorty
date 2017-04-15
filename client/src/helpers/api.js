import { API_URL } from '../config';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

export const apiRemoveUrl = ({ id }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'DELETE',
      body: JSON.stringify({ id }),
    };

    try {
      const response = await fetch(`${API_URL}/links`, payload);
      if (response.status !== 200) {
        throw new Error('Can not delete url');
      }
    } catch (error) {
      throw error;
    }
  };

export const apiAddUrl = ({ url }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'POST',
      body: JSON.stringify({ url }),
    };

    const response = await fetch(`${API_URL}/links`, payload);
    const body = await response.json();

    return body;
  };

export const fetchStateFromServer = cb =>
  (async () => {
    const response = await fetch(`${API_URL}/links`, opts);
    const body = await response.json();
    return cb(body);
  })();
