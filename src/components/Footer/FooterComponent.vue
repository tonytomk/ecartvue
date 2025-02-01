<template src="./FooterComponent.html">
    
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// @Component({
   
// })
export default class FooterComponent extends Vue {
   public  visibleoffset!: any;
   public visibleoffsetbottom!: any;
   public visible: any = false
   public  window: any;
  public enabled = false;
   public scrollFn!: any;
  public created() {
     window.onscroll = () => {
       this.scrollButton()
       };
 
  }
  

 public scrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
   // alert('hi');
    this.enabled = true;
  }
 }

 public scrollToTop() {
       // window.scrollTo(0,0);
      // window.scrollTo(0,0);
       // this.window.smoothscroll()
  
  const smoothScroll = (i: any) => {
  console.log(i);
  if (i >= 0) {
    setTimeout(() => {
      window.scrollTo(0, i);
      smoothScroll(i - 8);
      i = i - 8;
    }, 10);
  } else {
     window.scrollTo(0, 0);
    return;
  } 

}
smoothScroll(500);
  }
}
</script>
<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to left bottom, #14e0e7 40%, #048ece 50%);
    color:white;
    font-size: 1.5rem;
    align-items: center;
    height: 20%;
    color: black;
    padding: 1rem;
     @media only screen and (max-width:450px) {
      height: 25%;
     }
    .copy-right {
         font-size: 1.5rem;
    }
    .gototop {
        background: linear-gradient(to bottom left, #14e0e7 40%, #048ece 50%);
       // padding: 1rem;
       // margin: 1rem;
        border-radius: 50%;
        border: 1px solid;
        cursor: pointer;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    .button-style {
      display: none;
    }
}
</style>