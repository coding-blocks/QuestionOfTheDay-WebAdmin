import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'login-fail',
  classNames: [ 'login-fail', 'small' ],

  actions: {
    yes: function() {
      console.log('login-failure -> signup');
      // alert('yes');
      this.execute('hide');
    },

    no: function() {
      console.log('no');
      alert('no');
    }
  }
});
