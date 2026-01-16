import { View, Text, StyleSheet } from "react-native";
export default function NumberContainer({ children }) {
  return (
    <View style={styles.numContain}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  numContain: {
    borderWidth: 2,
    padding: 50,
    margin: 20,
    borderColor: "white",
    borderRadius: 10,
  },
  numText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
