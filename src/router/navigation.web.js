import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"

import Home from '../Home'
import ProductList from '../ProductList'

let RootStack = createSwitchNavigator({
  ProductList,
  Home,
})
export default createBrowserApp(RootStack)
