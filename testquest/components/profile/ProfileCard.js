import { View, StyleSheet, Text, Image } from 'react-native';
import Button from '../Button';
import GradientBackground from '../GradientBackground';
import { COLORS, SIZES, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileCard = ({ user }) => {
  return (
    <View style={styles.container}>
      <GradientBackground hasBorder={true} />
      <View style={styles.profileInfo}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/class1.png')}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.profileInfoText}>Nathan</Text>
              <Text style={styles.profileInfoText}>Level: 99</Text>
            </View>
            <Text style={styles.profileInfoText}>Warrior</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.column}>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>HP:</Text>
              <Text style={styles.resourceValue}>690/700</Text>
            </View>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>MP:</Text>
              <Text style={styles.resourceValue}>34/110</Text>
            </View>
            <Text style={styles.description}>
              A legendary warrior on a quest to save the world from evil forces.
            </Text>
          </View>
          <View style={[{ alignItems: 'flex-end' }, styles.column]}>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>STR:</Text>
              <Text style={styles.statValue}>60</Text>
            </View>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>AGL:</Text>
              <Text style={styles.statValue}>15</Text>
            </View>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>INT:</Text>
              <Text style={styles.statValue}>100</Text>
            </View>
            <View style={styles.statGroup}>
              <Text style={styles.stat}>LCK:</Text>
              <Text style={styles.statValue}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.column}>
            <Text style={styles.xpInfo}>Current EXP</Text>
            <Text style={styles.xpValue}>10890</Text>
            <Text style={styles.xpInfo}>Next Level</Text>
            <Text style={styles.xpValue}>190</Text>
          </View>
          <View style={styles.column}></View>
        </View>
        <View style={styles.inventoryContainer}>
          <View style={styles.column}>
            <Text style={styles.inventoryName}>Inventory</Text>
            <View style={styles.tableRow}>
              <Icon name="gift" style={styles.icon} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>Parchemin de Dodo</Text>
                <Text style={styles.itemQuantity}>x 3</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <Icon name="gift" style={styles.icon} />
              <View style={styles.itemInfo}>
                <View>
                  <Text style={styles.itemName}>Billet de sortie spécial</Text>
                </View>
                <View>
                  <Text style={styles.itemQuantity}>x 2</Text>
                </View>
              </View>
            </View>
            {/* Add more table rows for each item */}
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 'auto',
          marginBottom: 30,
          flexDirection: 'row',
          width: '100%',
        }}>
        <View style={styles.column}>
          <Text style={styles.inventoryName}>300 pts</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    marginBottom: 6,
    height: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  profileInfo: {
    alignItems: 'flex-start',
  },
  profileInfoText: {
    fontSize: SIZES.large,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
  statsContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    width: '100%',
  },
  inventoryContainer: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 6,
    paddingRight:6,
  },
  column: {
    flex: 1,
  },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stat: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'left',
    paddingHorizontal: 6,
    paddingVertical: 3,
    width: 45,
  },
  statValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    paddingVertical: 3,
    marginLeft: 6,
    width: 45,
  },
  resourceValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    paddingVertical: 3,
    marginLeft: 6,
  },
  xpValue: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    alignSelf: 'flex-end',
  },
  xpInfo: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    marginLeft: 6,
  },
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    textAlign: 'left',
    marginLeft: 6,
  },
  inventoryName: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.light,
    color: COLORS.white,
    textAlign: 'center',
  },
  icon: {
    fontSize: SIZES.medium,
    marginRight: 5,
    color: COLORS.white,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemName: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginLeft: 10,
  },
  itemQuantity: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.white,
  },
});

export default ProfileCard;
