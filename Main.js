import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  ScrollView,
  TextInput
} from "react-native";
import Markets from "./Markets";
import MarketDetail from "./MarketDetail";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

class Main extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={["#ee9ca7", "#ffdde1"]}>
        <Text style={styles.title}>오늘 뭐해?</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"Search"} />
          <ScrollView style={styles.scroll}>
            <MarketDetail />
            <Text style={styles.marketTitle}>Today Festivals</Text>
            <Markets />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feca57",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 32,
    marginTop: 60,
    fontWeight: "600",
    marginBottom: 30,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    width: width - 25,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 20
  },
  scroll: {
    marginTop: 10,
    width: width - 25
  },
  marketTitle: {
    margin: 20,
    fontSize: 26,
    fontWeight: "600"
  }
});

export default Main;
