<template>
  <devise-wysiwyg :id="id" v-model="localValue" :name="name"></devise-wysiwyg>
</template>

<script>
export default {
  name: 'DeviseWysiwygInput',

  components: {
    DeviseWysiwyg: () => import('../../utilities/Wysiwyg.vue'),
  },

  props: {
    value: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
