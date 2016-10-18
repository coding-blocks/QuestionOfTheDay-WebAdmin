/**
 * Created by championswimmer on 18/10/16.
 */

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

$(function () {

    var questionPreview = $('.question-preview');

    var qOpt1 = $('input[name="option1"]');
    var qOpt2 = $('input[name="option2"]');
    var qOpt3 = $('input[name="option3"]');
    var qOpt4 = $('input[name="option4"]');

    var prevOpt1 = $('#answer-option-1');
    var prevOpt2 = $('#answer-option-2');
    var prevOpt3 = $('#answer-option-3');
    var prevOpt4 = $('#answer-option-4');

    $('textarea[name="question"]').on('change keydown paste', function () {
        questionPreview.html(marked($(this).val()))
    })

    qOpt1.on('change keydown paste', function () {
        prevOpt1.html(marked($(this).val()))
    })
    qOpt2.on('change keydown paste', function () {
        prevOpt2.html(marked($(this).val()))
    })
    qOpt3.on('change keydown paste', function () {
        prevOpt3.html(marked($(this).val()))
    })
    qOpt4.on('change keydown paste', function () {
        prevOpt4.html(marked($(this).val()))
    })

    $('#question-form').submit(function (ev) {
        var formData = $(this).serializeArray();
        var questionObj = {};
        questionObj.options = [];
        $.each(formData, function () {
            if (this.name == 'question') questionObj.quesion = this.value
            if (this.name == 'option1') questionObj.options[0] = {option: this.value}
            if (this.name == 'option2') questionObj.options[1] = {option: this.value}
            if (this.name == 'option3') questionObj.options[2] = {option: this.value}
            if (this.name == 'option4') questionObj.options[3] = {option: this.value}
        });

        var answers = [];
        $('input[name="answer"]:checked').each(function () {
            questionObj.options[parseInt($(this).val())].correct = true;
        });

        console.log(questionObj);
        ev.preventDefault();
    })
})
