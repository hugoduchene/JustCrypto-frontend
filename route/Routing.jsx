import React from 'react'
import { NativeRouter, Route } from "react-router-native";

import {Layout} from '../views/layout/Layout'
import {Home} from '../views/Home'
import {Register} from '../views/Register'

export const Routing = () => {
    return(
        <NativeRouter>
            <Route exact path="/">
                <Layout hiddenHeader>
                    <Home />
                </Layout>
            </Route>

            <Route exact path="/register">
                <Layout hiddenHeader>
                    <Register />
                </Layout>
            </Route>
        </NativeRouter>
    )
}