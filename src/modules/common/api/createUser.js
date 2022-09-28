import hitEndpoint from '../utils/hitEndpoint';

export default async function createUser(props) {
  const data = await hitEndpoint('/users', { user: { ...props } }, 'post');
  return data;
}
