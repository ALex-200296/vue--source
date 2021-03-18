<template>
  <section class="mt-4">
    <h1>Редактировать заметки</h1>
    <input 
      type="text" 
      name="title" 
      class="form-control" 
      v-model="note.title"
      >
    <textarea 
      name="text" 
      class="mt-4 form-control"
      v-model="note.text">
    </textarea>
    <div class="d-flex justify-content-between mt-4 group__btn">
      <button class="btn btn-secondary" @click="close()">Закрыть</button>
      <button class="btn btn-primary" @click.prevent="saveList()">Сохранить</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      note: null
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    },
    callNote() {
      this.note = this.$store.state.sumNotes.find( el => el.id === this.$route.params.id)
    },
    saveList() {
      const date = new Date()
      this.note['date'] = `${date.getDate()}/${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1}/${date.getFullYear()}`
      this.$store.commit('saveNote', {note:this.note, id:this.$route.params.id})
      this.$router.push('/')
    }
  },
  created() {
    this.callNote()
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

textarea {
  min-height: 300px;
}
</style>