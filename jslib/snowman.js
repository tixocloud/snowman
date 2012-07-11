(function($) {

    // Question object
    // - question text
    // - answer
    Question = Backbone.Model.extend({
        question: '',
        answer:'',
        points: 0
    });

    // There should be a collection of questions
    Questions = Backbone.Collection.extend({

    });


    Game = Backbone.View.extend({
        el: $('body')
    });

    var socket = io.connect('http://localhost');

    // Gameboard events
    // - close question
    // - open question
    // - show answers
    // - show question
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('other', { my: 'data' });

        // Game runner selects a question
        // Game runner closes a question

        // Game viewer needs to update
    });

    // Questions in JSON format
    var questions = {
        '1': roundOne,
        '2': {

        }
    }

    var board = { width: 6, height: 5}
    var items = localStorage.getItem("snowman");
    var answeredQuestions = [];

    if (items !== null) {
        answeredQuestions = items.split(',');
    }

    function createHeader(headerTitle) {
        var header = document.createElement('div');
        header.className = "header";
        header.innerHTML = '<h1>' + headerTitle + '</h1>';
        return header;
    }

    function createQuestion(category, point, catQuestion) {
        var question = document.createElement('button');
        question.className = "question block";
        question.innerHTML = point;
        question.setAttribute('data-q', catQuestion.q);
        question.setAttribute('data-a', catQuestion.a);
        question.setAttribute('data-b', catQuestion.b);
        question.setAttribute('data-c', catQuestion.c);

        var modalId = category + '-' + point;
        question.id = modalId + '-button';

        $.each(answeredQuestions, function( index, value ) {
            console.log(answeredQuestions);
            if (question.id === value) {
                question.style.visibility = "hidden";
            }
        });

        question.setAttribute('data-reveal-id', modalId);
        question.setAttribute('data-animation', 'fade');
        question.setAttribute('data-onclose', question.id);

        var questionModal = document.createElement('div');
        questionModal.className = "reveal-modal";
        questionModal.id = modalId;
        questionModal.innerHTML = '<h1>' + catQuestion.q + '</h1><ol type="a">'
                                 + '<li>' + catQuestion.a + '</li>'
                                 + '<li>' + catQuestion.b + '</li>'
                                 + '<li>' + catQuestion.c + '</li>'
                                 + '</ol>';
        return [question, questionModal];
    }

    $(document).ready(function() {
        $.each(questions['1'], function(category, catQuestions) {
            var header = createHeader(category);
            $.each(catQuestions, function(points, question) {
                $(header).append(createQuestion(category, points, question));
            });
            $('#gameboard').append(header);
        });
    });
})(jQuery);
