import { useEffect, useState } from 'react'
import './App.css'
import { fetchIds } from './http/fetchIds';
import { fetchItems } from './http/fetchItems';
import Cart from './components/Cart';
import Carts from './components/Carts';
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchIds()
    .then((ids) => {
      //console.log(ids.result, "ids");
      fetchItems(ids.result)
      .then((items) => {
      setItems(items.result)
      setIsLoading(false);
      //console.log(items.result);
    })});
  }, [])
  return (
    <>
    <Carts>
      {
        items.map(item => 
          <Cart key={nanoid()} cart={item}/>
          )
      }
    </Carts>
    {isLoading && <div className='loader'></div>}
    </>
  )
}

export default App
