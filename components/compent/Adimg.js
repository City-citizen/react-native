import React from "react";
import { View, Image } from "react-native";

const AdComponent = () => {
  return (
    <View style={styles.ad}>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={require("../img/ad.png")}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = {
  ad: {
    width: 360,
    height: 60,
    marginVertical: 3,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default AdComponent;
