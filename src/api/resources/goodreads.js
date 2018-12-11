import request from '@/utils/request';

export default {
  get(isbn) {
    return request.get(`http://localhost:3000/goodreads/book/${isbn}`);
  },
};