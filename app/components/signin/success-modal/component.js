import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'login-success',
  classNames: [ 'login-success' ],

  actions: {
    yes: function() {
      alert('yes');
      this.execute('hide');
    },

    no: function() {
      alert('no');
    }
  }
});
