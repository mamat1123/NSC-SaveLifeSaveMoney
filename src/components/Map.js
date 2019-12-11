import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import MapView from 'react-native-maps';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Title, Right } from 'native-base';
const Map = () => {
    let [i, setI] = React.useState(0)
    React.useEffect(() => {

    }, [])
    return (
        <Container style={styles.container}>
            <Header>
                <Left>
                    <View style={styles.circle}>
                        <Icon name='person' style={{ textAlign: 'center', fontSize: 30, color: 'white' }} />
                    </View>
                </Left>
                <Body>
                    <Title>Map Zone</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='more' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </Content>
            <Footer>
                <FooterTab>
                    <Button block light>
                        <Icon name="home" />
                        <Text>HOME</Text>
                    </Button>
                    <Button block light>
                        <Icon name="map" />
                        <Text>Map</Text>
                    </Button>
                    <Button block light>
                        <Icon active name="navigate" />
                        <Text>Notice</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : '5%'
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#707070',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        // marginTop:'-40%'
    },
    map: {
        width: '100%',
        
    },
});

export default Map