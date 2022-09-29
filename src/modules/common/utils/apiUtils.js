function baseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.VERCEL_API_BASE_URL;
  }
  return 'http://localhost:3000';
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const endPoints = {
  orders: '/orders'
};

export { baseUrl, fetcher, endPoints };
