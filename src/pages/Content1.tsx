import { Text, Button } from "@mantine/core";
import { updateContentUpdated } from "../stores/useContentUpdatedStore.ts";

export const Content1 = () => {
  return (
    <>
      <Text>Content 1</Text>
      <Button onClick={updateContentUpdated}>Update Content Time</Button>
    </>
  );
};
