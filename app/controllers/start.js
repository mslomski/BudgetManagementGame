'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the projectApp
 */
app.controller('StartCtrl', function ($scope) {
  $scope.budget = 300;
  //$scope.hapiness = 100;
  $scope.index = 0;
  var questions = [
    'Begin: Choose a part time job to earn a wage and budet. They all pay $300 for every two weeks?',

    'January 1st week: You want to start off the new year in a great way by doing which of the following?',

    'January 2nd week: You are thinking about the cold Winter months ahead. To prepare, you do which of the following?',

    'January 3rd week: The cold weather gave you sickness! How do you want to deal with this?',

    'January 4th week: You got better from the illness and are now struggling with school. You do which of the following?',

    'January 5th week: You decide to buy a new instrument to learn. Which one do you buy?',

    'February 1st week: Relaxing sounds good to you this week. What do you consider worth relaxing with?',

    'February 2nd week: One of your friends is hosting a fundraiser! How much do you want to donate and support their cause?',

    'February 3rd week: You broke the new smartphone you got for Christmas. What do you do about this?',

    'February 4th week: Coming up is one of your favorite 10k runs. What do you do to prepare for this?',

    'February 5th week: The dreaded MAPS are approaching. What ever shall you do in this scary time period?',

    'March 1st week: Since you are in a great need for a haircut, what will you do at this time?',

    'March 2nd week: Someone that is a dear family friend is having a wedding soon. What will you do for this?',

    'March 3rd week: You want to celebrate St.Patricks day with your family. What will you do for the occasion?',

    'March 4th week: Spring break is here! What do you want to do with all this temporary free time?',

    'March 5th week: Suddenly you broke a toe this week. What will you do to relieve the pain?',

    'April 1st week: A school bully plays a cruel April fools joke on you. He hurts your toe more so what do you do?',

    'April 2nd week: The weather is steadily getting warmer. What will you do to prepare for the new climate?',

    'April 3rd week: You want equipment for practicing your favorite sport. What do you get for which sport?',

    'April 4th week: You start developing harsh allergic reactions (Whatever that may be). What do you do at this time?',

    'April 5th week: You get an unexpected award for your academic performance at school. What will you do?',

    'April 6th week: A close friend convinces you to join the school\'s official yoga club. How do you react to this?',

    'May 1st week: Finals MAPS is now upon you and every classmate. What will you do to survive those final exams?',

    'May 2nd week: You get a huge bug bite unexpectedly. What will you do to handle this?',

    'May 3rd week: It is Teacher\'s appreciation day. What do you want to do for it?',

    'May 4th week: You can now celebrate your freedom from school. But how?',

    'May 5th week: For some strange reason you already get bored with this free time. How do you cure that?',

    'June 1st week: Want to volunteer, what you like to help with?',

    'June 2nd week: The temparature is getting warmer. How will you prepare for this?',

    'June 3rd week: Your family adopts a dog named Max. (Creative right?) What will do you now?',

    'June 4th week: Max barfed in on of your sneakers!! How do you resond?',

    'June 5th week: Max got careless outside and is now lost. How can you help your family?',

    'July 1st week: 4th of july is here! How do you celebrate it?',

    'July 2nd week: You undertake a challenge from your friends to run a marathon. How can you do this?',

    'July 3rd week: Max is not acting nice toward your friends. What will you do?',

    'July 4th week: You want to go to the beach! How will you prepare for that?',

    'July 5th week: You have a substitute teacher named Ben Dover. The students make fun of him. What do you do?',

    /*

    'August 1st week: ?',

    'August 2nd week: ?',

    'August 3rd week: ?',

    'August 4th week: ?',

    'August 5th week: ?',

    'September 1st week: ?',

    'September 2nd week: ?',

    'September 3rd week: ?',

    'September 4th week: ?',

    'September 5th week: ?',

    'October 1st week: ?',

    'October 2nd week: ?',

    'October 3rd week: ?',

    'October 4th week: ?',

    'October 5th week: ?',

    'November 1st week: ?',

    'November 2nd week: ?',

    'November 3rd week: ?',

    'November 4th week: ?',

    'November 5th week: ?',

    'December 1st week: ?',

    'December 2nd week: ?',

    'December 3rd week: ?',

    'December 4th week: ?',

    'December 5th week: ?',
*/
  ];

  var answers=
  [
    [{
      value:0,
      title:'Car wash attendant'
    },
    {
      value:0,
      title:'Babysitter'
    },
    {
      value:0,
      title:'Grocery store employee'
    },
    {
      value:0,
      title:'Pizza delivery driver'
    }],
    [{
      value:75,
      title:'Go to a restaurant'
    },
    {
      value:50,
      title:'Go snowboarding!'
    },
    {
      value:50,
      title:'Play paintball with pals'
    },
    {
      value:100,
      title:'Buy favorite groceries'
    }],
    [{
      value:200,
      title:'Buy warm jackets'
    },
    {
      value:0,
      title:'Just deal with it'
    },
    {
      value:150,
      title:'Buy a pet to cuddle'
    },
    {
      value:40,
      title:'Buy gloves'
    }],
    [{
      value:0,
      title:'JUST DEAL WITH IT!'
    },
    {
      value:0,
      title:'Take long naps'
    },
    {
      value:10,
      title:'Buy Tylenol'
    },
    {
      value:50,
      title:'Buy from a creepy guy'
    }],
    [{
      value:0,
      title:'Study very hard!'
    },
    {
      value:75,
      title:'Pay a mentor'
    },
    {
      value:100,
      title:'Buy helpful books'
    },
    {
      value:15,
      title:'Get classmate advice'
    }],
    [{
      value:800,
      title:'Drum Set'
    },
    {
      value:300,
      title:'Tumpet'
    },
    {
      value:20,
      title:'Harmonica'
    },
    {
      value:150,
      title:'Harp'
    }],
    [{
      value:0,
      title:'Read favorite book'
    },
    {
      value:130,
      title:'Get a Swedish massage'
    },
    {
      value:20,
      title:'Attend yoga class'
    },
    {
      value:10,
      title:'Go to movie theater'
    }],
    [{
      value:0,
      title:'Don\'t donate'
    },
    {
      value:50,
      title:'Donate'
    },
    {
      value:100,
      title:'Donate!!'
    },
    {
      value:300,
      title:'DONATE, YEAH!!!!'
    }],
    [{
      value:0,
      title:'Don\'t care'
    },
    {
      value:650,
      title:'Buy new phone'
    },
    {
      value:150,
      title:'Buy old used phone'
    },
    {
      value:0,
      title:'Relax with yoga'
    }],
    [{
      value:0,
      title:'Practice running!'
    },
    {
      value:80,
      title:'Buy new shoes'
    },
    {
      value:250,
      title:'Buy professional shoes!'
    },
    {
      value:0,
      title:'Yoga should help'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:0,
      title:'Study hard!!'
    },
    {
      value:75,
      title:'Pay mentor'
    },
    {
      value:150,
      title:'Buy and study books'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:50,
      title:'Shave it!'
    },
    {
      value:20,
      title:'Get haircut'
    },
    {
      value:0,
      title:'Let it grow!'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:250,
      title:'Buy proper clothes'
    },
    {
      value:750,
      title:'Pay for dinner'
    },
    {
      value:200,
      title:'Pay for limo ride'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:60,
      title:'Go dancing'
    },
    {
      value:75,
      title:'Attend parade'
    },
    {
      value:150,
      title:'Go to a spa'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:0,
      title:'Study classes'
    },
    {
      value:55,
      title:'Go fishing'
    },
    {
      value:250,
      title:'Skydive'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:0,
      title:'Deal with it'
    },
    {
      value:0,
      title:'Visit school nurse'
    },
    {
      value:200,
      title:'Visit doctor'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:50,
      title:'Buy some creme'
    },
    {
      value:2000,
      title:'Pay fine to smack them'
    },
    {
      value:0,
      title:'Deal with it'
    }],
    [{
      value:0,
      title:'Deal with it'
    },
    {
      value:100,
      title:'Buy fans'
    },
    {
      value:400,
      title:'Buy many golf shirts'
    },
    {
      value:400,
      title:'Buy many shorts'
    }],
    [{
      value:90,
      title:'Bat for baseball'
    },
    {
      value:350,
      title:'Bike for racing'
    },
    {
      value:900,
      title:'Clubs for golf'
    },
    {
      value:0,
      title:'Don\'t play sports'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:100,
      title:'Buy medicine for allergy'
    },
    {
      value:200,
      title:'Visit Doctor'
    },
    {
      value:0,
      title:'Don\'t care'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:100,
      title:'Buy dinner'
    },
    {
      value:2500,
      title:'Buy a new car!!'
    },
    {
      value:300,
      title:'Go to a theme park'
    }],
    [{
      value:0,
      title:'I lied'
    },
    {
      value:0,
      title:'Change mind'
    },
    {
      value:50,
      title:'Buy basic membership'
    },
    {
      value:150,
      title:'Buy premium membership'
    }],
    [{
      value:0,
      title:'Relax with yoga'
    },
    {
      value:0,
      title:'Study hard!!'
    },
    {
      value:75,
      title:'Pay mentor'
    },
    {
      value:150,
      title:'Buy and study books'
    }],
    [{
      value:0,
      title:'Deal with it'
    },
    {
      value:10,
      title:'Buy medicine'
    },
    {
      value:75,
      title:'Let a Doctor look at it'
    },
    {
      value:0,
      title:'I think yoga helps'
    }],
    [{
      value:35,
      title:'Buy flowers'
    },
    {
      value:3,
      title:'Make a card'
    },
    {
      value:0,
      title:'Just congratulate them'
    },
    {
      value:0,
      title:'Ignore it totally'
    }],
    [{
      value:0,
      title:'YOGA, OF COURSE!'
    },
    {
      value:0,
      title:'Study something new'
    },
    {
      value:5000,
      title:'Buy a new car!'
    },
    {
      value:750,
      title:'Buy a dirt bike'
    }],
    [{
      value:0,
      title:'Binge watch Youtube videos'
    },
    {
      value:25,
      title:'Read a new novel'
    },
    {
      value:200,
      title:'Host parties'
    },
    {
      value:60,
      title:'Join a karate club'
    }],
    [{
      value:50,
      title:'Work at a homeless shelter'
    },
    {
      value:5,
      title:'Help clean up parks'
    },
    {
      value:20,
      title:'Assist the elderly'
    },
    {
      value:0,
      title:'I hate volunteering'
    }],
    [{
      value:70,
      title:'Take up swimming as a hobby'
    },
    {
      value:35,
      title:'Offer to buy fans'
    },
    {
      value:40,
      title:'Buy cooler clothing'
    },
    {
      value:0,
      title:'Don\'t care'
    }],
    [{
      value:0,
      title:'Play with it'
    },
    {
      value:150,
      title:'Demand to get a cat'
    },
    {
      value:0,
      title:'Tease the dog'
    },
    {
      value:0,
      title:'I hate dogs. Don\'t care'
    }],
    [{
      value:0,
      title:'Clean it up'
    },
    {
      value:100,
      title:'Buy shoe covers'
    },
    {
      value:0,
      title:'Spank Max!'
    },
    {
      value:0,
      title:'I hate dogs. Don\'t care'
    }],
    [{
      value:15,
      title:'Mark posters for lost dog'
    },
    {
      value:0,
      title:'Go around asking people'
    },
    {
      value:60,
      title:'Hire investigator'
    },
    {
      value:0,
      title:'I hate dogs. Don\'t care'
    }],
    [{
      value:0,
      title:'Watch the fireworks!'
    },
    {
      value:50,
      title:'Treat your friends out to a dinner'
    },
    {
      value:300,
      title:'Buy fireworks for you to shoot'
    },
    {
      value:0,
      title:'I don\'t celebrate the 4th'
    }],
    [{
      value:150,
      title:'Practice at the gym'
    },
    {
      value:75,
      title:'Pay friends to join you'
    },
    {
      value:0,
      title:'Run it ahead of time'
    },
    {
      value:0,
      title:'I cower in fear'
    }],
    [{
      value:90,
      title:'Get him trained'
    },
    {
      value:0,
      title:'Spank him!'
    },
    {
      value:0,
      title:'Warn friends to stay away'
    },
    {
      value:50,
      title:'Buy cage to put him in'
    }],
    [{
      value:15,
      title:'Buy a swim suit'
    },
    {
      value:10,
      title:'Get sun block!'
    },
    {
      value:40,
      title:'Buy a big umbrella'
    },
    {
      value:90,
      title:'Get a surfboard'
    }],
    [{
      value:0,
      title:'Join them in laughing'
    },
    {
      value:0,
      title:'top the teasing'
    },
    {
      value:0,
      title:'Do nothing'
    },
    {
      value:5,
      title:'Buy Mr. Dover a snack'
    }],
  ];

  $scope.question = questions[$scope.index];
  $scope.selectedAnswers = answers[$scope.index];

  $scope.answer = function (btnObj) {
    if ($scope.budget - btnObj.value > 0) {
      $scope.budget = $scope.budget - btnObj.value;
    } else{
      alert('Your Budget cannot be less than 0!');
      return false;
    }
    if((questions.length - 1)===($scope.index)) {
      angular.forEach($scope.answers, function(item) {
        item.value = 0;
      });
      return false;
    }
    $scope.index++;
    $scope.question = questions[$scope.index];
    $scope.selectedAnswers = answers[$scope.index];
  };
});
