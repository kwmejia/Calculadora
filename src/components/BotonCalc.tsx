import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: string;
    width?: boolean;
    action: ( numberText:string) => void;
}

export const BotonCalc = ( {text, color = '#2D2D2D', width = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={()=> action(text)}>
        <View style={{
            ...styles.boton, 
            backgroundColor: color,
            width: (width) ? 180 : 80
        }}
        >
            
            <Text style={{
                ...styles.botonText,
                color: (color === '#9B9B9B') ? '#000' : '#FFF'
            }}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
  );
}
