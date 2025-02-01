<template src="./InfoComponent.html">
</template>
<script lang="ts">
import { Options, Vue,  } from 'vue-class-component';
import { mapGetters } from 'vuex';

@Options({
    computed: {
    ...mapGetters(['cartCount']),
    },
})
export default class InfoComponent extends Vue {

public shipping() {
 this.$router.push('/checkout/shipping');
}

}
</script>
<style lang="scss" scoped>
.information {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    border: 1px solid gray;
    padding: .5rem;
    justify-content: flex-start;
    margin: 5%;
    width: 50%;
    text-align: left;
    font-size: 2rem;
  @media only screen and (max-width:450px) {
    width: 85%;
    font-size: 1.5rem;
  }
    .row {
        display: flex;
        justify-content: space-between;
        margin: 2rem;
        input {
            text-align: left;
        }
    }
    .next {
        display: flex;
        justify-content: flex-end;
        margin: 2rem;
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
      
}
</style>