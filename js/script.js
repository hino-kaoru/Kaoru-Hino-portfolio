
// ハンバーガーボタン
$(function () {
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('open');
    $('.sp_nav').fadeToggle();
  });
});

// ページトップへ戻るボタンの動き↓
$(function () {
  // ページトップへ戻るボタンの要素を隠す
  $('.back_to_top, .back_to_top-ostrich').hide();
  // スクロールした場合のアクション
  $(window).scroll(function () {
    // スクロール位置が200px超えたらボタンをフェードイン
    if ($(this).scrollTop() > 200) {
      $('.back_to_top, .back_to_top-ostrich').fadeIn();
    } else {
      // スクロール位置が200pxに戻ったらボタン消える
      $('.back_to_top, .back_to_top-ostrich').fadeOut(200);
    }
  });

  // ページトップへ戻るボタンをクリックした時の戻るスピードの速さ
  $('.back_to_top, .back_to_top-ostrich').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


// 歩くダチョウ
$(window).on('scroll', function () {
  let scroll_num = Math.floor($(this).scrollTop());
  let scroll_change_num = String(scroll_num).slice(-2);

  if (scroll_change_num < 33) {
    $('.back_to_top-ostrich img').attr('src', 'images/back_to_top-ostrich@2x-8.png');
  } else if (scroll_change_num < 66) {
    $('.back_to_top-ostrich img').attr('src', 'images/ostrich02@2x-8.png');
  } else {
    $('.back_to_top-ostrich img').attr('src', 'images/ostrich03@2x-8.png');
  }
});


