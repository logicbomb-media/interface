<template>
  <div
    class="
      sm:dvs-grid
      sm:dvs-grid-cols-3
      sm:dvs-gap-4
      sm:dvs-items-start
      sm:dvs-border-t
      sm:dvs-border-gray-200
      sm:dvs-pt-5
    "
  >
    <label
      for="title"
      class="
        dvs-block dvs-text-sm dvs-font-medium dvs-text-gray-700 dvs-capitalize
        sm:dvs-mt-px sm:dvs-pt-2
      "
    >
      {{ label ? label : name.replaceAll('_', ' ') }}
    </label>
    <div class="dvs-mt-1 sm:dvs-mt-0 sm:dvs-col-span-2">
      <component
        :is="fieldType"
        :id="id"
        v-model="localValue"
        :name="name"
        :settings="settings"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeviseAdminField',

  components: {
    DeviseCheckboxInput: () => import('./DeviseCheckboxInput.vue'),
    DeviseImageInput: () => import('./DeviseImageInput.vue'),
    DeviseNumberInput: () => import('./DeviseNumberInput.vue'),
    DeviseTextInput: () => import('./DeviseTextInput.vue'),
    DeviseWysiwygInput: () => import('./DeviseWysiwygInput.vue'),
    DeviseDatepickerInput: () => import('./DeviseDatepickerInput.vue'),
  },

  props: {
    value: {
      type: [String, Number, Boolean],
      default: '',
    },

    type: {
      type: String,
      required: true,
    },

    settings: {
      type: Object,
      default: () => {},
    },

    id: {
      type: String,
      default: null,
    },

    name: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },
  },

  computed: {
    fieldType() {
      return `devise-${this.type}-input`
    },

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
