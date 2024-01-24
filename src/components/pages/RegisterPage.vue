<template>
    <layout-div>
        <div class="row flexCenter mt-5">
             <div class="col-md-6 col-sm-6 col-lg-4">
                 <div class="card">
                     <div class="card-body">
                         <h5 class="card-title mb-4">Register</h5>
                         <form >
                             <div class="mb-3">
                                 <label 
                                     htmlFor="name"
                                     class="form-label">Name
                                 </label>
                                 <input 
                                     type="text"
                                     class="form-control"
                                     id="name"
                                     name="name"
                                     v-model="name"
                                 />
                                 <div v-if="validationErrors.name" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.name[0]}}
                                     </small >
                                 </div>      
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="email"
                                     class="form-label">Email address
                                 </label>
                                 <input 
                                     type="email"
                                     class="form-control"
                                     id="email"
                                     name="email"
                                     v-model="email"
                                 />
                                 <div v-if="validationErrors.email" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.email[0]}}
                                     </small >
                                 </div>
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="password"
                                     class="form-label">Password
                                 </label>
                                 <input 
                                     type="password"
                                     class="form-control"
                                     id="password"
                                     name="password"
                                     v-model="password"
                                 />
                                <div v-if="validationErrors.password" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.password[0]}}
                                     </small >
                                 </div>
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="confirm_password"
                                     class="form-label">Confirm Password
                                 </label>
                                 <input 
                                     type="password"
                                     class="form-control"
                                     id="confirm_password"
                                     name="confirm_password"
                                     v-model="confirmPassword"
                                 />
                             </div>
                             <div class="d-grid gap-2">
                                 <button 
                                     :disabled="isSubmitting"
                                     @click="registerAction()"
                                     type="button"
                                     style="background-color: #9395D3; color: white;border:none"
                                     class="btn btn-primary btn-block">Register Now
                                 </button>
                                 <p 
                                     class="text-center">Have already an account <router-link to="/">Login here</router-link>
                                 </p>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
    </layout-div>
 </template>
   
 <script>
 import axios from 'axios';
//  import LayoutDiv from '../LayoutDiv.vue';
   
 export default {
   name: 'RegisterPage',
   components: {
    //  LayoutDiv,
   },
   data() {
     return {
         name:'',
         email:'',
         password:'',
         confirmPassword:'',
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
      registerAction(){
         this.isSubmitting = true
         let payload = {
             username:this.name,
             email: this.email,
             password: this.password,
             password_confirmation: this.confirmPassword
         }

         console.log('payload', payload)
         axios.post('https://geetanjaljangde.pythonanywhere.com/register/', payload)
           .then(response => {
             this.$router.push('/')
             return response
           })
           .catch(error => {
             this.isSubmitting = false
             if (error.response.data.errors != undefined) {
                 this.validationErrors = error.response.data.errors
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