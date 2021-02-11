import { Switch, Route } from 'react-router-dom'

import Home from './Componentes/pages/Home'
import Produto from './Componentes/pages/Produto'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:slug" exact component={Produto} />
    </Switch>
  )
}

export default  Routes