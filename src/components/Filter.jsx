import React, { useState } from 'react'
import { fetchFilteredIds } from '../http/fetchFilteredIds';
import { useItemsStore } from '../store/useItemsStore';
import { fetchItems } from '../http/fetchItems';

const Filter = ({reset, setReset}) => {
    const {setItems, setIsLoading} = useItemsStore();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");

    const getFilteredItems = async () => {

        const filterOptions = {}
        if(name) filterOptions.product = name;
        if(price) filterOptions.price = Number(price);
        if(brand) filterOptions.brand = brand;

        console.log(filterOptions);

        setIsLoading(true);
        const filteredIds = await fetchFilteredIds(filterOptions);
        console.log(filteredIds, "filteredIds");
        const filteredItems = await fetchItems(filteredIds.result);
        console.log(filteredItems, "filteredItems");
        setItems(filteredItems.result);
        setIsLoading(false);
    }

    const resetFn = () => {
        setReset(!reset);
        setName("");
        setPrice("");
        setBrand("");
    }
  return (
    <div>
      <input disabled={price || brand} className="input-search" placeholder="Поиск по названию товара" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <input disabled={name || brand} className="input-search" placeholder="Поиск по цене" type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <input disabled={price || name} className="input-search" placeholder="Поиск по имени брэнда" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
      <button disabled={!name && !price && !brand} onClick={getFilteredItems} className="input-search">Применить</button>
      <button disabled={!name && !price && !brand} onClick={resetFn} className="input-search">Сбросить</button>
    </div>
  )
}

export default Filter
