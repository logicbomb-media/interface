<template>
  <devise-datepicker
    :id="id"
    v-model="localValue"
    type="text"
    :name="name"
    :settings="settings"
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
  name: 'DeviseDatepickerInput',

  components: {
    DeviseDatepicker: () => import('../../utilities/DatePicker.vue'),
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
    settings: {
      type: Object,
      default: () => {},
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
