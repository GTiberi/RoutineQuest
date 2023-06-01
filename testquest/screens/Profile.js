import { SafeAreaView, StatusBar, Text } from 'react-native';
import { GradientBackground } from '../components/index';
import ProfileCard from '../components/ProfileCard/ProfileCard'

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'blue',
        flex: 1,
        paddingTop: StatusBar.currentHeight || 40,
      }}
      showsVerticalScrollIndicator={false}>
      <GradientBackground />
      <ProfileCard/>
    </SafeAreaView>
  );
};

export default Profile;
