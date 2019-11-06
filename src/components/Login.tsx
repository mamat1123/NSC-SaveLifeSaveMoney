import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Input, Button } from 'react-native-ui-kitten';
class LoginScreen extends React.Component {
    state = {
        user: '',
        password: ''
    };

    onUserChangeText = (user) => {
        this.setState({ user });
    };

    onPasswordChangeText = (password) => {
        this.setState({ password });
    };

    render() {
        return (
            <Layout style={styles.container}>
                <Input
                    // style={styles.input}
                    value={this.state.user}
                    onChangeText={this.onUserChangeText}
                    placeholder='Username'
                />
                <Input
                    // style={styles.input}
                    secureTextEntry={true}
                    onChangeText={this.onPasswordChangeText}
                    value={this.state.password}
                    placeholder='Password'
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Feed')}
                    appearance='outline' status='primary'>LOGIN</Button>
            </Layout>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: '30%'
    },
    input: {
        flex: 1,
        marginHorizontal: 4,
    },
});


export default LoginScreen