import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInnerContainer] : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 7,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    marginHorizontal: 16,
    paddingVerticle: 8,
    paddingHorizontal: 16,
    elevation: 8,
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 10,
  },

  pressed: {
    opacity: 0.75,
  },
});
