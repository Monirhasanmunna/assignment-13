<script setup>
import {onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
import user from '../store/user';
import toastr from '../utilities/toastr'



const router = useRoute()
const id = `${router.params.id}`

onBeforeMount(()=>  user.userDetails(id))

function submitForm(){
    user.userUpdate(id)
}



</script>

<template>
    <div class="bg-white h-full">
        <div class="w-full p-2">
           
            <div class="flex flex-wrap">
                <div class="w-3/12 shadow-xl p-4 rounded-lg mr-8 space-y-8">
                    <div class="flex justify-center">
                        <img v-if="user.user.image" class="w-40 h-50 p-1 rounded-full ring-4 ring-indigo-600" :src="user.user.image" alt="" srcset="">
                        <img v-else class="w-40 h-50 p-1 rounded-full ring-4 ring-indigo-600" src="https://media.istockphoto.com/id/1273263433/vector/hand-drawn-modern-man-avatar-profile-icon-user-flat-avatar-icon-sign-profile-male-symbol.jpg?s=612x612&w=0&k=20&c=WauLjm_WmhnPNO-F5lxHIcvN16NvC3NxnlNHXhsuano=" alt="" srcset="">
                    </div>

                    <div class="flex justify-center">
                       <h2 class="text-xl text-white p-4 bg-purple-600 w-40 rounded-xl text-center">Age :  {{ user.calculationAge }}</h2>
                    </div>

                    <div class="flex justify-center">
                       <button @click="toastr.success('Submitted Vote Successfully !')" v-if="user.calculationAge >= 18" class="btn btn-primary capitalize">Eligable For Vote</button>

                       <button @click="toastr.error('You are not elligable for vote')" v-if="user.calculationAge < 18" class="btn btn-error capitalize">Not Eligable For Vote</button>
                    </div>

                </div>

                <div class="w-6/12 shadow-xl p-4 rounded-lg">
                    <form  class="space-y-3 " @submit.prevent="submitForm">
                       
                        <div class="input-wrapper space-y-1">
                            <label for="name" class="block text-lg font-medium leading-6 text-gray-400">Name</label>
                            <input class="input input-bordered w-full" name="name" id="name" v-model="user.user.name"  placeholder="Name"/>
                        </div>

                        <div class="group-wrapper flex space-y-1">

                            <div class="input-wrapper w-6/12 space-y-1 px-1 mt-1">
                                <label for="email" class="block text-lg font-medium leading-6 text-gray-400">Email</label>
                                <input class="input input-bordered w-full" id="email" name="email" v-model="user.user.email" placeholder="Email" type="email"/>
                            </div>

                            <div class="input-wrapper w-6/12 space-y-1">
                                <label for="age" class="block text-lg font-medium leading-6 text-gray-400">Age</label>
                                <input class="input input-bordered w-full" id="age" name="age" v-model="user.user.age" placeholder="age" type="date"/>
                            </div>

                        </div>
                        
                        <div class="input-wrapper space-y-1">
                            <label for="image" class="block text-lg font-medium leading-6 text-gray-400">Image Url</label>
                            <input class="input input-bordered w-full" name="name" id="name" v-model="user.user.image"  placeholder="Name"/>
                        </div>

                        <div class="input-wrapper">
                            <button type="submit" class="btn btn-primary mt-5">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>