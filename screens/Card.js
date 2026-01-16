import { View } from "react-native";
export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

