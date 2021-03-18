import { createStore } from 'vuex'

export default createStore({
  state: {
    sumNotes: [
      { id: "1", title: 'Заметка 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '19/02/2020' },
      { id: "2", title: 'Заметка 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '20/02/2020' },
      { id: "3", title: 'Заметка 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '21/02/2020' },
      { id: "4", title: 'Заметка 4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '22/02/2020' },
      { id: "5", title: 'Заметка 5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '23/02/2020' },
      { id: "6", title: 'Заметка 6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '24/02/2020' },
      { id: "7", title: 'Заметка 7', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '25/02/2020' },
    ],
    Notes: []
  },
  mutations: {
    limNote(state, payload) {
      state.Notes = [];
      const sum = (payload.page * payload.perPage) - 1;
      const lim = ((payload.page -1) * payload.perPage) - 1;
      state.sumNotes.map( (el, ind) => {
        console.log(ind, sum, lim)
        if(ind <= sum) {
          if(ind > lim) {
            state.Notes.push(el)
          }
        }
      })
    },
    saveNote(state, payload) {
      const response = JSON.parse( localStorage.getItem('list'));
      const data = response.findIndex( el => el.id === payload.id);
      if(data !== -1) {
        response[data] = payload.note;
        localStorage.setItem('list', JSON.stringify(response))
        state.sumNotes = response
      }

    }
  },
  actions: {
  },

})
