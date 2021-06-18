<template>
  <div id="devise-administration">
    <div
      class="
        dvs-fixed
        dvs-top-0
        dvs-left-0
        dvs-bottom-0
        dvs-z-9980
        dvs-flex
        dvs-pointer-events-none
        dvs-font-sans
      "
    >
      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
        <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

        <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
          <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
          <div class="absolute top-0 right-0 -mr-12 pt-4">
            <button
              type="button"
              class="
                ml-1
                flex
                items-center
                justify-center
                h-10
                w-10
                rounded-full
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              "
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
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

          <div class="pt-5 pb-4">
            <div class="flex-shrink-0 flex items-center px-4">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <nav aria-label="Sidebar" class="mt-5 pointer-events-auto">
              <div class="px-2 space-y-1">
                <a
                  href="#"
                  class="
                    group
                    p-2
                    rounded-md
                    flex
                    items-center
                    text-base
                    font-medium
                    text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                  "
                >
                  <!-- Heroicon name: outline/home -->
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </a>

                <a
                  href="#"
                  class="
                    group
                    p-2
                    rounded-md
                    flex
                    items-center
                    text-base
                    font-medium
                    text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                  "
                >
                  <!-- Heroicon name: outline/fire -->
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                  Trending
                </a>

                <a
                  href="#"
                  class="
                    group
                    p-2
                    rounded-md
                    flex
                    items-center
                    text-base
                    font-medium
                    text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                  "
                >
                  <!-- Heroicon name: outline/bookmark-alt -->
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Bookmarks
                </a>

                <a
                  href="#"
                  class="
                    group
                    p-2
                    rounded-md
                    flex
                    items-center
                    text-base
                    font-medium
                    text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                  "
                >
                  <!-- Heroicon name: outline/inbox -->
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Messages
                </a>

                <a
                  href="#"
                  class="
                    group
                    p-2
                    rounded-md
                    flex
                    items-center
                    text-base
                    font-medium
                    text-gray-600
                    hover:bg-gray-50 hover:text-gray-900
                  "
                >
                  <!-- Heroicon name: outline/user -->
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Profile
                </a>
              </div>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" class="flex-shrink-0 group block">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                    Emily Selman
                  </p>
                  <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                    Account Settings
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-to-class="opacity-1"
        leave-class="opacity-1"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-to-class="opacity-0"
      >
        <div
          v-show="!showAdmin"
          class="
            dvs-fixed
            dvs-z-9999
            dvs-top-0
            dvs-left-0
            dvs-p-6
            dvs-rounded-full
            dvs-bg-indigo-600
            dvs-text-white
            dvs-border-2
            dvs-border-white
            dvs-cursor-pointer
            dvs-pointer-events-auto
          "
          @click="showAdmin = !showAdmin"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
      </transition>

      <!-- Static sidebar for desktop -->
      <transition
        enter-class="-translate-x-full"
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-to-class="-translate-x-full"
      >
        <div v-show="showAdmin" class="relative z-10 hidden lg:flex lg:flex-shrink-0">
          <div class="flex flex-col w-20">
            <div class="flex flex-col h-0 flex-1 bg-indigo-600">
              <div class="flex-1 flex flex-col">
                <div
                  class="
                    flex-shrink-0
                    bg-indigo-400
                    py-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    pointer-events-auto
                  "
                  @click="showAdmin = !showAdmin"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <nav
                  aria-label="Sidebar"
                  class="py-6 flex flex-col items-center space-y-3 pointer-events-auto"
                >
                  <preview-mode />

                  <template v-for="(menuItem, key) in allowedAdminMenu">
                    <a
                      :key="key"
                      href="#"
                      :class="checkActivePanelSidebar(menuItem)"
                      class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700"
                      @click.prevent="loadAdminPage(menuItem)"
                    >
                      <component :is="menuItem.icon" w="25" h="25"></component>
                    </a>
                  </template>

                  <a
                    href="#"
                    class="flex items-center p-4 rounded-lg text-indigo-200 hover:bg-indigo-700"
                  >
                    <!-- Heroicon name: outline/user -->
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span class="sr-only">Profile</span>
                  </a>
                </nav>
              </div>
              <div class="flex-shrink-0 flex pb-5">
                <a href="#" class="flex-shrink-0 w-full">
                  <img
                    class="block mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div class="sr-only">
                    <p>Emily Selman</p>
                    <p>Account settings</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="flex-1 min-w-0 flex flex-col">
        <!-- Mobile top navigation -->
        <div class="lg:hidden">
          <div class="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div>
              <button
                type="button"
                class="
                  -mr-3
                  h-12
                  w-12
                  inline-flex
                  items-center
                  justify-center
                  bg-indigo-600
                  rounded-md
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                "
              >
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu -->
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <transition
          enter-class="-translate-x-full  opacity-0"
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-to-class="translate-x-0  opacity-1"
          leave-class="translate-x-0  opacity-1"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-to-class="-translate-x-full opacity-0"
        >
          <main v-show="showAdmin" class="relative z-0 flex-1 flex overflow-hidden">
            <div class="flex-1 flex xl:overflow-hidden">
              <!-- Primary column -->
              <section
                aria-labelledby="primary-heading"
                class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
              >
                <transition
                  mode="out-in"
                  enter-class="-translate-x-full  opacity-0"
                  enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
                  enter-to-class="translate-x-0  opacity-1"
                  leave-class="translate-x-0  opacity-1"
                  leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
                  leave-to-class="-translate-x-full opacity-0"
                >
                  <router-view
                    class="dvs-shadow-2xl"
                    :show-admin="showAdmin"
                    name="devise"
                  ></router-view>
                </transition>
              </section>
            </div>
          </main>
        </transition>
      </div>
    </div>
    <!-- <div id="devise-admin" :class="[deviseOptions.adminClass]">
    <transition name="fast-fade">
      <div
        v-show="!showAdmin"
        class="dvs-sidebar-hint dvs-p-3"
        :class="{ 'dvs-opacity-100': !showAdmin }"
        @click="showAdmin = true"
      >
        <power-icon></power-icon>
      </div>
    </transition>

    <transition name="fast-fade">
      <div
        v-show="showAdmin"
        class="dvs-blocker"
        :class="{ 'opacity-0': fieldOpen }"
        @click="showAdmin = false"
      ></div>
    </transition>

    <transition name="fast-fade">
      <panel
        v-show="showAdmin && !fieldOpen"
        class="dvs-m-8 dvs-fixed dvs-pin dvs-z-9980 dvs-flex dvs-pointer-events-none"
      >
        <div
          class="
            dvs-flex
            dvs-shadow
            dvs-flex-col
            dvs-relative
            dvs-rounded
            dvs-bg-admin-bg
            dvs-pointer-events-auto
          "
        >
          <preview-mode />

          <template v-for="(menuItem, key) in allowedAdminMenu">
            <div :key="key" class="dvs-border-b dvs-border-admin-secondary-bg">
              <button
                :class="checkActivePanelSidebar(menuItem)"
                class="
                  dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-text-admin-fg
                "
                @click.prevent="loadAdminPage(menuItem)"
              >
                <component :is="menuItem.icon" class="dvs-m-4" w="25" h="25"></component>
              </button>
            </div>
          </template>
          <a
            href="#"
            class="dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-text-admin-fg"
            onclick="event.preventDefault(); document.getElementById('dvs-logout-form').submit();"
          >
            <power-icon class="dvs-m-4" w="25" h="25" />
          </a>

          <form id="dvs-logout-form" action="/logout" method="POST" style="display: none">
            <input type="hidden" name="_token" :value="csrf_field" />
          </form>
        </div>
        <div class="dvs-flex dvs-w-full dvs-ml-16">
          <transition name="dvs-fade" mode="out-in">
            <router-view name="devise"></router-view>
          </transition>
        </div>
      </panel>
    </transition>

    <portal-target
      v-show="!hideDeviseRootPortal"
      class="dvs-fixed dvs-pin dvs-z-9999 dvs-w-full"
      name="devise-root"
      @change="deviseRootPortalContentChanged"
    ></portal-target>

    <media-manager class="dvs-z-9999" />
    <slice-settings />
    <loadbar class="dvs-relative dvs-z-9999" />
    <loading-screen class="dvs-relative dvs-z-9999" />
    <force-save class="dvs-z-9999" />
  </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { setInterval } from 'timers'

