export const dataWithTimer =
  <T>(data: T) =>
  (time: number): Promise<T> => {
    return new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, time);
    });
  };
