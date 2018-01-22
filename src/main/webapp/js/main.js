/**
 * AngularJS 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('mainWebApp', [ 'ngRoute' ]);

/**
 * Configure the Routes
 */
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	// Home
	.when("/", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	})
	// Pages
	.when("/about", {
		templateUrl : "partials/about.html",
		controller : "AboutCtrl"
	}).when("/contact", {
		templateUrl : "partials/contact.html",
		controller : "PageCtrl"
	}).when("/cv", {
		templateUrl : "partials/cv.html",
		controller : "PageCtrl"
	})
		// User
	.when("/user", {
		templateUrl : "partials/user.html",
		controller : "UserCtrl"
	})
	// else 404
	.otherwise("/404", {
		templateUrl : "partials/404.html",
		controller : "PageCtrl"
	});
} ]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function(/* $scope, $location, $http */) {
	console.log("Page Controller reporting for duty.");

	// Activates the Carousel
	$('.carousel').carousel({
		interval : 5000
	});

	// Activates Tooltips for Social Links
	$('.tooltip-social').tooltip({
		selector : "a[data-toggle=tooltip]"
	})
});

// ############# Added features ###################################

/**
 * Controls the User
 */
app.controller('UserCtrl', function(/* $scope, $location, $http */) {
	console.log("User Controller reporting for duty.");
});


/**
 * Controls the About Page
 */
app.controller('AboutCtrl', function($scope, $http) {
	console.log("Home Controller reporting for duty.");
	$scope.message = 'Hello from AboutCtrl';
	
	$scope.count = 0;
	$scope.master = {};
	
    $scope.save = function(employee) {
      $scope.count++;
      $scope.master = angular.copy(employee);
      $scope.employee.name = employee.name;
      $scope.employee.email = employee.email;
      $scope.employee.role = employee.role;
    };
    
    $scope.reset = function() {
		$scope.employee = angular.copy($scope.master);
	};
	$scope.reset();


	$scope.getRequest = function () {
        console.log("I've been pressed!");  
        $http.get("http://localhost:8090/api/getRequest")
            .then(function successCallback(response){
            	console.log("Trying Hard too!"),
                $scope.response = response;
            	console.log($scope.response);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
        
        
    };

});




// When the user scrolls down 20px from the top of the document, show the button
/*### window.onscroll = function() { scrollFunction() }; - OLD ###*/

$(window).scroll(function () { 
	scrollFunction() 
	});

/*####*/
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Chrome, Safari and Opera
	document.documentElement.scrollTop = 0; // For IE and Firefox
}
