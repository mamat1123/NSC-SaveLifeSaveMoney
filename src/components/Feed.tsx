import React from 'react';
import { StyleSheet,Text } from 'react-native';
import {
    Icon,
    Layout,
    OverflowMenu,
    TopNavigation,
    TopNavigationAction,
    BottomNavigation,
    BottomNavigationTab,
} from 'react-native-ui-kitten';
import AnimateNumber from 'react-native-animate-number'
const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
);

const MenuIcon = (style) => (
    <Icon {...style} name='more-vertical' />
);

const InfoIcon = (style) => (
    <Icon {...style} name='info' />
);

const LogoutIcon = (style) => (
    <Icon {...style} name='log-out' />
);

const DashboardIcon = (style) => (
    <Icon {...style} name='layout' />
);

const SettingsIcon = (style) => (
    <Icon {...style} name='settings' />
);
class FeedScreen extends React.Component {
    state = {
        menuVisible: false,
        selectedIndex: 0,
    };

    menuData = [
        { title: 'About', icon: InfoIcon },
        { title: 'Logout', icon: LogoutIcon },
    ];

    onMenuActionPress = () => {
        const menuVisible = !this.state.menuVisible;
        this.setState({ menuVisible });
    };
    onTabSelect = (selectedIndex) => {
        this.setState({ selectedIndex });
    };
    onMenuItemSelect = (index) => {
        // Handle Item Select

        this.setState({ menuVisible: false });
    };

    renderMenuAction = () => (
        <OverflowMenu
            visible={this.state.menuVisible}
            data={this.menuData}
            placement='bottom end'
            onSelect={this.onMenuItemSelect}
            onBackdropPress={this.onMenuActionPress}>
            <TopNavigationAction
                icon={MenuIcon}
                onPress={this.onMenuActionPress}
            />
        </OverflowMenu>
    );

    renderBackAction = () => (
        <TopNavigationAction  onPress={() => this.props.navigation.navigate('Login')} icon={BackIcon} />
    );
    render() {
        return (
            <Layout style={styles.container}>
                <TopNavigation
                    title='Application Title'
                    leftControl={this.renderBackAction()}
                    rightControls={this.renderMenuAction()}
                />
                <AnimateNumber  style={styles.textMain} value={2253}
                    countBy={10}
                    timing={(interval, progress) => {
                        // slow start, slow end
                        return interval * (1 - Math.sin(Math.PI * progress)) * 5
                    }} />
                    <Text style={styles.textMain} >ก้าว</Text>
                    <Text style={styles.textMain} >ก้าว</Text>
                    <Text style={styles.textMain} >ก้าว</Text>
                    <Text style={styles.textMain} >ก้าว</Text>
                <BottomNavigation
                    style={{marginTop:'auto'}}
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
        width:'100%',
        marginTop:'5%'
    },
    textMain:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center'
    }
});


export default FeedScreen