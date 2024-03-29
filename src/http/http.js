import axios from "axios";
import md5 from "md5";


const API_URL = "https://api.valantis.store:41000/";

//Определение текущей даты для пароля
const date = new Date();
let day = date.getUTCDate();
day = day < 10 ? "0" + day : day;
let month = date.getUTCMonth() + 1;
month = month < 10 ? "0" + month : month;
const year = date.getUTCFullYear();
const password = `Valantis_${year}${month}${day}`;

//console.log(password);

//экземпляр axios для уже готового шаблона для запросов
export const $host = axios.create({
    baseURL: API_URL,
    headers: {
        "X-Auth": md5(password)
    }
})