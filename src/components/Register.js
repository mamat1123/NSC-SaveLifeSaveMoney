import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Text } from 'native-base'
const Register = () => {
    let [i, setI] = React.useState(0)
    React.useEffect(() => {

    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            Register 
            </Text>

        </View>
    )
}
const styles = StyleSheet.create({

});

export default Register