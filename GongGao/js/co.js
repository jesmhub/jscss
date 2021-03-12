				$(document).ready(function() {
                    var begin1 = 0;
                    var rollDom = $('.scroll');
                    var wideRoll = parseInt(rollDom.width());
                    var begin2 = 0;
                    var marquee = $('.marquee .p');
                    var wideMarquee = parseInt(marquee.width());
                    $('.banner .showcase').append(rollDom.clone(true)).append(rollDom.clone(true));
                    $('.marquee').append(marquee.clone(true));
                    var roll1 = setInterval(function () {
                        begin1 -= 2;
                        rollDom.css({'margin-left': begin1 + 'px'})
                        if (-begin1 >= wideRoll) {
                            begin1 = 0;
                        }
                    }, 20);
                    var roll2 = setInterval(function () {
                        begin2 -= 1;
                        marquee.css({'margin-left': begin2 + 'px'})
                        if (-begin2 >= wideMarquee) {
                            begin2 = 0;
                        }
                    }, 20);
                    $('.screen_roll').click(function () {
                        $('.cover,.alert_anounce').show();
                    })

                    var date = new Date();
                    date.setTime(date.getTime()+60*10*1000); //10分钟
                    var COOKIE_NAME = "showbox";
                    console.log($.cookie(COOKIE_NAME));
                    if($.cookie(COOKIE_NAME)) {
                        $('.default_dialog').hide();
                    } else {
                        $.cookie(COOKIE_NAME, 'ishide', {
                            path: '/',
                            expires: date
                        }); //expires过期时间（单位为天！）

                        $('.default_dialog').show();

                    }

                    $('#copyUrl').click(function () {
                        $('#copy').select();
                        document.execCommand("Copy");
                        $('.default_dialog').hide();
                        alert('复制成功');
                    });

                    // 关闭按钮
                    $("#close1").on('click', function () {
                        $('.default_dialog').hide();
                    });
                    // 关闭按钮
                    $(".close_dialog").on('click', function () {
                        $('.default_dialog').hide();
                    });
                });



