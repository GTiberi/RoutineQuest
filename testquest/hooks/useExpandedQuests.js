import { useState } from 'react';

const useExpandedQuests = () => {
  const [expandedQuests, setExpandedQuests] = useState([]);

  const toggleQuestExpansion = (index) => {
    const expandedIndex = expandedQuests.indexOf(index);
    if (expandedIndex > -1) {
      setExpandedQuests((prevExpandedQuests) =>
        prevExpandedQuests.filter((item) => item !== index)
      );
    } else {
      setExpandedQuests((prevExpandedQuests) => [...prevExpandedQuests, index]);
    }
  };

  return { expandedQuests, toggleQuestExpansion };
};

export default useExpandedQuests;
