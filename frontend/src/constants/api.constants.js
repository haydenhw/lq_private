const routerDNS = 'hayden-rpi.duckdns.org';
const pi2IP = '10.0.0.236';
const apiPort = 8888;
const pi4IP = '10.0.0.177';
const livestreamPort = 8082;

let livestreamUrl;
let apiUrl;
switch (process.env.NODE_ENV) {
  case 'production':
    livestreamUrl = `${routerDNS}:${livestreamPort}`;
    apiUrl = `${routerDNS}:${apiPort}`;
    break;
  case 'staging':
    livestreamUrl = `${pi4IP}:${livestreamPort}`;
    apiUrl = `${pi2IP}:${apiPort}`;
    break;
  default:
    livestreamUrl = `${pi4IP}:${livestreamPort}`
    apiUrl = `localhost:${apiPort}`;
}

livestreamUrl = `http://${livestreamUrl}`;
apiUrl = `http://${apiUrl}`;

export const API_BASE_URL = apiUrl;

if (API_BASE_URL !== '' && process.env.NODE_ENV !== 'test') {
  console.log(`Http requests will be made to: ${API_BASE_URL}`);
}

// SOCKET URLS
export const SENSOR_DATA_SOCKET_URL = `${API_BASE_URL}/data`;
export const DIM_LAMP_SOCKET_URL =`${API_BASE_URL}/dimLamp`;

// REST URLS
export const LIVESTREAM_URL = `${livestreamUrl}/video`;
export const LOGIN_URL = `${API_BASE_URL}/users/login`;
export const LOGOUT_URL = `${API_BASE_URL}/users/logout`;
export const MODULES_URL = `${API_BASE_URL}/modules`;
export const UPDATE_STATE_URL = `${API_BASE_URL}/updateState`;








