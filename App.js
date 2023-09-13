import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisibilty, setModalVisibilty] = useState(false);

  function startAddTaskHandler() {
    setModalVisibilty(true);
  }

  function endAddTaskHandler() {
    setModalVisibilty(false);
  }
  function addTaskHandler(enteredTaskText) {
    setTasks((currentTask) => [
      ...currentTask,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  }
  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#854EFE"
        onPress={startAddTaskHandler}
      />
      <TaskInput
        visible={modalVisibilty}
        onAddTask={addTaskHandler}
        onCancel={endAddTaskHandler}
      />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <TaskItem
                id={itemData.item.id}
                onDeleteTask={deleteTaskHandler}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor : "#1e085a",
  },
  tasksContainer: {
    flex: 9,
  },
});
