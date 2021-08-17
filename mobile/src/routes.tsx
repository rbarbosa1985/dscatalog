import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderText, NavBar } from './components';
import { Home, Catalog, ProductDetails, Login } from './pages';
import { colors } from './styles';

const Stack = createStackNavigator();


const Routes = () => {
     return (
          <Stack.Navigator screenOptions={{
               headerTitle: " ",
               headerStyle: {
                    backgroundColor: colors.primary,
               },
               headerLeft: () => <HeaderText />,
               headerRight: () => <NavBar />,
          }}>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Catalog" component={Catalog} />
               <Stack.Screen name="ProductDetails" component={ProductDetails} />
               <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
     )
}

export default Routes