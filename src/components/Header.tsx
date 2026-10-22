import { memo } from "react";
import { Box, Group } from "@mantine/core";
import { LiveDateTime } from "./LiveDateTime.tsx";
import { ContentUpdatedDateTime } from "./ContentUpdatedDateTime.tsx";

export const Header = memo(() => {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Box>
        MyApp – <ContentUpdatedDateTime/>
      </Box>
      <LiveDateTime/>
    </Group>
  );
});
