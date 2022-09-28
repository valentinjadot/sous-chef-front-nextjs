import useFetch from '../../common/hooks/useFetch';
import { endPoints } from '../../common/utils/apiUtils';

export default function useOrders() {
  const { data, error } = useFetch(endPoints.orders);

  return {
    orders: data,
    error
  };
}
