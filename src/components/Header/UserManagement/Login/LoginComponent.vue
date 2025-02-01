<template src="./LoginComponent.html">
</template>
<script lang="ts">
import{ ApplicationUser } from '../../../../interfaces/UserManagementModels';
// import {VueApiServices} from '@/services/VueApiServices';

import { mapState } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "LoginComponent",
    setup(props, ctx) {
    let applicationUser: ApplicationUser | null = null;
    let error = '';
    let loginUser: ApplicationUser = {
        Username: '',
        Password: '',
    };
   
   // private _subscriptions: Subscription[] | null = null;
    //  public mounted(): void {
    //         // this._subscriptions = [];
    //         // this._subscriptions.push(this.userRegistrationStateService.userRegistrationData
    //         //     .subscribe((applicationUsers: ApplicationUser | null) => {
    //         //     this.applicationUser = applicationUsers;
    //         // }));
    //  }
    function  loginClick(): void {
        ctx.emit('onSuccessLogin', true);
        // this.$store.dispatch('login', {
        //     userName: this.loginUser.Username,
        //     password: this.loginUser.Password,
        // })
        // .then(() => {
        //      this.$emit('onSuccessLogin', true);
        // })
        // .catch((err: string) => {
        //    this.error = err;
        // });

        // await  this.vueApiService.login(this.loginUser).then( (response) => {
        //     if (response.data) {
        //         localStorage.setItem('Token', response.data.token);
        //         this.applicationUser = {
        //             Username: this.loginUser.Username,
        //             Password: this.loginUser.Password,
        //             Token: response.data.token,
        //             Validity: response.data.expiration,
        //         };
        //         // mapState({
        //         //     userData: (state) => this.applicationUser,
        //         // });
        //         this.userRegistrationStateService.updateUserData(this.applicationUser);
        //         this.$emit('onSuccessLogin', true);
        //     }
        // });
    }
    // $emit(arg0: string, arg1: boolean) {
    //     throw new Error('Method not implemented.');
    // }

    // public destroyed(): void {
    //         if (!this._subscriptions) {
    //             return;
    //         }
    //         this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    // }
        return {loginUser, loginClick, applicationUser, error}
    },
   
})
</script>
<style lang="scss">


</style>

