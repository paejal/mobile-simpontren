import axios from 'axios';

const BASE_URL = 'https://opdashboard.myih.telkom.co.id';
const BASIC_AUTH = {
  'Authorization': 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==',
};

export const getFullfillment = (type, param) => (
  axios.get(`${BASE_URL}/stats/v1/fullfillment/${type}${param}`, { headers: BASIC_AUTH })
);
