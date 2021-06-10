<template>
  <admin-container class="w-96">
    <template v-slot:title> Application Backend </template>
    <template v-slot:message>
      Below you can find all the various sections of your application's backend management.
    </template>
    <template v-slot:content>
      <ul class="dvs-flex dvs-flex-wrap dvs-justify-between dvs-w-full">
        <li v-for="menuItem in currentMenuItems" :key="menuItem.id" class="dvs-py-6 dvs-w-full">
          <h4
            v-if="menuItem.routeName"
            class="dvs-font-medium dvs-text-gray-900 dvs-cursor-pointer dvs-text-base"
            @click="goToPage(menuItem.routeName, menuItem.parameters)"
          >
            {{ menuItem.label }}
          </h4>
          <h4 v-else class="dvs-font-medium dvs-text-gray-900">{{ menuItem.label }}</h4>

          <dl
            v-if="menuItem.children"
            class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200 w-full"
          >
            <div
              v-for="childMenuItem in filteredMenu(menuItem.children)"
              :key="childMenuItem.id"
              class="dvs-py-2 dvs-flex dvs-justify-between dvs-text-xs dvs-font-medium"
            >
              <dt
                v-if="childMenuItem.routeName"
                class="dvs-text-indigo-600 dvs-cursor-pointer"
                @click="goToPage(childMenuItem.routeName, childMenuItem.parameters)"
              >
                {{ childMenuItem.label }}
              </dt>
            </div>
          </dl>
        </li>
      </ul>
    </template>
  </admin-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DeviseIndex',
  components: {
    AdminContainer: () => import('./ui/AdminContainer'),
  },

  computed: {
    ...mapState('devise', ['adminMenu']),
    currentMenu() {
      return this.findMenu(this.adminMenu)
    },
    currentMenuItems() {
      return this.currentMenu.menu.filter((menuItem) => {
        if (!menuItem.permissions) {
          return true
        }
        return this.can(menuItem.permissions)
      })
    },
  },

  methods: {
    filteredMenu(subMenu) {
      return subMenu.filter((menuItem) => {
        if (!menuItem.permissions) {
          return true
        }
        return this.can(menuItem.permissions)
      })
    },
    findMenu(menu) {
      let safeMenu = menu
      if (typeof menu === 'object') {
        safeMenu = Object.keys(menu).map((i) => menu[i])
      }

      for (let i = 0; i < safeMenu.length; i += 1) {
        const m = safeMenu[i]
        if (m.routeName === this.$route.name) {
          return m
        }
        if (m.menu) {
          const foundMenu = this.findMenu(m.menu)
          if (foundMenu) {
            return foundMenu
          }
        }
      }
      return false
    },
  },
}
</script>
