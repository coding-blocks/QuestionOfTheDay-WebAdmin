import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'login-fail',
  classNames: [ 'login-fail', 'small' ],

  actions: {
    yes: function() {
      console.log('yes');
      alert('yes');
      this.execute('hide');
    },

    no: function() {
      console.log('no');
      alert('no');
    }
  }
});
