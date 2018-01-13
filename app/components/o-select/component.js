import Component from '@ember/component';
import { notEmpty, alias } from '@ember/object/computed';

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
  options: null,
  hasError: notEmpty('error')
});
