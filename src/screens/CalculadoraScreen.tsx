import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

enum Operadores {
    sumar , restar ,multiplicar, dividir
}

export const CalculadoraScreen = () => {

   const {numberPrevious,number,btnDelete,btnDividir,btnMultiplicar,btnRestar,btnSumar,buildNumber,clean,calculator,positiveNegative} = useCalculator();
  return (
    
    <View style={styles.calculadoraContainer}>
        { (numberPrevious !== '0') &&(
            <Text style={styles.resultSmall}>{numberPrevious}</Text>
        )}
        <Text 
            style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit
        >{number}</Text>

        {/* Fila de botones */}
        <View style={styles.file}>
            <BotonCalc text='C' color="#9B9B9B" action={clean}/>
            <BotonCalc text='+/-' color="#9B9B9B" action={positiveNegative}/>
            <BotonCalc text='del' color="#9B9B9B" action={btnDelete}/>
            <BotonCalc text='/' color="#FF9427" action={btnDividir}/>
        </View>
        
        {/* Fila de botones */}
        <View style={styles.file}>
            <BotonCalc text='7' action={buildNumber} />
            <BotonCalc text='8' action={buildNumber}/>
            <BotonCalc text='9' action={buildNumber}/>
            <BotonCalc text='X' color="#FF9427" action={btnMultiplicar}/>
        </View>

        {/* Fila de botones */}
        <View style={styles.file}>
            <BotonCalc text='4' action={buildNumber}/>
            <BotonCalc text='5' action={buildNumber}/>
            <BotonCalc text='6' action={buildNumber}/>
            <BotonCalc text='-' color="#FF9427" action={btnRestar}/>
        </View>

        {/* Fila de botones */}
        <View style={styles.file}>
            <BotonCalc text='1' action={buildNumber}/>
            <BotonCalc text='2' action={buildNumber}/>
            <BotonCalc text='3' action={buildNumber}/>
            <BotonCalc text='+' color="#FF9427" action={btnSumar}/>
        </View>

        {/* Fila de botones */}
        <View style={styles.file}>
            <BotonCalc text='0' width  action={buildNumber}/>
            <BotonCalc text='.' action={buildNumber}/>
            <BotonCalc text='=' color="#FF9427" action={calculator}/>
        </View>


    </View>
  )
}
