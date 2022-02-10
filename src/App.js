import { Fragment, useState } from 'react'
import Header from './components/Layout.js/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { modalContext } from './store/modal-context'
import { CardContextProvider } from './store/cart-context'

function App() {
	const [showModal, setShowModal] = useState(false)

	const showModalHandler = () => {
		setShowModal(true)
	}
	const hideModalHandler = () => {
		setShowModal(false)
	}
	return (
		<CardContextProvider>
			<modalContext.Provider
				value={{
					onClose: hideModalHandler,
					onShow: showModalHandler,
				}}
			>
				<Fragment>
					{showModal && <Cart />}
					<Header />
					<main>
						<Meals />
					</main>
				</Fragment>
			</modalContext.Provider>
		</CardContextProvider>
	)
}

export default App
