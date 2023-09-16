import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Tasks"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} color="#ffbc74" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#FF4848" />
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
    padding: 16,
    backgroundColor: "#D9E1FF",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    color: "black",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
