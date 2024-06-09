import { useQuery } from "@tanstack/react-query";
import UseAxiosCommon from "./UseAxiosCommon";

const useData = () => {

  const axiosCommon = UseAxiosCommon()
  const {
    data: camps = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['camp'],
    queryFn: async () => {
      const res = await axiosCommon.get('/allData')
      return res.data
    }
  })
  return [camps, loading, refetch]
};

export default useData;