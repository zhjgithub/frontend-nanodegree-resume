var bio = {
    name: 'Jun Zhang',
    role: 'Web Developer',
    contacts: {
        mobile: '18501638530',
        email: 'neuqzhj@gmail.com',
        github: 'https://github.com/zhjgithub',
        location: 'Shanghai'
    },
    welcomeMessage: 'I was a game developer for 6 years. I would like to be a web developer.',
    skills: ['HTML/CSS/JavaScript', 'Regular Expression', 'Bootstrap', 'jQuery', 'C++/C#'],
    biopic: 'images/fry.jpg',

    display: function () {
        var headerNode = $('#header');

        headerNode.prepend(HTMLheaderRole.replace('%data%', this.role));
        headerNode.prepend(HTMLheaderName.replace('%data%', this.name));
        headerNode.append(HTMLbioPic.replace('%data%', this.biopic));
        this.displayContacts($('#topContacts'));
        this.displayContacts($('#footerContacts'));
        headerNode.append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

        if (this.skills.length > 0) {
            headerNode.append(HTMLskillsStart);
            var skillList = $('#skills');

            this.skills.forEach(function (element) {
                skillList.append(HTMLskills.replace('%data%', element));
            });
        }
    },

    displayContacts: function (contactsNode) {
        contactsNode.append(HTMLmobile.replace('%data%', this.contacts.mobile));
        contactsNode.append(HTMLemail.replace('%data%', this.contacts.email));
        contactsNode.append(HTMLgithub.replace('%data%', this.contacts.github));
        contactsNode.append(HTMLlocation.replace('%data%', this.contacts.location));
    }
};

var work = {
    jobs: [{
        employer: 'Shanghai Mokun',
        title: 'Game Developer',
        location: 'Shanghai',
        dates: '2014-2017',
        description: 'Develop a mobile game on the Apple App Store and Tencent App Store'
    }, {
        employer: 'Shanghai Yiwei',
        title: 'Game Developer',
        location: 'Shanghai',
        dates: '2012-2013',
        description: 'Develop 3D MMORPG game'
    }, {
        employer: 'Shanghai Baze',
        title: 'Game Developer',
        location: 'Shanghai',
        dates: '2010-2011',
        description: 'Develop 2D online game'
    }],
    display: function () {
        if (this.jobs.length > 0) {
            var workExperienceNode = $('#workExperience');

            this.jobs.forEach(function (element) {
                var workEntry = $(HTMLworkStart).appendTo(workExperienceNode);
                workEntry.append(HTMLworkEmployer.replace('%data%', element.employer) + HTMLworkTitle.replace('%data%', element.title));
                workEntry.append(HTMLworkDates.replace('%data%', element.dates));
                workEntry.append(HTMLworkLocation.replace('%data%', element.location));
                workEntry.append(HTMLworkDescription.replace('%data%', element.description));
            });
        }
    }
};

var projects = {
    projects: [{
        title: 'QMWS - Mokun',
        dates: '2014-2017',
        description: 'Mobile game developed by Unity3D',
        images: ['images/project.jpg']
    }, {
        title: 'Dasong - Yiwei',
        dates: '2012-2013',
        description: 'Developed by C++ and AS2/AS3 based on UE3 and Scaleform',
        images: ['images/project.jpg']
    }, {
        title: 'Xiakeyou - Baze',
        dates: '2010-2011',
        description: 'Developed by C++ based on a customer game engine',
        images: ['images/project.jpg']
    }],
    display: function () {
        if (this.projects.length > 0) {
            var projectsNode = $('#projects');

            this.projects.forEach(function (project) {
                var projectEntry = $(HTMLprojectStart).appendTo(projectsNode);

                projectEntry.append(HTMLprojectTitle.replace('%data%', project.title));
                projectEntry.append(HTMLprojectDates.replace('%data%', project.dates));
                projectEntry.append(HTMLprojectDescription.replace('%data%', project.description));
                if (project.images !== undefined && project.images.length > 0) {
                    project.images.forEach(function (image) {
                        projectEntry.append(HTMLprojectImage.replace('%data%', image));
                    });
                }
            });
        }
    }
};

var education = {
    schools: [{
        name: 'NEUQ',
        location: 'Qinhuangdao',
        degree: 'bachelor',
        majors: ['Computer Science and Technology'],
        dates: '2001-2005',
        url: 'http://www.neuq.edu.cn/'
    }],

    onlineCourses: [{
        title: 'Front-end Development Basic',
        school: 'Udacity',
        dates: '2017',
        url: 'https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic'
    }],

    display: function () {
        var educationNode = $('#education');

        if (this.schools.length > 0) {
            this.schools.forEach(function (school) {
                var educationEntry = $(HTMLschoolStart).appendTo(educationNode);

                var schoolInfo = HTMLschoolName.replace('#', school.url).replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree);
                educationEntry.append(schoolInfo);
                educationEntry.append(HTMLschoolDates.replace('%data%', school.dates));
                educationEntry.append(HTMLschoolLocation.replace('%data%', school.location));
                if (school.majors.length > 0) {
                    educationEntry.append(HTMLschoolMajor.replace('%data%', school.majors.join(',')));
                }
            });
        }

        if (this.onlineCourses.length > 0) {
            educationNode.append(HTMLonlineClasses);
            
            this.onlineCourses.forEach(function (course) {
                var educationEntry = $(HTMLschoolStart).appendTo(educationNode);

                var courseInfo = HTMLonlineTitle.replace('#', course.url).replace('%data%', course.title) + HTMLonlineSchool.replace('%data%', course.school);
                educationEntry.append(courseInfo);
                educationEntry.append(HTMLonlineDates.replace('%data%', course.dates));
                educationEntry.append(HTMLonlineURL.replace('%data%', course.url).replace('#', course.url));
            });
        }
    }
};

var navbar = {
    items: [{
        id: '#header',
        content: 'Top'
    }, {
        id: '#workExperience',
        content: 'Work Experience'
    }, {
        id: '#projects',
        content: 'Projects'
    }, {
        id: '#education',
        content: 'Education'
    }, {
        id: '#mapDiv',
        content: 'Map'
    }, {
        id: '#lets-connect',
        content: 'Connect'
    }],

    display: function () {
        if (this.items.length > 0) {
            $('#main').prepend(HTMLNavbar);
            var navbarList = $('#navbar-list');

            this.items.forEach(function (item) {
                 navbarList.append(HTMLNavbarItem.replace('#', item.id).replace('%data%', item.content));
            });
        }
    }
};

var rss = {
    icon: 'images/feed-icon.png',
    url: 'https://zhjgithub.github.io/frontend-nanodegree-resume/rss.xml',

    display: function () {
        var rssLink = HTMLRSS.replace('#', this.url).replace('%data%', this.icon);
        $('#footerContacts').append(rssLink);
    }
};

bio.display();
work.display();
projects.display();
education.display();
navbar.display();
rss.display();

$('#mapDiv').append(googleMap);
