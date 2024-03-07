import { $host } from "./http"

export const fetchFilteredIds = async (filterOptions) => {
    const {data} = await $host.post("/", {
        action: "filter",
        params: {...filterOptions}
    })
    return data;
}