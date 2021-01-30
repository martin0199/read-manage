<template>
  <div class="bookInfo">
    <book-info-header/>
    <book-info-content/>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import bookInfoHeader from '@/components/book/info/tab'
import bookInfoContent from '@/components/book/info/table'
export default defineComponent({
  components: {
    bookInfoHeader,
    bookInfoContent
  },
  setup () {
    const store = useStore()
    store.commit('setQueryBookInit')
    store.dispatch('actionQueryBookInfo')
  }
})
</script>
<style lang="scss" scoped>
.bookInfo{
  position: relative;
}
</style>>
