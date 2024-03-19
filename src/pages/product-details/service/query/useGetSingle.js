import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetSingle = (id) => {
  return useQuery({
    queryKey:["single", id],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data)
  })
}
