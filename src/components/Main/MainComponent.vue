<template>
<div class="main-panel">
    <!-- <left-component></left-component> -->
    <router-view />
    <keep-alive/>
</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LeftComponent from '@/components/Left/LeftComponent.vue';

@Options({
    components: { LeftComponent },
})
export default class  MainComponent extends Vue {

}
</script>
<style lang="scss" scoped>

  .main-panel {
    display: flex;
    flex-direction: row;
    min-height: 100%;
  }

</style>

