<!-- 
<script setup>

import Modal from '../pages/UpdateModelPage.vue'
import { ref } from 'vue'

const showModal = ref(false)

</script>

<template>

  <ul class="navbar-nav addbutton">
                                <li class="nav-item">
                                    <a  @click="showModal = true" class="nav-link " style="text-align: center; font-size: 22px; color:  #FFFFFF;" aria-current="page"
                                        href="#">+</a>
                                </li>
                            </ul>
  <Teleport to="body">
  
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template> -->



<script setup>

import Modal from '../pages/UpdateModelPage.vue'
import { ref } from 'vue'
// import axios from 'axios';


const showModal = ref(false)

const openModal = (props) => {
  console.log(props)
  showModal.value = true;
  //  getTask() {
  //       axios.get(`http://127.0.0.1:8000/todo_task/${}`,{ headers: { Authorization: 'token ' + localStorage.getItem('token')}})
  //          .then(response => {
  //           console.log(response)
  //                   this.taskData = response.data
                
  //          })
  //          .catch(error=>{
  //            return error
  //          })
  //       },
};

// const closeModal = () => {
//   showModal.value = false;
// };
</script>

<template>
   <a class="nav-link" @click="openModal"  href="javascript:void(0)" style="color: #9395D3;">
                                              
                                              <font-awesome-icon icon="edit" /></a>

  <Teleport to="body">
  
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>
