<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">An error has occurred: {{ error.message }}</div>
  <div v-else>
    <h1>{{data.name}} with Vue 3</h1>
    <p>{{data.description}}</p>
    <strong>👀 {{data.subscribers_count}}</strong>
    <strong>✨ {{data.stargazers_count}}</strong>
    <strong>🍴 {{data.forks_count}}</strong>
    <div style="margin-top: 1.5rem;">
      <button @click="refetch">Refetch</button>
    </div>
  </div>
</template>

<script>
import { watchEffect } from 'vue';
import { useQuery } from './query'

function fetcher () {
  return fetch('https://api.github.com/repos/tannerlinsley/react-query')
  .then((res) => res.json());
}

export default {
  name: 'App',
  setup() {
    const {
      error,
      data,
      isLoading,
      isFetching,
      refetch
    } = useQuery('repoData', fetcher, {
      refetchInterval: 5000
    });

    watchEffect(() => {
      // logs every 5 seconds
      // or when refetch is clicked
      console.log('Fetching', isFetching.value)
    });

    return {
      error,
      data,
      isLoading,
      isFetching,
      refetch
    }
  }
}
</script>
