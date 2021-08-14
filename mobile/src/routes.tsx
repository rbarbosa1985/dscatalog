import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Catalog, ProductDetails } from './pages';
import { colors } from './styles';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const HeaderText = () => <Text>DS Catalog</Text>;

const Routes = () => {
     return (
          <Stack.Navigator screenOptions={{
               headerTitle: "",
               headerStyle: {
                    backgroundColor: colors.primary,
               },
               headerTintColor: colors.white,
               headerLeft: () => <HeaderText />,
          }}>
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Catalog" component={Catalog} />
               <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
     )
}

export default Routes