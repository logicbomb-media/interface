export default {
  methods: {
    moveInArray(array, element, delta) {
      const index = array.indexOf(element)
      const newIndex = index + delta
      if (newIndex < 0 || newIndex === array.length) return // Already at the top or bottom.
      const indexes = [index, newIndex].sort() // Sort the indixes
      array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]) // Replace from lowest index, two elements, reverting the order
    },
  },
}
