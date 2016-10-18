/**
 * Created by championswimmer on 18/10/16.
 */
xtag.register('cb-navbar', {
    lifecycle: {
        created: function () {
            console.log('Created');
        }
    },
    content: function () {/*

         <div class="ui tabular menu">
         <a href="/pages/questions" target="content" class="active item">
         Questions
         </a>
         <a href="/pages/questions/add.html" target="content" class="item">
         Add
         </a>
         <a href="/pages/login" class="item right">
         Login
         </a>
         </div>

     */}
});

$(function () {
    $('.item').click(function () {
        $('.item').removeClass('active');
        $(this).addClass('active');
    });
});
