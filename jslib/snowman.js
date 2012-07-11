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
        socket.emit('other', { my: 'data' });

        // Game runner selects a question
        // Game runner closes a question

        // Game viewer needs to update
    });

    // Questions in JSON format
    var questions = {
        '1': roundOne,
        '2': roundTwo
    }

    var round = localStorage.getItem("snowman-round") || "snowman1";
    var board = { width: 6, height: 5}
    var items = localStorage.getItem(round);
    var answeredQuestions = [];

    if (items !== null) {
        answeredQuestions = items.split(',');
    }

    function draw() {
        var newRound = localStorage.getItem("snowman-round") || "snowman1";
        var gameQuestions = {};
        if (round === "snowman1") {
            gameQuestions = questions['1'];
        } else {
            gameQuestions = questions['2'];
        }

        items = localStorage.getItem(newRound);
        answeredQuestions = [];

        if (items !== null) {
            answeredQuestions = items.split(',');
        }

        $('#gameboard').html('');

        $.each(gameQuestions, function(category, catQuestions) {
            var header = createHeader(category);
            $.each(catQuestions, function(points, question) {
                $(header).append(createQuestion(category, points, question, newRound));
            });
            $('#gameboard').append(header);
        });
    }

    function createHeader(headerTitle) {
        var header = document.createElement('div');
        header.className = "header";
        header.innerHTML = '<h1>' + headerTitle + '</h1>';
        return header;
    }

    function createQuestion(category, point, catQuestion, round) {
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
            if (question.id === value) {
                question.style.visibility = "hidden";
            }
        });

        question.setAttribute('data-reveal-id', modalId);
        question.setAttribute('data-animation', 'fade');
        question.setAttribute('data-onclose', question.id);
        question.setAttribute('data-round', round);

        var questionModal = document.createElement('div');
        questionModal.className = "reveal-modal";
        questionModal.id = modalId;
        questionModal.innerHTML = '<h1>' + catQuestion.q.en + '</h1>'
                                 + '<h1>' + catQuestion.q.fr + '</h1>'
                                 + '<ol type="a">'
                                 + '<li>' + catQuestion.a.en + '<br/>' + catQuestion.a.fr + '</li>'
                                 + '<li>' + catQuestion.b.en + '<br/>' + catQuestion.b.fr + '</li>'
                                 + '<li>' + catQuestion.c.en + '<br/>' + catQuestion.c.fr + '</li>'
                                 + '</ol>';
        return [question, questionModal];
    }

    $(document).ready(function() {
        draw();

        $('#round1').click(function() {
            localStorage.setItem("snowman-round", "snowman1");
            round = "snowman1";
            draw();
        });

        $('#round2').click(function() {
            localStorage.setItem("snowman-round", "snowman2");
            round = "snowman2";
            draw();
        });

        $('#reset').click(function() {
            localStorage.removeItem(round);
            draw();
        });
    });
})(jQuery);
