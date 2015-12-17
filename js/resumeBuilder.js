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
    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAL9AAAAJDlkNTlmMTgwLTRjNWYtNDM0ZC05NGNhLWY5ZTg0YTdmODExMw.jpg",
    displayHeader: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBiopic);

        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedwelcomeMsg);
    },
    displayTopContacts: function() {
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
    },
    displaySkills: function() {
        var skills = bio.skills;

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", skills[i]);
            $("#skills").append(formattedSkills);
            }
        };
    },
    displayFooterContacts: function() {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#footerContacts").prepend(formattedLocation);
        $("#footerContacts").prepend(formattedBlog);
        $("#footerContacts").prepend(formattedGithub);
        $("#footerContacts").prepend(formattedTwitter);
        $("#footerContacts").prepend(formattedEmail);
        $("#footerContacts").prepend(formattedMobile);
    }
};

var projects = {
    "projects": [
        {
            "title": "Portolio",
            "dates": "2015",
            "description": "Created an online portolio to display my front-end web development projects",
            "images": ["http://placehold.it/300x200"]
        }
    ],
    displayProjects: function() {
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
    }
};

var education = {
    "schools": [
        {
            "name": "The University of Texas",
            "location": "Austin, TX",
            "degree": "BS",
            "major": "Advertising",
            "dates": "2014",
            "url": "www.utexas.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Development Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "URL": "www.udacity.com"
        }
    ],
    displayEducation: function() {
        var schools = education.schools;
        for (school in schools) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
            var formattedCollege = formattedSchoolName + formattedSchoolDegree;

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[school].major);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedCollege);

            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        var onlineCourses = education.onlineCourses;
        for (course in onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses[course].school);
            var formattedUdacity = formattedOnlineTitle + formattedOnlineSchool;

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses[course].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourses[course].URL);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedUdacity);

            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Freelance",
            "title": "Graphic Designer",
            "dates": "May 2014-present",
            "location": "Seattle, WA",
            "descrip": "Created logo designs, branding guides, infographics, posters, apparel designs, and other items for various clients",
        }
    ],
    displayWork: function() {
        for (job in work.jobs) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descrip);
            var formattedLocationDescription = formattedLocation + formattedDescription;

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocationDescription);
        }
    }
};

$("#mapDiv").append(googleMap);

// Populate index.html with data

bio.displayHeader();
bio.displayTopContacts();
bio.displaySkills();
work.displayWork();
education.displayEducation();
projects.displayProjects();
bio.displayFooterContacts();







