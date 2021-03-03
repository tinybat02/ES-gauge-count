export const processData = (buffer: number[]) => {
  // if (buffer.slice(-1)[0] == 0) {
  //   return buffer.slice(-7).reduce((total, elm) => total + elm, 0);
  // }
  // return buffer.slice(-6).reduce((total, elm) => total + elm, 0);
  // return buffer.slice(-7).reduce((total, elm) => total + elm, 0);
  // return buffer.slice(-1)[0] || 0;
  const tmp = buffer.slice(0).reverse();
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] > 0) {
      return tmp[i];
    }
  }
  return 0;
};
