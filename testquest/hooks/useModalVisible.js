import { useState } from 'react';

const useModalVisible = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return { modalVisible, setModalVisible };
};

export default useModalVisible;
