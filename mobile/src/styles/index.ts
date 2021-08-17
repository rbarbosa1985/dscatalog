import { Dimensions, StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

const deviceWidth = Dimensions.get('window').width;

const colors = {
     white: "#FFF",
     lightGray: "#f2f2f2",
     mediumGray: "#9e9e9e",
     borderGray: "#E1E1E1",
     darkGray: "#263238",
     black: "#000",
     primary: "#407BEE",
     secondary: "#33569B",
     bluePill: "#407BFF61",
     red: "#DF5753"
}

const text = { 
     regular: {
          fontSize: 16,
          fontWeight: "400",
          textAlign: "center",
          color: colors.mediumGray,
     },
     bold: {
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 15,
          color: colors.darkGray,
     },
     primaryText: {
          color: colors.white,
          textTransform: "uppercase",
          fontSize: 15,
          fontWeight: "bold",
          marginLeft: 10,
          marginRight: 10,
          width: "70%",
          textAlign: "center"
     },
     productName: {
          fontSize: 16,
          fontWeight: "bold",
     },
     currency: {
          fontSize: 16,
          fontWeight: "400",
          color: colors.mediumGray,
          padding: 10
     },
     productPrice: {
          fontSize: 30,
          fontWeight: "bold",
          color: colors.primary
     },

     //Product Details
     backDetails: {
          fontSize: 18,
          fontWeight: "bold",
          color: colors.darkGray,
     },
     productNameDetails: {
          fontSize: 30,
          fontWeight: "bold",
          color: colors.darkGray
     },

     //Login
     login: {
          fontSize: 30,
          color: colors.black,
          textTransform: 'uppercase',
          fontWeight: "400",
     },

}

const theme = StyleSheet.create ({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20
     },
     card: {
          width: "100%",
          height: "100%",
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 20,
          alignItems: "center",
          justifyContent: "space-around",
          shadowColor: colors.black,
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84
     },
     draw: {
          width: 313,
          height: 225,

     },

     primaryButton: {
          backgroundColor: colors.primary,
          borderRadius: 10,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: 70,
     },

     arrowContainer: {
          backgroundColor: colors.secondary,
          width: 50,
          height: 70,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: "center",
          alignItems: "center"
     },

     scrollContainer: {
          padding: 20,
     },

     productCard: {
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingVertical: 20,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "space-around",
          shadowColor: colors.black,
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84

     },

     productDescription: {
          width: "100%",
          marginTop: 20,
          padding: 20,
          paddingLeft: 30,
          paddingBottom: 0,
          borderTopColor: colors.lightGray,
          borderTopWidth: 1,
     },

     priceContainer: {
          flexDirection: "row",
     },

     productImg: {
          width: 140,
          height: 140,
          margin: 16
     },

     //SearchInput

     
     inputContainer: {
          width: "100%",
          height: 60,
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 20,
          alignItems: "flex-start",
          justifyContent: "space-around",
          shadowColor: colors.black,
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          marginVertical: 12.5,
          paddingVertical: 10,
     },

     searchInput: {
          width: "90%",
          height: 40,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.borderGray,
     },

     //Product Details 

     cardDetail: {
          width: "100%",
          height: "100%",
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 20,
          shadowColor: colors.black,
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84
     },

     backContainer: {
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent:'flex-start',
     },

     leftArrow: {
          marginRight: 16,
          marginTop: 6,
     },

     productImgContainer: {
          borderRadius: 20,
          borderColor: colors.lightGray,
          borderStyle: "solid",
          borderWidth: 0.8,
          marginBottom: 15,
          alignItems: 'center',
     },

     productImgDetail: {
          width: 220,
          height: 220,
          margin: 16
     },

     productDescriptionDetail:{
          marginTop: 10,
          borderRadius: 20,
          borderColor: colors.lightGray,
          borderStyle: "solid",
          borderWidth: 0.8,
          padding: 20,
          fontSize: 16,
          fontWeight: "400",
          color: colors.mediumGray,
     },

     //Login

     cardLogin:{
          width: "100%",
          height: "100%",
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 20,
          alignItems: "center",
          justifyContent: "space-around",
          shadowColor: colors.black,
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84
     },

     passwordContainer:{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 25,
          borderWidth: 1,
          borderRadius: 10,
          // padding: 10,
          borderColor: colors.mediumGray,
          
     },
     
     textInput: {
          width: Dimensions.get('window').width-120,
          height: 50,
          padding: 10,
     },

     textInput1: {
          width: Dimensions.get('window').width-80,
          height: 50,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.mediumGray,
     },

     toggle:{
          marginRight: 10,
          width: 20,
          height: 20
     },

});

const nav = StyleSheet.create({
     leftText:{
          color: colors.white,
          fontWeight: 'bold',
          marginLeft: 20,
     },

     drawer: {
          marginRight: 20,
     },
     
     options:{
          width: deviceWidth,
          backgroundColor: colors.primary,
          marginTop: 159,
          marginRight: -20,
     },
     option:{
          padding: 20,
     },

     textOption:{
          color: colors.mediumGray,
          textTransform: 'uppercase',
     },

     textActive: {
          fontWeight: 'bold',
          color: colors.white,
     }
     
});

export {colors, theme, text, nav};
