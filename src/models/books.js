import api from '@/api';

export default {
  state: [],
  reducers: {
    set(state, payload) {
      return payload;
    },
    defineGoodReads(state, payload) {
      return state.map(book => {
        if (book.isbn === payload.isbn) {
          return {
            ...book,
            goodreads: payload.goodreadBook,
          };
        }
        
        return book;
      });
    }
  },
  effects: (dispatch) => ({
    async fetch() {
      const { data: books } = await api.books.all();

      dispatch.books.set(books.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

      books.map(book => {
        dispatch.books.fetchGoodReads(book.isbn);
      });
    },
    
    async fetchGoodReads(isbn) {
      const { data: goodreadBook } = await api.goodreads.get(isbn);
      
      dispatch.books.defineGoodReads({
        goodreadBook: goodreadBook.book,
        isbn,
      });
    }
  })
}
