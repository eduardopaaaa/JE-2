// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState} from 'react'

const items = [

  {i1: 'no bake pud', 
  cashExp: 1, 
  cashFlow: 1},

  {i2: 'EB Oven', 
  cashExp: 5, 
  cashFlow: 5},

  {i3: 'Toaster', 
  cashExp: 25, 
  cashFlow: 50},

  {i4: 'Conv Oven', 
  cashExp: 250, 
  cashFlow: 100},

  {i5: 'LIL DEBBY', 
  cashExp: 500, 
  cashFlow: 250},
]


const user = {
  lCash: 0,
  item: 'no bake pud',
  cFlow: 0
}

const App = () => {
  

  const [money, setMoney] = useState(user.lCash)
  // again, I need another variable in the rbackets but i need to revisit React, Im confusing mutlitple things 
  
 
  let userUpdate = () => {
    if(user.item === 'no bake pud'){
      setMoney(user.lCash += items[0].cashFlow)
      setMoney(user.cFlow += items[0].cashFlow)
      alert('you sold a no bake poud')
    }
        if(user.item === 'EB Oven'){
          setMoney(user.lCash += items[1].cashFlow)
          setMoney(user.cFlow += items[1].cashFlow)
          alert('you got an easy bake oven and sold pastries')
        }
          if(user.item === 'Toaster'){
            setMoney(user.lCash += items[2].cashFlow)
            setMoney(user.cFlow += items[2].cashFlow)
            alert('you got a toaster and are now the pop tart king')
          }
            if(user.item === 'Conv Oven'){
              setMoney(user.lCash += items[3].cashFlow)
              setMoney(user.cFlow += items[3].cashFlow)
              alert('you got an oven and you are effectively outbaking everyone')
            }
              if(user.item === 'LIL DEBBY'){
                setMoney(user.lCash += items[4].cashFlow)
                setMoney(user.cFlow += items[4].cashFlow)
                alert('lil debe')
              }
                if(user.lCash >= 1500) {
                  alert('User Monopolized Baking')
                }
                if(user.lCash < money) {
                  alert('user spent money to buy new baking items')
                }

  }
 return( 
 <div className='container'> 
    <h1> React Bakery </h1>
    <h2>Instructions: Can Upgrade baking items at each level ($5 | $25 | $250 | $500)</h2>
       <h3> Your starting Cash is ${user.lCash}</h3>
         <h3> Your Current Cash Flow is ${user.cFlow} </h3>
            <button className='btn btn-outline-warning' onClick = {userUpdate}>Bake and Sell</button>
              <Items/>
 </div>
 
 )

}

// to get an upgrade for your baking items
// each time user has new item in possesion, user will incurr changes to their Liquid cash, cash flow and above threshold, they will upgrade to a new item
const Items = () => {
  const [item, setItem] = useState(user.item) 
  // I know im supposed to have another variable inside the brackets, but im just confused
  let itemSelector = () => {
    if (item !== user.item) {
      setItem(user.item = items[0].i1)
      alert ('you have a no bake pud')
    }
    if(user.lCash >= 0){
      setItem(user.lCash -= items[0].cashExp)
      setItem(user.cFlow -= items[0].cashExp)
      setItem(user.item = items[0].i1)
      alert ('you got a bit of cash!')
    }
    if(user.lCash >= 5){
      setItem(user.lCash -= items[1].cashExp)
      setItem(user.cFlow -= items[1].cashExp)
      setItem(user.item = items[1].i2)
      alert ('you are rollin in it! you got enough for an upgrade')
    }
    if(user.lCash >= 25){
      setItem(user.lCash -= items[2].cashExp)
      setItem(user.cFlow -= items[2].cashExp)
      setItem(user.item = items[2].i3)
      alert ('NICEEEEE! another upgrade')
    }
    if(user.lCash >= 250){
      setItem(user.lCash -= items[3].cashExp)
      setItem(user.cFlow -= items[3].cashExp)
      setItem(user.item = items[3].i4)
      alert ('Hold on there bimbo bread! Next upgrade?')
    }
    if(user.lCash >= 500){
      setItem(user.lCash -= items[4].cashExp)
      setItem(user.cFlow -= items[4].cashExp)
      setItem(user.item = items[4].i5)
      alert ('you are the bread king!')
    }
  }
  return(
    <div>
      <h3> Once you reach each upgrade threshold, click upgrade baking item</h3>
      <h3> Yout Current Baking Item is {user.item} </h3>
    <h3>
      <button className='btn btn-outline-warning' onClick={itemSelector}>Upgrade Baking Item</button>
      </h3>
    </div>
  )
} 


export default App;
