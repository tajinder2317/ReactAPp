import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  View,
  Alert,
  Dimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
// import Card from "./card";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions;

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Please enter a valid number  between 1 to 99 ",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        {/* <Card style={styles.cardContainer}> */}
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="numeric"
            inputMode="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.pressButtonContainer}>
            <View>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        {/* </Card> */}
      </View>
    </KeyboardAvoidingView>
  );
}
export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputContainer: {
    // marginTop: 100,
    // marginHorizontal: 24,
    marginTop: deviceHeight < 380 ? 80 : 100,
    borderRadius: 14,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.26)",
    alignItems: "center",
  },
  cardContainer: {
    padding: 5,
    alignItems: "center",
  },
  pressButtonContainer: {
    flexDirection: "row",
    padding: 2,
    margin: 2,
  },
  numberInput: {
    height: 58,
    width: 100,
    fontSize: 32,
    borderBottomColor: "rgba(146, 248, 197, 0.85)",
    borderBottomWidth: 2,
    color: "rgba(146, 248, 197, 0.85)",
    // marginVertical: 8,
    textAlign: "center",
  },
});
