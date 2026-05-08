/**
 * boreas-rembg.ts
 *
 * Types for Wails runtime events emitted by the Go RembgService.
 * These mirror the Go structs in avnac-system/server/rembg.go.
 */

/** Emitted on "rembg:progress" while the job is queued / preparing / processing. */
export type RembgProgressEvent = {
  nodeId: string;
  jobId: string;
  /** "queued" | "preparing" | "processing" */
  status: string;
};

/** Emitted on "rembg:complete" when the result PNG is ready. */
export type RembgCompleteEvent = {
  nodeId: string;
  jobId: string;
  /** PNG data URL — "data:image/png;base64,..." */
  resultDataUrl: string;
};

/** Emitted on "rembg:error" when the job fails or the stream errors. */
export type RembgErrorEvent = {
  nodeId: string;
  jobId: string;
  errorMsg: string;
};
