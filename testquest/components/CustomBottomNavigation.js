import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import  GradientBackground  from './GradientBackground';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { COLORS, SIZES, FONTS } from '../constants';

const CustomBottomNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <GradientBackground hasBorder={true} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}>
            <Text style={styles.tabButtonText}>
              {isFocused && (
                <Icon name="hand-point-right" style={styles.icon} />
              )}
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#003296',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  icon: {
    fontSize: SIZES.large,
    marginRight: 5,
  },
});

export default CustomBottomNavigation;
