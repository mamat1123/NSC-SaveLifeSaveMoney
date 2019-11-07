import React from 'react';
import { View, Text } from 'react-native';
class ConnectBluetooth extends React.Component {
    componentWillMount() {
        Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
            values => {
                const [isEnabled, devices] = values;
                this.setState({ isEnabled, devices, devicesFormatted });
            }
        );

        BluetoothSerial.on("bluetoothEnabled", () =>
            console.log("Bluetooth enabled")
        );

        BluetoothSerial.on("bluetoothDisabled", () =>
            console.log("Bluetooth disabled")
        );

        BluetoothSerial.on("error", err => {
            console.log("error", err);
        });

        BluetoothSerial.on("connectionLost", () => {
            if (this.state.device) {
                this.connect(this.state.device)
                    .then(res => { })
                    .catch(err => {
                        console.log("error", err);
                    });
            }
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 56 }}>
                    Register page
                </Text>
            </View>
        );
    }
}



export default ConnectBluetooth