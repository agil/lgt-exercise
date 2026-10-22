import { Text } from "@mantine/core";
import { useContentUpdated } from "../stores/useContentUpdatedStore.ts";

export const ContentUpdatedDateTime = () => {
  const updatedDateTime = useContentUpdated();

  return <Text span>{updatedDateTime.toLocaleString()}</Text>
};
