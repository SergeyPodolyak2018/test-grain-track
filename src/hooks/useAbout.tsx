import React from 'react';
import { dataWithTimer } from '../utils/utils';
import { data as aboutMockData } from '../mock-data/about-data';
import { AppContext } from '../store/store';

export function useAbout() {
  const globalState = React.useContext(AppContext);
  const { state, dispatch } = globalState;

  React.useEffect(() => {
    if (state.about.status === 'loading') {
      getData();
    }
  }, [state.about.status]);

  const getData = async () => {
    const getDataAfterTime = dataWithTimer(aboutMockData);
    const result = await getDataAfterTime(5000);
    dispatch({
      type: 'ADD_ABOUT_DATA',
      payload: result,
    });
  };

  return {
    status: state.about.status,
    data: state.about.data,
  };
}
