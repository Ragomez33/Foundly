import { FlatList } from 'react-native';
import { VStack, HStack, Box, Text, Icon, TrashIcon, Pressable } from "@gluestack-ui/themed";

const RenderItem = ({ item, onDelete }) => (
  <Box
    borderBottomWidth="$1"
    borderColor="$secondary200"
    py="$4"
    px="$5"
    key={item.id}
  >
    <HStack justifyContent="space-between" alignItems="center">
      <VStack>
        <Text fontWeight="$bold" color="$secondary900">{item.description}</Text>
        <Text size="sm" color="$secondary500">{item.date}</Text>
      </VStack>

      <HStack space="md" alignItems="center">
        <Text
          fontWeight="$bold"
          color={item.type === 'income' ? '$success600' : '$error600'}
        >
          {item.type === 'income' ? '+' : '-'} ${item.amount?.toFixed(2)}
        </Text>

        <Pressable onPress={() => onDelete(item.id)}>
          <Icon as={TrashIcon} color="$error500" />
        </Pressable>
      </HStack>
    </HStack>
  </Box>
);

export const ListView = ({ data, onDelete, header }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RenderItem item={item} onDelete={onDelete} />}
      ListHeaderComponent={header}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListEmptyComponent={() => (
        <Text textAlign="center" color="$secondary400" mt="$10">
          No hay movimientos todavía. ¡Añade el primero!
        </Text>
      )}
    />
  );
}