import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GradientBackground from '../GradientBackground';
import { COLORS, SIZES, FONTS } from '../../constants';
import CharacterResources from './CharacterResources';
import CharacterStats from './CharacterStats';
import BaseInfo from './BaseInfo';
import ProfileContainer from './ProfileContainer';
import Description from './Description';
import XPInfo from './XPInfo';
import Inventory from './Inventory';
import Currency from './Currency';
import { inventoryData } from '../../assets/InventoryData';
import {characters} from '../../assets/CharacterData'

const ProfileCard = ({ user }) => {
  const character = characters[1];
  return (
    <View style={styles.container}>
      <GradientBackground hasBorder={true} />
      <View style={styles.profileInfo}>
        <BaseInfo name={character.name} level={character.level} classRole={character.classRole} id={character.id}/>
        <ProfileContainer>
          <View style={styles.column}>
            <CharacterResources resources={character.resources}/>
            <Description text={character.description} />
          </View>
          <CharacterStats stats={character.stats}/>
        </ProfileContainer>

        <ProfileContainer>
          <XPInfo currentExp={character.experience.current} nextLevelExp={character.experience.nextLevel} />
          <View style={styles.column}></View>
        </ProfileContainer>

        <Inventory inventory={character.inventory}/>
      </View>

      <Currency amount={character.goldAmount} />
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
  profileInfo: {
    alignItems: 'flex-start',
  },
  column: {
    flex: 1,
  },
});

export default ProfileCard;
