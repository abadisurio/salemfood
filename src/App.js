import React from 'react'
import { MenuContext } from './contexts/MenuContext'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { router } from './router'
import useMenu from './hooks/useMenu'
import { CartContext } from './contexts/CartContext'
import useCart from './hooks/useCart'

const App = () => {
  const menu = useMenu()
  const cart = useCart()

  // console.log('first')
  // const appState = useAppState()
  // console.log(appState)
  // menu.initializeMenu()
  return (<>
    {/* <AppStateContext.Provider value={appState}> */}
    <MenuContext.Provider value={menu}>
      <CartContext.Provider value={cart}>

        <div className='h-screen'>
          <Navbar />
          <Routes>
            {router.map(item => <Route key={item.path} path={item.path} element={item.element} />)}

          </Routes>
        </div>
      </CartContext.Provider>
    </MenuContext.Provider>
    {/* </AppStateContext.Provider> */}
  </>
  )
}

export default App