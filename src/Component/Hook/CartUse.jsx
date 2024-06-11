import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxiosCommon from "./UseAxiosCommon";

const CartUse = () => {
  const { user } = useAuth()
  const axiosCommon = UseAxiosCommon()
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosCommon.get(`/allParticipant?email=${user?.email}`)
      return res.data

    }

  })
  return [carts, refetch]

};

export default CartUse;