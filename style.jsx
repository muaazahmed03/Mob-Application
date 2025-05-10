import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: "center",
        textAlign: 'center',
    },
    text_style1:{
        color: "white",
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },
    text_style2:{
        color: "skyblue",
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },
    img1:{
        width: '100%',
        height: 240,
    },
    btn_main:{
        backgroundColor: 'white',
        alignItems: 'center',
        width: 'auto',
        borderRadius: 10,
    },
    btn:{
        color: 'black',
        padding: 5,
    }
})