import storage from '@/services/storage.service';
import moment from 'moment';

moment.locale('pt-br');

export default {
  login: (payload) => {
    storage.set('authorization', JSON.stringify({ token: btoa(JSON.stringify(payload)), expired_at: moment().add(1, 'hours').format('x') }));
    return true;
  },
  logout: () => storage.remove('authorization'),
  isAuthenticated: () => !!storage.get('authorization') && moment(parseInt(JSON.parse(storage.get('authorization')).expired_at, 10)).isSameOrAfter(moment()),
};
