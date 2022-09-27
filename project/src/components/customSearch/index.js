export default Vue.component('custom-search', {
    template: `
    <input placeholder="поиск" type="text" class="goods-search" @input="$emit('input', $event.target.value)"/>
    `
  })