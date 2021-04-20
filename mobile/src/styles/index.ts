import { StyleSheet } from 'react-native'

const colors = {
     white: "#FFF",
     lightGray: "#f2f2f2",
     mediumGray: "#9e9e9e",
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
     }
});

export {colors, theme, text};
