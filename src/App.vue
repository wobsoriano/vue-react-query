<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">An error has occurred: {{ error.message }}</div>
  <div v-else>
    <h1>{{data.name}} with Vue 3</h1>
    <p>{{data.description}}</p>
    <strong>👀 {{data.subscribers_count}}</strong>
    <strong>✨ {{data.stargazers_count}}</strong>
    <strong>🍴 {{data.forks_count}}</strong>
    <Test />
  </div>
</template>

<script>
import { useQuery } from './query'

function fetcher () {
  return fetch('https://api.github.com/repos/tannerlinsley/react-query')
  .then((res) => res.json());
}

export default {
  setup() {
    const {
      error,
      data,
      isLoading,
      isFetching,
    } = useQuery('repoData', fetcher, {
      refetchInterval: 10000
    });

    return {
      error,
      data,
      isLoading,
      isFetching
    }
  }
}
</script>