import { Text, Button } from "@mantine/core";
import { updateContentUpdated } from "../stores/useContentUpdatedStore.ts";

export const Content2 = () => {
  return (
    <>
      <Text>Content 2</Text>
      <Button onClick={updateContentUpdated}>Update Content Time</Button>
    </>
  );
};
