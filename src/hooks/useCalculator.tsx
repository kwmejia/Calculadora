import { useRef, useState } from "react";

enum Operadores {
    sumar , restar ,multiplicar, dividir
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [numberPrevious, setNumberPrevious] = useState('0');

    const lastOperation = useRef<Operadores>();

    const clean = ()=> {
        setNumber('0');
        setNumberPrevious('0');
    }

    const buildNumber = (numberText: string) =>{

        //No aseptar doble punto
        if (number.includes('.') && numberText === '.') return;

        if (number.startsWith('0' || number.startsWith('-0'))) {
            //Punto decimal
            if(numberText === '.'){
                setNumber(number + numberText);
                //Evaluar si es otro cero y hay un punto
            }else if( numberText === '0' && number.includes('.') ){
                setNumber( number + numberText);

                //Evaluar si es diferente de cero y no tiene un punto
            }else if( numberText !== '0' && !number.includes('.')){
                setNumber(numberText)

                //evitar 0000.0
            }else if(numberText === '0' && !number.includes('.')){
                setNumber( number);
            }else{
                setNumber( number + numberText);
            }

        }else{
            setNumber(number + numberText)
        }
    }

    const positiveNegative = ()=>{
        if(number.includes('-')){
            setNumber(number.replace('-',''));
        }else {
            setNumber( '-' + number );

        }
    }

    const btnDelete = ()=>{
        let negative = '';
        let numberTemp = number;
        if (numberTemp.includes('-')) {
            negative='-';
            numberTemp = number.substring(1);
        }
        if ( numberTemp.length > 1) {
            setNumber(negative +number.slice(0,-1));
        }else{
            setNumber('0');
        }
    }

    const changeNumberForPrevius = ()=>{
        if (number.endsWith('.')) {
            setNumberPrevious(number.slice(0,-1))
        }else{
            setNumberPrevious( number);
        }
        setNumber('0');
    }

    const btnDividir = ()=>{
        changeNumberForPrevius();
        lastOperation.current = Operadores.dividir;
    }

    
    const btnMultiplicar = ()=>{
        changeNumberForPrevius();
        lastOperation.current = Operadores.multiplicar;
    }
    
    const btnRestar = ()=>{
        changeNumberForPrevius();
        lastOperation.current = Operadores.restar;
    }

    const btnSumar = ()=>{
        changeNumberForPrevius();
        lastOperation.current = Operadores.sumar;
    }

    const calculator = ()=>{
        const num1 = Number(number);
        const num2 = Number(numberPrevious);

        switch (lastOperation.current) {
            case Operadores.sumar:
                setNumber(`${num1+num2}`);
                break;
            case Operadores.restar:
                setNumber(`${num2-num1}`);
                break;
            case Operadores.multiplicar:
                setNumber(`${num1*num2}`);
                break;
            case Operadores.dividir:
                setNumber(`${num2/num1}`);
                break;
        }
        setNumberPrevious('0');
    }

    return {
        clean,
        buildNumber,
        positiveNegative,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calculator,
        number,
        numberPrevious

    }

}
