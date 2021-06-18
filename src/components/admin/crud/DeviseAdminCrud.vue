<template>
  <admin-container v-if="currentStep" style="width: 90vw">
    <template v-slot:title>{{ currentStep.title }}</template>
    <template v-slot:message>{{ currentStep.message }}</template>
    <template v-slot:header-right><slot name="header-right"></slot></template>
    <slot v-if="show === 'index'" name="index" :edit="showEdit"></slot>
    <slot v-else-if="show === 'edit'" name="edit" :cancel="showIndex" :record="editRecord"></slot>
  </admin-container>
</template>

<script>
export default {
  name: 'DeviseAdminCrud',

  components: {
    AdminContainer: () => import('../ui/AdminContainer.vue'),
  },

  props: {
    crud: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      currentStepIndex: null,
      show: 'index',
      editRecord: null,
    }
  },

  computed: {
    currentStep() {
      return this.crud.index
    },
  },

  mounted() {
    document.body.style.height = window.innerHeight + 'px'
    document.body.style.overflow = 'hidden'
  },
  destroyed() {
    document.body.style.height = 'auto'
    document.body.style.overflow = 'auto'
  },

  methods: {
    showEdit(record) {
      this.editRecord = record
      this.show = 'edit'
    },
    showIndex() {
      this.show = 'index'
    },
  },
}
</script>
