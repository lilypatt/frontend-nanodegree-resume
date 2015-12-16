// Variables representing data in my resume

var bio = {
"name": "Lily Patterson",
"role": "Front-End Web Developer",
"contacts": {
    "mobile": "(512) 484-3775",
    "email": "lilyapatterson@gmail.com",
    "github": "@lilypatt",
    "blog": "lilypatterson.squarespace.com",
    "twitter": "@lilyapatterson",
    "location": "Seattle, WA"
},
"welcomeMsg": "Hello!",
"skills": [
"HTML", "CSS", "JavaScript"
],
"bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAL9AAAAJDlkNTlmMTgwLTRjNWYtNDM0ZC05NGNhLWY5ZTg0YTdmODExMw.jpg"
};

var freelance = {
    "employer": "Freelance",
    "title": "Graphic Designer",
    "dates": "May 2014-present",
    "location": "Austin, TX",
    "descrip": "Created logo designs, branding guides, infographics, posters, apparel designs, and other items for various clients"
};

/*
var project = {
    "projectTitle": "Portolio",
    "projectDates": "2015",
    "projectDescription": "Created an online portolio to display my front-end web development projects",
    "projectImage": "http://placehold.it/300x200"
};
*/

var projects = {
    "projects": [
        {
            "title": "Portolio",
            "dates": "2015",
            "description": "Created an online portolio to display my front-end web development projects",
            "images": ["http://placehold.it/300x200"]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "The University of Texas",
            "location": "Austin, TX",
            "degree": "BS",
            "major": "Advertising",
            "date": "2014",
            "url": "www.utexas.edu"
        }
    ],
    "onlineCourses": [
        {
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
        }
    ]
};

var work = [freelance];

// functions

function displayWork() {
    for (job in work) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedDates = HTMLworkDates.replace("%data%", work[job].dates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work[job].descrip);
        var formattedLocationDescription = formattedLocation + formattedDescription;

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocationDescription);
    };
};

function displayTopContacts() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedBlog);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedTwitter);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
};

function displaySkills() {
    var skills = bio.skills;

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", skills[i]);
        $("#skills").append(formattedSkills);
        }
    };
};

function displayHeader() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedwelcomeMsg);

};

/*

function displayProjects() {
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projectDescription);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projectImage);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
}

*/

function displayEducation() {
    var schools = education.schools;
    for (school in schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[school].date);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[school].major);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
};

function locationizer(work_array) {
    var locationArray = [];

    for (job in work_array) {
        var newLocation = work_array[job].location;
        locationArray.push(newLocation);
  }

  return locationArray;
}

console.log(locationizer(work));


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            var images = projects.projects[project].images;
            for (image in images) {
                var imageLink = images[image];
                var formattedImage = HTMLprojectImage.replace("%data%", imageLink);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

$("#mapDiv").append(googleMap);

// Populate index.html with data

displayHeader();
displayTopContacts();
displaySkills();
displayWork();
//displayProjects();
displayEducation();
projects.display();







