import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useLocationSearch = (locationSearch = "") => {
    return useQuery({
        queryKey: ["search", locationSearch],
        queryFn: () =>
            request
                .get("/all", { params: { location_like: locationSearch } })
                .then((res) => res.data),
    });
};
