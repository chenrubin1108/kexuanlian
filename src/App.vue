<template>
  <div id="app">
    
    {{adventurer.cat?.name}}
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      adventurer:{
        name: 'Alice',
        cat: {
        name: 'Dinah'
  }
      }
    }
  },
}
</script>

<style>

</style>
