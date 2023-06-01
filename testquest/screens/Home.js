import { SafeAreaView, StatusBar } from 'react-native';
import QuestLog from '../components/QuestLog/QuestLog';
import { GradientBackground } from '../components';
import { questsData } from '../assets/QuestsData';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        flex: 1,
        paddingTop: StatusBar.currentHeight+ 10 || 40,
      }}
      showsVerticalScrollIndicator={false}>
      <GradientBackground />
      <QuestLog quests={questsData} />
    </SafeAreaView>
  );
};

export default Home;
