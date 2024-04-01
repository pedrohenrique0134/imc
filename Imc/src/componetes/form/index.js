
import React, { useState } from "react";
import Result from "./Result/"
import {View, Text, TextInput, Button}  from "react-native";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weigth, setWeight] = useState(null)
    const [massagemImc, setMessagemImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextBtton] = useState("Calcular")

    
function imcCalcular(){
	return set((weight/(height * height)).toFixed(2))
}

function validationImc(){
	if(weight != null && height != null){
	imcCalculator()
        setWeight(null)
	setHeight(null)
	setMessageImc("seu Imc é igual: ")
	setTextButton("calcular Novamente")
	return 
}
	setImc(null)
	setTextButton("Calcular")
	setMessageImc("preencha o peso altura")
	
}

    return(
       <View>
         <View>
        <Text>
        altura
        </Text>
        <TextInput placeholder="ex. 1.75 "
         keyboardType="Numeric" onChange={setHeight} 
         value="height"/>  
        <Text>
        peso
        </Text>
        <TextInput placeholder="65kg" keyboardType="Numeric" 
        onChange={setWeight} value="weight"/>
        </View>
        <Button title="Calcular Imc"
        onPress={() => validationImc() }
        />
        <ResultImc messagenResultImc={messagemImc} ResultImc={Imc}/>  
        </View>
    )
}