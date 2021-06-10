<template>
  <div
    ref="admin-route-wrapper"
    class="
      dvs-relative
      dvs-max-w-1/2
      dvs-self-center
      dvs-shadow-lg
      dvs-pointer-events-auto
      dvs-bg-white
      dvs-h-full
    "
    style="max-width: 400px"
  >
    <div class="h-full">
      <div class="divide-y divide-gray-200 flex flex-col justify-between h-full">
        <div>
          <div v-if="can('manage slices')" class="dvs-pb-16 dvs-relative">
            <div class="py-6 px-4 bg-indigo-700 sm:px-6 mb-8">
              <div class="flex items-center justify-between">
                <h2 class="flex dvs-text-lg dvs-font-medium dvs-text-white" id="slide-over-title">
                  <svg
                    class="dvs-w-6 dvs-h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  <span class="dvs-ml-2">{{ currentPage.title }}</span>
                </h2>
                <div class="ml-3 h-7 flex items-center">
                  <button
                    class="
                      bg-indigo-700
                      rounded-md
                      text-indigo-200
                      hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-white
                    "
                  >
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-1">
                <p class="text-sm text-indigo-300">
                  Click on the edit icon above to edit this page's meta information. Below are the
                  slices used in this page's presentation.
                </p>
              </div>
            </div>

            <div class="dvs-p-8 dvs-pt-0">
              <fieldset v-if="!showTimeTravel" class="dvs-fieldset">
                <div class="flex flex-col items-stretch">
                  <div class="dvs-font-medium dvs-mb-2 text-gray-700 dvs-text-sm">Page Version</div>
                  <devise-select
                    :selected="currentVersion.id"
                    :options="versionOptions"
                    @change="selectVersion"
                  >
                    {{ currentVersion.name }}
                  </devise-select>
                </div>
              </fieldset>
              <fieldset v-else class="dvs-fieldset">
                <label>Preview Date Time</label>
                <div class="dvs-flex">
                  <date-picker
                    ref="datepicker"
                    v-model="timeTravelDate"
                    :settings="{ date: true, time: true }"
                    class="dvs-mr-2"
                  />
                  <button
                    class="
                      dvs-rounded
                      dvs-btn
                      dvs-btn-primary
                      dvs-btn-sm
                      dvs-flex
                      dvs-justify-center
                      dvs-items-center
                      dvs-uppercase
                      dvs-text-xs
                      dvs-font-bold
                    "
                    @click="timeTravel"
                  >
                    Go
                  </button>
                </div>
              </fieldset>
            </div>
            <div class="dvs-px-8">
              <div class="dvs-font-medium dvs-mb-2 text-gray-700 dvs-text-sm">Page Slices</div>
            </div>
            <draggable
              v-bind="{
                group: { name: 'slices' },
                animation: 200,
                ghostClass: 'dvs-ghost',
                handle: '.handle',
                dragClass: 'dvs-chosen-drag-slice',
                emptyInsertThreshold: 10,
                removeCloneOnHide: false,
              }"
              :list="currentPageSlices"
              tag="ul"
              class="dvs-w-full dvs-px-4 dvs-space-y-1.5"
            >
              <template v-for="(slice, key) in currentPageSlices">
                <slice-editor
                  :key="randomString(8, key)"
                  v-model="currentPageSlices[key]"
                  :depth="1"
                  @opened="openSlice(slice)"
                  @addSlice="addSlice"
                  @editSlice="editSlice"
                  @removeSlice="removeSlice"
                  @copySlice="copySlice"
                />
              </template>
            </draggable>
            <div class="dvs-mt-1 dvs-ml-4 dvs-mr-4">
              <button
                class="
                  dvs-w-full
                  dvs-inline-flex
                  dvs-items-center
                  dvs-px-4
                  dvs-py-3
                  dvs-border
                  dvs-border-transparent
                  dvs-text-xs
                  dvs-font-medium
                  dvs-rounded
                  dvs-shadow-sm
                  dvs-text-indigo-900
                  dvs-bg-indigo-50
                  hover:dvs-bg-indigo-200
                  focus:dvs-outline-none
                  focus:dvs-ring-2
                  focus:dvs-ring-offset-2
                  focus:dvs-ring-indigo-500
                "
                @click.prevent="requestAddSlice"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Add Slice
              </button>
            </div>
            <div v-if="additionalPageSettings" class="dvs-px-8">
              <fieldset class="dvs-fieldset dvs-mb-2">
                <label
                  class="dvs-mb-2 dvs-cursor-pointer"
                  @click="additionalSettingsOpen = !additionalSettingsOpen"
                >
                  Additional Page Settings
                </label>
              </fieldset>
              <slice-editor-fields
                v-show="additionalSettingsOpen"
                v-model="currentPage.settings.fields"
                :the-fields="additionalPageSettings"
              />
            </div>
            <div class="dvs-relative dvs-flex dvs-flex-col dvs-items-center dvs-px-8">
              <manage-slice
                v-if="createSlice === true"
                ref="manageSlice"
                mode="inserting"
                @addSlice="addSlice"
                @cancel="createSlice = false"
              />
            </div>
          </div>
          <div v-else>
            <div class="dvs-p-8">
              <fieldset class="dvs-fieldset">
                <div class="dvs-flex dvs-flex-col dvs-items-stretch">
                  <h4>Administration</h4>
                  <p class="dvs-mt-4">Use the icons along the left column to navigate.</p>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div v-if="can('manage slices')" class="relative flex-shrink-0 px-4 py-4 flex justify-end">
          <div class="dvs-absolute dvs-bottom-0 dvs-left-0 dvs-mb-5 dvs-ml-4">
            <toggle :id="randomString(8)" :mini="true" @change="setDevMode"></toggle>
          </div>
          <button
            type="button"
            class="
              bg-white
              py-2
              px-4
              border border-gray-300
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Cancel
          </button>
          <button
            type="submit"
            class="
              ml-4
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click.prevent="requestSavePage()"
          >
            Save Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatePicker from '../utilities/DatePicker.vue'
