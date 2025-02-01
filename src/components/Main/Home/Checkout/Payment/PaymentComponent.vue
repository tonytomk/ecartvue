<template src="./PaymentComponent.html"> </template>
<script lang="ts">
import { Options, Vue,  } from 'vue-class-component';
import { mapGetters } from "vuex";


@Options({
  computed: {
    ...mapGetters(["cartCount"]),
  },
})
export default class PaymentComponent extends Vue {
    public stripe: any;
    public razorInstance: any;
    public Razorpay: any;
    public window: any;
  
public  payment(event: any): void {
   /* eslint-disable */
    const logo = require(`./../../../../../assets/logo.png`);
    const options = {
      "key": "ADD your key",
      "amount": 30000, // 2000 paise = INR 20, amount in paisa
      "name": "TTK",
      "description": "Purchase Description",
      "image": logo,
      "handler": function (response: any){
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": "Tony Tom K",
        "email": "tonytomk007@gmail.com"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#1366eb"
      }
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
}

}


</script>
<style lang="scss" scoped>
.payment {
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  @media only screen and (max-width:450px) {
    flex-direction: column;
  }
  .left {
    display: flex;
    flex: 1;
    flex-direction: column;
  @media only screen and (max-width:450px) {
    order: 2;
  }
    & > * {
      text-align: left;
      margin: 1rem;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }
    .shipping {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }
    .payment {
      display: flex;
      flex-direction: column;
      span {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        margin: 2rem;
      }
      label {
        margin-left: 2rem;
      }
      .btn {
        display: flex;
        justify-content: flex-start;
        margin: 1rem;
        .button {
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
    }
  }
  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    @media only screen and (max-width:450px) {
    order: 1;
  }
    & > * {
      margin: 1rem;
    }
    .cart {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      margin: 1rem;
      .items {
        display: flex;
        justify-content: space-between;
        margin: 2rem;
      }
    }
  }
  legend {
    text-align: left;
    margin: 1rem;
  }
}
</style>
