import Component from '@ember/component';
import { get, set } from '@ember/object';

const countries = [
  { name: 'United States',  flagUrl: '/flags/us.svg' },
  { name: 'Spain',          flagUrl: '/flags/es.svg' },
  { name: 'Portugal',       flagUrl: '/flags/pt.svg' },
  { name: 'Russia',         flagUrl: '/flags/ru.svg' },
  { name: 'Latvia',         flagUrl: '/flags/lv.svg' },
  { name: 'Brazil',         flagUrl: '/flags/br.svg' },
  { name: 'United Kingdom', flagUrl: '/flags/gb.svg' },
];

export default Component.extend({
  // Reference to the current patient
  patient: null,

  init() {
    this._super(...arguments);
    set(this, 'countries', countries);
    set(this, 'location', countries[2]);
  }
});
