import { State } from "../store";

export const happyMomentsSelector = (state: State) => {
  return state.happy.happyMoments;
};
export const sadMomentsSelector = (state: State) => {
  return state.sad.sadMoments;
};
