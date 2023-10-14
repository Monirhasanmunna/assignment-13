<script setup>
import axios from 'axios'
import {ref,onBeforeMount, reactive} from 'vue'
import { useRoute } from 'vue-router';

const router = useRoute()
const id = `${router.params.id}`
const file = ref(null)

const data = ref({})

onBeforeMount(async()=>{
   let item = await axios.get(`http://testproject.test/api/users/${id}`)
    data.value = item.data
});

function fileUpload(event){
    file.value = event.target.files[0];
}

async function submitForm(event){
    event.preventDefault();
    let formData = new FormData();

    formData.append('image', file.value);
    formData.append('name', data.value.name)
    formData.append('email', data.value.email)

   const res = await axios.put(`http://testproject.test/api/update/${id}`,formData,{
        headers : {
            'Content-Type' : 'multipart/form-data',
        },
   });

   console.log(res);
}

</script>

<template>
    <div class="bg-white h-full">
        <div class="w-full p-2">
            {{ data }}
            <div class="flex flex-wrap justify-center">
                <div class="w-6/12 shadow-xl p-4 rounded-lg">
                    <form  class="space-y-3 " @submit="submitForm">
                        
                        <div class="input-wrapper space-y-1">
                            <label for="name" class="block text-lg font-medium leading-6 text-gray-400">Name</label>
                            <input class="input input-bordered w-full" name="name" id="name" v-model="data.name"  placeholder="Name"/>
                        </div>
                        
                        <div class="input-wrapper space-y-1">
                            <label for="email" class="block text-lg font-medium leading-6 text-gray-400">Email</label>
                            <input class="input input-bordered w-full" id="email" name="email" v-model="data.email" placeholder="Email" type="email"/>
                        </div>
                        
                        <div class="input-wrapper space-y-1">
                            <label for="image" class="block text-lg font-medium leading-6 text-gray-400">Image</label>
                            <input type="file" @change="fileUpload" class="file-input file-input-bordered file-input-indigo w-full max-w-xs" />
                        </div>

                        <div class="input-wrapper">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>