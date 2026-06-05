import './App.css';
import {  useReducer} from 'react';


const items =[{id:1 , name:'Apple' , quantity:1} , {id:2 , name:'Orange' , quantity:1} , {id:3 , name:'Annanas' , quantity:1} ,{id:4 , name:'Bannan' , quantity:1}]
const InistialState=[]
const reducer=(state , action)=>{
   switch(action.type){
    case 'Add_Item':
      return[...state,action.payload];
    case 'Remove_Item':
      return state.filter(item=>item.id!==action.payload.id)
    case 'Update_quantity':
      return state.map(item=>item.id ===action.payload.id ? {...item,quantity:item.quantity+action.payload.updatequantity} : item); 
    case 'Clear_cart':
      return []
    default:
      return state;
   }
}

function App (){
  const [cart , dispatch]=useReducer(reducer , InistialState)

  const addItem  = (id)=>{
    const isIncart=cart.filter((item)=>item.id===id).length>0 ? true : false 
    if (isIncart === false){
      const Index = items.findIndex((it)=>{ return it.id===id});
        dispatch({
      type:'Add_Item',
      payload:items[Index]
    })
    }else {
       dispatch({
      type:'Update_quantity',
      payload:{id , updatequantity:+1}
    })
    }
  
  }

  const removeItem=(id)=>{
    dispatch({
      type:'Remove_Item',
      payload:{id}
    })
  }

  const updateQuantitiy=(id , updatequantity)=>{
    const cartItem = cart.find((item)=> item.id === id )
    if (cartItem.quantity === 1 && updatequantity === -1 ){
      dispatch({
        type:'Remove_Item',
        payload:{id}
      })
    } else{
      dispatch({
        type:'Update_quantity',
        payload:{id,updatequantity}
      })
    }   
  }

  const clearCart=()=>{
    dispatch({
      type:'Clear_cart'
    })
  } 
  return(
    <div className='App'>
       <h1>Cart</h1>

       {cart.map(item=>(
        <div key={item.id} className='cart-item'>
          <p>{item.name} (x{item.quantity})</p>
          <div>
          <button className='btn1' onClick={() => updateQuantitiy(item.id,1)}>+</button>
          <button className='btn1' onClick={() => updateQuantitiy(item.id,-1)}>-</button>
          <button className='btn2' onClick={()=>{removeItem(item.id)}}> Remove </button>
          </div>
        </div>  
       ))} 
      <button className='btn2' onClick={clearCart}>Clear Cart</button>

      <div className='shop'>
         {items.map((item)=>(
          <div key={item.id} className='shop-items'>
             <h1>Item name : {item.name}</h1>
             <button className='btn2' onClick={()=>addItem(item.id)}>Add {item.name}</button>
          </div>
         )) 
         }
      </div>
    </div>
  )
}

export default App ;
