import ActivityConstants from '../constants/activity.constants';

const ActivityActions = {
  updateActivity,
  fetchStart,
  fetchFailed,
};

function updateActivity(payload) {
  return dispatch => {
    dispatch(_updateActivity(payload));
  };
}

const _updateActivity = payload => {
  return {
    type: ActivityConstants.UPDATE_ACTIVITY,
    payload,
  };
};

function fetchStart() {
  return dispatch => {
    dispatch(_fetchStart());
  };
}

const _fetchStart = () => {
  return {
    type: ActivityConstants.FETCH_ACTIVITY,
  };
};

function fetchFailed() {
  return dispatch => {
    dispatch(_fetchFailed());
  };
}

const _fetchFailed = () => {
  return {
    type: ActivityConstants.FETCH_ACTIVITY_FAILED,
  };
};

export default ActivityActions;
