import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {
    Icon,
    Layout,
    BottomNavigation,
    BottomNavigationTab,
} from 'react-native-ui-kitten';
import moment from "moment";
// import {CircularProgressbar} from 'react-circular-progressbar'
import AnimateNumber from 'react-native-animate-number'
const DashboardIcon = (style) => (
    <Icon {...style} name='layout' />
);

const SettingsIcon = (style) => (
    <Icon {...style} name='settings' />
);
const percentage = 60
class FeedScreen extends React.Component {
    state = {
        selectedIndex: 0,
        name: 'kimmix',
        time: new Date().getDate()
    };
    onTabSelect = (selectedIndex) => {
        this.setState({ selectedIndex });
    };
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.textTitle}>Hello, {this.state.name}</Text>
                <Text style={styles.textTime}>{moment().format('MMMM Do YYYY')}</Text>
                <View style={styles.cardActionSteps}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <AnimateNumber style={styles.textMain} value={2253}
                            countBy={10}
                            timing={(interval, progress) => {
                                // slow start, slow end
                                return interval * (1 - Math.sin(Math.PI * progress)) * 5
                            }} />
                        <Text style={styles.textMain} > Steps</Text>
                        {/* <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} /> */}
                    </View>
                    <Text style={styles.textSubMain} > goal 1000 steps</Text>
                </View>

                <View style={styles.cardActionPoint}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <AnimateNumber style={styles.textMain} value={1000}
                            countBy={10}
                            timing={(interval, progress) => {
                                // slow start, slow end
                                return interval * (1 - Math.sin(Math.PI * progress)) * 5
                            }} />
                        <Text style={styles.textMain} > Point</Text>
                        {/* <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} /> */}
                    </View>
                    <Text style={styles.textSubMain} > exchange now</Text>
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
        paddingTop: '5%',
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
        marginLeft: '3%',
        textAlign: 'center'
    },
    textTitle: {
        color: '#000000',
        fontSize: 35,
        fontWeight: '400',
        marginLeft: '3%',
        marginBottom:'2%'
    },
    textTime: {
        color: '#727272',
        fontSize: 17,
        fontWeight: '200',
        marginLeft: '3%',
        marginBottom:'2%'
    },
    cardActionSteps: {
        backgroundColor: '#F64D4D',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginLeft: '5%',
        marginBottom:'5%',
        borderTopLeftRadius: 19,
        borderBottomLeftRadius: 19
    },
    cardActionPoint: {
        backgroundColor: '#FFEA63',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginBottom:'5%',
        marginRight: '5%',
        borderTopRightRadius: 19,
        borderBottomRightRadius: 19
    }
});


export default FeedScreen