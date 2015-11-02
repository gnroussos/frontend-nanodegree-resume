// fill generic stats variables & create objects

var myName = "Ioannis Roussos";
var myRole = "Web Developer";
var myEmail ="gn.roussos@gmail.com";
var myPicUrl = "http://angelxp.be/profil/2013/Minion09.jpg";
var myMessage = "Welcome to my resume! <br> <br> <br>";
var mySkills = ["C++","Web", "Graphics","DirectX","Databases"];

var bio = {
    "name": myName,
    "role": myRole,
    "picUrl": myPicUrl,
    "welcomeMessage": myMessage,
    "skills": mySkills,
    "contacts": {
        "mobile": "650-339-6232",
        "email": myEmail,
        "github": " ",
        "location": "Bay Area, CA",
        "twiter":""
    }
};
bio.display=function()
{
    var formattedName = HTMLheaderName.replace("%data%", myName);
    var formattedRole = HTMLheaderRole.replace("%data%", myRole);

    var formattedPic = HTMLbioPic.replace("%data%", myPicUrl);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", myMessage);

    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);

    $("#header").append(formattedMsg);
    $("#topContacts").prepend(formattedLoc + formattedEmail + formattedMobile);
    $("#footerContacts").append(formattedLoc + formattedEmail + formattedMobile);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedPic);

}

var work = {
    "jobs": [
        {
            "employer" : "Chamber of Commerce",
            "title": "System Analyst",
            "location": "Greece",
            "dates": "2010-2011",
            "description":" Planned and implemented all software & hardware upgrades, & participated in design processes, assisted with testing and troubleshot bugs "
            },
        {
            "employer" : "TaT Logistics",
            "title": "IT Administrator",
            "location": "IL, Usa",
            "dates": "2014-2014",
            "description":"Set up network & email servers on Windows & provided technical support"
        }
    ]
};
work.display=function()
{
    if (bio.skills.length > 0)
    {
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

    for(var j in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);

        var fwe = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
        var fwt = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        $(".work-entry:last").append(fwe + fwt);

        var temp = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        $(".work-entry:last").append(temp);
        temp  = HTMLworkLocation.replace("%data%", work.jobs[j].location);
        $(".work-entry:last").append(temp);
        temp  = HTMLworkDescription.replace("%data%", work.jobs[j].description);
        $(".work-entry:last").append(temp);
    }
};


var projects = {
    "project": [
        {
            "title": "Web developer",
            "dates": "2015",
            "description": "Udacity nanodegree",
            "images":["http://cameronwp.github.io/cpcom/static/udacity_logo.svg"]
        },
        {
            "title": " Software developer",
            "dates": "2015",
            "description": "Windows 10 game",
            "images":["https://assets.onestore.ms/cdnfiles/onestorerolling-1510-27008/shell/v3/images/logo/microsoft.png"]
        }
    ]
};

projects.display = function()
{
    for (var p in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var temp = HTMLprojectTitle.replace("%data%", projects.project[p].title);
        $(".project-entry:last").append(temp);
        temp = HTMLprojectDates.replace("%data%", projects.project[p].dates);
        $(".project-entry:last").append(temp);
        var fpds = HTMLprojectDescription.replace("%data%", projects.project[p].description);
        $(".project-entry:last").append(fpds);
        for (var i in projects.project[p].images)
        {
            temp = HTMLprojectImage.replace("%data%", projects.project[p].images[i]);
            $(".project-entry:last").append(temp);
        }
    }
}

var education = {
    "schools":[
     {
         "name":"University of Bristol",
         "location": "Bristol, Uk",
         "dates": "2000-2004",
         "degree": "PhD",
         "majors": ["Computer Graphics"],
         "url": "http://bristol.ac.uk/"
     },
     {
         "name": "University of Heartfordshire",
         "location": "Heartfordshire, Uk",
         "dates": "1995-1998",
         "degree": "BSc",
         "majors": ["Computer Science"],
         "url": "http://www.herts.ac.uk/"
     }
    ],
    "onlinecourses":[
        {
            "title": "Web Developer",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com"
        }
    ]     
};
education.display = function()
{
    for (var e in education.schools) {
        $("#education").append(HTMLschoolStart);

        var temp = HTMLschoolName.replace("%url%",education.schools[e].url);
        temp = temp.replace("%data%", education.schools[e].name);
        $(".education-entry:last").append(temp);

        temp = HTMLschoolLocation.replace("%data%", education.schools[e].location);
        $(".education-entry:last").append(temp);
        temp = HTMLschoolDates.replace("%data%", education.schools[e].dates);
        $(".education-entry:last").append(temp);
        temp = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
        $(".education-entry:last").append(temp);
        for (var m in education.schools[e].majors)
        {
            temp = HTMLschoolMajor.replace("%data%", education.schools[e].majors[m]);
            $(".education-entry:last").append(temp);
        }
    }
    for (var oc in education.onlinecourses) {
        $("#education").append(HTMLonlineStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        temp = HTMLonlineTitle.replace("%data%", education.onlinecourses[oc].title);
        $(".education-entry:last").append(temp);
        temp = HTMLonlineSchool.replace("%data%", education.onlinecourses[oc].school);
        $(".education-entry:last").append(temp);
        temp = HTMLonlineDates.replace("%data%", education.onlinecourses[oc].dates);
        $(".education-entry:last").append(temp);
        temp = HTMLonlineURL.replace("%data%", education.onlinecourses[oc].url);
        temp = temp.replace("%url%",education.onlinecourses[oc].url);
        $(".education-entry:last").append(temp);
    }

}
//replace values in html

bio.display();
work.display();
projects.display();
education.display();



$("#mapdiv").append(googleMap);


//TEST functions during classes
/*
function locationizer(work_obj) {
    var arrayloc = [];
    for(var w in work_obj.jobs){
        arrayloc.push(work_obj.jobs[w].location);
    }

    return arrayloc;
}
*/


//$("#main").append(internationalizeButton);