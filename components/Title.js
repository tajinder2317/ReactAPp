import { Text, StyleSheet } from "react-native";
function Title({ children }) {
  return <Text style={styles.titleText}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  titleText: {
    fontFamily: "cursive",
    fontSize:38,
    color:'rgb(255, 255, 255)',
    opacity:0.75,
  },
});
