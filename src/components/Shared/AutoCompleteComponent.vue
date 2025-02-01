<template src="./AutoCompleteComponent.html">
</template>

<script lang="ts">

import { Options, Vue,  } from 'vue-class-component';
import { DropDown } from '../../interfaces/AutoCompleteModel';
@Options({
  components: {},
})
export default class AutoCompleteComponent extends Vue {
 // @Prop() public dropDownItems!: DropDown[];
 // public dropData: DropDown[] = this.dropDownItems;
  public search = '';
  public results: DropDown[] = [];
  public isOpen = false;
  public isBlur = false;
  public arrowCounter = -1;

  public onChange(): void {
    this.isOpen = true;
    this.filterResults();
  }
  public filterResults(): void {
    // if (this.dropData) {
    //   this.results = this.dropData.filter((item: DropDown) =>
    //     item.value.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    // }
  }

  public setResult(result: DropDown): void {
    this.search = result.value;
    this.isOpen = false;
    this.$emit('selectedValue', result);
  }
  public closePopup() {
    this.isOpen = false;
  }
  public get displayItems(): boolean {
    if (this.isOpen) {
      return true;
    } else {
      return false;
    }
  }

  // @Watch('dropDownItems', { deep: true }) public dropDownItemsChanged(): void {
  //   this.dropData = this.dropDownItems;
  //   this.search = '';
  // }
}
</script>

<style lang="scss">
.autocomplete {
  display: inline-block;
  width: 350px;
  position: relative;

  input {
    width: 350px;
  }

  &__results {
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
    width: 350px;
    height: 150px;
    overflow: auto;
    position: absolute;
    z-index: 1000;
    background: white;
  }

  &__result {
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
    z-index: 1000;

    &:hover {
      background-color: #1a8cff;
      color: #fff;
    }
  }
}
</style>