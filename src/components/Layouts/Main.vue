<script setup>
import { Icon } from '@iconify/vue';
import {ref} from 'vue'

const sideBarisActive = ref(true);

</script>

<template>
  <div class="wrapper">

      <div class="flex">
        <aside class="flex">
            <div class="h-screen overflow-y-auto sm:w-64 bg-white border-l border-r transition duration-500 dark:bg-gray-900 dark:border-gray-700" :class="sideBarisActive ? 'sidebarActive' : 'sidebarInActive'">
                
              <div class="w-full p-8 shadow-lg">
                <h1 class="text-xl font-medium  text-gray-500 dark:text-white text-center">
                  <span v-show="sideBarisActive">Assignment</span>
                  <span v-show="!sideBarisActive">A</span>
                </h1>
              </div>

                <ul class="menu w-full space-y-2 mt-3">
                  <li><router-link to="/" :class="{actived: $route.name == 'home'}" class="py-2 text-lg"><Icon icon="mdi:home" width="28" /><span v-if="sideBarisActive">Home</span></router-link></li>
                  <!-- <li>
                    <details>
                      <summary class="py-3">Parent</summary>
                      <ul>
                        <li><a class="py-3">level 2 item 1</a></li>
                        <li><a class="py-3">level 2 item 2</a></li>
                      </ul>
                    </details>
                  </li> -->
                  <li><router-link :class="{actived: $route.name == 'users' || $route.name == 'userDetails'}" :to="{name:'users'}" class="py-2 text-lg"><Icon icon="mdi:users" width="28" /><span v-if="sideBarisActive">Users</span></router-link></li>
              </ul>
            </div>
        </aside>


        <main class="bg-gray-100 w-full">

          <!-- topbar start -->
          <div class="py-6 pr-8 border bg-white  shadow-md">
            <div class="flex justify-between">
              
              <button @click="sideBarisActive = !sideBarisActive"><Icon icon="akar-icons:three-line-horizontal" width="40" color="gray" /></button>

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
          
          <div class="p-8 m-5 shadow-lg rounded-md bg-white h-full">
            <slot></slot>
          </div>
        </main>
    </div>
  </div>
</template>

<style scoped>

 .sidebarActive{
  width: 256px;
 }

 .sidebarInActive{
  width: 80px;
 }

 .actived{
  background-color: #b1b0b0;
  
 }
</style>