export default {
  name: 'Administration',

  components: {
    Loadbar: () => import('../utilities/Loadbar.vue'),
    Loadbar: () => import('../utilities/Loadbar.vue'),
    LoadingScreen: () => import('../utilities/LoadingScreen.vue'),
    MediaEditor: () => import('../media-manager/MediaEditor.vue'),
    MediaManager: () => import('../media-manager/MediaManager.vue'),
    ForceSave: () => import('../utilities/ForceSave.vue'),
    PreviewMode: () => import('../pages/PreviewMode.vue'),
    BackIcon: () => import('vue-feather-icons/icons/ArrowLeftIcon'),
    CogIcon: () => import('vue-feather-icons/icons/SettingsIcon'),
    CreateIcon: () => import('vue-feather-icons/icons/EditIcon'),
    CubeIcon: () => import('vue-feather-icons/icons/BoxIcon'),
    DocumentIcon: () => import('vue-feather-icons/icons/ClipboardIcon'),
    ImageIcon: () => import('vue-feather-icons/icons/ImageIcon'),
    Panel: () => import('../utilities/Panel.vue'),
    PowerIcon: () => import('vue-feather-icons/icons/PowerIcon'),
    SaveIcon: () => import('vue-feather-icons/icons/SaveIcon'),
    SliceSettings: () => import('../slices/SliceSettings.vue'),
  },

  data() {
    return {
      showAdmin: true,
      everythingIsLoaded: false,
      hideDeviseRootPortal: true,
      fieldOpen: false,
    }
  },

  computed: {
    ...mapState('devise', ['adminMenu']),
    allowedAdminMenu() {
      return Object.keys(this.adminMenu)
        .filter((menuItem) => {
          if (!this.adminMenu[menuItem].permissions) {
            return true
          }
          return this.can(this.adminMenu[menuItem].permissions)
        })
        .reduce((obj, key) => {
          obj[key] = this.adminMenu[key]
          return obj
        }, {})
    },
    user() {
      return window.deviseSettings.$user
    },
    csrf_field() {
      return window.axios.defaults.headers.common['X-CSRF-TOKEN']
    },
  },
  mounted() {
    Vue.component('help', () => import('../utilities/Help'))

    setTimeout(() => {
      this.everythingIsLoaded = true
    }, 2000)

    setInterval(() => {
      this.pollIfLoggedIn()
    }, 30000)

    window.deviseSettings.$bus.$on('devise-showing-field-editor', () => {
      this.fieldOpen = true
    })
    window.deviseSettings.$bus.$on('devise-hiding-field-editor', () => {
      this.fieldOpen = false
    })
  },
  methods: {
    ...mapActions('devise', ['getLanguages']),
    loadAdminPage(menuItem) {
      if (menuItem.routeName === 'media-manager') {
        window.deviseSettings.$bus.$emit('devise-launch-media-manager', {})
      } else if (typeof menuItem.routeParams !== 'undefined') {
        this.goToPage(menuItem.routeName, menuItem.routeParams)
      } else {
        this.goToPage(menuItem.routeName)
      }
    },
    checkActivePanelSidebar(menuItem) {
      if (this.$route.meta && this.$route.meta.parentRouteName) {
        if (
          this.$route.name === 'devise-pages-view' &&
          this.$route.params.pageId === this.currentPage.id &&
          menuItem.routeName === 'devise-pages-view'
        ) {
          return ['bg-indigo-700']
        }

        if (
          menuItem.routeName === this.$route.meta.parentRouteName &&
          (this.$route.name !== 'devise-pages-view' ||
            this.$route.params.pageId !== this.currentPage.id)
        ) {
          return ['bg-indigo-700']
        }
      }

      return []
    },
    pollIfLoggedIn() {
      this.getLanguages().then(
        () => {},
        () => {
          window.location.reload(true)
        }
      )
    },
    deviseRootPortalContentChanged(content) {
      if (!content.passengers) {
        this.hideDeviseRootPortal = true
      } else {
        this.hideDeviseRootPortal = false
      }
    },
  },
}
</script>
