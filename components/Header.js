import { View, Text, StyleSheet } from "react-native";

export default Header = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>RN Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001f3f"
  },
  title: {
    fontSize: 30,
    color: "white",
  },
});
