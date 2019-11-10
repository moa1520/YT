import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

class SearchList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: "http://www.jobnjoy.com/files/editor/1463360842127_1.jpg"
            }}
          />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>
              올빼미족 모여라! 서울 밤도깨비 시장
            </Text>
            <Text style={styles.text}>매주 금·토 18시~23시</Text>
            <Text style={styles.text}>여의도한강공원 물빛광장</Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                marginRight: 20,
                marginTop: 5
              }}
            >
              ⭐️ 10
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: "http://www.jobnjoy.com/files/editor/1463360900168_1.JPG"
            }}
          />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>
              가로수길 패션 피플들의 HOT PLACE. 언더앤오버 플리마켓
            </Text>
            <Text style={styles.text}>매주 토·일 13시~21시</Text>
            <Text style={styles.text}>서울특별시 강남구 도산대로 13길 38</Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                marginRight: 20,
                marginTop: 5
              }}
            >
              ⭐️ 8
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: "http://www.jobnjoy.com/files/editor/1463360950507_1.JPG"
            }}
          />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>
              실내에서 즐기는 신(新)개념 플리마켓. 연남동 플레이스 마켓
            </Text>
            <Text style={styles.text}>매주 목·금·토·일 12시~20시</Text>
            <Text style={styles.text}>서울특별시 마포구 동교로46길 36</Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                marginRight: 20,
                marginTop: 5
              }}
            >
              ⭐️ 9.7
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: "http://www.jobnjoy.com/files/editor/1463361022047_1.JPG"
            }}
          />
          <View style={styles.textArea}>
            <Text style={styles.textTitle}>
              낮에는 마켓, 밤에는 술집으로 변신! 경리단길 겸손한 마켓
            </Text>
            <Text style={styles.text}>매주 토·일 13시~18시</Text>
            <Text style={styles.text}>서울특별시 용산구 녹사평대로40길 47</Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "right",
                marginRight: 20,
                marginTop: 5
              }}
            >
              ⭐️ 9.5
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 5 }}>
            어디 지역 가보지?
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={styles.region}>서울</Text>
            <Text style={styles.region}>강원</Text>
            <Text style={styles.region}>제주</Text>
            <Text style={styles.region}>부산</Text>
            <Text style={styles.region}>전라</Text>
            <Text style={styles.region}>경기</Text>
            <Text style={styles.region}>충청</Text>
            <Text style={styles.region}>경상</Text>
            <Text style={styles.region}>전체</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
    padding: 10,
    height: 120
  },
  image: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 10
  },
  textArea: {
    flex: 2
  },
  textTitle: {
    padding: 5,
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    opacity: 0.6
  },
  region: {
    padding: 10,
    margin: 3,
    fontWeight: "500",
    fontSize: 14,
    borderColor: "#b2b2b2",
    borderRadius: 18,
    borderWidth: 1
  }
});

export default SearchList;
