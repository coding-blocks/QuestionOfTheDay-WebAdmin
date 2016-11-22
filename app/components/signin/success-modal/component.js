import UiModal from 'semantic-ui-ember/components/ui-modal';

export default UiModal.extend({
  name: 'login-success',
  classNames: [ 'login-success', 'small' ],

  actions: {
    moveon: function() {
      console.log('login-success -> moveon');
      // alert('login');
      this.execute('hide');
    }

  }
});
