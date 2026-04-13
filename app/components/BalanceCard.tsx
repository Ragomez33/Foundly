import { Box, VStack, Heading, HStack, ButtonText, Button, Text, Pressable } from "@gluestack-ui/themed"
import { router } from "expo-router"

export const BalanceCard = ({
  totalCalculated,
  totalExpenses,
  totalIncomes,
}) => {

  return (
    <Box flex={1} p="$6" pt="$12">
      <VStack space="xl">
        <Heading size="3xl" color="$primary600">Foundly</Heading>
        <Box bg="$primary500" p="$6" rounded="$2xl" shadowColor="$black" shadowOpacity={0.1} shadowRadius={10} elevation={5}>
          <Text color="$primary100" size="sm" fontWeight="$medium">Monto Disponible</Text>
          <Heading color="$white" size="3xl">${totalCalculated.toFixed(2)}</Heading>
        </Box>
        <HStack space="md">
          <Box flex={1} bg="$error50" p="$4" rounded="$xl" borderWidth={1} borderColor="$error200">
            <Text color="$error600" size="xs" fontWeight="$bold">GASTOS</Text>
            <Text color="$error700" size="lg" fontWeight="$bold">-${totalExpenses.toFixed(2)}</Text>
          </Box>

          <Box flex={1} bg="$success50" p="$4" rounded="$xl" borderWidth={1} borderColor="$success200">
            <Text color="$success600" size="xs" fontWeight="$bold">INGRESOS</Text>
            <Text color="$success700" size="lg" fontWeight="$bold">+${totalIncomes.toFixed(2)}</Text>
          </Box>
        </HStack>
        <Button
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => router.push("/add")}
          rounded="$full"
        >
          <ButtonText>Añadir Movimiento</ButtonText>
        </Button>

      </VStack>
    </Box>
  )
}