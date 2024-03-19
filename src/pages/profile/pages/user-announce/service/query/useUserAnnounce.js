import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../../config/request";

export const useUserAnnouncements = (email) => {
  return useQuery({
    queryKey: ['userAnnouncements', email],
    queryFn: () => {
      return request.get('/all')
        .then(response => {
          const data = response.data;
          return data.filter(announcement => announcement.email === email);
        })
        .catch(error => {
         console.log(error);
        });
    }
  });
};
