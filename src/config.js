// requests are proxyed to backend becase we said so in package.json
// the applicaiton on server will run from the same host so CORS should not be a problem.

export const API_PORT = 8889;
const { protocol, hostname } = window.location;
export const API_URL = `${protocol}//${hostname}:${API_PORT}/v1`;
