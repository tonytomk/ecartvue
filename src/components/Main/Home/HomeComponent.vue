<template src="./HomeComponent.html">
</template>
<script lang="ts">

import { authComputed } from '@/store/helpers';
import { computed, defineComponent, reactive } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// @Component({
//     // computed: {
//     // ...authComputed,
//     // },
// })
export default defineComponent ({
  name: 'HomeComponent',
  computed: {
    ...authComputed,
  },
  setup(props, ctx) {
    let cartItems: any = reactive([]);
    let cartData: any = reactive([{}]);
    let itemPerPage = 12;
    let currentPage = 1;
    const router = useRouter()
    const cartStore = useStore()
    loadData();
    function addToCart(item: any) {
      // this.cartItems.push(item);
      cartStore.dispatch('updateData', item);
      console.log(cartItems);
    }
  function loadData() {
    cartItems = require('@/assets/data/data.json');
    cartData = cartItems.cartData;
    // console.log()
    //this.$forceUpdate();
  }

  const  getPageData =computed(() =>  {
     const start = (currentPage - 1) * itemPerPage;
     const end = start + itemPerPage;
     const  newdata = cartData.slice(start, end);
     return  newdata;
  })
  
  function changePage(page: number) {
      currentPage = page;
  }
  function NumberOfPages() {
    return Math.ceil(cartData.length / itemPerPage);
  }

  function loadImage(imapgePath: string) {
    return require(`../../../assets/images/`+imapgePath);
  }

  function more(item: any) {
    console.log(item);
    let data = item;
    const localP = item.imageLocalPath;
    router.push({
      name:'details',
      params: {
        param1: "sdsd",
        bookname: 'sapiens',
        collection:'autobiography',
        imagelocalpath: localP,
      },
      state: item
    });
  }
  return {cartItems, cartData, itemPerPage, currentPage, addToCart, loadData, more, loadImage, NumberOfPages, changePage, getPageData}
  },
  

  

 

})
</script>
<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: column;
  flex: 1;
  order: 2;
  height: 100%;
 .main-cards {
       display: flex;
       flex:1;
      // order: 2;
       flex-grow:100;
      //  overflow: auto;
      margin: 0 auto;
        width: 100%;
       height: 100%;
       flex-wrap: wrap;
     
.cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: 1.5rem;
      margin:0 auto;
      justify-content: center;
      flex: 1;
      height: 100%;
      // overflow: auto;
      .card {
        display: flex;
        border: 1px solid;
        flex: 0 0 20rem;
        height: 30rem;
        flex-direction: column;
        background: white;
        font-size: 1.5rem;
        margin:3rem;
        justify-content: space-between;
        .item-title {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          border-bottom: 1px solid lightgrey;
          padding: 1px;
        }
        .item-description {
          display: flex;
          justify-content: space-around;
        }
         .image {
           width: 100%;
           height: 100%;
           max-height: 20rem;
         }
         .buttons {
           display: flex;
           justify-content: space-around;
           align-content: flex-end;
           //margin-bottom: 1rem;
           .btn {
             display: inline-block;
             width: 10rem;
             height: 4rem;
             background: linear-gradient(to right, gray, white);
             color: red;
             border: none;
             cursor: pointer;
           }
         }
         .link-button {
             text-decoration: none;
             border: none;
             color: blue;
             cursor: pointer;
               &:active,
               &:focus {
                outline: none;
                }
         }
      }

      
    }
 }

 .indexing {
   display: flex;
   justify-content: center;
   margin: 0 auto;
   & >* {
     list-style: none;
     margin: 1rem;
     border-radius: 20%;
     background: darkblue;
     padding: 1rem;
     font-size: 2rem;
     cursor: pointer;
     color: white
   }
 }
}

</style>