<script setup>

</script>

<template>
  <div class="flex">
    <aside class="flex">
        <div class="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-20 transition hover:w-64 duration-500 dark:bg-gray-900 dark:border-gray-700">
            <h2 class="px-5 text-lg text-center mb-5 font-medium text-gray-800 dark:text-white">Assignment</h2>
            <hr>
            <div class="mt-4 space-y-2">
                <router-link to="/" class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-200 focus:outline-none">
                  Home
                </router-link>

                <router-link :to="{name:'users'}" class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-200 focus:outline-none">
                    Users
                </router-link>
            </div>
        </div>
    </aside>

    <main class="bg-gray-100 w-full p-8">
      <div class="p-8 shadow-lg rounded-md bg-white h-full">
        <slot></slot>
      </div>
    </main>
  </div>
  

</template>

<style scoped>

</style>
