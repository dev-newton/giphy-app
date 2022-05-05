export const getUniqueBy = (arr: any, prop: string) => {
  const set = new Set();
  return arr.filter((o: any) => !set.has(o[prop]) && set.add(o[prop]));
};

export const debounce = (func: any, delay: number) => {
  let setTimoutInstance: any;
  return function () {
    const args = arguments;
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    setTimoutInstance = setTimeout(() => func.apply("", args), delay);
  };
};
