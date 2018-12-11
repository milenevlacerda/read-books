import request from '@/utils/request';

export default {
  all() {
    return request.get('http://localhost:3000/books');
  },
};