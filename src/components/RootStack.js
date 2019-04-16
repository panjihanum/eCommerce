
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/TabNavigator'
import Feed from '../screens/Feed'
import FeedExplore from '../screens/FeedExplore'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account/Login'
import AccountRegister from '../screens/Account/Register'
import Seller from '../screens/Seller'
import Product from '../screens/Product/Product'
import Buy from '../screens/Buy'


const RootStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Feed: { screen: Feed },
    FeedExplore: { screen : FeedExplore},
    Wishlist: { screen: Wishlist},
    Account: { screen: Account },
    AccountRegister: { screen: AccountRegister },
    Seller: { screen: Seller},
    Product: { screen: Product},
    Buy: {screen: Buy}
},
{
  initialRouteName: 'Account',
  headerMode: 'none',
})
  
export default createAppContainer(RootStack);