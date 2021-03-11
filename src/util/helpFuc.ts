export const processData = (buffer: number[]) => {
  if (buffer.length == 0) return 0;
  return buffer.slice(-2)[0];
};
