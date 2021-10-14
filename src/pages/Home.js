import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills(olsState => [...olsState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    //+3 horas -> fuso horario
    if (currentHour<15) {
      setGretting('Good moorning');
    } else if(currentHour>=15 && currentHour<21) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Manoel
      </Text>

      <Text style={styles.greetings}>
        { gretting }
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item}/>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fff'
  }
});