<template src="./DetailsComponent.html"> </template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { useRoute, useRouter } from 'vue-router';

export default  defineComponent ({
  name: 'DetailsComponent',
  setup(props, ctx) {
    let itemNo: any;
  let imagePath: any = "";
  let rootPath = `@/assets/images/`;
  let scaleFactor = 0;
  let resizeCheckInterval: any = 0;
  let zoomed = false;
  let item1 = false;
  let item2 = false;
  let item3 = false;
  let item4 = false;
  let item5 = false;
  let numberOfStars = [
    {
      selected: false,
    },
    {
      selected: false,
    },
    {
      selected: false,
    },
    {
      selected: false,
    },
    {
      selected: false,
    },
  ];
  const routes = useRoute()
  const router = useRouter()
  const infoBox = ref(HTMLElement);
  const zoom1 = ref(HTMLElement);
  const normal1 = ref(HTMLElement);
  const container1 = ref(HTMLElement);
  // loadIm();
  // function loadIm() {
  //   itemNo = "";
  //   if (routes.params) {
  //     itemNo = routes.params.param1;
  //     imagePath = rootPath + history.state.imageLocalPath;
  //   }
    //console.log(getImagePath);
 // }

  function mounted() {
    scaleFactor = 2;
    const zoom: any =zoom1.value as any;
    if (zoom) {
      zoom.style.transform = "scale(" + scaleFactor + ")";
    }
  }
  const getImagePath = computed(() =>  {
    if (routes.params.imageLocalPath) {
      return require(`../../../../assets/images/` +
      routes.params.imageLocalPath);
    } else {
      return require(`../../../../assets/images/` +
      history.state.imageLocalPath);
    }
 // }
})

  function mouse(event: any, index: any) {
    const box = infoBox.value as any;
    numberOfStars.forEach((x: any, value) => {
      if (value <= index) {
        x.selected = true;
      } else {
        x.selected = false;
      }
    });
  }

  const getNoOfStars =computed(() => {
    return numberOfStars.filter((x) => x.selected == true).length;
  })

  function back() {
    router.push("/");
  }


  function touchzoom(event: any) {
    move(event);
    zoomed = !zoomed;
  }
  
  function zoom() {
    const zoom: any = zoom1.value as any;
    zoom.style.opacity = 1;
    const normal: any = normal1.value as any;
    normal.style.opacity = 0;
  }

  function unzoom() {
    const zoom: any = zoom1.value as any;
    zoom.style.opacity = 0;
    const normal: any =normal1.value as any;
    normal.style.opacity = 1;
  }

  function pageOffset(element: any) {
    const rect = element.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      y: rect.top + scrollTop,
      x: rect.left + scrollLeft,
    };
  }
  function move(event: any) {
    const container = container1.value as any;
    console.log(container);
    const offset = pageOffset(container);

    const zoom = zoom1.value as any;
    const normal = normal1.value as any;
    const relativeX = event.clientX - offset.x + window.scrollX;
    const relativeY = event.clientY - offset.y + window.scrollY;
    const normalFactorX = relativeX / normal.offsetWidth;
    const normalFactorY = relativeY / normal.offsetHeight;
    const x =
      normalFactorX *
      (zoom.offsetWidth * scaleFactor - normal.offsetWidth);
    const y =
      normalFactorY *
      (zoom.offsetHeight * scaleFactor - normal.offsetHeight);
    zoom.style.left = -x + "px";
    zoom.style.top = -y + "px";
  }
  return {move, pageOffset, unzoom,zoom, touchzoom,back, getNoOfStars, zoomed,mouse, getImagePath,numberOfStars, zoom1, normal1,container1  }
  },
  

  
})
</script>
<style lang="scss" scoped>
.details {
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin: 1rem;
  @media only screen and (max-width:450px) {
  display: flex;
  flex-direction: column;
  }
  .left {
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     height: 100%;
     flex-basis: 30%;
     margin-left: 10px;
     @media only screen and (max-width:450px) {
      order: 1;
      width: 100%;
      margin:0 auto;
     }
    .image-container {
      width: 100%;
      height: 50%;
      //flex-basis: 20%;
      // height: 50%;
     // overflow: hidden;
      // .image {
      //   width: 100%;
      //   height: 100%;
      //   // border-radius: 50%;;
      //   transition: transform 0.5s ease;
      //   &:hover {
      //     transform: scale(1.5);
      //   }
      // }
      @media only screen and (max-width:450px) {
      width: 100%;
      height: 75%;
      }
      .zoom-on-hover {
       position: relative;
       overflow: hidden;
       width: 100%;
       height: 100%;
      }
      .zoom-on-hover .normal {
        width: 100%;
        height: 100%;
      }
      .zoom-on-hover .zoom {
        position: absolute;
        opacity: 0;
        transform-origin: top left;
      }
      .zoom-on-hover.zoomed  .zoom {
        opacity: 1;
      }
      .zoom-on-hover.zoomed  .normal {
        opacity: 0;
      }
    }
    .ratings {
      font-size: 2rem;
    }
    .icon {
      font-size: 2rem;
    }
  }
  .items {
    display: flex;
    flex-basis: 60%;
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media only screen and (max-width:450px) {
      order: 2;
     }
    .data {
      //  padding: 2rem;
      text-align: left;
    }
    .border {
      display: inline-flex;
      width: 100%;
      border: 2px solid gray;
    }
    .btn {
      display: inline-block;
      width: 10rem;
      height: 4rem;
      background: linear-gradient(to right, gray, white);
      color: red;
      border: none;
      cursor: pointer;
    }
    & > * {
      margin-bottom: 1rem;
    }
  }

  .review {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .ta,
    input {
      text-align: left;
      @media only screen and (max-width:450px) {
      width: 100%;
     }
    }
    .icon-rating {
      font-size: 2rem;
      &:hover {
        color: orange;
      }
    }
    .color {
      color: orange;
    }

    & > * {
      margin-bottom: 1rem;
    }
  }
}
</style>
