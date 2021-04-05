<script>
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'
import Grid from '@/components/Grid.vue'

export default defineComponent({
  components: { ButtonRepo, Grid },
})
</script>

<template>
  <main>
    <div class="m-10">
      <Grid/>
      <div class="mt-5">
        <router-link
          to="/about"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
          >Next Page</router-link
        >
      </div>
    </div>
  </main>
</template>
