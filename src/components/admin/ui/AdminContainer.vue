<template>
  <div
    class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl dvs-pointer-events-auto"
  >
    <div class="flex-1 h-0 overflow-y-auto">
      <div class="py-6 px-4 bg-indigo-700 sm:px-6">
        <div class="flex items-center justify-between">
          <h2 class="dvs-text-lg font-medium text-white" id="slide-over-title">
            <slot name="title"></slot>
          </h2>
        </div>
        <div class="mt-1">
          <p class="text-sm text-indigo-300">
            <slot name="message"></slot>
          </p>
        </div>
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="px-4 divide-y divide-gray-200 sm:px-6 w-96">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="dvs-relative dvs-w-full dvs-flex dvs-justify-center dvs-items-start dvs-mt-10">
    <div
      class="
        dvs-z-10
        dvs-bg-white
        dvs-text-admin-bg
        dvs-w-1/2
        dvs-rounded-lg
        dvs-shadow-xl
        dvs-absolute
        dvs-pin-t
        dvs--mt-10
        dvs-px-8
        dvs-py-4
        dvs-font-light
        dvs-text-center
        dvs-leading-tight
        dvs-text-sm
        dvs-pointer-events-auto
      "
    >
      <slot name="message"></slot>
    </div>
    <div
      class="
        dvs-relative
        dvs-bg-admin-bg
        dvs-rounded
        dvs-shadow-lg
        dvs-max-w-3/4
        dvs-min-w-1/2
        dvs-py-10
        dvs-px-16
        dvs-pointer-events-auto
        dvs-overflow-y-scroll
      "
      style="max-height: 70vh; min-width: 800px"
    >
      
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'DeviseAdminContainer',
  data() {
    return {
      maxHeight: 300,
    }
  },
  mounted() {
    const windowHeight = window.innerHeight
    this.maxHeight = windowHeight * 0.7

    window.deviseSettings.$bus.$on('dvs-admin-container-content-changed', () => {
      this.$nextTick(() => {
        if (typeof this.$refs.Scrollbar !== 'undefined') {
          this.$refs.Scrollbar.calculateSize()
          this.$refs.Scrollbar.scrollToY(0)
        }
      })
    })
  },
}
</script>
