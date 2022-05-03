import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SectionList,RefreshControl ,Item,FlatList,SafeAreaView, Text,Button,TextInput, View, LogBox } from 'react-native';
import {useState} from "react"
import React, {Component} from 'react';

export default function App() {
  const [count, setCount] = useState( Math.max.apply(Math, goals.map(function(o) { return o.id; })) );
  const [TextInputValeur, onChangeTextInputValeur] = useState("Saisir goal");
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => { setRefreshing(false); }, 2);
    
  };
  const addItem = () => {
    setCount(count + 1)
    goals.push({texte:TextInputValeur,id: count})
    console.log(goals)
  };
  function deleteItem(idParam) {
    const resultIndex = goals.filter(item => item.id == idParam)
    goals.splice(resultIndex, 1);
    
  }
  
  return (
  <>
    {/* aurelien.chiren@gmail.com */}
    <View style={styles.container}>
        <FlatList
          data={goals}
          renderItem={({item}) => {
            return <Text>- {item.texte}
            <Button
              onPress={() => {
                deleteItem(item.id);
                onRefresh();
              }}
              title="Remove"
              color="#841584"
            />
          </Text>
          }}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
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
    </View>
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 20}} >Open up <Text style={{ fontWeight:'bold' }} >App.js</Text> to start working on your app! </Text>
      {/* { sampleGoals.map((goal) => <Text style={{color: 'black', fontSize: 20}} >{goal}</Text> ) } */}
      
      
      <StatusBar style="auto" />
    </View>
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