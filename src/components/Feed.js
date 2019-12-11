import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Container, Text, Footer, FooterTab, Button } from 'native-base';

const FeedScreen = () => {
    var payments = [];
    for (let i = 1; i <= 20; i++) {
        payments.push(
            <TouchableOpacity >
                <View style={styles.cardPromotion}>
                    <View style={styles.cardPromotionPic}></View>
                    <Text style={{ fontSize: 15 }}>Nike Air Max</Text>
                    <Text style={{ fontSize: 10 }}>20 Point exchange coupon 10% nike air max</Text>
                </View>
            </TouchableOpacity>

        )
    }
    let [i, setI] = React.useState(0)
    React.useEffect(() => {

    }, [])
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.oval}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ marginTop: '-20%' }}>
                            <Text style={{ textAlign: 'center', color: '#F8F0F0', fontSize: 24, marginBottom: '1%' }}>
                                Profile
                            </Text>
                            <View style={styles.circle}>
                                <Icon name='person' style={{ textAlign: 'center', fontSize: 60, color: 'white' }} />
                            </View>
                        </View>
                        <View style={styles.circleOutline}>
                            <Icon type="FontAwesome" name="map-marker" style={{ fontSize: 40 }} />
                            <Text style={{ fontSize: 20 }}>Danger</Text>
                            <Text style={{ fontSize: 10 }}>Beware accident</Text>
                        </View>
                        <View style={styles.setRow}>
                            <View style={styles.cardOutline}>
                                <View style={styles.setRow}>
                                    <Icon type="FontAwesome" name="money-check" style={{ fontSize: 40, marginHorizontal: '3%' }} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>200 POINTS</Text>
                                        <Text style={{ fontSize: 11 }}>2 days 25 points {"\n"} is expire</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardOutline}>
                                <View style={styles.setRow}>
                                    <Icon type="FontAwesome" name="map-marker" style={{ fontSize: 40, marginHorizontal: '3%' }} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>4,673 STEPS </Text>
                                        <Text style={{ fontSize: 11 }}>112K steps in monthe</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.setRow}>
                            <View style={styles.cardOutline}>
                                <View style={styles.setRow}>
                                    <Icon type="FontAwesome" name="map-marker" style={{ fontSize: 40, marginHorizontal: '3%' }} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>70 beats/min</Text>
                                        <Text style={{ fontSize: 11 }}>Average </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardOutline}>
                                <View style={styles.setRow}>
                                    <Icon type="FontAwesome" name="map-marker" style={{ fontSize: 40, marginHorizontal: '3%' }} />
                                    <View>
                                        <Text style={{ fontSize: 16 }}>23 Minutes</Text>
                                        <Text style={{ fontSize: 11 }}>Beware accident</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={{ marginRight: 'auto', marginLeft: '5%' }}>Promotions</Text>
                        <View style={styles.setRow}>
                            <ScrollView
                                horizontal={true} style={{ marginLeft: '5%' }}>
                                {payments}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
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
            </View>
        </View>
    );
}
// class FeedScreen extends React.Component {
//     render () {
//         return (
//             <View style={{padding:30,justifyContent: "center", alignItems: "center" }}>
//                 <View style={{backgroundColor:'#8B8787',height:189,width:466}}>
//                     <Text style={{textAlign:'center'}}>Profile</Text>
//                 </View>

//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    oval: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 150,
        borderRadius: 100,
        backgroundColor: 'rgba(139,135,135,0.37)',
        // position: 'absolute',
        marginTop: '-5%',
        transform: [
            { scaleX: 5 },
        ]
    },
    container: {
        paddingTop: '5%',
        alignItems: 'center',

    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#707070',
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        // marginTop:'-40%'
    },
    circleOutline: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#707070',
        borderWidth: 1,
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        marginTop: '2%'

    },
    cardOutline: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#707070',
        borderWidth: 1,
        width: 150,
        height: 76,
        borderRadius: 15,
        marginTop: '3%',
        marginHorizontal: '3%'
    },
    setRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardPromotion: {
        borderColor: '#707070',
        borderWidth: 1,
        height: 155,
        width: 124,
        borderRadius: 12,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardPromotionPic: {
        backgroundColor: '#5C5A5A',
        height: 93,
        width: 109,
        padding: '5%'
    }
});

export default FeedScreen