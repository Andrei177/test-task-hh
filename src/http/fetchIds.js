import { $host } from "./http";

export const fetchIds = async (offset = 0, limit = 49) => {
    const {data} = await $host.post("/", 
    {
      action: "get_ids",
      params: {
        offset: offset,
        limit: limit
      }
    }
    )
    return data;
  }