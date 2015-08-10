// Resume JS

//Bio portion
var bio = {
  "name": "Joshua Stein",
  "role": "Web Developer",
  "contacts": {
    "mobile": "fake number",
    "email": "email@me.com",
    "github": "Jstein1313",
    "location": "Minneapolis, MN"
  },
  "welcomeMessage": "My name is Josh and I'm a Web Developer!",
  "skills": [
    "HTML", "CSS", "JavaScript", "Responsive Design", "Mobile"
  ],
  "bioPic": "images/me.jpg"
};

bio.display = function() {

//Bio appedning
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

//Contacts appending to top and bottom of page
$("#topContacts").append(allContacts);
$("#footerContacts").append(allContacts);

//Skills appending
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}

};
bio.display();

//Education Portion
var education = {
  "schools": [
    {
      "name": "Minnesota State University - Mankato",
      "location": "Mankato, MN",
      "degree": "Bachelors of Arts",
      "major": ["Psychology"],
      "dates": 2012
    },
  ],
};

//Education appedning
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedEduData = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:last").append(formattedEduData);
	}
};
education.display();

//Work portion
var work = {
  "jobs": [
    {
    "employer": "RTT Mobile Interpretation",
    "title": "Customer Service",
    "dates": "2012-present",
    "location": "Chaska, MN",
    "description": "Order facilitation, Customer Support, Operations, Account Management, & Problem resolution"
  }
  ]
};

//Work appending
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedWorkData = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedWorkData);
    }
};
work.display();

//Projects portion
var projects = {
  "projects": [
    {
    "title": "Sample Project 1",
    "dates": "2015",
    "description": "Recreated PDF design mockup using HTML/CSS/Responsive Design",
    "images": "images/portfolio.jpg"
  }
  ]
};

//Projects appending
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
  	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
	   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  	$(".project-entry:last").append(formattedDescription);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImages);

  }
};
projects.display();

//Google Maps append
$("#mapDiv").append(googleMap);
