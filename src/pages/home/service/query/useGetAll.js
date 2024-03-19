import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../config/request';

export const useGetAll = (page = 1) => {
  return useQuery({
    queryKey: ["all", page],
    initialPageParam: 1,
    queryFn: () => request.get("/all", {
      params: {
        _page: page, _limit: 10
      }
    }).then((res) => {
      return {
        limit: res.config.params._limit,
        data: res.data,
        page_count: res.headers.get("X-Total-Count"),
      }
    }),
    
  });
};
