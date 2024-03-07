import { $host } from "./http";

export const fetchItems = async (ids) => {
    const {data} = await $host.post("/",
    {
        action: "get_items",
        params: {"ids": ids}
    })
    return data;
  }