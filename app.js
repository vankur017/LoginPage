import React from "react";
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./src/components/Login";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";


const App = ()=>{

    return (
    <div>
       <Login/>
       <Outlet/>
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={appstore}><App/></Provider>
        ,
        children:[
          
            {
                path : "/browse",
                element: <Body/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
