import { Search } from "../Models/BaseModels";

export class HistoryState {
  public history: Search[] = [];
}

export enum ActionType {
  GOT_NEW_SEARCH = "GOT_NEW_SEARCH",
}

export interface HistoryAction {
  type: ActionType;
  payload: any;
}

export function gotNewSearch(res: Search): HistoryAction {
  return { type: ActionType.GOT_NEW_SEARCH, payload: res };
}

export function historyReducer(
  currentState: HistoryState = new HistoryState(),
  action: HistoryAction
): HistoryState {
  const newState = { ...currentState };
  switch (action.type) {
    case ActionType.GOT_NEW_SEARCH: {
      newState.history.push(action.payload);
      break;
    }
  }
  return newState;
}
