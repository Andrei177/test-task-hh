import React, { useEffect, useState } from 'react'
import { fetchFilteredIds } from '../http/fetchFilteredIds';
import { useItemsStore } from '../store/useItemsStore';
import { fetchItems } from '../http/fetchItems';
import { fetchFields } from '../http/fetchFields';
import { useFilterStore } from '../store/useFilterStore';
import ChoiceFilter from './ChoiceFilter';

const Filter = ({reset, setReset}) => {
    const {setItems, setIsLoading, offset, limit} = useItemsStore();
    const {brands, prices, products, setBrands, setPrices, setProducts} = useFilterStore();
    const [select, setSelect] = useState({type:"", value:""});

    const fetchBrands = () => {
      fetchFields({field: "brand", offset, limit})
      .then(res => setBrands(res))
      .catch(err => {
        console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
        fetchBrands();
      })
    }
    const fetchPrices = () => {
      fetchFields({field: "price", offset, limit})
      .then(res => setPrices(res))
      .catch(err => {
        console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
        fetchPrices();
      })
    }
    const fetchProducts = () => {
      fetchFields({field: "product", offset, limit})
      .then(res => setProducts(res))
      .catch(err => {
        console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
        fetchProducts();
      })
    }

    useEffect(() => {
      fetchBrands();
      fetchPrices();
      fetchProducts();
    }, [offset, limit])

    const getFilteredItems = () => {
        setIsLoading(true);
        const filterOptions = {
          [select.type]: select.value,
          offset,
          limit
        }

        fetchFilteredIds(filterOptions)
        .then(filteredIds => {
          fetchItems(filteredIds.result)
          .then(filteredItems => {
            setItems(filteredItems.result);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
            getFilteredItems();
          })
        })
        .catch(err => {
          console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
          getFilteredItems();
        })
    }

    const resetFn = () => {
        setReset(!reset);
        setSelect({});
    }
  return (
    <div>
      <h2 style={{fontWeight: 400}}>Выберите параметр фильтрации</h2>
      <div className='filter-option'>
        <ChoiceFilter type="brand" select={select} setSelect={setSelect} title={"Бренд"} items={brands}/>
        <ChoiceFilter type="price" select={select} setSelect={setSelect} title={"Стоимость"} items={prices}/>
        <ChoiceFilter type="product" select={select} setSelect={setSelect} title={"Название"} items={products}/>
      </div>
      <div className="filter-btns">
        <button style={{cursor: "pointer"}} disabled={!select.type} onClick={resetFn} className="filter-btn">Сбросить</button>
        <button style={{cursor: "pointer"}} disabled={!select.type} onClick={getFilteredItems} className="filter-btn">Применить</button>
      </div>
    </div>
  )
}

export default Filter
