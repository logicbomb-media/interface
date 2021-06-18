<template>
  <div class="w-full">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:dvs-px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <template v-for="col in config.fields">
                    <th
                      v-if="!col.controls"
                      :key="col.key"
                      scope="col"
                      class="
                        dvs-px-6
                        dvs-py-3
                        dvs-text-left
                        dvs-text-xs
                        dvs-font-medium
                        dvs-text-gray-400
                        dvs-uppercase
                        dvs-tracking-wider
                      "
                    >
                      {{ col.label }}
                    </th>
                    <th v-else :key="col.key" scope="col" class="dvs-relative dvs-px-6 dvs-py-3">
                      <span class="sr-only">{{ col.label }}</span>
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody>
                <!-- Odd row -->
                <tr
                  v-for="(row, n) in data.data"
                  :key="row.id"
                  :class="{ 'dvs-bg-white': n % 2 === 0, 'dvs-bg-gray-50': n % 2 !== 0 }"
                >
                  <template v-for="col in config.fields">
                    <td
                      v-if="!col.controls"
                      :key="col.key"
                      class="
                        dvs-px-6
                        dvs-py-4
                        dvs-whitespace-nowrap
                        dvs-text-sm
                        dvs-font-medium
                        dvs-text-gray-700
                      "
                      v-html="row[col.key]"
                    ></td>
                    <td
                      v-else
                      :key="col.key"
                      class="
                        dvs-px-6 dvs-py-4 dvs-whitespace-nowrap
                        text-right
                        dvs-text-sm dvs-font-medium
                      "
                    >
                      <a
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                        @click.prevent="$emit('edit', row)"
                      >
                        Edit
                      </a>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <pagination class="mt-8" :meta="data" @changePage="changePage"></pagination>
  </div>
</template>

<script>
export default {
  name: 'DeviseAdminTable',

  components: {
    Pagination: () => import('../ui/Pagination.vue'),
  },

  props: {
    data: {
      type: Object,
      required: true,
    },

    config: {
      type: Object,
      required: true,
    },
  },

  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
  },
}
</script>
