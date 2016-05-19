var bio = {
	"name": "Kara Anderson",
	"role": "Front-End Web Developer",
	"contacts": [
		{
			"mobile" : "410-555-5555",
			"email" : "karashirl@gmail.com",
			"github" : "karashirl",
			"twitter" : "@karashirl",
			"location" : "Baltimore, MD"
		}
	],
	"welcomeMessage" : "Motivated front-end web developer seeking an entry-level position with an innovative company that challenges me and offers opportunities for growth. Self-taught HTML, CSS and JavaScript and currently pursuing formal web development degree. Background in digital marketing, seeking a career change.",
	"skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "web design", "marketing", "social media"],
	"biopic": "images/headshot.png",
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedIntro = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		for (var contact in bio.contacts) {
			if (bio.contacts.hasOwnProperty(contact)) {
				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
				var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
				var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
				var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);

				$("#header").prepend(formattedRole);
				$("#header").prepend(formattedName);
				$("#topContacts").prepend(formattedLocation);
				$("#topContacts").prepend(formattedGithub);
				$("#topContacts").prepend(formattedTwitter);
				$("#topContacts").prepend(formattedEmail);
				$("#topContacts").prepend(formattedMobile);
				$("#header").append(formattedPic);
				$("#header").append(formattedIntro);
				$("#footerContacts").prepend(formattedLocation);
				$("#footerContacts").prepend(formattedGithub);
				$("#footerContacts").prepend(formattedTwitter);
				$("#footerContacts").prepend(formattedEmail);
				$("#footerContacts").prepend(formattedMobile);
			}
		}

		$("#header").append(HTMLskillsStart);

		for(var skill in bio.skills) {
			if (bio.skills.hasOwnProperty(skill)) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "United Way of Central Maryland",
			"title": "Interactive Marketing Specialist",
			"location": "Baltimore, MD",
			"dates": "August 2012 - Present",
			"description": "Oversee organization’s web marketing strategy by creating engaging content that drives users to action, create and manage all content for responsive WordPress site (uwcm.org), report on traffic and analyze trends using Google Analytics"
		},
		{
			"employer": "MOS Creative",
			"title": "Marketing Consultant & Project Manager",
			"location": "Columbia, MD",
			"dates": "April 2012 - August 2012",
			"description": "Researched, developed and helped execute creative online marketing initiatives to help clients connect more effectively with their target market and generate more leads, conducted thorough competitive and market analyses to understand the state of clients’ industries, analyzing strengths, weaknesses, opportunities and threats"
		},
		{
			"employer": "Self-Employed",
			"title": "ESL Instructor",
			"location": "Jundiai, Sao Paulo, Brazil",
			"dates": "January 2011 - March 2012",
			"description": "Managed classroom and in-company lessons for more than 15 groups of foreign language students, created personal brand identity and carried out marketing activities to attract both individual students and large companies as customers"
		},
		{
			"employer": "MediaVest Worldwide",
			"title": "Digital Media Planning Intern",
			"location": "New York, NY",
			"dates": "June 2008 - August 2008",
			"description": "Worked with digital media planning team at agency to plan online advertising strategy for Walmart Stores, documented online advertising tactics and media placement schedule to track success of campaigns"
		},
		{
			"employer": "ECI-Find New Markets",
			"title": "Marketing Project Manager & Graphic Designer",
			"location": "Columbia, SC",
			"dates": "September 2007 - September 2010",
			"description": "Managed development of comprehensive branding and communications strategies for over 20 domestic and international companies while advancing internal goals of marketing company, boosted client brand awareness and exposure by planning and implementing marketing, advertising, public relations and social media campaigns, working within tight budget constraints"
		}
	],
	display: function() {
		for(var job in work.jobs) {
			if (work.jobs.hasOwnProperty(job)) {
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

				$(".work-entry:last").append(formattedEmployerTitle);
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedLocation);
				$(".work-entry:last").append(formattedDesc);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of South Carolina",
			"location": "Columbia, SC, US",
			"degree": "BA, Business Administration",
			"major": "Marketing",
			"dates": "2005 - 2010",
			"url": "www.sc.edu"
		},
		{
			"name": "University of South Carolina",
			"location": "Columbia, SC, US",
			"degree": "BS, Journalism & Mass Communication",
			"major": "Advertising",
			"dates": "2005 - 2010",
			"url": "www.sc.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"date": "2016 - Present",
			"url": "www.udacity.com"
		}
	],
	display: function() {
		for(var school in education.schools) {
			if (education.schools.hasOwnProperty(school)) {
				$("#education").append(HTMLschoolStart);
				var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var schoolDegree = formattedSchool + formattedDegree;
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

				$(".education-entry:last").append(schoolDegree);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append(formattedLocation);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		for(var onlineCourse in education.onlineCourses) {
			if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				var titleSchool = formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

				$(".education-entry:last").append(titleSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": 2016,
			"description": "A portfolio site featuring projects I've designed and built -- both from scratch and using Bootstrap framework -- with HTML, CSS and JavaScript.",
			"images": "images/portfolio_sm.jpg"
		},
		{
			"title": "Neighborhoods of Baltimore",
			"dates": 2016,
			"description": "A responsive page built from scratch featuring six Baltimore neighborhoods. Transitions were created with JavaScript and CSS.",
			"images": "images/baltimore_neighborhoods_sm.jpg"
		},
	],
	display: function() {
		for(var project in projects.projects) {
			if (projects.projects.hasOwnProperty(project)) {
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

				$(".project-entry:last").append(formattedTitle);
				$(".project-entry:last").append(formattedDates);
				$(".project-entry:last").append(formattedDesc);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();
bio.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
