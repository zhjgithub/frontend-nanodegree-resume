var bio = {
    name: 'Jun Zhang',
    role: 'Web Developer',
    contacts: {
        mobile: '13900000000',
        email: 'neuqzhj@gmail.com',
        github: 'https://github.com/zhjgithub',
        location: 'Shanghai'
    },
    welcomeMessage: 'Hi, welcome.',
    bioPic: 'images/fry.jpg',
    skills: ['HTML', 'CSS', 'JavaScript']
};

var work = {
    "jobs": [{
        "employer": 'Shanghai Mokun',
        "title": 'Game Developer',
        "location": 'Shanghai',
        "dates": "2014-2017",
        "description": 'Game Develop'
    }, {
        "employer": 'Shanghai Yiwei',
        "title": 'Game Developer',
        "location": 'Shanghai',
        "dates": "2013-2014",
        "description": 'Game Develop'
    }]
};

var projects = {
    "projects": [{
        "title": "Mobile Game",
        "dates": "2014-2017",
        "description": "Mobile game development",
        "images": ["images/197x148.gif"]
    }, {
        "title": "PC Game",
        "dates": "2013-2014",
        "description": "PC game development",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

var education = {
    "schools": [{
        "name": "NEUQ",
        "location": "Qinhuangdao",
        "degree": "bachelor",
        "dates": "2001-2005",
        "url": "http://www.neuq.edu.cn/",
        "majors": ["Computer Science and Technology"]
    }],
    "onlineCourses": [{
        "title": "Front-end Development Basic",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
    }]
};

function displayWork(jobs) {
    if (jobs !== undefined && jobs.length > 0) {
        jobs.forEach(function (element) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', element.employer) + HTMLworkTitle.replace('%data%', element.title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', element.dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', element.location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', element.description));
        });
    }
}

function inName(name) {
    var arrNames = name.trim().split(/ +/);

    arrNames[0] = arrNames[0].charAt(0).toUpperCase() + arrNames[0].slice(1).toLowerCase();
    arrNames[1] = arrNames[1].toUpperCase();

    return arrNames[0] + ' ' + arrNames[1];
}

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

if (bio.skills !== undefined && bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    bio.skills.forEach(function (element) {
        $('#skills').append(HTMLskills.replace('%data%', element));
    });
}

displayWork(work.jobs);

projects.display = function () {
    if (this.projects !== undefined && this.projects.length > 0) {
        this.projects.forEach(function (project) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
            if (project.images !== undefined && project.images.length > 0) {
                project.images.forEach(function (image) {
                    $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
                });
            }
        });
    }
};

projects.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
