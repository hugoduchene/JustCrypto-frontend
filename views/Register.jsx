import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Input, Text } from 'react-native-elements'

import { darkBlue, lightBlue } from '../config'
import { Button } from '../components/Button'

export const Register = () => {
    const [formState, SetFormState] = useState({})

    const registerHandler = () => {
        if (formState.description && formState.pseudo) {
            localStorage.setItem('pseudo', formState.pseudo)
            localStorage.setItem('description', formState.description)
        } else{
            console.log("j'envoie pas")
        }
    }
    
    return(
        <ScrollView style={Styles.boxRegister}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <View style={{width: "60%", textAlign: "center"}}>
                    <Image 
                        source={require('../assets/logo.png')}
                        style={{resizeMode: 'contain', maxWidth: "100%"}}
                    />
                </View>
                
            
                <Image 
                    source={require('../assets/fillForms.png')}
                    style={{width: 250, height: 250, resizeMode: "contain"}}
                />
                <Text h2 style={{textAlign: "center", color: darkBlue}}>Inscription</Text>
                <Text style={{ color: lightBlue, textAlign: "center", marginBottom: 30 }}>Veuillez remplir les champs ci-dessous afin de commencer la magnifique aventure JustCrypto.</Text>
            
                <View style={{width: "90%"}}>
                    <Input
                        onChangeText={text => SetFormState({...formState, pseudo: text})}
                        placeholder='Pseudo'
                    />
                </View>
                
                <View style={{width: "90%"}}>
                    <Input
                        onChangeText={text => SetFormState({...formState, description: text})}
                        placeholder='Description'
                    />
                </View>

                <Button 
                    info={{
                        content: "S'inscrire",
                        onPress: registerHandler,
                    }}
                />
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    boxRegister: {
        marginBottom: 15,
        marginTop: 15,
        width: "100%",
    },
    
    container : {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})