import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { text, theme } from '../styles';
import arrow from '../assets/arrow.png';
import eyesClosed from '../assets/eyes-closed.png';
import eyesOpened from '../assets/eyes-opened.png';


const Login = () => {
     const [hidePassword, setHidePassword] = useState(true);
     const [userInfo, setUserInfo] = useState({ username: "", password: "" });

     return (
          <View style={theme.container}>
               <View style={theme.cardLogin}>
                    <View >
                         <Text style={text.login}>Login</Text>
                    </View>
                    <View>
                         <TextInput
                              placeholder={"Email"} autoCapitalize="none"
                              value={userInfo.username} keyboardType="email-address"
                              style={theme.textInput1}
                              onChange={(e) => {
                                   const newUserInfo = { ...userInfo };
                                   newUserInfo.username = e;
                                   setUserInfo(newUserInfo);
                              }}
                         />
                         <View style={theme.passwordContainer}>

                              <TextInput
                                   placeholder={"Password"} autoCapitalize="none" value={userInfo.password}
                                   style={theme.textInput} secureTextEntry={hidePassword}
                                   onChange={(e) => {
                                        const newUserInfo = { ...userInfo };
                                        newUserInfo.password = e;
                                        setUserInfo(newUserInfo);
                                   }}
                              />
                              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={theme.touch}>
                                   <Image source={hidePassword ? eyesClosed : eyesOpened} style={theme.toggle}></Image>
                              </TouchableOpacity>
                         </View>
                    </View>

                    <TouchableOpacity style={theme.primaryButton} >
                         <Text style={text.primaryText}>FAZER LOGIN</Text>
                         <View style={theme.arrowContainer}>
                              <Image source={arrow} />
                         </View>
                    </TouchableOpacity>
               </View>
          </View>
     );
};

export default Login;