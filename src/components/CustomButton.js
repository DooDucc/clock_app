import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ title, icon, backgroundColor, shape = 'normal', onPress }) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    borderRadius: 50,
                    width: 100,
                    height: 40,
                    backgroundColor: backgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 50,
                    // shadowOffset: { width: 10, height: 10 },
                    // shadowColor: '#000',
                    // shadowOpacity: 0.65,
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;
