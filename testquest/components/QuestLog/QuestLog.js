import { FlatList } from 'react-native';
import useExpandedQuests from '../../hooks/useExpandedQuests';
import QuestLogItem from './QuestLogItem';

const QuestLog = ({ quests }) => {
  const { expandedQuests, toggleQuestExpansion } = useExpandedQuests();

  const renderQuest = ({ item, index }) => {
    const isExpanded = expandedQuests.includes(index);
    return (
      <QuestLogItem
        item={item}
        index={index}
        isExpanded={isExpanded}
        toggleExpansion={toggleQuestExpansion}
      />
    );
  };

  return (
    <FlatList
      data={quests}
      renderItem={renderQuest}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default QuestLog;
