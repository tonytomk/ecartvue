<template src='./ModalComponent.html'></template>

<script lang="ts">
import { PropType, defineComponent, toRefs } from 'vue';

export default defineComponent({
    name: 'ModalComponent',
    emits: ["cancelled"],
    props: {
        config: {
      type: Object as PropType<{show: false}>,
      required: true,
    },
    
    },
    setup(props, ctx) {
        const { config} = toRefs(props);
        const close: any = () => {
           // props.config.show = false;
        };

        function cancel(): void {
            ctx.emit('cancelled', true);

        }
        return { close, cancel }
        

    },



})
</script>
<style lang="scss">
.modal-mask {
    position: fixed;
    z-index: 9999999999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .3s ease;

    .modal-content {
        border-radius: 10px;
        min-width: 20%;
        background: #fff;

        .modal-header {
            display: flex;
            align-items: center;
            background-color: #0a2b4e;
            color: #fff;
            margin-bottom: 10px;
            font-size: 2rem;
            justify-content: space-between;
            padding: 1rem;
        }

        .modal-footer {
            border: 0px;
            padding: 0.5rem;
            background-color: #ececec;
            display: flex;
            justify-content: space-between;
        }
    }
}

.modal-title {
    // margin-left: auto;
    // padding-left: 15px;
}

.close.hideClose {
    display: none;
}

.modal-title.align_title {
    margin-right: auto;
}

.modal-body {
    padding: 1rem;
}

.close {
    &:hover {
        outline: none;
    }

    &:focus {
        outline: none;
    }
}

.modal-dialog {
    max-height: 100%;
    min-width: 25%;
}

.alert {
    padding: 0.2rem 1rem;
    font-size: 14px;
    margin-bottom: 0px;

    .control-label {
        margin-bottom: 0px;
        font-size: 12px;
    }
}
</style>
