<template>
    <div class="container py-5 h-500" >
      <div class="row d-flex justify-content-center align-items-center h-100" style="padding-top: 25px;">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6" style="background-color: #eee;" >
                <div class="card-body p-md-5 mx-md-4" >
                  <div class="text-center">
                    <h4 class="mt-1 mb-5 pb-1">LIBRARY MANAGEMENT SYSTEM</h4>
                  </div>
                  <form @submit.prevent="submitForm">
                    <p>Please login to your account</p>
                    <div class="form-outline mb-4">
                      <input type="text" id="form2Example11" class="form-control"
                             placeholder="Username" v-model.trim="userName"/>
                    </div>
                    <div class="form-outline mb-4">
                      <input type="password" id="form2Example22" class="form-control"
                             placeholder="Password" v-model.trim="password"/>
                    </div>
                    <p v-if="!formIsValid" style="color: red"> Please enter a valid username or password</p>
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">{{submitButtonCaption}}</button><br/>
                     <a class="text-muted" href="#!">Forgot password?</a>
                    </div>
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn btn-outline-danger" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center" style="background: linear-gradient(to right, #c33764, #1d2671);">
                <div class="text-black px-3 py-4 p-md-5 mx-md-2">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {showErrorMessage} from '../shared/NotificationuUtils'
import TheCounterVue from '@/components/TheCounter.vue';
import FavouriteValueVue from '@/components/FavouriteValue.vue';

export default {
  components:{
    TheCounterVue,
    FavouriteValueVue
  },
  data(){
    return {
      userName: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    }
  },
  computed:{
    submitButtonCaption(){
      if(this.mode === 'login'){
        return 'Login';
      }else{
        return 'Signup';
      }
    },
    switchModeButtonCaption(){
      if(this.mode === 'login'){
        return 'Signup instead';
      }else{
        return 'Login instead';
      }
    },
    counter(){
      return this.$store.state.counter;
    }
  },

  methods: {
    submitForm(){
      this.formIsValid = true;
      if(this.userName === '' || !this.email.includes('@') || this.password.length< 6){
        this.formIsValid = false;
        showErrorMessage("Invalid username or password!")
        return;
      }
      //send http request
    },

    switchAuthMode(){
      if(this.mode === 'login'){
        this.mode = 'signup';
      } else{
        this.mode = 'login';
      }
    },

    addOne(){
      console.log("This is calling.....")
      this.$store.commit('increment', {value: 10});
    }
}

}
</script>
