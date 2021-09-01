import { AppDispatch, RootState } from "./../configs/store";

export const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn((x) => x),
  };
  const next = jest.fn();

  const invoke = async (action: Function) => await thunk(store)(next)(action);

  return { store, next, invoke };
};

interface MockThunk {
  dispatch: AppDispatch;
  getState: RootState;
}

export const thunk =
  ({ dispatch, getState }: MockThunk) =>
  (next: Function) =>
  async (action: Function) => {
    if (typeof action === "function") {
      return await action(dispatch, getState);
    }

    return await next(action);
  };
