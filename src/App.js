import React from 'react'
import { MenuContext } from './contexts/MenuContext'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { router } from './router'
import useMenu from './hooks/useMenu'

const App = () => {
  const menu = useMenu()

  // console.log('first')
  // const appState = useAppState()
  // console.log(appState)
  // menu.initializeMenu()
  return (<>
    {/* <AppStateContext.Provider value={appState}> */}
    <MenuContext.Provider value={menu}>
      <div className='h-screen'>
        <Navbar />
        <Routes>
          {router.map(item => <Route path={item.path} element={item.element} />)}

        </Routes>
      </div>
    </MenuContext.Provider>
    {/* </AppStateContext.Provider> */}
  </>
  )
}

export default App