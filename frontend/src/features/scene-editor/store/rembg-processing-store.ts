/**
 * rembg-processing-store.ts
 *
 * Minimal Zustand store that tracks which canvas image nodes are currently
 * being processed by the background-removal pipeline.
 *
 * Kept separate from the main SceneEditorStore to avoid coupling the heavy
 * scene state to transient UI processing state.
 */
import { create } from "zustand";

type RembgProcessingState = {
  /** Set of node IDs that are currently being processed. */
  processingNodes: Record<string, true>;
};

type RembgProcessingActions = {
  setProcessing: (nodeId: string) => void;
  clearProcessing: (nodeId: string) => void;
};

export const useRembgProcessingStore = create<
  RembgProcessingState & RembgProcessingActions
>((set) => ({
  processingNodes: {},

  setProcessing: (nodeId) =>
    set((s) => ({
      processingNodes: { ...s.processingNodes, [nodeId]: true },
    })),

  clearProcessing: (nodeId) =>
    set((s) => {
      const { [nodeId]: _removed, ...rest } = s.processingNodes;
      return { processingNodes: rest };
    }),
}));
