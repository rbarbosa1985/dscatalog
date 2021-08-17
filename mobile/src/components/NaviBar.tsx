import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import menu from '../assets/menu.png';
import { nav } from '../styles';

const NavBar = () => {
     const [show, setShow] = useState(false);
     const navigation = useNavigation();
     const route = useRoute();

     function navigate(path: string) {
          if (path) {
               setShow(false);
               navigation.navigate(path);
          }
          setShow(false);
     }

     return (
          <TouchableOpacity style={nav.drawer} activeOpacity={0.8} onPress={() => navigate("Login")}  /*onPress={() => setShow(!show)}*/>
               <Image source={menu} />
               {show ? (<View style={nav.options}>
                    <TouchableOpacity style={nav.option} onPress={() => navigate("Home")}>
                         <Text style={[nav.textOption, route.name === 'Home' ? nav.textActive : null]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nav.option} onPress={() => navigate('Catalog')}>
                         <Text style={[nav.textOption, route.name === 'Catalog' ? nav.textActive : null]}>Catalog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nav.option} onPress={() => navigate('Login')}>
                         <Text style={[nav.textOption, route.name === 'Login' ? nav.textActive : null]}>Login</Text>
                    </TouchableOpacity>
               </View>) : null}
          </TouchableOpacity>
     );
};

export default NavBar;