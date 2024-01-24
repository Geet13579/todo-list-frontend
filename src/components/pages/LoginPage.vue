<template>
         <div class="row flexCenter mt-5">
             <div class="col-md-6 col-sm-6 col-lg-4">
                 <div class="card">
                     <div class="card-body">
                         <h5 class="card-title mb-4">Sign In</h5>
                         <form>
                             <p v-if="Object.keys(validationErrors).length != 0" class='text-center '><small class='text-danger'>Incorrect Username or Password</small></p>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="email"
                                     class="form-label">
                                         Username
                                 </label>
                                 <input 
                                     v-model="username"
                                     type="username"
                                     class="form-control"
                                     id="username"
                                     name="username"
                                 />
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="password"
                                     class="form-label">Password
                                 </label>
                                 <input 
                                     v-model="password"
                                     type="password"
                                     class="form-control"
                                     id="password"
                                     name="password"
                                 />
                             </div>
                             <div class="d-grid gap-2">
                                 <button 
                                     :disabled="isSubmitting"
                                     @click="loginAction()"
                                     type="button"
                                      style="background-color: #9395D3; color: white;border:none"
                                     class="btn btn-primary btn-block">Login</button>
                                 <p class="text-center">Don't have account? 
                                     <router-link to="/register">Register here </router-link>
                                 </p>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
 </template>
   
 <script>
 import axios from 'axios';
   
 export default {
   name: 'LoginPage',
   
   data() {
     return {
         username:'',
         password:'',
         validationErrors:{},
         isSubmitting:false,
     };
   },
   created() {
     if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
        //  this.$router.push('/dashboard')
     }
   },
   methods: {
      loginAction(){
         this.isSubmitting = true
         let payload = {
             username: this.username,
             password: this.password,
         }
         axios.post('https://geetanjaljangde.pythonanywhere.com/login/', payload)
           .then(response => {
           console.log(response)

             localStorage.setItem('token', response.data.token)

            this.$router.push('/dashboard')
             return response
           })
           .catch(error => {
             this.isSubmitting = false
            if (error.response.data.errors != undefined) {
                 this.validationErrors = error.response.data.errors
             }
             if (error.response.data.error != undefined) {
                 this.validationErrors = error.response.data.error
             }
             return error
           });
      }
   },
 };
 </script>

 <style>

.flexCenter{
    display: flex;
    justify-content: center;
}
</style>