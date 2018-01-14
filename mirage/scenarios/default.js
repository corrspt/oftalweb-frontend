export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('patient', 10);
  server.createList('main-diagnosis', 100);
}
