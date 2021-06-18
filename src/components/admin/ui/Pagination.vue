<template>
  <div>
    <nav
      class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
      :class="{
        'dvs-pointer-events-none opacity-50': meta.last_page === 1,
      }"
    >
      <div class="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          class="
            border-t-2 border-transparent
            pt-4
            pr-1
            inline-flex
            items-center
            text-sm
            font-medium
            text-gray-500
            hover:text-gray-700 hover:border-gray-300
          "
          @click.prevent="changePage(meta.current_page - 1)"
        >
          <!-- Heroicon name: solid/arrow-narrow-left -->
          <svg
            class="mr-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Previous
        </a>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <a
          v-for="page in pages"
          :key="page"
          href="#"
          class="
            border-transparent
            text-gray-500
            hover:border-indigo-400 hover:text-indigo-400
            border-t-2
            pt-4
            px-4
            inline-flex
            items-center
            text-sm
            font-medium
            transition
            duration-500
          "
          :class="{
            'border-indigo-500 text-indigo-600': meta.current_page === page,
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
              meta.current_page !== page,
          }"
          @click.prevent="changePage(page)"
        >
          {{ page }}
        </a>
      </div>
      <div class="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          class="
            border-t-2 border-transparent
            pt-4
            pl-1
            inline-flex
            items-center
            text-sm
            font-medium
            text-gray-500
            hover:text-gray-700 hover:border-gray-300
          "
          @click.prevent="changePage(meta.current_page + 1)"
        >
          Next
          <!-- Heroicon name: solid/arrow-narrow-right -->
          <svg
            class="ml-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DeviseAdminPagination',
  props: {
    meta: {
      type: Object,
      required: true,
    },
    listMode: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    pages() {
      return Array(this.range.max - this.range.min + 1)
        .fill()
        .map((_, idx) => this.range.min + idx)
    },

    range() {
      if (this.meta.current_page) {
        return {
          min: this.meta.current_page - 4 > 1 ? this.meta.current_page - 4 : 1,
          max:
            this.meta.current_page + 4 < this.meta.last_page
              ? this.meta.current_page + 4
              : this.meta.last_page,
        }
      }
      return {
        min: 1,
        max: 1,
      }
    },
  },

  methods: {
    changePage(page) {
      if (page > 0 && page <= this.meta.last_page) {
        this.$emit('changePage', page)
      }
    },
  },
}
</script>
