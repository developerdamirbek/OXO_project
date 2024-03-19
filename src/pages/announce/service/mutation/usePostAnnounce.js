import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostAnnounce = (datakey) => {
    return useMutation({
        mutationKey: ["announce"],
        mutationFn: (data) => request.post(`${datakey}`, data).then((res) => res.data)
    });
};
