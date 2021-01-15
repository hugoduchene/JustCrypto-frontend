import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

export const Button = ({info}) => {
    return(
        <TouchableOpacity style={Styles.container} onPress={info.onPress}>
            <Text style={Styles.basic}>{info.content}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: "60%"
    },
    basic: {
        borderRadius: 10,
        elevation: 10,
        borderColor: "#000000",
        shadowColor: "black",
        shadowRadius: 100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        marginTop: 15,
        backgroundColor: "#636591",
        padding: 15,
        color: "white",
        textAlign: "center",
    }
})