import * as React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {
    Icon,
    Layout,
    BottomNavigation,
    BottomNavigationTab,
} from 'react-native-ui-kitten';
import moment from "moment";
import * as Progress from 'react-native-progress';
import AnimateNumber from 'react-native-animate-number'
const DashboardIcon = (style) => (
    <Icon {...style} name='layout' />
);

const SettingsIcon = (style) => (
    <Icon {...style} name='settings' />
);

class FeedScreen extends React.Component {
    state = {
        selectedIndex: 0,
        name: 'kimmix',
        time: new Date().getDate(),
        isVisible: false
    };
    onTabSelect = (selectedIndex) => {
        this.setState({ selectedIndex });
    };
    componentDidMount() {
        requestAnimationFrame(() => {
            this.setState({
                isVisible: true,
            });
        });
        this.animate();
    }
    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 0.7) {
                    progress = 0.7;
                }
                this.setState({ progress });
            }, 500);
        }, 1500);
    }
    render() {
        if (!this.state.isVisible) {
            return null;
        }
        var payments = [];
        for (let i = 1; i <= 20; i++) {
            payments.push(
                <TouchableOpacity >
                    <View style={styles.cardPromotion}>
                        <View style={styles.cardPromotionPic}></View>
                        <Progress.Bar width={150} progress={0.8} color='#4DF15D' unfilledColor='#FFFFFF' borderWidth={0} />
                    </View>
                </TouchableOpacity>

            )

        }
        return (
            <Layout style={styles.container}>
                <Text style={styles.textTitle}>Hello, {this.state.name}</Text>
                <Text style={styles.textTime}>{moment().format('MMMM Do YYYY')}</Text>
                {/* -------------------- Card Step -------------------- */}
                <View style={styles.cardActionSteps}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <AnimateNumber style={styles.textMain} value={3500}
                                    countBy={10}
                                    timing={(interval, progress) => {
                                        // slow start, slow end
                                        return interval * (1 - Math.sin(Math.PI * progress)) * 5
                                    }} />
                                <Text style={styles.textMain} > Steps  </Text>
                            </View>
                            <Text style={styles.textSubMain} > goal 5000 steps</Text>
                        </View>
                        {/* ---------- not work in ios -------------------*/}
                        {/* <Progress.Circle
                            size={120}
                            progress={this.state.progress}
                            borderWidth={8}
                            color="#CFEF74"
                            borderColor="#fff"
                            unfilledColor="#fff"
                            showsText={true}
                            thickness={9}
                        /> */}
                        <View style={{ marginLeft: 'auto', marginRight: '5%' }}>
                            <Progress.Pie
                                size={100}
                                progress={this.state.progress}
                                // progress={0.7}
                                unfilledColor="#fff"
                                color="#CFEF74"
                                borderWidth={3}
                            />
                        </View>

                    </View>
                </View>
                {/* -------------------- Card Point -------------------- */}
                <View style={styles.cardActionPoint}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '10%' }}>
                        <AnimateNumber style={styles.textMain} value={1000}
                            countBy={10}
                            timing={(interval, progress) => {
                                // slow start, slow end
                                return interval * (1 - Math.sin(Math.PI * progress)) * 5
                            }} />
                        <Text style={styles.textMain} > Point</Text>
                    </View>
                    <Text style={styles.textSubMain} > exchange now</Text>
                </View>
                {/* -------------------- Promotion -------------------- */}
                <View>
                    <Text style={styles.textTitle}>Promotion</Text>
                    <ScrollView
                        horizontal={true} style={{ marginLeft: '5%' }}>
                        {payments}
                    </ScrollView>
                </View>

                <BottomNavigation
                    style={{ marginTop: 'auto' }}
                    selectedIndex={this.state.selectedIndex}
                    onSelect={this.onTabSelect}>
                    <BottomNavigationTab
                        title='DASHBOARD'
                        icon={DashboardIcon}
                    />
                    <BottomNavigationTab
                        title='SETTINGS'
                        icon={SettingsIcon}
                    />
                </BottomNavigation>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        // marginTop:'5%'
    },
    textMain: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: '500',
    },
    textSubMain: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '200',
        marginLeft: '10%'
        // textAlign: 'center'
    },
    textTitle: {
        color: '#000000',
        fontSize: 35,
        fontWeight: '400',
        marginLeft: '3%',
        marginBottom: '2%'
    },
    textTime: {
        color: '#727272',
        fontSize: 17,
        fontWeight: '200',
        marginLeft: '3%',
        marginBottom: '2%'
    },
    cardActionSteps: {
        backgroundColor: '#F64D4D',
        justifyContent: 'center',
        marginLeft: '5%',
        paddingTop: '5%',
        marginBottom: '5%',
        borderTopLeftRadius: 19,
        borderBottomLeftRadius: 19
    },
    cardActionPoint: {
        backgroundColor: '#FFEA63',
        marginBottom: '5%',
        marginRight: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderTopRightRadius: 19,
        borderBottomRightRadius: 19
    },
    cardPromotion: {
        backgroundColor: '#CFEF74',
        height: 119,
        width: 197,
        borderRadius: 12,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardPromotionPic: {
        backgroundColor: '#FFFFFFA3',
        height: 67,
        width: 164,
        borderRadius: 10,
        marginBottom: '5%'
    }
});
export default FeedScreen

// class FeedScreen extends React.Component {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             isVisible: false,
//         };
//     }

//     componentDidMount() {
//         requestAnimationFrame(() => {
//             this.setState({
//                 isVisible: true,
//             });
//         });
//         this.animate();
//     }
//     animate() {
//         let progress = 0;
//         this.setState({ progress });
//         setTimeout(() => {
//             this.setState({ indeterminate: false });
//             setInterval(() => {
//                 progress += Math.random() / 5;
//                 if (progress > 1) {
//                     progress = 1;
//                 }
//                 this.setState({ progress });
//             }, 500);
//         }, 1500);
//     }


//     render() {
//         if (!this.state.isVisible) {
//             return null;
//         }
//         return (
//             <View>
//                 <Progress.Circle
//                     size={120}
//                     progress={this.state.progress}
//                     borderWidth={8}
//                     color="rgba(255, 69, 89, 1)"
//                     borderColor="#fff"
//                     unfilledColor="#fff"
//                     showsText={true}
//                     thickness={9}
//                 >
//                 </Progress.Circle>
//                 <Progress.Pie
//                     size={150}
//                     progress={this.state.progress}
//                     unfilledColor="#fff"
//                     color="#ff457f"
//                     borderWidth={3}
//                 />
//             </View>
//         );
//     }
// }
// export default FeedScreen