import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.tasks}>
      <Pressable
        android_ripple={{ color: "#A973F5" }}
        onPress={props.onDeleteTask.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}//For iOS
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  tasks: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#9EFAFF",
    color: "#949FBD",
  },
  //For iOS
  pressedItem:{
    opacity : 0.5,
  },
  taskText: {
    padding: 8,
    color: "black",
  },
});
