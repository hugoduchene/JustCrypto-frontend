import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import { StyleSheet, Image, View } from 'react-native'

import { Button } from '../components/Button'

export const Home = () => {
    
    return(<>
        <SafeAreaProvider>
            <View style={Styles.boxHome}>
                <Image 
                    source={require('../assets/homeImg.png')}
                    style={{width: 200, height: 200, borderRadius: 100}}
                />
                <Text h1 style={Styles.title}>JUSTCRYPTO</Text>
                <Button
                    info={{
                        content: "Nouvelle partie",
                        onPress: ()=>{console.log("ahah")},
                    }}
                />
                <Button
                    info={{
                        content: "Continuer la partie",
                        onPress: ()=>{console.log("ahah")},
                    }}
                />
            </View>
        </SafeAreaProvider>
    </>)
}

const Styles = StyleSheet.create({
    boxHome: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: "italic",
        color: "#070057",
        marginTop: -30,
    }
})