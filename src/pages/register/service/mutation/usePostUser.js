import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostUsers = () => {
   return (
    useMutation({
        mutationKey:["user"],
        mutationFn: (data) => request.post("/register", data).then((res) => res.data)
    })
   )
}