export const validateWindowFn = (fn: () => void) => {
  if (typeof window !== 'undefined') fn()
}
