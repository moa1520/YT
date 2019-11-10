import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MarketDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>지금 HOT한 플리마켓</Text>
      <Image
        style={styles.image}
        source={{
          uri: "http://www.jobnjoy.com/files/editor/1463360973374_1.JPG"
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        실내에서 즐기는 신(新)개념 플리마켓. 연남동 플레이스 마켓
      </Text>
      <Text style={{ fontSize: 16 }}>
        매주 목·금·토·일 12시~20시, 서울특별시 마포구 동교로46길 36.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexWrap: "wrap",
    flexDirection: "column"
  },
  text: {
    fontSize: 25,
    color: "#ff6b6b",
    shadowColor: "rgb(50,50,50)",
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    shadowOffset: {
      height: 2,
      width: 2
    },
    fontWeight: "800",
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10
  }
});

export default MarketDetail;
