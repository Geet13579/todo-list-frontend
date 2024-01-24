<template>
    <layout-div>
        <div class="row justify-content-md-center">

            <nav class="navbar navbar-expand-lg navbar-light NavabarStyle">
                <div class="container-fluid">
                    <!-- <ul class="navbar-nav addbutton">
                            <li class="nav-item">
                                <a @click="logoutAction()" class="nav-link " style="text-align: center; font-size: 22px; color:  #FFFFFF;" aria-current="page"
                                        href="#">+</a>
                             
                            </li>
                        </ul> -->
                    <ul class="navbar-nav">
                        <li style="color: #FFFFFF; font-weight: 700;" class="nav-item">
                            Name: {{ userData.username }}
                        </li>
                    </ul>
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a @click="logoutAction()" class="nav-link " style="color: #FFFFFF;" aria-current="page"
                                    href="#">Logout</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



            <div class="col-12 mt-4">
                <nav class="navbar navbar-expand-lg navbar-light listStyle">

                    <div class="column is-12" style="display: contents;">


                        <input class="form-control changeMediaStyle" name="task" v-model="task" style=" border-top-right-radius: 0px;
                               border-bottom-right-radius: 0px; height: 80px;" type="text"
                            placeholder="Add Today Task">

                        <button class="btn buttonMedia"
                            style=" border-top-left-radius: 0px;
                               border-bottom-left-radius: 0px; height: 80px; width:134px; background-color: #9395D3; color: white; font-weight: 700;"
                            type="button" @click="addTaskAction()">Add Task</button>

                    </div>
                </nav>
            </div>


            <div class="col-12 mt-4" v-for="(task, index) in taskData" :key="index">
{{console.log(task)}}
                <nav class="navbar navbar-expand navbar-dark listStyle">
                    <div class="container-fluid">
                        <div>
                            <div>

                                <a class="navbar-brand" style="color: #9395D3; font-size: 15px; font-weight: 700;"
                                    href="#">{{ task.task }}</a>

                            </div>
                            <div>
                                <a class="navbar-brand" style="color: black;  font-size: 11px; font-weight: 700;"
                                    href="#">{{ formatTaskDate(task.date) }}</a>

                            </div>
                        </div>
                        <div class="collapse navbar-collapse" id="mynavbar">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">

                                </li>
                                <li class="nav-item">

                                </li>
                                <li class="nav-item">
                                    <!-- <a class="nav-link" href="javascript:void(0)" style="color: black;">Edit</a> -->
                                </li>

                            </ul>
                            <div class=" d-flex">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item">
                                        
                                        <!-- <Modal :userData="userData" /> -->
                                        <a class="nav-link" @click="openModal(task)" href="javascript:void(0)"
                                            style="color: #9395D3;">

                                            <font-awesome-icon icon="edit" /></a>

                                        <Teleport to="body">

                                            <Transition name="modal">

                                                <div v-if="showModal" class="modal-mask">
                                                    <a href="#" @click="closeModal" class="close" />
                                                    <div class="modal-container">

                                                        <div class="container" id="app">

                                                            <div class="col-sm-12">
                                                                <div class="panel panel-default">

                                                                    <div class="panel-heading">
                                                                        <h3 style="text-align: center;">Edit Todo List</h3>
                                                                    </div>
                                                                    <div class="panel-body">
                                                                        <!-- <div class="column is-12">
                  <label class="label">Name</label>
                  <p class="control has-icon has-icon-right">
                    <input class="form-control" name="name" v-model="name" type="text" placeholder="Name">

                  </p>
                </div> -->



                                                                        <!-- <button class="btn btn-primary" v-on:click="addEvent">Edit</button> -->

                                                                        <div class="col-12 mt-4">
                                                                            <!-- <nav class="navbar navbar-expand-lg navbar-light "> -->

                                                                            <div class="column is-12 listStyle1"
                                                                                style="display: flex;">


                                                                                <input class="form-control" name="name"
                                                                                    v-model="taskDetails.task"
                                                                                    style=" height: 80px;" type="text"
                                                                                    placeholder="Add Today Task"
                                                                                    @input="handleInputChange($event, taskDetails)">

                                                                                <button class="btn"
                                                                                    style="height: 80px; width:134px; background-color: #9395D3; color: white; font-weight: 700;"
                                                                                    type="button" @click="EditTaskAction(taskDetails)" >Edit Task</button>

                                                                            </div>
                                                                            <!-- </nav> -->
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </Transition>
                                        </Teleport>

                                    </li>
                                    <li class="nav-item">
                                        <!-- <a class="nav-link" href="javascript:void(0)" style="color: #9395D3;"> <font-awesome-icon icon="trash" /></a> -->
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)" style="color: #9395D3;">
                                            <font-awesome-icon  @click="DeleteTaskAction(task.id)"  icon="trash" /></a>
                                    </li>
                                    <li class="nav-item">
                                        <!-- <a class="nav-link" href="javascript:void(0)" style="color: #9395D3;"> <font-awesome-icon icon="trash" /></a> -->
                                    </li>
                                   {{ console.log(task.status === 'panding')}}
                                    <li class="nav-item">
                                        <a v-if="task.status === 'pending'" class="nav-link" href="javascript:void(0)" style="color: #9395D3;">
                                            <font-awesome-icon icon="check" @click="UpdateStatusAction(task)" />
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a v-if="task.status === 'completed'" class="nav-link" href="javascript:void(0)" style="color: red;">
                                           Completed
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
           



        </div>
    </layout-div>
