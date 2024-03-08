import { $host } from "./http"

export const fetchFields = async (objWithField) => {
    const {data} = await $host.post("/", {
        action: "get_fields",
        params: objWithField
    })
    const notNullResult = data.result.filter(item => item != null)
    const resultSet = new Set(notNullResult);
    const uniqResult = [];

    for(let item of resultSet){
        uniqResult.push(item);
    }

    return uniqResult;
}