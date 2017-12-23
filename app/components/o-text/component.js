import Component from '@ember/component';
import { notEmpty, alias } from '@ember/object/computed';
import { set } from "@ember/object";

export default Component.extend({
  tagName: '',
  isRequired: alias('required'),
  showHelp: false,
  hasHelp: notEmpty('helpText'),
  error: null,
  label: '',
  value: null,
  placeholder: '',
  disabled: false,
  renderLabel: true,
  title: '',
  id: null,
  hasError: notEmpty('error')
});
