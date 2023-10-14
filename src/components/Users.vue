<script setup>
import {ref, onBeforeMount} from 'vue'
import user from '../store/user';

    const headers  = [
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email"},
        { text: "Birth Date", value: "age"},
        { text: "Created At", value: "created_at"},
        { text: "Action", value: "action", "width":150},
    ];

    // const items = user.allUsers;

    onBeforeMount(async()=>{
        user.getAllUsers()
    });
    

</script>

<template>
    <div class="bg-white h-full">
        <div class="w-full p-2">
            <Datatable
                :headers="headers"
                :items="user.allUsers"
                border-cell
                buttons-pagination
            >

            <template #item-image="{image}">
                <img class="w-10 h-10 rounded-full" :src="image" :alt="image">
            </template>

            <template #item-action="{id}">
               <router-link :to="{name:'userDetails',params:{id:id}}" class="p-2 bg-green-600 hover:bg-green-800 text-white rounded-md m-2 inline-flex">View</router-link> 
               <!-- <router-link :to="{name:'userDetails',params:{id:id}}" class="p-2 bg-red-500 hover:bg-red-700 text-white rounded-md m-2 inline-flex">Delete</router-link>  -->
            </template>

            </Datatable>
        </div>
    </div>
</template>