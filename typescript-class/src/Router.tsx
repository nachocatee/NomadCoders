import { BrowserRouter, Route, Switch } from "react-router-dom"
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"

interface IRouterProps {
  toggleDark: () => void // void means nothing
  isDark: boolean
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
