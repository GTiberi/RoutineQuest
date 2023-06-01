import { SafeAreaView, StatusBar, Text } from 'react-native';
import { GradientBackground } from '../components/index';

const Reward = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        flex: 1,
        paddingTop: StatusBar.currentHeight || 40,
      }}
      showsVerticalScrollIndicator={false}>
      <GradientBackground />
      <Text style={{zIndex:1}}>Reward</Text>
    </SafeAreaView>
  );
};

export default Reward;
