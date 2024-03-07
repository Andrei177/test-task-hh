import { useEffect, useState } from 'react'
import './App.css'
import { fetchIds } from './http/fetchIds';
import { fetchItems } from './http/fetchItems';
import Cart from './components/Cart';
import Carts from './components/Carts';
import { nanoid } from 'nanoid';
import Pagination from './components/Pagination';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(49);

  useEffect(() => {

    setIsLoading(true);

    fetchIds(offset, limit)
    .then((ids) => {
      fetchItems(ids.result)
      .then((items) => {
        setItems(items.result)
        setIsLoading(false);
      })
    })
    .catch(err => console.log(err.message));
  }, [offset, limit])
  return (
    <div className='container'>
      <Pagination setOffset={setOffset} offset={offset}/>
      <h1 style={{textAlign: "center", fontStyle: 'italic'}}>Список товаров</h1>
      {
        isLoading
        ?<div className='loader'></div>
        :<Carts>
        {
          items.map(item => 
            <Cart key={nanoid()} cart={item}/>
            )
        }
        </Carts>
      }
    </div>
  )
}

export default App
