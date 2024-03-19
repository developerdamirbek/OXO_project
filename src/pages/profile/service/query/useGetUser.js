import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetUser = () => {
  return useQuery({
    queryKey:["user"],
    queryFn: () => request.get(`/users`).then((res) => res.data)
  })
}
