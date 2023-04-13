import React from 'react';
import { View, Text } from 'react-native';

const AdComponent = () => {
  return (
    <View style={styles.ad}>
      <Text>광고 이미지</Text>
    </View>
  );
};

const styles = {
  ad: {
    borderColor: 'black',
    borderWidth: 1,
    width: '89%',
    height: 60,
    marginVertical: 10,
    backgroundColor: "white",
  },
};

export default AdComponent;
