
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    
    <div v-if="props.show" class="modal-mask">
      <a href="#" @click="$emit('close')" class="close"/>
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
                        
                        <div class="column is-12 listStyle1" style="display: flex;">

                         
                            <input class="form-control" name="name" v-model="name" style=" height: 80px;" type="text" placeholder="Add Today Task">
                          
                            <button class="btn"
                                style="height: 80px; width:134px; background-color: #9395D3; color: white; font-weight: 700;"
                                type="submit">Edit Task</button>
                            
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
</template>

<style>
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
.close:before, .close:after {
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
</style>