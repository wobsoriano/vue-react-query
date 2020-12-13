<template>
  Bears from other component: {{ bears }}
</template>

<script>
import {useStore} from './store'
export default {
    setup() {
        const { bears } = useStore()

        return {
            bears
        }
    }
}
</script>