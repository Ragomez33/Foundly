import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="add" options={{ title: "Nuevo Gasto", presentation: 'modal' }} />
        <Stack.Screen name="listView" options={{ title: "Movimientos", presentation: 'card' }} />
      </Stack>
    </GluestackUIProvider>
  );
}