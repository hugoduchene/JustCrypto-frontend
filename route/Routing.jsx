import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import {Text} from 'react-native'

import {Layout} from '../views/layout/Layout'
import {Home} from '../views/Home'

export const Routing = () => {
    return(
        <NativeRouter>
            <Route path="/">
                <Layout hiddenHeader>
                    <Home />
                </Layout>
            </Route>
        </NativeRouter>
    )
}