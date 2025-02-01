<template src="./CheckoutComponent.html">
</template>
<script lang="ts">
import { Options, Vue,  } from 'vue-class-component';
import { mapGetters } from 'vuex';
import ShippingComponent from './Shipping/ShippingComponent.vue';
@Options({
    computed: {
    ...mapGetters(['cartCount']),
    },
    components: {
      ShippingComponent
    }
})
export default class CheckoutComponent extends Vue {
  public  breadcrumbList: any = [];

  public created() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
  }
  public gotoCart() {
    this.$router.push('/carts');
  }

  public routeTo(to: any) {
    this.$router.push(this.breadcrumbList[to].to)
  }

}
</script>
<style lang="scss" scoped>
// .breadcrumb {
//   display: flex;
//   font-size: 2rem;
//   height: 3rem;
//   justify-content: center;
//   flex-direction: row;
//   flex: 1;
//     &>* {
//       margin-left: 2rem;
//     }
//     .item {
//       display: flex;
//       justify-content: center;

//     }
//   .bread-ul {
//     display: flex;
//     list-style: none;
//     &>* {
//       margin-left: 2rem;
//     }
//     li {
//      // background: gray;
//     }
//   }
//   .linked {
//     color: blue;;
//     cursor: pointer;
//   }
//   .linked:not(:last-child)::after {
//     content: '\00BB';
 
//   }
// }
.parent {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  height: 10%;
.breadcrumb {
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  cursor: pointer;
  flex: 1;
  text-decoration: none;
  height: 90%;
    @media only screen and (max-width:450px) {
    font-size: 1.8rem;
  }
   &>* {
      margin-left: 2rem;
    }
}
.router-link-active {
  color: red;
}
}
</style>