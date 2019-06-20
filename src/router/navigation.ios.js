import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../Home'
import ProductList from '../ProductList'

let RootStack = createStackNavigator({
  ProductList,
  Home,
})
export default createAppContainer(RootStack)
