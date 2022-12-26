import { AnyAction } from "redux";
import { CLEAR } from "../actions/mood-action";
import { HAPPY_BUTTON_CLICKED } from "../actions/mood-action";
import { Moment } from "../store";
import produce from "immer";

export type State = {
  happyMoments: Moment[];
};

export const initialState: State = { happyMoments: [] };

const happinessReducer = (
  state: State = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return produce(state, (draft) => {
        draft.happyMoments.push(action.payload);
      });

    case CLEAR:
      return {
        ...state,
        happyMoments: [],
      };

    default:
      return state;
  }
};

export default happinessReducer;
