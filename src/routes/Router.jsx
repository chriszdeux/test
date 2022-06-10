import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { routes } from '../constants/routes';


export const RouterApp = () => {
  return (
    <>
    <Router>
      <Routes>
        {
          routes.map(({ route, component }) => (
            <Route path={ route } element={ component } key={ route }/>
          ) )
        }
      </Routes>
    </Router>
    </>
  )
}
