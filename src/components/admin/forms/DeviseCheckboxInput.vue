<template>
  <button
    type="button"
    class="
      dvs-relative
      dvs-inline-flex
      dvs-flex-shrink-0
      dvs-h-6
      dvs-w-11
      dvs-border-2
      dvs-border-transparent
      dvs-rounded-full
      dvs-cursor-pointer
      dvs-transition-colors
      dvs-ease-in-out
      dvs-duration-200
      focus:dvs-outline-none focus:dvs-ring-2 focus:dvs-ring-offset-2 focus:dvs-ring-indigo-500
    "
    :class="{ 'dvs-bg-indigo-600': value, 'dvs-bg-gray-200': !value }"
    role="switch"
    aria-checked="false"
    @click="localValue = !localValue"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      class="
        dvs-translate-x-0
        dvs-pointer-events-none
        dvs-inline-block
        dvs-h-5
        dvs-w-5
        dvs-rounded-full
        dvs-bg-white
        dvs-shadow
        dvs-transform
        dvs-ring-0
        dvs-transition
        dvs-ease-in-out
        dvs-duration-200
      "
      :class="{ 'dvs-translate-x-5': value, 'dvs-translate-x-0': !value }"
    ></span>
  </button>
</template>

<script>
export default {
  name: 'DeviseCheckboxInput',

  props: {
    value: {
      type: Boolean,
      default: false,
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
