/**
 * The upload + AI analysis keeps running after the apply screen swaps itself for the
 * progress screen, so the outcome of that run is shared here instead of React state.
 * The progress screen waits on `promise` before it shows a verdict and reads `error`
 * when the run failed.
 */
export const analysisRun: {
  promise: Promise<void> | null;
  error: string | null;
} = {
  promise: null,
  error: null,
};

/** Clears the previous run's outcome; called when a new analysis is started. */
export const resetAnalysisRun = () => {
  analysisRun.promise = null;
  analysisRun.error = null;
};
