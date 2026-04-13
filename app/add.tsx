import { Box, Heading, Text, VStack, Button, ButtonText, HStack, Switch } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { TextInput } from "react-native";
import { useState } from "react";
import { storage } from "../services/storage";


export default function AddScreen() {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const onSave = async () => {
    if (isExpense) {
      const expenses = await storage.getExpenses();
      expenses.push({ amount, description, date: new Date().toISOString(), type: "expense", id: Date.now() });
      await storage.saveExpenses(expenses);
    } else {
      const incomes = await storage.getIncomes();
      incomes.push({ amount, description, date: new Date().toISOString(), type: "income", id: Date.now() });
      await storage.saveIncomes(incomes);
    }
    router.back();
  }

  return (
    <Box flex={1} p="$6" bg="$white">
      <VStack space="md">
        <Heading>Nuevo Movimiento</Heading>
        <HStack justifyContent="space-between">
          <Button onPress={() => setIsExpense(false)} action={isExpense ? "secondary" : "positive"}>
            <ButtonText>Ingreso</ButtonText>
          </Button>
          <Button onPress={() => setIsExpense(true)} action={isExpense ? "negative" : "secondary"}>
            <ButtonText>Gasto</ButtonText>
          </Button>
        </HStack>
        <TextInput
          placeholder="Descripción"
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Monto"
          keyboardType="numeric"
          onChangeText={(text) => setAmount(Number(text))}
        />
        <HStack justifyContent="space-between">
          <Button onPress={() => router.back()} action="secondary">
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button onPress={onSave} action="primary">
            <ButtonText>Guardar</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}