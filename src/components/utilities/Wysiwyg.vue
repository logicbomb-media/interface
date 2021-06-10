<template>
  <div class="dvs-bg-white dvs-rounded dvs-relative">
    <div
      v-if="editor"
      class="
        dvs-wysiwyg-editor
        dvs-bg-gray-400
        dvs-flex
        dvs-flex-wrap
        dvs-items-center
        dvs-rounded
        dvs-rounded-b-none
      "
    >
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Bold"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{ 'dvs-border-b-2': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <bold-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Italics"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{ 'dvs-border-b-2': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <italic-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Strikethrough"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{ 'dvs-border-b-2': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <strike-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Underline"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('underline'),
        }"
        @click="editor.chain().focus().toggleUnderline().run()"
      >
        <underline-icon />
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Insert Image"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('textAlign'),
        }"
        @click="launchMediaManager()"
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </button>

      <form
        v-if="linkMenuIsActive"
        class="
          menububble__form
          dvs-bg-admin-bg
          dvs-text-admin-fg
          dvs-absolute
          dvs-p-4
          dvs-rounded-sm
          dvs-shadow
          dvs-mt-2
          dvs-z-10
        "
        @submit.prevent="setLinkUrl(commands.link, linkUrl, linkTarget)"
      >
        <fieldset class="dvs-fieldset">
          <input
            ref="linkInput"
            v-model="linkUrl"
            class="menububble__input dvs-mr-2"
            type="text"
            placeholder="https://"
            @keydown.esc="$emit('hide')"
          />
          <select v-model="linkTarget" class="mt-2">
            <option value="_self">Same Window</option>
            <option value="_blank">New Tab / Window</option>
            <option value="_parent">Parent</option>
            <option value="_top">Top</option>
          </select>
          <div class="dvs-flex">
            <button
              class="menububble__button dvs-btn dvs-btn-secondary dvs-btn-sm dvs-mt-2"
              type="button"
              @click="setLinkUrl(linkUrl, linkTarget)"
            >
              Done
            </button>
            <button
              class="menububble__button dvs-btn dvs-btn-primary dvs-btn-sm dvs-mt-2"
              type="button"
              @click="setLinkUrl(null, null)"
            >
              Remove
            </button>
          </div>
        </fieldset>
      </form>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Link"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('link'),
        }"
        @click="showLinkMenu(editor.getAttributes('link'))"
      >
        <link-icon />
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Align Left"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('textAlign'),
        }"
        @click="editor.chain().focus().setTextAlign('left').run()"
      >
        <align-left-icon></align-left-icon>
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Align Center"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('textAlign'),
        }"
        @click="editor.chain().focus().setTextAlign('center').run()"
      >
        <align-center-icon></align-center-icon>
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Align Right"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('textAlign', {
            'text-align': 'right',
          }),
        }"
        @click="editor.chain().focus().setTextAlign('right').run()"
      >
        <align-right-icon></align-right-icon>
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Paragraph"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('paragraph'),
        }"
        @click="editor.chain().focus().setParagraph().run()"
      >
        P
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Heading 1"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('heading', {
            level: 1,
          }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Heading 2"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('heading', {
            level: 2,
          }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Heading 3"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('heading', {
            level: 3,
          }),
        }"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Superscript"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('superscript'),
        }"
        @click="editor.chain().focus().toggleSuperscript().run()"
      >
        <sup>2</sup>
      </button>

      <div
        v-if="showTextColorPicker"
        class="
          dvs-absolute
          dvs-z-10
          dvs-top-0
          dvs--mt-8
          dvs-bg-gray-300
          dvs-p-4
          dvs-rounded
          dvs-shadow-lg
        "
      >
        <color-picker v-model="textColor" class="dvs-mb-2" @cancel="showTextColorPicker = false" />

        <div class="dvs-flex dvs-items-stretch">
          <div class="dvs-btn dvs-bg-black dvs-text-gray-300 dvs-mr-2" @click="applyTextColor()">
            Apply
          </div>
          <div
            class="dvs-btn dvs-border-black dvs-text-black dvs-border-2"
            @click="showTextColorPicker = false"
          >
            Cancel
          </div>
        </div>
      </div>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Text Color"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('textcolor'),
        }"
        @click="showTextColorPicker = true"
      >
        <type-icon />
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Bullet List"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('bulletList'),
        }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <menu-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Number List"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('orderedList'),
        }"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        <list-icon />
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="String of Code"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('code'),
        }"
        @click="editor.chain().focus().toggleCode().run()"
      >
        <code-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Code Block"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('codeBlock'),
        }"
        @click="editor.chain().focus().toggleCodeBlock().run()"
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
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          ></path>
        </svg>
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Blockquote"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('blockquote'),
        }"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        &quot;
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Line Break"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        <minus-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Hard Return"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        <arrow-down-circle-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Undo"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="editor.chain().focus().undo().run()"
      >
        <corner-up-left-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Redo"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="editor.chain().focus().redo().run()"
      >
        <corner-up-right-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Clear formatting"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="editor.chain().focus().unsetAllMarks().clearNodes().run()"
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Insert Table (select text inside table for table controls)"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        :class="{
          'dvs-border-b-2': editor.isActive('table'),
        }"
        @click="editor.chain().focus().insertTable().run()"
      >
        <table-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="View Source"
        class="dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-900"
        @click="showSource = !showSource"
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      </button>
    </div>

    <bubble-menu
      v-if="editor"
      :editor="editor"
      class="menububble__form dvs-bg-admin-bg dvs-text-admin-fg dvs-rounded dvs-text-gray-300"
    >
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Bold"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{ 'dvs-border-b-2': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <bold-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Italics"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{ 'dvs-border-b-2': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <italic-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Strikethrough"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{ 'dvs-border-b-2': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <strike-icon />
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Underline"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{
          'dvs-border-b-2': editor.isActive('underline'),
        }"
        @click="editor.chain().focus().toggleUnderline().run()"
      >
        <underline-icon />
      </button>

      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Insert Image"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{
          'dvs-border-b-2': editor.isActive('textAlign'),
        }"
        @click="launchMediaManager()"
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </button>
      <button
        v-tippy="{ placement: 'top', arrow: true }"
        content="Link"
        class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
        :class="{
          'dvs-border-b-2': editor.isActive('link'),
        }"
        @click="showLinkMenu(editor.getAttributes('link'))"
      >
        <link-icon />
      </button>

      <template v-if="editor.isActive('table')">
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Add column before"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().addColumnBefore()"
          @click="editor.chain().focus().addColumnBefore().run()"
        >
          <add-col-before-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Add column after"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().addColumnAfter()"
          @click="editor.chain().focus().addColumnAfter().run()"
        >
          <add-col-after-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Delete Column"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().deleteColumn()"
          @click="editor.chain().focus().deleteColumn().run()"
        >
          <delete-col-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Add Row Before"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().addRowBefore()"
          @click="editor.chain().focus().addRowBefore().run()"
        >
          <add-row-before-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Add Row After"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().addRowAfter()"
          @click="editor.chain().focus().addRowAfter().run()"
        >
          <add-row-after-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Delete Row"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().deleteRow()"
          @click="editor.chain().focus().deleteRow().run()"
        >
          <delete-row-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Delete Table"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().deleteTable()"
          @click="editor.chain().focus().deleteTable().run()"
        >
          <delete-table-icon />
        </button>
        <button
          v-tippy="{ placement: 'top', arrow: true }"
          content="Merge Cells"
          class="active dvs-cursor-pointer dvs-p-3 dvs-text-xs dvs-font-bold dvs-text-gray-300"
          :disabled="!editor.can().mergeCells()"
          @click="editor.chain().focus().mergeCells().run()"
        >
          <combine-cells-icon />
        </button>
      </template>
    </bubble-menu>

    <editor-content
      v-if="!showSource"
      style="max-height: 50vh"
      class="dvs-overflow-y-scroll"
      :editor="editor"
    />
    <textarea
      v-if="showSource"
      v-model="value"
      class="dvs-h-full dvs-p-8 dvs-w-full dvs-font-mono dvs-text-sm dvs-text-gray-800"
      style="height: 300px"
    >
    </textarea>

    <div
      v-if="imageToManage !== null"
      class="
        dvs-absolute dvs-absolute-center dvs-shadow-lg dvs-p-8 dvs-rounded dvs-z-50 dvs-bg-white
      "
    >
      <h4 class="dvs-pb-4">Image Positioning:</h4>

      <div class="dvs-flex dvs-mb-4">
        <div class="dvs-btn dvs-mr-2 dvs-btn-primary dvs-btn-sm" @click="setImageFloat('left')">
          Float Left
        </div>
        <div class="dvs-btn dvs-mr-2 dvs-btn-primary dvs-btn-sm" @click="setImageFloat('')">
          No Float
        </div>
        <div class="dvs-btn dvs-mr-2 dvs-btn-primary dvs-btn-sm" @click="setImageFloat('right')">
          Float Right
        </div>
      </div>

      <div class="dvs-mb-4">
        <fieldset class="dvs-fieldset">
          <label>Margin</label>
          <input ref="marginsetting" type="number" min="0" max="200" @keyup="setImageMargin" />
        </fieldset>
      </div>

      <div class="dvs-pb-8">
        <fieldset class="dvs-fieldset">
          <div class="dvs-btn dvs-btn-primary" @click="doneEditingImageStyles">Done</div>
        </fieldset>
      </div>

      <h4 class="dvs-pb-4">Remove Image:</h4>

      <div>
        <fieldset class="dvs-fieldset">
          <div class="dvs-btn dvs-btn-primary" @click="removeImage">Remove Image</div>
        </fieldset>
      </div>
    </div>
    <div
      v-if="imageToManage !== null"
      class="dvs-blocker dvs-z-20"
      @click="imageToManage = null"
    ></div>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Superscript from './wysiwyg/tiptap/extensions/Superscript'
