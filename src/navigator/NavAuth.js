import { createStackNavigator } from 'react-navigation'

import Login from '../views/Login'
import Welcome from '../views/Welcome'
import Home from '../views/Home'

const NavAuth = createStackNavigator({
 Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      header: null
    })
  },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
})

export default NavAuth