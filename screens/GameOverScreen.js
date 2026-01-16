import { Text, View, StyleSheet } from "react-native";
export default function GameOver() {
  return (
    <View style={styles.overConatiner}>
      <Text>GameOver</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  overConatiner: {
    flex: 1,
    padding: 50,
    margin: 50,
    borderWidth: 1,
    borderRadius: 15,
  },
});
