import Service from '@ember/service';
import { task, timeout } from 'ember-concurrency';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({
  store: inject(),
  findDiagnosis: task(function*(term) {
    yield timeout(400);
    return get(this, 'store').query('main-diagnosis', {
      filter: {
        name: term
      }
    })
  }).restartable()

});
