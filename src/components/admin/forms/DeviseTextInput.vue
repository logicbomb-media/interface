<template>
  <input
    :id="id"
    v-model="localValue"
    type="text"
    :name="name"
    class="
      dvs-max-w-lg dvs-block dvs-w-full dvs-shadow-sm
      focus:dvs-ring-indigo-500 focus:dvs-border-indigo-500
      sm:dvs-max-w-xs sm:dvs-text-sm
      dvs-border-gray-300 dvs-rounded-md
    "
  />
</template>

<script>
export default {
  name: 'DeviseTextInput',

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
