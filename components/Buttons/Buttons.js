import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../styles';

export function Buttons(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#ec407a'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}