import { $host } from "./http";

export const fetchItems = async (ids) => {
    const setIds = new Set(ids);
    const uniqIds = [];
    for(let id of setIds){
        uniqIds.push(id);
    }
    const {data} = await $host.post("/",
    {
        action: "get_items",
        params: {"ids": uniqIds}
    })
    return data;
  }