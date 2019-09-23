import $ from 'jquery';

$(window).on('load', () => {
    $('#homeButton').click(function(evt) {
        if (evt.target === this && $('meta#home').length === 0)
        {
            $('.current-menu-item').removeClass('current-menu-item').removeClass('current_page_item');
            $(this).parent().addClass('current-menu-item').addClass('current_page_item');
            $('meta#home').add('meta#join').add('meta#triviaNight').add('meta#contactInfo').remove();
            $('#posts').children().remove();
            $('#posts').append($('<article id = "post1" class = "post-4 page type-page status-publish hentry"><header class = "entry-header"><h1 class = "entry-title">Home</h1></header><div class = "entry-content"><div id = "head" class = "full-width"><h1 style = "text-align: center;">WE NEED YOU!!!</h1><h2>We need volunteers for the Home Varsity Football games to help the Dads Club work the concession stand. Please sign up below by clicking on the Sign Up! link.</h2><br><span style = "font-style: italic;">Sep 13 vs Webster Groves – </span><a style = "font-style: italic;" href = "https://www.timetosignup.com/laduedadsclub/view/1286510">SIGN UP!</a><br><span style = "font-style: italic;">Sep 20 vs Parkway Central </span><a style = "font-style: italic;" href = "https://www.timetosignup.com/laduedadsclub/view/1286511">SIGN UP!</a><br><span style = "font-style: italic;">Sep 27 vs Clayton (Homecoming) </span><a style = "font-style: italic;" href="https://www.timetosignup.com/laduedadsclub/view/1286512">SIGN UP!</a><br><span style = "font-style: italic;">Oct 18 vs Pattonville </span><a style = "font-style: italic;" href="https://www.timetosignup.com/laduedadsclub/view/1286513">SIGN UP!</a><br><span style = "font-style: italic;">October 25 vs Kirkwood </span><a style = "font-style: italic;" href="https://www.timetosignup.com/laduedadsclub/view/1286514">SIGN UP!</a></div><div id = "body" class = "full-width"><article id = "postBody" class = "post-8 page type-page status-publish hentry"><hr>JOIN US FOR TRIVIA NIGHT<br>January 25th 2020 @ 6:15pm.<br><a href = "http://Paypal.me/laduedadsclub/200">BUY A TABLE TODAY $200</a><br><a href = "http://laduedadsclub.com/trivia/">CLICK HERE FOR MORE INFO</a><br><strong><em>All parents are welcomed to participate in the Dads’ Club.</em></strong><br><hr><img class = "alignnone size-medium wp-image-11" src = "http://laduedadsclub.com/wp-content/uploads/2017/01/food-sales-300x187-300x187.jpg" alt width = "300px" height = "187px"><img class = "size-medium wp-image-10 alignright" src = "http://laduedadsclub.com/wp-content/uploads/2017/01/ladueFootball-300x222-300x222.jpg" alt width = "300px" height = "200px"><p>The Ladue High School Dads Club is a not for profit organization dating from the first year the high school opened its doors.</p>At the end of the 2014-2015 school year the club <strong><em>funded five individual student scholarships totaling</em> $9000</strong>. In addition to the scholarships, this past year the club <strong><em>provided $5,000 in academic, extra-curricular, and athletic student grants including the Laduette’s, the Speech and Debate Team, the Choir, and the Science Olympiad Team. <u>But not to Comp Sci Club</u></em></strong><br><br>Fundraisers in the past year included Football and other BBQs, as well as several online auctions.<br><br>Managed by a Executive Committee and Administration advisors. The organization’s mission is to financially support a broad array of academic, athletic, cultural and special event activities within the Ladue Horton Watkins Community that would otherwise go unfunded.<br><br>The Ladue Dads Club was formed in 1955, the first school year for Ladue Horton Watkins High School. An annual dance was sponsored for both parents and students to attend. In 1956, a Father-Son athletic banquet was started, and was quickly followed in 1957 with a Father-Daughter banquet. Many of St. Louis’ sports leaders have been guest speakers, such as Jack Buck, Lou Brock, Dan Kelly, Jay Randolph and Larry Wilson.<br><br>Since the early years, the Dads Club has often sponsored many special projects to help the school, such as the academic scholarships, purchase of athletic equipment & scoreboards, and various academic equipment.<br><br>Individual awards for student recognition has also been a long tradition for the Ladue Dads Club. The Dads Club Scholarship was established in the school’s third year until the present. It is the highest award given by the faculty to a graduating senior who best exemplifies the highest ideas of Ladue Horton Watkins High School. A picture of each of these students so honored is displayed in the front hallway of the school. Originally these students received $500 for college expenses and over the years this has been raised to $3,000.<footer><hr><small>The Ladue Dads Club, Inc, is a Missouri Not For Profit 501 (c)3 Corporation<br>Federal Tax ID Number 20-0020961<br>Eric Sheldon 314-660-5652 President 2019-2020<br>Site by Comp Sci Club.</small></footer></article><div id = "comments"></div></div></div></article>'));
            $(document.head).append($('<meta id = "home">'));
        }
    });
    $('#joinButton').click(function(evt) {
        if (evt.target === this && $('meta#join').length === 0)
        {
            $('.current-menu-item').removeClass('current-menu-item').removeClass('current_page_item');
            $(this).parent().addClass('current-menu-item').addClass('current_page_item');
            $('meta#home').add('meta#join').add('meta#triviaNight').add('meta#contactInfo').remove();
            $('#posts').children().remove();
            $('#posts').append($('<div class = "site-content"></div>')
                .append($('<article id = "payPalBox class = "post-69 page type-page status-publish hentry"></article>')
                        .append($('<header class = "entry-header"><h1 class = "entry-title">Join</h1><br></header>'))
                        .append($('<div class = "entry-content"></div>')
                                .append('<p>Join The Ladue Dad’s Club.</p>')
                                .append('<p>Dues/Contributions</p>')
                                .append('<p>Suggested Donation $25 and up…</p>')
                                .append('<p>Click on DONATE to join by paypal.</p>'))
                        .append($('<form action = "https://www.paypal.com/cgi-bin/webscr" method = "post" target = "_top"></form>')
                                .append($('<input name = "cmd" type = "hidden" value = "_s-xclick">'))
                                .append($('<input name = "hosted_button_id" type = "hidden" value = "XQ92ADPKFAVM6">'))
                                .append($('<input alt = "PayPal - The safer, easier way to pay online!" name = "submit" src = "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type = "image">')))));
            $(document.head).append($('<meta id = "join">'));
        }
    });
    $('#triviaNight').click(function(evt) {
        if (evt.target === this && $('meta#triviaNight').length === 0)
        {
            $('.current-menu-item').removeClass('current-menu-item').removeClass('current_page_item');
            $(this).parent().addClass('current-menu-item').addClass('current_page_item');
            $('meta#home').add('meta#join').add('meta#triviaNight').add('meta#contactInfo').remove();
            $('#posts').children().remove();
            $('#posts').append($('<div class = "site-content"></div>')
                .append($('<article id = "triviaNightPost" class = "post-11 page type-page status-publish hentry"></article>')
                    .append($('<header class = "entry-header"><h1 class = "entry-title">Trivia Night 2020</h1></header>'))
                    .append($('<article id = "body" class = "post-14 page type-page status-publish hentry entry-content"></article>')
                        .append($('<h1 style = "text-align: center;">Ladue Dad’s Club Trivia Night<br>Saturday Night<br>January 25th 2020 @ 6:15pm<br>At the JCC</h1><br>'))
                        .append($('<h1 style = "text-align: center;">The 2020 Dad’s Club Trivia Night<br><em>is SELLING FAST!</em></h1>'))
                        .append($('<h1 style = "text-align: center;"><a href = "http://Paypal.me/laduedadsclub/200">BUY A TABLE TODAY $200</a></h1>'))
                        .append($('<img class = "wp-image-30 aligncenter" src = "http://laduedadsclub.com/wp-content/uploads/2017/12/Trivia_Night_2017-300x157.jpg" alt width = "698px" height = "365px" srcset = "http://laduedadsclub.com/wp-content/uploads/2017/12/Trivia_Night_2017-300x157.jpg 300w, http://laduedadsclub.com/wp-content/uploads/2017/12/Trivia_Night_2017-768x401.jpg 768w, http://laduedadsclub.com/wp-content/uploads/2017/12/Trivia_Night_2017-1024x535.jpg 1024w, http://laduedadsclub.com/wp-content/uploads/2017/12/Trivia_Night_2017-624x326.jpg 624w" sizes = "(max-width: 698px) 100vw, 698px">'))
                        .append($('<hr>')))
                    .append($('<form class = "post-14 page type-page status-publish hentry entry-content" action = "https://www.paypal.com/cgi-bin/webscr" method = "post" target = "_top"></form>')
                        .append($('<h1 style = "text-align: center;">The 2020 Dad’s Club Trivia Night<br><em><strong>is SELLING FAST!</strong></em></h1>'))
                        .append($('<h1 style = "text-align: center;"><strong>Don’t Wait!!</strong></h1>'))
                        .append($('<h1 style = "text-align: center;"><strong><br>Contact the Dad’s Club to reserve a table today.</strong></h1>'))
                        .append($('<h6 style = "text-align: center;">please contact Joe Mulligan at 314-503-4384 or<br>joemulligan910@gmail.com.</h6>'))
                        .append($('<hr>')))
                    .append($('<div id = "image1" style = "width: 635px;" class = "wp-caption alignnone"></div>')
                        .append($('<img aria-describedby = "caption-attachment33" class = "wp-image-33 size-large" src = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_8048-1024x768.jpg" alt width = "625px" height = "469px" srcset = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_8048-1024x768.jpg 1024w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_8048-300x225.jpg 300w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_8048-768x576.jpg 768w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_8048-624x468.jpg 624w" sizes = "(max-width: 625px) 100vw, 625px">'))
                        .append($('<p class = "wp-caption-text">The Intrepid Teachers of LHWHS</p>')))
                    .append($('<div id = "image2" style = "width: 635px;" class = "wp-caption alignnone"></div>')
                        .append($('<img class = "wp-image-32 size-large" src = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2644-e1513723598955-1024x768.jpg" alt width = "625px" height = "469px" srcset = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2644-e1513723598955-1024x768.jpg 1024w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2644-e1513723598955-300x225.jpg 300w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2644-e1513723598955-768x576.jpg 768w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2644-e1513723598955-624x468.jpg 624w" sizes = "(max-width: 625px) 100vw, 625px">')))
                    .append($('<div id = "image3" style = "width: 635px;" class = "wp-caption alignnone"></div>')
                        .append($('<img class = "wp-image-31 size-large" src = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2643-e1513723581288-1024x768.jpg" alt width = "625px" height = "469px" srcset = "http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2643-e1513723581288-1024x768.jpg 1024w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2643-e1513723581288-300x225.jpg 300w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2643-e1513723581288-768x576.jpg 768w, http://laduedadsclub.com/wp-content/uploads/2017/12/IMG_2643-e1513723581288-624x468.jpg 624w" sizes = "(max-width: 625px) 100vw, 625px">')))
                    .append($('<div class = "entry-content"></div>')
                        .append($('<p>Dad’s Clubs Trivia Night 2020</p>'))
                        .append($('<p>Overview and Rules</p>'))
                        .append($('<p>The event will be held in the Performing Arts Center of the Staenberg Family Complex at the Jewish Community Center (#2 Millstone Campus Drive, St. Louis, MO 63146)</p>'))
                        .append($('<p>Doors to the event open at 6:15 p.m.; the 1st round of questions will begin promptly at 7:00 p.m.</p>'))
                        .append($('<p>Soft drinks and beer will be provided at the event. Participants are allowed to bring their own alcoholic beverages, coolers and food</p>'))
                        .append($('<p>Participation in the event is limited to parents of children attending Ladue Middle School or Ladue High School, staff and administration of both schools and the Ladue School District and their respective guests</p>'))
                        .append($('<p>Each team will include up to 10 people seated at a table; there is no minimum number of people required on your team to begin play</p>'))
                        .append($('<p>There is no official theme for the trivia night event, but we encourage teams to be creative in selecting team names for their teams</p>'))
                        .append($('<p>The team captain will select a team scribe for their table. The team scribe will be responsible for writing down the answers to the questions and turning them into the scorer’s table at the end of each round</p>'))
                        .append($('<p>There will be 10 rounds of questions, with each round consisting of 10 questions</p>'))
                        .append($('<p>Each round will begin with the MC reading the question aloud; teams will be given one minute to answer the question before the next question is read. After the 10th question of each round, there will be a two minute interval to allow teams an opportunity to finish completing their score sheet. Once all of the teams have turned in their score sheets for each round, the MC will then read the answers to the questions.</p>'))
                        .append($('<p>Each table will have an opportunity to purchase “mulligans”; these are stickers that you affix to your score sheet that automatically give you a correct answer for a question. Mulligans will be sold at the event check-in table for $5 each. There is a maximum of 5 mulligans per table and teams may use no more than one mulligan for each round.</p>'))
                        .append($('<p>Teams will be awarded one point for each correct answer. At the conclusion of each round, scores will be posted for each team on a screen by the podium. The team with the lowest cumulative posted score at the end of each round will receive a lovely bouquet of balloons that will remain at their table for the duration of the subsequent round until the cumulative scores are recalculated and posted. The lowest scoring table can pay $20 to have the balloons moved to the table of the next lowest scoring table at any point during a round. There is no limit to how many times the balloons can be moved in a round.</p>')))
                    .append($('<div class = "entry-content"></div>')
                        .append($('<p>The team with the highest point total at the conclusion of the 10 rounds will be declared the winner and will receive a cash prize of $200. The 2nd place team will receive a cash prize of $75. On the round #1 scoresheet, each team will write down the total number of points they think their team will score for the 10 rounds. In the event of a tie in total points, the team that comes closest to their estimated point total without going over it will be declared the winner.</p>'))
                        .append($('<p>The team with the lowest overall point total at the conclusion of the 10 rounds will be forced to take home the lovely bouquet of balloons. In the event of a tie, the team with the greatest difference between their estimated point total and their final score is declared the “low score winner”.</p>'))
                        .append($('<p>At the conclusion of the event, each team will clean up their table and dispose of any remaining trash and recyclable items.</p>'))
                        .append($('<p>Official Rules</p>'))
                        .append($('<ol></ol>')
                            .append($('<li>Have Fun!</li>'))
                            .append($('<li><em><strong>The official answers for all of the questions at the event are deemed final and no challenges will be considered. You would be surprised how serious people can get.</strong></em></li>'))
                            .append($('<li>Use of smart phones or mobile devices to assist in answering questions in any fashion during the event is not allowed.</li>'))
                            .append($('<li>The Dad’s Club reserves the right to refuse participation to any team not meeting the eligibility requirements stated above.</li>')))
                        .append($('<p>Unofficial Rules</p>'))
                        .append($('<ol><ol>')
                            .append($('<li>Pick a team scribe that has legible penmanship</li>'))
                            .append($('<li>Coordinate your team table menu in advance with your guests so you have all of the essential food groups (e.g. snacks, healthy, protein, deserts).</li>'))
                            .append($('<li>Since no cups, plates, napkins or utensils are provided at the event, team captains typically bring those for the table or delegate someone else to do so</li>'))
                            .append($('<li>Bring a wine/bottle opener; most craft beers are not twist-offs.</li>'))
                            .append($('<li>Make sure to inspect your neighbors’ tables and sample their stuff; invite others to come to your table to do the same. It is a great way to meet new people and try new things.</li>'))
                            .append($('<li>Make at least two new acquaintances at the event</li>'))
                            .append($('<li>If you bring a spouse, don’t argue with them about a question during the event. It is much better to argue on the way home in the privacy of your own car.</li>')))
                        .append($('<p>Still have questions? Contact Joe Mulligan at 314-503-4384 or joemulligan910@gmail.com</p>')))
                ));
            $(document.head).append($('<meta id = "triviaNight">'));
        }
    });

    $('#contactInfo').click(function(evt) {
        if (evt.target === this && $('meta#contactInfo').length === 0)
        {
            /**
             * YOUR CODE GOES HERE
             */

             $(document.head).append($('<meta id = "triviaNight">'));
        }
    });
});