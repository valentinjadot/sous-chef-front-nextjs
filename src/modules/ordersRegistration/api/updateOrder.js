import hitEndpoint from '../../common/utils/hitEndpoint';
import { endPoints } from '../../common/utils/apiUtils';

export default async function updateOrder({ orderId, changesToOrder }) {
  const data = hitEndpoint(`${endPoints.orders}/${orderId}`, { order: changesToOrder }, 'patch');
  return data;
}
