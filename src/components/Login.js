import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Icon, Item, Input, Label, Text, Button } from 'native-base';

const Login = () => {

    let [i, setI] = React.useState(0)
    React.useEffect(() => {

    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Icon type="FontAwesome" style={{ fontSize: 100, marginBottom: '10%' }} name="heartbeat" />
            </View>
            <Item style={{ width: '80%' }} stackedLabel>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item style={{ width: '80%' }} stackedLabel>
                <Label>Password</Label>
                <Input />
            </Item>
            <View style={{ marginTop: '3%' }}>
                <Button bordered dark>
                    <Text>Login</Text>
                </Button>
            </View>

            <Text style={{ marginTop: '3%' }}>
                or
            </Text>
            <View style={{ marginTop: '3%' }}>
                <Button bordered dark>
                    <Text>Login with Google</Text>
                </Button>
            </View>

            <View style={{ marginTop: '3%' }}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity>
                    <Text>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}


const styles = StyleSheet.create({

});

export default Login