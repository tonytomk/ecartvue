<template src="./HeaderComponent.html">

</template>
<script lang="ts">

import { mapGetters } from 'vuex';
import { DialogueConfig, UserManagement } from '../../interfaces/UserManagementModels'
import UserManagementComponent from '@/components/Header/UserManagement/UserManagementComponent.vue';
import { defineComponent, reactive } from 'vue';
import { authComputed } from '../../store/helpers';
import { useRouter } from "vue-router"
import * as  store from '@/store/index'

export default defineComponent({
  name: "HeaderComponent",
  components: { UserManagementComponent },
  computed: {
    ...mapGetters(['cartCount']),
    ...authComputed,
  },
  setup(props, ctx) {
    let userManagement: UserManagement = UserManagement.Login;
    let loginConfig: any = reactive({
      show: false,
      errorMsg: ""
    });
    const router = useRouter()
    function gotoCart() {
      router.push('/carts');
    }
    function loginClick() {
      loginConfig.show = true;
      userManagement = UserManagement.Login;
    }
    function registerClick(): void {
      loginConfig.show = true;
      userManagement = UserManagement.Register;
    }
    function switchTab(): void {
      // userManagement = UserManagement.Register;
    }
    function cancel(): void {
      loginConfig.show = false;
    }

    // const  welcometitle = (): string => {
    //   if (store.getters["getUserData"]) {
    //       console.log(this.$store.getters.getUserData);
    //       return `Welcome ${this.$store.getters.getUserData.username}`;

    //   } else {
    //     return '';
    //   }
    // }
    return { loginClick, registerClick, switchTab, loginConfig, userManagement, cancel }
  },

})
</script>
<style lang="scss">
.icon {
  font-size: 3rem;
  margin: 1rem;
  color: darkred;
  cursor: pointer;
}

.count {
  font-size: 2rem;
  color: darkblue;
  height: 2rem;
  width: 2rem;
  padding: 0px;
  position: absolute;
  top: 0rem;
  background: rgb(214, 21, 166);
  right: 0rem;
  border-radius: 50%;
  // transform: translateY(150px);
  transition: height .4s .1s, width .4s .1s, box-shadow .3s;
  transition-timing-function: cubic-bezier(.67, .17, .32, .95);
}

.user_section {
  display: flex;
  align-items: center;
}
</style> $router: any;
$store: any;
