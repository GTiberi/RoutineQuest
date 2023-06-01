import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TaskList = ({ tasks }) => {
  return (
    <View style={styles.taskContainer}>
      {tasks.map((column, columnIndex) => (
        <View style={styles.column} key={columnIndex}>
          {column.map((task, taskIndex) => (
            <Text style={styles.task} key={taskIndex}>
              <Icon name="hand-point-right" style={styles.icon} />
              {task}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  task: {
    fontSize: SIZES.font,
    marginBottom: 4,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  icon: {
    fontSize: SIZES.font,
    marginRight: 5,
  },
});

export default TaskList;
