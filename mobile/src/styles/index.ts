import { StyleSheet } from 'react-native'

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
          marginRight: 10
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
     productDescription:{

     }
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
     textContainer: {
          
     },
     primaryButton: {
          backgroundColor: colors.primary,
          borderRadius: 10,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: 50,
     },
     arrowContainer: {
          backgroundColor: colors.secondary,
          width: 50,
          height: 50,
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
     }
});

export {colors, theme, text};
