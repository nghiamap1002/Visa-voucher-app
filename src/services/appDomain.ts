export let BASE_URL = 'https://api.devrpay.com';
export let TENANT_DOMAIN = `${BASE_URL}/tenant`;

switch (`${process.env.REACT_APP_ENV}`.trim().toLowerCase()) {
  case 'dev':
    BASE_URL = `https://api.devrpay.com`;
    break;
  case 'staging':
    BASE_URL = `https://api-stage.devrpay.com`;
    break;
  case 'prod':
    BASE_URL = `https://api.getrichpos.com`;
    break;
  default:
    break;
}

TENANT_DOMAIN = `${BASE_URL}/tenant`;

// Using in case debug login with Landing page
// MAINDOMAIN_LANDING = 'http://localhost:3000';

export const AppDomain = {
  BASE_URL,
  TENANT_DOMAIN,
};

export default AppDomain;
