import axios from 'axios';
import { baseUrl } from './apiUtils';

export default async function hitEndpoint(endpoint, payload, type) {
  try {
    const url = baseUrl() + endpoint;
    const { data } = await axios[type](url, payload);
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
}
