import { Mark } from '@tiptap/core'

const Superscript = Mark.create({
  name: 'superscript',
  defaultOptions: {
    HTMLAttributes: {},
  },
  parseHTML() {
    return [
      {
        tag: 'sup',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return ['sup', HTMLAttributes, 0]
  },
  addCommands() {
    return {
      setSuperscript:
        () =>
        ({ commands }) => {
          return commands.setMark('superscript')
        },
      toggleSuperscript:
        () =>
        ({ commands }) => {
          return commands.toggleMark('superscript')
        },
      unsetSuperscript:
        () =>
        ({ commands }) => {
          return commands.unsetMark('superscript')
        },
    }
  },
  addKeyboardShortcuts() {
    return {
      'Mod-Shift-2': () => this.editor.commands.toggleSuperscript(),
    }
  },
})

export default Superscript
