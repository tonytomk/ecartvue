<template src="./RegisterComponent.html">
</template>
<script lang="ts">

import { UserData } from '../../../../interfaces/UserManagementModels';
import { defineComponent } from 'vue';


export default defineComponent  ({
    name: "RegisterComponent",
    setup(props, ctx) {
        console.log("hi")
        let userData: UserData = {
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
};

return {userData}
    },
// public error = '';

//     $store: any;
//     public register(): void {
//         this.$store.dispatch('register', {
//             userName: this.userData.userName,
//             email: this.userData.email,
//             password: this.userData.password,
//             phoneNumber: this.userData.phoneNumber,
//             firstName: '',
//             lastName: '',
//         }).then(() => {
//            // this.$router.push('/dashboard');
//            this.$emit('onSuccessLogin', true);
//         }).catch((err: string) => {
//            this.error = err;
//         });
 //   }
})
</script>
<style lang="scss">
// .reg-from {
//     display: flex;
//     flex-direction: column;
//     p {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//     }
//     .button {
//         align-self: center;
//     }
   
// }
</style>

