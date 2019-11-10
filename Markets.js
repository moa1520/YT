import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Markets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.market}>
        <Image
          style={styles.marketImg}
          source={{
            uri: "http://www.jobnjoy.com/files/editor/1463360842127_1.jpg"
          }}
        />
        <Text style={styles.text}>서울 밤도깨비 시장</Text>
      </View>
      <View style={styles.market}>
        <Image
          style={styles.marketImg}
          source={{
            uri: "http://www.jobnjoy.com/files/editor/1463360900168_1.JPG"
          }}
        />
        <Text style={styles.text}>언더앤오버 플리마켓</Text>
      </View>
      <View style={styles.market}>
        <Image
          style={styles.marketImg}
          source={{
            uri: "http://www.jobnjoy.com/files/editor/1463360950507_1.JPG"
          }}
        />
        <Text style={styles.text}>연남동 플레이스 마켓</Text>
      </View>
      <View style={styles.market}>
        <Image
          style={styles.marketImg}
          source={{
            uri: "http://www.jobnjoy.com/files/editor/1463361022047_1.JPG"
          }}
        />
        <Text style={styles.text}>경리단길 겸손한 마켓</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 25
  },
  market: {
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 150,
    height: 180,
    marginBottom: 15
  },
  marketImg: {
    width: 150,
    height: 150,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 5
  },
  text: {
    fontWeight: "600"
  }
});

export default Markets;
