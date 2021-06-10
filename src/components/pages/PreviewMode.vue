<template>
  <div
    class="dvs-relative dvs-cursor-pointer dvs-transitions-hover-slow"
    @mouseenter="openPreviewSelector"
    @mouseleave="closePreviewSelector"
  >
    <a href="#" class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700">
      <span v-if="previewMode === 'desktop'">
        <desktop-icon w="25" h="25" />
      </span>
      <span v-if="previewMode === 'tablet'">
        <tablet-icon w="25" h="25" />
      </span>
      <span v-if="previewMode === 'mobile-portrait'">
        <phone-icon w="25" h="25" />
      </span>
      <span v-if="previewMode === 'mobile-landscape'" style="transform: rotate(90deg)">
        <phone-icon w="25" h="25" />
      </span>
    </a>
    <div
      ref="previewSelector"
      class="
        dvs-flex
        dvs-overflow-hidden
        dvs-flex-col
        dvs-rounded-lg
        dvs-absolute
        dvs-top-0
        dvs-left-0
        dvs-mt-2
        dvs-ml-10
        dvs-z-10
        dvs-bg-indigo-900
        dvs-text-indigo-400
      "
    >
      <div
        class="dvs-p-3 dvs-cursor-pointer hover:dvs-bg-indigo-700"
        @click="setPreviewMode('desktop')"
      >
        <desktop-icon w="20" h="20" />
      </div>
      <div
        class="dvs-p-3 dvs-cursor-pointer hover:dvs-bg-indigo-700"
        @click="setPreviewMode('tablet')"
      >
        <tablet-icon w="20" h="20" />
      </div>
      <div
        class="dvs-p-3 dvs-cursor-pointer hover:dvs-bg-indigo-700"
        @click="setPreviewMode('mobile-portrait')"
      >
        <phone-icon w="20" h="20" />
      </div>
      <div
        class="dvs-p-3 dvs-cursor-pointer hover:dvs-bg-indigo-700"
        style="transform: rotate(90deg)"
        @click="setPreviewMode('mobile-landscape')"
      >
        <phone-icon w="20" h="20" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DevisePreviewMode',

  components: {
    DesktopIcon: () => import('vue-feather-icons/icons/MonitorIcon'),
    TabletIcon: () => import('vue-feather-icons/icons/TabletIcon'),
    PhoneIcon: () => import('vue-feather-icons/icons/SmartphoneIcon'),
  },

  data() {
    return {
      previewMode: 'desktop',
      previewSelector: null,
    }
  },
  mounted() {
    this.previewSelector = this.$refs.previewSelector
    this.closePreviewSelector()
  },
  methods: {
    ...mapActions('devise', ['setPreviewModeInCurrentPage']),
    closePreviewSelector() {
      this.previewSelector.style.maxHeight = '0px'
    },
    openPreviewSelector() {
      this.previewSelector.style.maxHeight = '500px'
    },
    setPreviewMode(mode) {
      this.previewMode = mode
      this.setPreviewModeInCurrentPage(mode)
    },
  },
}
</script>
