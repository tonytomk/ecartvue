<template src="./UserManagementComponent.html"> </template>
<script lang="ts">
import {
  DialogueConfig,
  UserManagement,
} from "../../../interfaces/UserManagementModels";
import LoginComponent from "./Login/LoginComponent.vue";
import RegisterComponent from "./Register/RegisterComponent.vue";
import ModalComponent from "@/components/Shared/ModalComponent.vue";
import { PropType, computed, defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: "UserManagementComponent",
  props: {
    userManagement: {
      type: Number as PropType<UserManagement>,
    },
    config: {
      type: Object as PropType<{ show: false, errorMsg: "" }>,
      required: true,
    },
  },
  emits: ['switch-tab'],
  components: { LoginComponent, RegisterComponent, ModalComponent },
  setup(props, ctx) {
    const { userManagement, config } = toRefs(props);
    let switchForm: any = ref(Number);
    // eslint-disable-next-line
    switchForm.value = props.userManagement;
    console.log('switchForm' + switchForm.value);

    const dialogueTitile = computed(() => {
      switch (switchForm.value) {
        case UserManagement.Login:
          return "Login";
        case UserManagement.Register:
          return "Register";
        default:
          return "Login"
      }

    })

    function signUp(): void {
      switchForm.value = 1;
    }

    function login(): void {
      switchForm.value = 0; 
    }

    function cancelDialogue(): void {
      //props.config.show = false;
    }
    function successLogin(): void {
      //props.config.show= false;
    }
    return { signUp, login, successLogin, cancelDialogue, switchForm, dialogueTitile }
  },
  //  @Watch("userManagement", { deep: true }) public userDataChanged(): void {
  //   this.switchForm = this.userManagement;
  // }
  // watch: {
  //   userManagement(newVal) {
  //     if(newVal) {
  //       this.$nextTick(() => {
  //         this.switchForm = newVal;
  //       })
  //     }
  //   }
  // }

})
</script>
<style lang="scss">
.content {
  display: flex;
  // flex: 0 1 300px;
}

.modal-body {
  font-size: 1.5rem;
}

.modal-footer {
  font-size: 12px;
}

.button {
  background: #0a2b4e;
  display: inline-flex;
  height: 50px;
  width: 100%;
  margin: 0.25em 0;
  padding: 0 30px;
  color: #fff;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  line-height: 44px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.55s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  position: relative;

  &__link {
    background: 0 0;
    border: none;
    padding: 0;
    color: #0a2b4e;
  }
}

.form {
  display: flex;
  flex-direction: column;

  &__group:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__input {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    font-family: inherit;
    border-radius: 2px;
    background-color: rgba(grey, 0.5);
    text-align: left;
    border: none;
    border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    transition: all 0.2s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(#000, 0.1);
      border-bottom: 3px solid green;
    }

    &:focus:invalid {
      border-bottom: 3px solid red;
    }

    &::-webkit-input-placeholder {
      color: grey;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    position: relative;
    text-align: left;
  }

  &__input:placeholder-shown+&__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}
</style>
