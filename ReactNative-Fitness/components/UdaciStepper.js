import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, purple, gray } from '../utils/colors'

export default function UdaciStepper({ max, unit, step, value, onIncrement, onDecrement }) {
    return (
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.iosBtn, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]} onPress={onDecrement}>
                    <FontAwesome name='minus' color={purple} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iosBtn, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]} onPress={onIncrement}>
                    <FontAwesome name='plus' color={purple} size={30} />
                </TouchableOpacity>
            </View>

            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25
    },
    metricCounter:{
        width:85,
        justifyContent:'center',
        alignItems:'center'
    }
})