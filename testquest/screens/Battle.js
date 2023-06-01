import { SafeAreaView, StatusBar, Text } from 'react-native';
import { GradientBackground } from '../components/index';

const Battle = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        flex: 1,
        paddingTop: StatusBar.currentHeight || 40,
      }}
      showsVerticalScrollIndicator={false}>
      <GradientBackground />
      <Text style={{zIndex:1}}>Battle</Text>
    </SafeAreaView>
  );
};

export default Battle;
