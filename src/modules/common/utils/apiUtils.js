function baseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://pl-sous-chef-back-production.herokuapp.com';
  }
  return 'http://localhost:3000';
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const endPoints = {
  orders: '/orders'
};

export { baseUrl, fetcher, endPoints };
