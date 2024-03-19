import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../../../config/request";

export const useEditUser = (id) => {
    return useMutation({
        mutationKey: ["user"],
        mutationFn: (data) => request.put(`/users/${id}`, data).then((res) => res.data)
    });
};
