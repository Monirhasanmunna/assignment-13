import {computed, reactive} from 'vue'
import axios from 'axios'
import router from '../router/router'
import toastr from '../utilities/toastr'

const user = reactive({
    allUsers : [],
    user : '',
    
    getAllUsers : async function(){
        const users = await axios.get(`http://testproject.test/api/users`);
        this.allUsers = users.data
        this.user = null
    },

    userDetails :async function(id){
        let response = await axios.get(`http://testproject.test/api/users/${id}`)
        this.user = response.data
        console.log(this.user)
    },

    calculationAge : computed(()=>{ 
        if(user.user.age){
            let diff_ms = Date.now() - new Date(user.user.age) 
            let age_date = new Date(diff_ms); 
            let age = Math.abs(age_date.getUTCFullYear() - 1970) 
            return age;
            console.log(user.user.age);
        }
    }),

    userUpdate : async function(id){
        const response = await axios.put(`http://testproject.test/api/update/${id}`,this.user);
        if(response.status == 200){
            // router.push('/user');
            toastr.info('User Info Updated')
        }
    }

});

export default user;