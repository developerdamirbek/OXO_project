import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetSingleCategory = (datakey) => {
  return useQuery({
    queryKey:["categories", datakey],
    queryFn: () => request.get(`/${datakey}`).then((res) => res.data)
  })
}
