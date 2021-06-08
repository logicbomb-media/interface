import { Extension } from '@tiptap/core'
import '@tiptap/extension-text-style'

const TextColor = Extension.create({
  name: 'textcolor',
  defaultOptions: {
    types: ['textStyle'],
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.color) {
                return {}
              }

              return {
                style: `color: ${attributes.color}`,
              }
            },
            parseHTML: (element) => ({
              color: element.style.color.replace(/['"]+/g, ''),
            }),
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setTextColor:
        (options) =>
        ({ chain }) => {
          return chain().setMark('textStyle', options).run()
        },
      unsetTextColor:
        () =>
        ({ chain }) => {
          chain().setMark('textStyle', { color: null }).removeEmptyTextStyle().run()
        },
    }
  },
})

export default TextColor
