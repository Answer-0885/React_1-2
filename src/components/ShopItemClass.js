import React from "react"
class ShopItemClass extends React.Component{
 
      render() {
        const item = {
            brand: 'Tiger of Sweden',
            title: 'Leonard coat',
            description: 'Minimalistic coat in cotton-blend',
            descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
            price: 399,
            currency: '£'
          }
        return (<div class="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div class="description">{item.descriptionFull}</div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
        <div class="purchase-info">
            <div class="price">{item.currency}{item.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
      </div>);
      }
}
export default ShopItemClass;