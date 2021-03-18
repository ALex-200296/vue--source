<template>
   <section>
      <h1>Заметки</h1>
    <ul class="mt-3">
      <li class="d-flex justify-content-between note_list" v-for="note in notes" :key="note.id">
        <div>
          <h5>{{ note.title }}</h5>
          <span>{{note.date}}</span>
        </div>
        <button class="btn btn-primary" @click.prevent="pushPage(note.id)">
          Редактировать
        </button>
      </li>
    </ul>
   <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item ml-3" v-for="numberPage in sumPages" :key="numberPage"><button class="page-link" @click.prevent="setPage(numberPage)">{{numberPage}}</button></li>
      </ul>
    </nav>
   </section>
</template>

<script>

export default {

  data() {
    return {
      dataNotes: null,
      page: 1,
      perPage: 3,
      sumPages: 0
    }
  },
  computed: {
    notes() {
      return this.dataNotes 
    }
  },
  methods: {
    pushPage(id) {
      this.$router.push({name: 'Note', params: {id: id}})
    },
    callList() {
      localStorage.setItem('list', JSON.stringify(this.$store.state.sumNotes))
      this.$store.commit('limNote', {page: this.page, perPage: this.perPage})
      this.dataNotes = this.$store.state.Notes
    },
    setPage(num) {
      this.page = num
      this.callList()
    }
  },
  created() {
    this.sumPages = Math.ceil(this.$store.state.sumNotes.length / this.perPage)
    this.callList()
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  

  li {
    padding: 20px 0;
  }

  .note_list:not(:last-child) {
    border-bottom: 1px solid black;
  }
</style>