import TextColor from './wysiwyg/tiptap/extensions/TextColor'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'

// eslint-disable-next-line no-undef
const Chrome = require('vue-color/src/components/Chrome.vue').default

export default {
  components: {
    'color-picker': Chrome,

    EditorContent,
    BubbleMenu,

    BoldIcon: () => import('vue-feather-icons/icons/BoldIcon'),
    ItalicIcon: () => import('vue-feather-icons/icons/ItalicIcon'),
    UnderlineIcon: () => import('vue-feather-icons/icons/UnderlineIcon'),
    MinusIcon: () => import('vue-feather-icons/icons/MinusIcon'),
    CodeIcon: () => import('vue-feather-icons/icons/CodeIcon'),
    ListIcon: () => import('vue-feather-icons/icons/ListIcon'),
    MenuIcon: () => import('vue-feather-icons/icons/MenuIcon'),
    CornerUpLeftIcon: () => import('vue-feather-icons/icons/CornerUpLeftIcon'),
    CornerUpRightIcon: () => import('vue-feather-icons/icons/CornerUpRightIcon'),
    AlignLeftIcon: () => import('vue-feather-icons/icons/AlignLeftIcon'),
    AlignCenterIcon: () => import('vue-feather-icons/icons/AlignCenterIcon'),
    AlignRightIcon: () => import('vue-feather-icons/icons/AlignRightIcon'),
    ArrowDownCircleIcon: () => import('vue-feather-icons/icons/ArrowDownCircleIcon'),
    TypeIcon: () => import('vue-feather-icons/icons/TypeIcon'),
    StrikeIcon: () => import('./icons/StrikeIcon'),
    LinkIcon: () => import('vue-feather-icons/icons/LinkIcon'),
    TableIcon: () => import('./icons/TableIcon'),
    DeleteTableIcon: () => import('./icons/DeleteTableIcon'),
    AddColAfterIcon: () => import('./icons/AddColAfterIcon'),
    AddColBeforeIcon: () => import('./icons/AddColBeforeIcon'),
    DeleteColIcon: () => import('./icons/DeleteColIcon'),
    AddRowAfterIcon: () => import('./icons/AddRowAfterIcon'),
    AddRowBeforeIcon: () => import('./icons/AddRowBeforeIcon'),
    DeleteRowIcon: () => import('./icons/DeleteRowIcon'),
    CombineCellsIcon: () => import('./icons/CombineCellsIcon'),
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
      imageToManage: null,
      showSource: false,
      currentCommand: null,
      showTextColorPicker: false,
      textColor: '#000000',
      linkUrl: null,
      linkTarget: '_self',
      linkMenuIsActive: false,
    }
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [
        StarterKit,
        Superscript,
        Underline,
        TextStyle,
        TextAlign,
        TextColor,
        Image,
        Link,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
      ],
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())
      },
      autoFocus: false,
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  methods: {
    launchMediaManager() {
      window.deviseSettings.$bus.$emit('devise-launch-media-manager', {
        callback: this.mediaSelected,
      })
    },
    mediaSelected(imagesAndSettings) {
      if (typeof imagesAndSettings === 'object') {
        this.editor.chain().focus().setImage({ src: imagesAndSettings.images.media.custom }).run()
      } else {
        this.editor.chain().focus().setImage({ src: imagesAndSettings }).run()
      }
    },
    applyTextColor() {
      const { r, g, b, a } = this.textColor.rgba
      this.editor
        .chain()
        .focus()
        .setTextColor({ color: `rgba(${r},${g},${b},${a})` })
        .run()
      this.showTextColorPicker = false
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href
      this.target = attrs.target
      this.linkMenuIsActive = true
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkUrl = null
      this.linkMenuIsActive = false
    },
    setLinkUrl(href, target) {
      this.editor.chain().focus().setLink({ href, target }).run()
      this.hideLinkMenu()
    },
  },
}
</script>
