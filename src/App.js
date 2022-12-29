import React from 'react'
import { MenuContext } from './contexts/MenuContext'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import { router } from './router'
import useMenu from './hooks/useMenu'

const App = () => {
  const menu = useMenu()
  return (<>
    <MenuContext.Provider value={menu}>
      <Navbar />
      <RouterProvider router={router} />
    </MenuContext.Provider>
  </>
  )
}

export default App