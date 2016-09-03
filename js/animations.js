$(document).ready(function() {

    $('#tweet-controls').hide();

    $('.tweet-compose').on('focusin', function() {
      $('.tweet-compose').animate({height: "5em"});
      $('#tweet-controls').show();
    });
    // $('.tweet-compose').on('focusout', function() {
    //   $('.tweet-compose').animate({height: "2.5em"});
    // });

    $('.tweet-compose').on('keyup keydown keypress', function() {
        var newCount = 140 - $(this).val().length;
        $('#char-count').text(newCount);
        if (newCount <= 10) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', '#999');
        };
        if (newCount < 0) {
            $('.button').attr('disabled', true);
        } else {
            $('.button').attr('disabled', false);
        };
    });



    $('#tweet-submit').on('click', function() {
        var newTweet = $('.tweet-compose').val();
        $("#tweet-controls").hide();
        $('.tweet-compose').animate({height: "2.5em"});
        $('#stream').prepend(
            '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/damenleeturks.jpg" />' +
            '<strong class="fullname">My BFF</strong>' +
            '<span class="username">@mybff</span>' +
            '<p class="tweet-text">' + newTweet + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats-reply-container">' +
            '<div class="stats">' +
            '<div class="retweets">' +
            '<p class="num-retweets">30</p>' +
            '<p>RETWEETS</p>' +
            '</div>' +
            '<div class="favorites">' +
            '<p class="num-favorites">6</p>' +
            '<p>FAVORITES</p>' +
            '</div>' +
            '<div class="users-interact">' +
            '<div>' +
            '<img src="img/alagoon.jpg" />' +
            '<img src="img/vklimenko.jpg" />' +
            '</div>' +
            '</div>' +
            '<div class="time">' +
            '1:04 PM - 19 Sep 13' +
            '</div>' +
            '</div>' +
            '<div class="reply">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('.tweet-actions ul').hide();
        $('.tweet').on('mouseenter', function() {
            $(this).find('ul').slideDown();
        });
        $('.tweet').on('mouseleave', function() {
            $(this).find('ul').slideUp();
        });

        $('.stats-reply-container').hide();
        $('.tweet').on('click', function() {
            $(this).find('.stats-reply-container').animate({height:'toggle', opacity:100});
        });
        newTweet = $('.tweet-compose').val("");
    });
    $('.tweet-actions ul').hide();
    $('.tweet').on('mouseenter', function() {
        $(this).find('ul').animate({height:'toggle', opacity:100});
    });
    // $('.tweet').on('mouseleave', function() {
    //     $(this).find('ul').slideUp();
    // });

    $('.stats-reply-container').hide();
    $('.tweet').on('click', function() {
        $(this).find('.stats-reply-container').animate({height:'toggle', opacity:100});
    });
    // $('.tweet').on('mouseleave', function() {
    //     $(this).find('.stats-reply-container').animate(100);
    // });
})
