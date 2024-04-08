import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



export default function App() {
  const [fator , setfator]=useState('0');
  const [soda1 , setsoda1]=useState('0');
  const [soda2 , setsoda2]=useState('0');
  const [carbo1 , setcarbo1]=useState('0');
  const [carbo2 , setcarbo2]=useState('0');
  const [ac , setac]=useState('0');
  const [ox , setox]=useState('0');

  const [resultsoda1 , setresultsoda1]=useState('0');
  const [resultsoda2 , setresultsoda2]=useState('0');
  const [resultcarbo1 , setresultcarbo1]=useState('0');
  const [resultcarbo2 , setresultcarbo2]=useState('0');
  const [resultac , setresultac]=useState('0');
  const [resultox , setresultox]=useState('0');


  const result= () => {
    setresultsoda1((parseFloat(fator) * 0.1586 * parseFloat(soda1)).toFixed(2))
    setresultsoda2((parseFloat(fator) * 0.1586 * parseFloat(soda2)).toFixed(2))
    setresultcarbo1((parseFloat(fator) * 0.2102 * parseFloat(carbo1)).toFixed(2))
    setresultcarbo2((parseFloat(fator) * 0.2102 * parseFloat(carbo2)).toFixed(2))
    setresultac((parseInt(ac) * 0.1175).toFixed(2))
    setresultox((parseInt(ox) * 0.0227).toFixed(2))

  }


  return (

      <View style={styles.container}>
                  <ScrollView contentContainerStyle={{     
                              flexGrow: 1,
                              justifyContent: 'center',
                             }}
                  >
                  
                  <Text style={styles.h2}> Concentração de Quimicos</Text>
                <View style={styles.iview}>
                    <Text style={styles.title}>Fator do HCL :</Text>

                    <TextInput style={styles.textInput} 
                      value={fator} 
                      onChangeText={ value => { 
                        setfator(value);
                        value = value.replace(',', '.');
                        setfator(String(value));
                        }}
                    />
                </View>

                <View style={styles.iview}>
                  <Text style={styles.title}> HCL Soda 1 :</Text>

                  <TextInput style={styles.textInput} 
                    value={soda1} 
                    onChangeText={ value => { 
                      setsoda1(value);
                      value = value.replace(',', '.');
                      setsoda1(String(value));
                      }}
                  />
                </View>

                <View style={styles.iview}>
                  <Text style={styles.title}> HCL Soda 2 :</Text>

                  <TextInput style={styles.textInput} 
                    value={soda2} 
                    onChangeText={ value => { 
                      setsoda2(value);
                      value = value.replace(',', '.');
                      setsoda2(String(value));
                      }}
                  />
                </View>

                <View style={styles.iview}>
                  <Text style={styles.title}>HCL Carbo 1 :</Text>

                  <TextInput style={styles.textInput} 
                    value={carbo1} 
                    onChangeText={ value => { 
                      setcarbo1(value);
                      value = value.replace(',', '.');
                      setcarbo1(String(value));
                      }} 
                    />
                </View>

                <View style={styles.iview}>
                  <Text style={styles.title}>HCL Carbo 2 :</Text>

                  <TextInput style={styles.textInput} 
                    value={carbo2} 
                    onChangeText={ value => { 
                      setcarbo2(value);
                      value = value.replace(',', '.');
                      setcarbo2(String(value));
                      }} 
                    />
                </View>

                <View style={styles.iview}>
                  <Text style={styles.title}>Gotas Ac-55 :</Text>

                  <TextInput  style={styles.textInput} 
                    value={ac} 
                    onChangeText={(texto)=>{setac(texto)}}
                    />
                </View>
                
                <View style={styles.iview}>
                  <Text style={styles.title}>Gotas Oxônia : </Text>

                  <TextInput style={styles.textInput} 
                    value={ox} 
                    onChangeText={(texto)=>{setox(texto)}}
                    />
                </View>
                <View>
                  <TouchableOpacity onPress={()=>(result())} style={styles.botao}>
                      <Text style={styles.textoBotao}>Calcular</Text>
                  </TouchableOpacity>
                </View>

                    <View style={styles.containerresult}>
                      <View style={styles.iview}>
                        <Text style={styles.h1}> 
                        Soda1:  {resultsoda1}%
                        </Text>

                        <Text style={styles.h1}> 
                        Soda2:  {resultsoda2}%
                        </Text>
                        
                      </View>

                      <Text style={styles.h1}> 
                          Ac-55:  {resultac}% 
                        </Text>

                      <View style={styles.iview}>

                        <Text style={styles.h1}> 
                          Carb Soda1: {resultcarbo1}%
                        </Text>
                        <Text style={styles.h1}> 
                            Oxônia: {resultox}% 
                        </Text>

                      </View>


                        <Text style={styles.h1}> 
                          Carb Soda2: {resultcarbo2}%
                      </Text>

                    </View>
                    <Text style={styles.Rodape}> 
                    </Text>
              </ScrollView>
          </View>
      );
}

    const styles = StyleSheet.create({

      container: {
        backgroundColor: "#34495e",
        flex: 1,
        justifyContent: "center",
        padding: 30,
      },

      iview:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
      },  

      textInput:{
        width:"30%",
        backgroundColor:'white',
        borderRadius: 10,
        marginBottom:10,
        textAlign:'center',
        fontSize:15,
      },

      botao:{
        backgroundColor: '#3498db', 
        padding: 10,
        borderRadius: 10,
      },

      textoBotao: {
        color: 'white',
        textAlign: 'center',
      },

      title: {
        color:"white",
        marginRight: "auto",
        marginVertical: 8,
        fontSize:15,
        fontFamily: '',
      },

      h1:{
        color:'white',
        textAlign: 'center',
        marginVertical: 8,
        marginTop: 10,
        fontSize: 20,
      },

      h2:{
        color:'white',
        textAlign: 'center',
        marginVertical: 8,
        marginTop: 10,
        fontSize: 20,
        padding:20,
      },

      Rodape: {
        color:'white',
        textAlign: 'right',
        marginLeft: 20,
        padding:0,
        opacity: 0.3,
        color: '#eba92a',
      },

      containerresult:{
        marginTop: 30,
      },
   
  });

