// fill generic stats variables & create objects

var myName = "Ioannis Roussos";
var myRole = "Web Developer";
var myEmail ="gn.roussos@gmail.com";
var myPicUrl = "http://angelxp.be/profil/2013/Minion09.jpg";
var myMessage = "Welcome to my resume!";
var mySkills = ["C++","Web", "Graphics"];

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
        "location": "Bay Area, CA"
    }
};

var work = {
    "jobs": [
        {
            "employer" : "Chamber of Commerce",
            "title": "System Analyst",
            "location": "Greece",
            "dates": "2010-2011",
            "description":" systems specialist"
            },
        {
            "employer" : "TaT Logistics",
            "title": "IT Administrator",
            "location": "IL, USA",
            "dates": "2014-2014",
            "description":"network setup"
        }
    ]
}

var projects = {
    "project": [
        {
            "title": "Web developer",
            "dates": "2015",
            "description": "Udacity nanodegree",
            "images":["http://cameronwp.github.io/cpcom/static/udacity_logo.svg","http://cameronwp.github.io/cpcom/static/udacity_logo.svg"]
        }
    ]
}

var education = {
    "schools":[
     {
         "name":"University of Bristol",
         "location": "Bristol, Uk",
         "dates": "2000-2004",
         "degree": "PhD",
         "majors": ["Computer Graphics"],
         "url": ""
     },
     {
         "name": "University of Heartfordshire",
         "location": "Heartfordshire, Uk",
         "dates": "1995-1998",
         "degree": "BSc",
         "majors": ["Computer Science"],
         "url": ""
     }
    ],
    "onlinecourses":[
        {
            "title": "Web Developer",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com"
        }
    ]     
};

//replace values in html

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

var formattedPic = HTMLbioPic.replace("%data%", myPicUrl);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", myMessage);

var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
//var formattedContact = HTMLcontactGeneric.replace("%contact%", "Contact Info");
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);


$("#header").prepend(formattedGit);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedLoc);
//$("#header").prepend(formattedContact);

$("#header").prepend(formattedMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
displayWork();

//$("#main").append(internationalizeButton);

projects.display = function()
{
    for (var p in projects.project) {
        $("#workExperience").append(HTMLprojectStart);

        var fpt = HTMLprojectTitle.replace("%data%", projects.project[p].title);
        $(".project-entry:last").append(fpt);
        var fpd = HTMLprojectDates.replace("%data%", projects.project[p].dates);
        $(".project-entry:last").append(fpd);
        var fpds = HTMLprojectDescription.replace("%data%", projects.project[p].description);
        $(".project-entry:last").append(fpds);
        for (var i in projects.project[p].images)
        {
            var fpi = HTMLprojectImage.replace("%data%", projects.project[p].images[i]);
            $(".project-entry:last").append(fpi);
        }
    }
}

function displayWork()
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
    }

    for(var j in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);

        var fwe = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
        var fwt = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        $(".work-entry:last").append(fwe + fwt);

        var fwd = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        $(".work-entry:last").append(fwd);
        var fwl = HTMLworkLocation.replace("%data%", work.jobs[j].location);
        $(".work-entry:last").append(fwl);
        var fwds = HTMLworkDescription.replace("%data%", work.jobs[j].description);
        $(".work-entry:last").append(fwds);
    }
}


//TEST functions during classes
/*
$(document).click(function(loc)
{
  var x = loc.pageX;
  var y = loc.pageY;
logClicks(x,y);
});

function locationizer(work_obj) {
    var arrayloc = [];
    for(var w in work_obj.jobs){
        arrayloc.push(work_obj.jobs[w].location);
    }

    return arrayloc;
}

function inName(name)
{
    var nameArray = name.split(" ");

    var last = nameArray[1].toUpperCase();
    var first = nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
    return first + " "+ last;
}
*/