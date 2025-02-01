<template src="./CartsComponent.html"> </template>
<script lang="ts">
import { Options, Vue,  } from 'vue-class-component';
import { mapGetters } from 'vuex';
@Options({
     computed: {
    ...mapGetters(['cartCount']),
    },
})
export default class CartsComponent extends Vue {
  public created() {
    console.log('carts');
  }

  public checkout() {
      this.$router.push('/checkout/info');
  }

}
</script>
<style lang="scss" scoped>
.grid-header {
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-width: 90rem;
    margin-left: 2rem;
    font-size: 2rem;
}
.data {
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-left: 2rem;
    &>* {
        margin-top: 2rem;
        max-width: 60rem;
    }
    .item-image {
       display: flex;
      // flex-basis: 10rem;
      .title {
          text-align: left;
      }
    }
    
}
table {
    width: 100%;
    font-size: 1.5rem;
    .image {
       width: 20%;
       height: 30%;
         @media only screen and (max-width:450px) {
             width: 70%;
             height: 50%;
         }
    }
    .image-td {
        display: flex;
        flex: 1;
        width: 100%;
        font-size: 1.2rem;
        margin: 1rem;
        padding: 1rem;
        text-align: left;
        min-width: 30rem;
         @media only screen and (max-width:450px) {
        display: flex;
        flex-direction: column;
        margin: 0;
        min-width: 10rem;
      }
    }
    .title {
        text-align: left;
        margin: 3px;
    }
    td {
        width: 30%;
    }
    th {
        font-size: 2rem;
      @media only screen and (max-width:450px) {
      font-size: 1rem;
      }
       
    }
    .input {
        width: 20%;
    }
}
.total {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin-left: 50%;
    &> * {
        margin-left: 14rem;
    }
      @media only screen and (max-width:450px) {
           margin: 0;
         }
    
}
.checkout {
    display: flex;
    margin-top: 5rem; 
    margin-bottom: 5rem; 
    justify-content: flex-end;
    margin-right:15rem;
     .btn {
        display: inline-block;
        width: 10rem;
        height: 4rem;
        background: linear-gradient(to right, gray, white);
        color: red;
        border: none;
        cursor: pointer;
        border: rgb(16, 175, 223) 1px solid;
    }
}
</style>
