<template>
  <input
    v-model="inputValue"
    class="custom-input"
    :class="className"
    :type="type"
    :placeholder="placeholder"
    :alt="alt"
    :value="value"
    @keyup="keyup"
  />
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'CustomInput',
  props: {
    className: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: null,
      required: false
    },
    value: {
      type: [String, Number],
      default: null,
      required: false
    },
    alt: {
      type: [String, Number],
      default: 'input',
      required: true
    },
    keyup: {
      type: Function,
      default: () => null,
      required: false
    }
  },
  setup(props) {
    const inputValue = ref(props.value) //avoid unwanted mutations
    return {inputValue}
  }
}
</script>

<style scoped lang="scss">
.custom-input {
  height: 24px;
  border-radius: 2px;
  border: 1px solid var(--main-text);
  background-color: var(--main-background);
  color: var(--main-text);
  outline: none;
  padding: 8px;
}
</style>
