import axios from 'axios';
import { baseUrl } from './apiUtils';

export default async function hitEndpoint(query, payload, type = 'get') {
  try {
    const url = baseUrl() + query;
    const { data } = await axios[type](url, payload);
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
}
