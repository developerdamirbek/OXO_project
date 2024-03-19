import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../../../config/request";

export const useDeleteUser = (id) => {
    return useMutation({
        mutationKey: ["delete-user"],
        mutationFn: (data) => request.delete(`/users/${id}`, data).then((res) => res.data)
    });
};
