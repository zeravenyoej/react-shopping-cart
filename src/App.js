import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			{item}
		])
	};

	return (
		//do I need to add cart state to shopping cart here?
		<ProductContext.Provider value={{ products, addItem }}>
			<div className="App">
				<Navigation cart={cart} />

				<Route exact path="/" component={Products}/>

				<Route path="/cart" component={ShoppingCart}/>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
