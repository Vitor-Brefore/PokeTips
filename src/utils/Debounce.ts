export const debounce = (fn: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};
