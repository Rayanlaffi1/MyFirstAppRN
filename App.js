import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,SectionList,Pressable,Modal,RefreshControl ,Item,FlatList,SafeAreaView, Text,Button,TextInput, View, LogBox } from 'react-native';
import {useState} from "react"
import React, {Component} from 'react';
import FlatListGoal from "./composants/FlatListGoal.js";
import ModalAjouter from "./composants/ModalAjouter.js";

export default function App() {
  const [count, setCount] = useState( Math.max.apply(Math, goals.map(function(o) { return o.id; })) );
  const [TextInputValeur, onChangeTextInputValeur] = useState("Saisir goal");
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => { setRefreshing(false); }, 2);
  };

  const addItem = () => {
    setCount(count + 1)
    let leCount = count + 1
    goals.push({texte:TextInputValeur,id: leCount})
  };
  return (
  <>
    {/* aurelien.chiren@gmail.com */}
    <ImageBackground source={{ uri: "https://browsecat.net/sites/default/files/orange-background-hd-126457-578018-8630439.png" }} style={{ flex: 1}} resizeMode="cover">
    <View style={{ width:'100%', height:'100%'  , paddingTop:50, padding:10}}>
      

      <ModalAjouter styles={styles} onRefresh={onRefresh} addItem={addItem} TextInputValeur={TextInputValeur} onChangeTextInputValeur={onChangeTextInputValeur} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <FlatListGoal goals={goals} onRefresh={onRefresh} refreshing={refreshing} />
      <TextInput
        style={styles.input}
        placeholder="champ input"
        keyboardType="default"
        value={TextInputValeur}
        onChangeText={onChangeTextInputValeur}
      />
      <Button
          onPress={() => {
            addItem();
            onRefresh();
          }}
          title="Add"
          color="#841584"
      />
      <StatusBar style="auto" />
      
      
    </View>
    </ImageBackground>
    {/* <View style={styles.container}>
    
      
    </View> */}
    
    {/* <View style={styles.container}> */}
      {/* <Text style={{color: 'red', fontSize: 20}} >Open up <Text style={{ fontWeight:'bold' }} >App.js</Text> to start working on your app! </Text> */}
      
      

      {/* <StatusBar style="auto" /> */}
    {/* </View> */}
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

var sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

const goals = [
  {
    texte: "Faire les courses",
    id: 1,
  },
  {
    texte: "Aller à la salle de sport 3 fois par semaine",
    id: 2,
  },
  {
    texte: "Monter à plus de 5000m d altitude",
    id: 3,
  },
  
];