</template>
  
<script>

import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';
// import Modal from '../pages/ViewUpdateModelPage.vue'



export default {
    name: 'DashboardPage',
    components: {
        LayoutDiv,
        // Modal
    },
    data() {
        return {
            user: {},
            userData: {
                id: null,
                username: '',
                email: '',
                user: ""
            },
            taskData: [],
            task: "",
            updatedtask:"",
            taskDetails: {
            task: '',
            user:'',
            status:''
        }

        };
    },
    created() {
        console.log('Token from localStorage:', localStorage);

        this.getUser();
        this.getTask()
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
            this.$router.push('/')
        } else {
            this.getUser();
            this.getTask()
        }

    },
    methods: {

        addTaskAction() {

            let payload = {
                status: 'pending',
                task: this.task,
                user: this.userData.id
            }

            axios.post('https://geetanjaljangde.pythonanywhere.com/todo_task/', payload, { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
                .then(response => {

                    this.getTask()
                    location.reload();
                    return response
                })
                .catch(error => {
                    this.isSubmitting = false
                    if (error.response.data.errors != undefined) {
                        this.validationErrors = error.response.data.errors
                    }
                    return error
                });
        },


        getTask() {
            axios.get('https://geetanjaljangde.pythonanywhere.com/todo_task/', { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
                .then(response => {
                    console.log(response)
                    this.taskData = response.data

                })
                .catch(error => {
                    return error
                })
        },

        formatTaskDate(dateString) {
            const date = new Date(dateString);

            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'UTC', // Replace 'UTC' with your server's time zone
            };

            // Use Intl.DateTimeFormat for formatting
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },

        getUser() {
            // axios.get('/api/user', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            //     .then((r) => {
            //         this.user = r.data;
            //         return r
            //     })
            //     .catch((e) => {
            //         return e
            //     });

            axios.get('https://geetanjaljangde.pythonanywhere.com/profile/', { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
                .then(response => {
                    this.userData.id = response.data.id;
                    this.userData.username = response.data.username;
                    this.userData.email = response.data.email;
                    this.userData.user = response.data.user;

                })
                .catch(error => {
                    return error
                })
        },

  handleInputChange(event,taskDetails) {

        // console.log('Input value changed:', event.target.value);
        this.taskDetails.task= event.target.value
        this.taskDetails.user= taskDetails.user
        this.taskDetails.status= taskDetails.status

    },


    UpdateStatusAction(taskDetails){

       
        console.log(taskDetails)

        let payload = {
                task:taskDetails.task,
                user:taskDetails.user,
                status:'completed'
              
            }

            console.log(payload)


            axios.put(`https://geetanjaljangde.pythonanywhere.com/todo_task/${taskDetails.id}/`,payload, { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
                .then(response => {
                  console.log(response)
                //   if (response.status === 200) {
                    location.reload();

// Redirect to the dashboard
this.$router.push('/dashboard')
            // }
                 
                })
                .catch(error => {
                    return error
                })
    },


        EditTaskAction (taskDetails){

            console.log(taskDetails)

            let payload = {
                task:this.taskDetails.task,
                user:this.taskDetails.user,
                status:this.taskDetails.status
              
            }

            // console.log(payload,id)


            axios.put(`https://geetanjaljangde.pythonanywhere.com/todo_task/${taskDetails.id}/`,payload, { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
                .then(response => {
                  console.log(response)
                //   if (response.status === 200) {
                    location.reload();

// Redirect to the dashboard
this.$router.push('/dashboard')
            // }
                 
                })
                .catch(error => {
                    return error
                })


        },




        DeleteTaskAction (id){

// console.log(payload,id)

console.log(id)


axios.delete(`https://geetanjaljangde.pythonanywhere.com/todo_task/${id}/`, { headers: { Authorization: 'token ' + localStorage.getItem('token') } })
    .then(response => {
      console.log(response)
    //   if (response.status === 200) {
        location.reload();

// Redirect to the dashboard
this.$router.push('/dashboard')
// }
     
    })
    .catch(error => {
        return error
    })


},


        logoutAction() {
            console.log("dfghjkl")

            localStorage.setItem('token', null)
            this.$router.push('/')


        }

    },
};
</script>
<script setup>

// import Modal from '../pages/UpdateModelPage.vue'
import { ref  } from 'vue'

// import axios from 'axios';


const showModal = ref(false)
const taskDetails = ref('')


const openModal = (task) => {
    console.log(task)


    showModal.value = true;

    taskDetails.value = task
    //  getTask() {
    //       axios.get(`https://geetanjaljangde.pythonanywhere.com/todo_task/${}`,{ headers: { Authorization: 'token ' + localStorage.getItem('token')}})
    //          .then(response => {
    //           console.log(response)
    //                   this.taskData = response.data

    //          })
    //          .catch(error=>{
    //            return error
    //          })
    //       },
};

const closeModal = () => {
    showModal.value = false;
};


</script>


<style>
.NavabarStyle {
    background-color: #9395D3;
    height: 80px;
}

.listStyle {
    background-color: #ffff;
    height: 80px;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.listStyle1 {
    background-color: #ffff;
    height: 80px;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.AddButtonStyle {
    background-color: #c7c8ed;
    height: 80px;
}

.addbutton {
    display: flex;
    justify-content: center;
    background: #9395D3;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

}

.containerStyle {
    background-color: #c7c8ed;
    height: 100vh;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 50%;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.close {
    position: absolute;
    right: 23%;
    top: 34%;
    width: 32px;
    height: 32px;
    opacity: 0.3;
}

.close:hover {
    opacity: 1;
}

.close:before,
.close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: black;
}

.close:before {
    transform: rotate(45deg);
}

.close:after {
    transform: rotate(-45deg);
}

.changeMediaStyle{
    width:"80%";
  border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 80px;
}



@media (min-width: 769px) and (max-width: 990px) {
    /* Add your styles for screens between 769px and 1024px here */
    .changeMediaStyle {
        width: 75%;
    }

    .listStyle{
        display: flex;
    flex-direction: column;
    }
}
@media  (min-width: 623px) and (max-width: 768px) {
    /* Add your styles for screens smaller than 768px here */
    .changeMediaStyle {
        width: 75%;
    }

    .listStyle{
        display: flex;
    flex-direction: column;
    }
}

@media (min-width: 403px) and (max-width: 623px) {
    /* Add your styles for screens between 769px and 1024px here */
    .changeMediaStyle {
        width: 60%;
    }

    .listStyle{
        display: flex;
    flex-direction: column;
    }
}
@media (min-width: 200px) and (max-width: 403px) {
    /* Add your styles for screens between 769px and 1024px here */
    .changeMediaStyle {
        width: 40%;
    }

    .listStyle{
        display: flex;
    flex-direction: column;
    }


}

</style>

<playground-resources lang="json">{
    "css": [
        "https://use.fontawesome.com/releases/v5.1.0/css/all.css"
    ]
}</playground-resources>