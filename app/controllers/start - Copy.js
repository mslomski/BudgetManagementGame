'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the projectApp
 */
app.controller('StartCtrl', function ($scope) {
  $scope.budget = 0;
  $scope.hapiness = 100;
  $scope.index = 0;
  var questions = [
    'Begin: Pick your part time job to earn a wage and budget. All let you earn $300 every 2 weeks.',

    'January 1st week: You want to start off the new year in a great way by doing which of the following?',

    'January 2nd week: You are thinking about the cold Winter months ahead. To prepare, you do which of the following?',

    'January 3rd week: The cold weather gave you sickness! How do you want to deal with this?',

    'January 4th week: You got better from the illness and are now struggling with school. You do which of the following?',

    'January 5th week: You can get a job for a week. Which job do you want to work at this week?',

    'February 1st week: Relaxing sounds good to you this week. What do you consider worth relaxing with?',

    'February 2nd week: One of your friends is hosting a fundraiser! How much do you want to donate and support their cause?',

    'February 3rd week: You broke the new smartphone you got for Christmas. What do you do about this?',

    'February 4th week: Coming up is one of your favorite 10k runs. What do you do to prepare for this?',

    'February 5th week: The dreaded midterms are approaching. What ever shall you do in this scary time period?',

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

    'May 1st week: Finals week is now upon you and every classmate. What will you do to survive those final exams?',

    'May 2nd week: You get a huge bug bite unexpectedly. What will you do to handle this?',

    'May 3rd week: Now that school is over, what job will you apply to this coming Summer season?',

    'May 4th week: You can now celebrate your freedom from school. But how?',

    'May 5th week: THE DEMO IS NOW OVER!!'

    /*'June 1st week: ?',

    'June 2nd week: ?',

    'June 3rd week: ?',

    'June 4th week: ?',

    'June 5th week: ?',

    'July 1st week: ?',

    'July 2nd week: ?',

    'July 3rd week: ?',

    'July 4th week: ?',

    'July 5th week: ?',

    'July 6th week: ?',

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

    'December 6th week: ?'*/
  ];

  var answers=
  [
    [{
      value:300,
      title:'Car wash attendant'
    },
    {
      value:300,
      title:'Babysitter'
    },
    {
      value:300,
      title:'Grocery store employee'
    },
    {
      value:300,
      title:'Pizza delivery driver'
    }]
    [{
      value:75,
      title:'Go to a restaurant'
    },
    {
      value:50,
      title:'Go snowboarding!'
    },
    {
      value:80,
      title:'Play paintball with pals'
    },
    {
      value:50,
      title:'Buy favorite groceries'
    }],
    [{
      value:30,
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
      value:20,
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
      value:0,
      title:'question'
    },
    {
      value:0,
      title:'here'
    },
    {
      value:0,
      title:'please'
    },
    {
      value:0,
      title:'thanks'
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
      title:'DONATE!! LOVE THEM!!'
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
      value:40,
      title:'Buy new shoes'
    },
    {
      value:150,
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
      value:25,
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
      value:100,
      title:'Buy proper clothes'
    },
    {
      value:150,
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
      value:30,
      title:'Go dancing'
    },
    {
      value:15,
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
      value:200,
      title:'Buy many golf shirts'
    },
    {
      value:200,
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
      value:500,
      title:'Clubs for golf'
    },
    {
      value:0,
      title:'Don\'t play sports'
    }],
    [{
      value:0,
      title:'RELAXING YOGA NOW!'
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
      value:1000,
      title:'Buy a used junky car!'
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
      title:'Let a Doctor tell you'
    },
    {
      value:0,
      title:'I think yoga helps'
    }],
    [{
      value:0,
      title:'new'
    },
    {
      value:0,
      title:'question'
    },
    {
      value:0,
      title:'here'
    },
    {
      value:0,
      title:'please'
    }],
    [{
      value:0,
      title:'YOGA, Of COURSE!'
    },
    {
      value:0,
      title:'Study something new'
    },
    {
      value:1000,
      title:'Buy a used junky car!'
    },
    {
      value:550,
      title:'Buy a dirt bike'
    }],
    [{
      value:0,
      title:'THE'
    },
    {
      value:0,
      title:'DEMO'
    },
    {
      value:0,
      title:'IS'
    },
    {
      value:0,
      title:'OVER!!!'
    }]
  ];

  $scope.question = questions[$scope.index];
  $scope.selectedAnswers = answers[$scope.index];

  $scope.answer=function(btnObj) {
    if ($scope.budget-btnObj.value>0) {
      $scope.budget = $scope.budget-btnObj.value;
    } else{
      alert('Your Budget cannot be less than 0!');
      return false;
    }
    if((questions.length-1)===($scope.index)) {
      angular.forEach($scope.answers,function(item){item.value = 0;});
      return false;
    }
    $scope.index++;
    $scope.question = questions[$scope.index];
    $scope.selectedAnswers = answers[$scope.index];
  };
});
