import { create } from 'zustand'

const useContentUpdatedStore = create(() => ({
  updated: new Date(),
}))

export const useContentUpdated = () => useContentUpdatedStore((s) => s.updated);
export const updateContentUpdated = () => {
  useContentUpdatedStore.setState({ updated: new Date() });
}
