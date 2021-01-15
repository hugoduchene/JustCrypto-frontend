import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import { StyleSheet, Image, View } from 'react-native'
import { useHistory } from 'react-router-native'

import { Button } from '../components/Button'
import { lightBlue } from '../config'

export const Home = () => {
    let history = useHistory()
    
    const startHandler = () => {
        history.push('/register')
    }
    
    return(<>
        <SafeAreaProvider>
            <View style={Styles.boxHome}>
                <View style={{width: "60%"}}>
                    <Image 
                        source={require('../assets/logo.png')}
                        style={{resizeMode: 'contain', maxWidth: "100%"}}
                    />
                </View>
                <Image 
                    source={require('../assets/homeImg.png')}
                    style={{width: 200, height: 200, borderRadius: 100}}
                />
                <View style={{width: "90%"}}>
                    <Text style={Styles.subtitle} h2>Jouez maintenant à JustCrypto</Text>
                    <Text style={{textAlign: "center", color: lightBlue}}>Vous souhaitez suivre l'actualité de la blockchain ainsi que des cryptomonnaies, cette application est faite pour vous !
                    Invitez vos amis et entraidez-vous afin d'acheter les plus beaux objets du store.</Text>
                </View>
                <Button
                    info={{
                        content: "Commencer",
                        onPress: startHandler,
                    }}
                />
            </View>
        </SafeAreaProvider>
    </>)
}

const Styles = StyleSheet.create({
    boxHome: {
        marginBottom: 15,
        marginTop: 15,
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
    },
    
    subtitle: {
        color: "#34354C",
        textAlign: "center",
        marginBottom: 15,
    },

    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: "italic",
        color: "#34354C",
        marginTop: 10,
    }
})