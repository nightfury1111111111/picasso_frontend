import ActivityConstants from '../constants/activity.constants';

const initialState = { fetching: false, activity: {} };

export function Activity(state = initialState, action) {
  switch (action.type) {
    case ActivityConstants.FETCH_ACTIVITY: {
      return {
        ...state,
        fetching: true,
      };
    }
    case ActivityConstants.UPDATE_ACTIVITY: {
      return {
        ...state,
        fetching: false,
        activity: action.payload,
      };
    }
    case ActivityConstants.FETCH_ACTIVITY_FAILED: {
      return {
        ...state,
        fetching: false,
        activity: {},
      };
    }

    default: {
      return state;
    }
  }
}
