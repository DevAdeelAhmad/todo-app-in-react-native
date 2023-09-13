import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";


function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/logo.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Tasks"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} color='#5e0acc'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding:16,
      backgroundColor:"#54FFF1"
    },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    color:'#120438',
    backgroundColor:"#e4d0ff",
    padding: 8,
    borderRadius : 6,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width: 100,
    marginHorizontal : 8,
  },
  image:{
    width: 100,
    height: 100,
    margin:20
  }
});