import Strings from '../../mixins/Strings'

// eslint-disable-next-line no-undef
const queryString = require('query-string')

export default {
  name: 'PageEditor',
  components: {
    DatePicker,
    draggable: () => import('vuedraggable'),
    ManageSlice: () => import('./slices/ManageSlice'),
    SliceEditor: () => import('./slices/SliceEditor'),
    SliceEditorFields: () => import('./slices/SliceEditorFields'),
    Toggle: () => import('../utilities/Toggle'),
    DeviseSelect: () => import('../utilities/DeviseSelect'),
  },
  mixins: [Strings],
  data() {
    return {
      saving: false,
      createSlice: false,
      showTimeTravel: false,
      timeTravelDate: null,
      additionalSettingsOpen: false,
      queryString,
    }
  },
  computed: {
    ...mapGetters('devise', ['currentPage', 'sliceConfig']),
    currentPageSlices() {
      return this.currentPage.slices
    },
    additionalPageSettings() {
      if (window.deviseSettings.$config.additionalPageSettings) {
        const site = window.deviseSettings.$config.additionalPageSettings.find(
          (s) => s.siteId === this.currentPage.site_id
        )
        if (site) {
          return site.fields
        }
      }
      return false
    },

    versionOptions() {
      const options = []

      this.currentPage.versions.map((version) => {
        let label = version.name
        if (version.current) {
          label += `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
  Currently Viewing
</span>`
        }
        if (version.is_live) {
          label += ` <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
  Live
</span>`
        }

        options.push({
          label,
          value: version.id,
        })
      })

      options.push({
        label: 'Time Travel Preview',
        value: 'timetravel',
      })

      return options
    },

    currentVersion() {
      return this.currentPage.versions.find((version) => {
        return version.current
      })
    },
  },
  mounted() {
    if (this.additionalPageSettings) {
      this.currentPage.settings.fields = Object.assign(
        {},
        this.additionalPageSettings,
        this.currentPage.settings.fields
      )
    }

    setTimeout(() => {
      this.$watch(
        'currentPage',
        () => {
          window.onbeforeunload = () => 'Changes you made may not be saved'
        },
        { deep: true }
      )
    }, 1000)
  },
  methods: {
    ...mapActions('devise', ['savePage', 'setDevMode']),
    requestSavePage() {
      this.saving = true
      this.savePage({ page: this.currentPage })
        .then((response) => {
          // If someone else saved before we saved
          if (response === 480) {
            window.deviseSettings.$bus.$emit('showForceSave')
          } else {
            window.onbeforeunload = null
          }
        })
        .finally(() => {
          this.saving = false
          this.recalculateScroll()
        })
    },

    goToEditPage() {
      this.$router.push({
        name: 'devise-pages-admin',
        params: { workflowKey: 'jumpto-edit-page', pageId: this.currentPage.id },
      })
    },

    toggleSlice(slice) {
      if (slice.metadata.open) {
        this.closeSlice(slice)
      } else {
        this.openSlice(slice)
      }
    },
    openSlice(sliceToOpen) {
      this.currentPage.slices.map((s) => this.closeSlice(s))
      this.$set(sliceToOpen.metadata, 'open', true)
    },
    closeSlice(slice) {
      this.$set(slice.metadata, 'open', false)
    },
    requestAddSlice() {
      this.createSlice = true
    },
    addSlice(newSlice, referenceSlice) {
      if (typeof referenceSlice !== 'undefined') {
        const config = this.sliceConfig(referenceSlice)
        if (config.has_child_slot === true) {
          if (typeof referenceSlice.slices === 'undefined') {
            this.$set(referenceSlice, 'slices', [])
          }
          referenceSlice.slices.push(newSlice)
        }
      } else {
        if (newSlice.metadata.has_child_slot === true) {
          if (typeof newSlice.slices === 'undefined') {
            this.$set(newSlice, 'slices', [])
          }
        }
        this.currentPage.slices.push(newSlice)
      }

      this.createSlice = false
    },
    findReferenceSliceInSlices(slices, referenceSlice) {
      /* eslint-disable array-callback-return,consistent-return */
      return slices.find((slice) => {
        if (slice === referenceSlice) return slice
        if (slice.slices) return this.findReferenceSliceInSlices(slice.slices, referenceSlice)
      })
      // this.currentPage.slices[this.currentPage.slices.indexOf(referenceSlice)]
    },
    editSlice(editedSlice, referenceSlice) {
      if (editedSlice.metadata.has_child_slot) {
        editedSlice.slices = referenceSlice.slices
      }

      this.currentPage.slices.splice(
        this.currentPage.slices.indexOf(referenceSlice),
        1,
        editedSlice
      )
    },
    setSubSliceInstaceToZero(slices) {
      for (let i = 0; i < slices.length; i += 1) {
        slices[i].metadata.instance_id = 0

        if (typeof slices[i].slices === 'object' && slices[i].slices.length > 0) {
          slices[i].slices = this.setSubSliceInstaceToZero(slices[i].slices)
        }
      }

      return slices
    },
    copySlice(sliceToCopy, referenceSlice) {
      if (referenceSlice === null) {
        referenceSlice = this.currentPage
      }

      const newSlice = JSON.parse(JSON.stringify(sliceToCopy))
      newSlice.metadata.instance_id = 0

      if (typeof newSlice.slices === 'object' && newSlice.slices.length > 0) {
        newSlice.slices = this.setSubSliceInstaceToZero(newSlice.slices)
      }

      referenceSlice.slices.push(newSlice)
    },
    removeSlice(deletingSlice, referenceSlice) {
      if (typeof referenceSlice === 'undefined') {
        referenceSlice = this.currentPage
      }
      referenceSlice.slices.splice(referenceSlice.slices.indexOf(deletingSlice), 1)
    },
    selectVersion(e) {
      if (e.target.value === 'timetravel') {
        this.showTimeTravel = true
        return false
      }

      const versionId = parseInt(e.target.value, 0)
      const currentHref = document.location.href

      let newHref = ''

      if (currentHref.includes('version_id')) {
        newHref = currentHref.replace(/(version_id=[0-9]*)/g, `version_id=${versionId}`)
        document.location.href = newHref
        return true
      }
      newHref = currentHref
      newHref = newHref.includes('?') ? `${newHref}&` : `${newHref}?`
      document.location.href = `${newHref}version_id=${versionId}`
      return true
    },
    timeTravel() {
      const travelObj = {
        time_travel_to: this.timeTravelDate,
      }
      const stringified = this.queryString.stringify(travelObj)
      document.location.search = stringified
      return true
    },
    recalculateScroll() {
      this.$nextTick(() => {
        if (typeof this.$refs.Scrollbar !== 'undefined') {
          this.$refs.Scrollbar.calculateSize()
          this.$refs.Scrollbar.scrollToY(0)
        }
      })
    },
  },
}
</script>
