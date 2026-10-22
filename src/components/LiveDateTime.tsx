import { useEffect, useState } from "react";
import { Text } from "@mantine/core";

const getDelayToNextSecond = () => 1000 - new Date().getMilliseconds();

const useLiveDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const updateEverySecond = () => {
      setCurrentDateTime(new Date());
      timeoutId = setTimeout(updateEverySecond, getDelayToNextSecond());
    }
    timeoutId = setTimeout(updateEverySecond, getDelayToNextSecond());
    return () => clearTimeout(timeoutId);
  }, []);

  return currentDateTime;
}

export const LiveDateTime = () => {
  const dateTime = useLiveDateTime();
  return <Text span>{dateTime.toLocaleString()}</Text>
}
