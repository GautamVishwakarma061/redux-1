import { SAD_BUTTON_CLICKED } from "../actions/mood-action";
import { AnyAction } from "redux";
import { CLEAR } from "../actions/mood-action";
import { Moment } from "../store";
import produce from "immer";

export type State = {
  sadMoments: Moment[];
};

export const initialState: State = { sadMoments: [] };

const sadnessReducer = (
  state: State = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(state, (draft) => {
        draft.sadMoments.push(action.payload);
      });

    case CLEAR:
      return {
        ...state,
        sadMoments: [],
      };

    default:
      return state;
  }
};

export default sadnessReducer;
