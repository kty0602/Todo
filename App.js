import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [todo, setTodo] = useState(['할 일을 입력하세요.'])   
  const [myTextInput, setMyTextInput] = useState("");

  //TextInput에서 입력한 값을 setMyTextInput을 통해 state값으로 변화
  const onChangeInput = (event) => {
    setMyTextInput(event)
  }

  //배열에 myTextInput 값을 저장
  const onAddTodo = () => {
    setTodo([...todo, myTextInput])
  }

  //누른 값의 위치를 가져와 삭제하고 다시 재배열
  const Delete = (position) => {
    const newArray = todo.filter((num,index)=>{
      return position != index;
    })
    setTodo(newArray)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.title}>Todo-List</Text>
      </View>
      <View>
        <TextInput style = {styles.write} 
        placeholder ="Add a task"
        value = {myTextInput}
        onChangeText = {onChangeInput}
        ></TextInput>
      </View>
      <View style = {styles.mid}>
        <Button style = {styles.button}
         title = "추가"
         onPress={onAddTodo}
        />
      </View>
      <ScrollView style = {{width:'100%'}}>
      {todo.map((item, idx) => (
      <TouchableOpacity
      key = {idx}
      onPress = {()=>Delete(idx)}
      >
        <Text
        style = {styles.mainText}   
        >{item}</Text>
      </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'skyblue'
  },
  title: {
    marginLeft: 30,
    fontSize: 40,
    Color: 'black',
    margin: 30,
  },
  write: {
    backgroundColor: 'white',
    width:400,
    height: 40,
    fontSize: 20,
},
mid: {
  alignItems: 'center',
  justifyContent: 'center',
  margin: 10,
},
button: {
  backgroundColor: 'steelblue',
  paddingLeft: 20,
  fontSize: 30,
  width: 100,
  height: 40,
  color: 'white',
},
mainText: {
  fontSize:20,
  backgroundColor: 'steelblue',
  color: 'white',
  padding:20,
  margin:20,
 },
});
