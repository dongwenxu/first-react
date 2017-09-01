import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from '../App'
import Page1 from '../module/Page1'
import Page2 from '../module/Page2'
import NotFound from '../module/404'


const Routes = () => {
   return(

      <Route path="/" component={App}>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
     </Route>

   )
}

export default Routes;