import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useLoginUsers = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data) => request.post("/login", data).then((res) => res.data)
    });
};
