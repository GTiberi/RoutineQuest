import { View, StyleSheet, Text } from 'react-native';
import QuestDescription from './QuestDescription';
import Button from '../Button';
import Reward from './Reward';
import TaskList from './TaskList';
import GradientBackground from '../GradientBackground';
import Timer from './Timer';
import { COLORS, SIZES, FONTS } from '../../constants';

const Quest = ({ quest }) => {
  return (
    <View style={styles.container}>
      <GradientBackground hasBorder={true} />
      <View>
        <Text style={styles.title}>{quest.name}</Text>
      </View>
      <QuestDescription description={quest.description} />
      <TaskList tasks={quest.tasks} />
      <Reward reward={quest.reward} />
      <Timer style={styles.timer} dateString={quest.expiration} />

      <View style={styles.buttonContainer}>
        <Button buttonName="Compléter" width={100}/>
        <Button buttonName="Abandonner" width={100}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.large,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  container: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 6,
    height: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto', // Pushes the buttons to the bottom
  },
  timer: {
    zIndex: 1,
    color: COLORS.white,
  },
});

export default Quest;
