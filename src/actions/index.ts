export type ActionCreator<T = undefined> = (...args: any) => {
  type: String;
  payload?: T;
};

export type Action<T = any> = { type: string; payload?: T };
