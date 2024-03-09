import { useEffect, useState } from 'react'
import './App.css'
import { fetchIds } from './http/fetchIds';
import { fetchItems } from './http/fetchItems';
import Cart from './components/Cart';
import Carts from './components/Carts';
import { nanoid } from 'nanoid';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import {useItemsStore} from './store/useItemsStore';

function App() {

  const {items, isLoading, offset, limit, setItems, upOffset, downOffset, setIsLoading} = useItemsStore();
  const [reset, setReset] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);

    fetchIds(offset, limit)
    .then((ids) => {
      fetchItems(ids.result)
      .then((items) => {
        setItems(items.result)
        setIsLoading(false);
        //console.log(items, "items");
      })
      .catch(err => {
        console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос");
        fetchProducts();
      })
    })
    .catch(err => {
      console.log(err.message, "При запросе произошла ошибка, пробуем повторить запрос")
      fetchProducts();
    });
  }

  useEffect(() => {

    fetchProducts();

  }, [offset, limit, reset])

  return (
    <div className='container'>
      <Pagination upOffset={upOffset} downOffset={downOffset} offset={offset}/>
      <Filter reset={reset} setReset={setReset}/>
      <h1 style={{textAlign: "center", fontStyle: 'italic'}}>Список товаров</h1>
      {
        isLoading
        ?<div className='loader'></div>
        :<Carts>
        {
          items.length
          ?items.map(item => 
            <Cart key={nanoid()} cart={item}/>
            )
          :<h2>Не удалось загрузить товары</h2>
        }
        </Carts>
      }
    </div>
  )
}

export default App