import {AxiosError} from 'axios';

import {navigate} from '_utils/navigation';
import {showTost} from '_utils/showTost';

export function onRejectedResponseInterceptor(error: AxiosError) {
  const code = `${error.code}`;

  const response = error.response || {
    statusText: ''
  };

  if (code === '401' && response.statusText === 'Unauthorized') {
    navigate('Login');
  }

  showTost(`${code} ${response.statusText}`, 'ok', 'danger');

  return Promise.reject(error);
}
