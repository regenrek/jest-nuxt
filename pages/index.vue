<template>
  <div class="container">
    <div style="max-width: 680px; width: 100%;">
      <h1>Dogs</h1>
      <template v-if="$fetchState.pending">
        Loading Books...
      </template>
      <template v-else-if="$fetchState.error">
        <p>{{ $fetchState.error.message }}</p>
      </template>
      <template v-else>
        <pre>
        {{ dogs }}
        </pre>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('fetchDogs')
  },
  computed: {
    ...mapState({
      dogs: (state) => state.dogs
    })
  },
  head: {
    title: 'My Dog Api',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
