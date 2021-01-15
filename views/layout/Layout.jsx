import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

const HeaderLayout = () => {
    return(
        <Header 
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'JustCrypto', style: { 
                color: '#fff', fontWeight: "bold", fontSize: 23.0
            } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
                backgroundColor: '#000354',
                alignItems: "center",
            }}
        />
    )
}

export const Layout = ({children, hiddenHeader}) => {
    return(<>
        <SafeAreaProvider style={{backgroundColor: "#fff"}}>
            {hiddenHeader ?? <HeaderLayout/>}
            {children}
        </SafeAreaProvider>
    </>)
}