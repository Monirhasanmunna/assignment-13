<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="wrapper">

    <!-- topbar start -->
    <div class="py-6 px-8 border border-gray-200 shadow-md">
      <div class="flex justify-between">
        <h2 class="text-xl pt-1 text-lef font-medium text-gray-500 dark:text-white">My Assignment</h2>

        <div class="dropdown dropdown-end">
           <img tabindex="0" class="w-10 rounded-full ring-2" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">

          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 mt-2 shadow-md shadow-indigo-200 bg-base-100 rounded-md w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>

        </div>
      </div>
    </div>
    <!-- topbar end -->

    <div class="flex">
    <aside class="flex">
        <div class="h-screen overflow-y-auto bg-white border-l border-r sm:w-64 w-20 transition hover:w-64 duration-500 dark:bg-gray-900 dark:border-gray-700">
            
            <ul class="menu w-full space-y-1">
              <li><router-link to="/" class="py-3"><Icon icon="mdi:home" />Home</router-link></li>
              <!-- <li>
                <details>
                  <summary class="py-3">Parent</summary>
                  <ul>
                    <li><a class="py-3">level 2 item 1</a></li>
                    <li><a class="py-3">level 2 item 2</a></li>
                  </ul>
                </details>
              </li> -->
              <li><router-link :to="{name:'users'}" class="py-3">Users</router-link></li>
          </ul>
        </div>
    </aside>

    <main class="bg-gray-100 w-full p-6">
      <div class="p-8 shadow-lg rounded-md bg-white h-full">
        <slot></slot>
      </div>
    </main>
  </div>
  </div>
</template>

<style scoped>

</style>
