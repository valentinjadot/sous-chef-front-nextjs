import useSWR from 'swr';
import { baseUrl, fetcher } from '../utils/apiUtils';

export default function useFetch(endpoint) {
  const url = baseUrl() + endpoint;
  console.log(`connecting to ${url}`);

  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error
  };
}
