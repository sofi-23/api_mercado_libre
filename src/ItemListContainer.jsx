
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemListContainer () {
    const [itemList, setItemList] = useState([])
    const getItems = () => { 
        return fetch('https://api.mercadolibre.com/sites/MLA/search?q=pelota')
        .then(response => {
            return response.json()
        }).then(data => {
            return data
        } )
    }
    useEffect(async () => { //Acá el useEffect hace que se ejecute una sola vez.
        const data = await getItems(new Set()); //new Set arma un array en el que no se pueden repetir elementos
        data.results.forEach(item=> {
            const arr = [...itemList]; 
            arr.push(<ItemDetail key={item.id} name={item.title} description={item.id} price={item.price}/>);
            setItemList(arr)
        })
    },[])
    
    return (
    <>
        {itemList}
    </>
    )
}