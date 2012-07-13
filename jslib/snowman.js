(function($) {
    var socket = io.connect('http://localhost:8080');

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
        $(questionModal).bind('reveal:close', function() {
            // Fire events
            socket.emit('close', {'q': this.id});
        });
        $(questionModal).bind('reveal:open', function() {
            // Fire events
            socket.emit('open', {'q': this.id});
        });
        questionModal.innerHTML = '<div class="group" style="background-color: '  + catQuestion.color + '"></div>'
                                 + '<h1>' + catQuestion.q.en + '</h1>'
                                 + '<h1>' + catQuestion.q.fr + '</h1>'
                                 + '<ol type="a" id="' + modalId + '-list">'
                                 + '<li>' + catQuestion.a.en + '<br/>' + catQuestion.a.fr + '</li>'
                                 + '<li>' + catQuestion.b.en + '<br/>' + catQuestion.b.fr + '</li>'
                                 + '<li>' + catQuestion.c.en + '<br/>' + catQuestion.c.fr + '</li>'
                                 + '</ol>'
                                 + '<button>Show answer</button>';
        var button = document.createElement('button');
        return [question, questionModal];
    }

    function resetGame() {
        localStorage.removeItem(round);
        draw();
    }

    function changeRound(newRound) {
        localStorage.setItem("snowman-round", newRound);
        round = newRound;
        draw();
    }

    socket.on('reset', function() {
        resetGame();
    });

    socket.on('close', function(data) {
        $('#' + data['q']).trigger('reveal:close');
    });

    socket.on('open', function(data) {
        console.log('Opening question: ' + data['q']);
        $('#' + data['q'] + '-button').click();
    });

    socket.on('changeRound', function(data) {
        changeRound(data['round']);
    });

    $(document).ready(function() {
        draw();

        $('#round1').click(function() {
            changeRound("snowman1");
            socket.emit('changeRound', {'round': "snowman1"});
        });

        $('#round2').click(function() {
            changeRound("snowman2");
            socket.emit('changeRound', {'round': "snowman2"});
        });

        $('#reset').click(function() {
            resetGame();
            socket.emit('reset');
        });
    });
})(jQuery);
