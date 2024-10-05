import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import './components/style.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Bookdetails from './components/Bookdetails'
import AddBook from './components/AddBook'
import BrowseBooks from './components/BrowseBooks'
import NoteFound from './components/NoteFound'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Home/>,
  errorElement:<NoteFound/>

},
{
  path:"/book/:id",
  element:<Bookdetails/>

},
{
  path:'/addbook',
  element:<AddBook/>
},
{
  path:'/newbook',
  element:<BrowseBooks/>
}

  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>

    </Provider>
  
  </StrictMode>
)
