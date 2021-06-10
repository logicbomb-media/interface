<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="dvs-relative dvs-inline-block dvs-text-left">
    <div>
      <button
        id="menu-button"
        type="button"
        class="
          dvs-inline-flex
          dvs-justify-between
          dvs-items-center
          dvs-w-full
          dvs-rounded-md
          dvs-border
          dvs-border-gray-300
          dvs-shadow-sm
          dvs-px-4
          dvs-py-2
          dvs-bg-white
          dvs-text-xs
          dvs-font-medium
          dvs-text-gray-700
          hover:dvs-bg-gray-50
          focus:dvs-outline-none
          focus:dvs-ring-2
          focus:dvs-ring-offset-2
          focus:dvs-ring-offset-gray-100
          focus:dvs-ring-indigo-500
        "
        aria-expanded="true"
        aria-haspopup="true"
        @click="menuOpen = !menuOpen"
      >
        <slot></slot>
        <svg
          class="-dvs-mr-1 dvs-ml-2 dvs-h-5 dvs-w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-class="dvs-transform dvs-opacity-0 dvs-scale-95"
      enter-active-class="dvs-transition dvs-ease-out dvs-duration-100"
      enter-to-class="dvs-transform dvs-opacity-100 dvs-scale-100"
      leave-class="dvs-transform dvs-opacity-100 dvs-scale-100"
      leave-active-class="dvs-transition dvs-ease-in dvs-duration-75"
      leave-to-class="dvs-transform dvs-opacity-0 dvs-scale-95"
    >
      <div
        v-if="menuOpen"
        class="
          dvs-origin-top-right
          dvs-absolute
          dvs-z-20
          dvs-right-0
          dvs-mt-2
          dvs-w-56
          dvs-rounded-md
          dvs-shadow-lg
          dvs-bg-white
          dvs-ring-1
          dvs-ring-black
          dvs-ring-opacity-5
          focus:dvs-outline-none
        "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <a
            v-for="option in options"
            id="menu-item-0"
            :key="option.value"
            href="#"
            class="dvs-block dvs-px-4 dvs-py-2 dvs-text-xs"
            :class="{
              'dvs-bg-gray-100 dvs-text-gray-900': option.value === selected,
              'dvs-text-gray-700': option.value !== selected,
            }"
            role="menuitem"
            tabindex="-1"
            @click="selectedValue(option.value)"
            v-html="option.label"
          >
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DeviseSelect',

  props: {
    options: {
      type: Array,
      required: true,
    },

    selected: {
      type: [String, Number],
      default: null,
    },
  },

  data() {
    return {
      menuOpen: false,
    }
  },

  methods: {
    selectedValue(value) {
      this.$emit('input', value)
      this.$emit('change', value)
    },
  },
}
</script>
