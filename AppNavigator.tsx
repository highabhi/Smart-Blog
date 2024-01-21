import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
}
