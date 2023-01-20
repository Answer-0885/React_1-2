import ShopItemClass from './components/ShopItemClass';
import React from "react"
import './App.css';

class App extends React.Component{

  render(item){
    return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item} />
        </div>
      </div>
    )
  }
}


export default App;
