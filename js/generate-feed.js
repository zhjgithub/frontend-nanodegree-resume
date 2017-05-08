const Feed = require('feed');
const writeFile = require('write');
const fs = require('fs');

// data
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
  }]
};

var rss = {
  icon: 'images/feed-icon.png',
  url: 'rss.xml'
};

// format
var rssDesc = '<![CDATA[%data%]]>';
var htmlPerson = '<p><span style="font-size: 1.5em">%name%</span> <span>%role%</span></p>';
var htmlDiv = '<div>%data%</div>';
var htmlParagraph = '<p>%data%</p>';
var htmlList = '<p><ul>%data%</ul></p>';
var htmlListItem = '<li>%data%</li>';
var htmlLink = '<a href="#">%data%</a>';
var htmlNewline = '<br><span>%data%</span>';
var htmlSpan = '<span>%data%</span>';
var htmlHead = '<h3>%data%</h3>';
var siteUrl = 'https://zhjgithub.github.io/frontend-nanodegree-resume/';

// rss head
let feed = new Feed({
  title: 'Resume',
  description: 'This is my personnal resume!',
  id: siteUrl,
  link: siteUrl,
  image: siteUrl + bio.biopic,
  copyright: 'All rights reserved 2017, Jun Zhang',
  //updated: new Date(2013, 06, 14), // optional, default = today

  author: {
    name: 'Jun Zhang',
    email: 'neuqzhj@gmail.com',
    link: siteUrl
  }
});

var content, section, list;

// item bio
content = htmlPerson.replace('%name%', bio.name).replace('%role%', bio.role);

list = '';
list += htmlListItem.replace('%data%', 'mobile ' + bio.contacts.mobile);
list += htmlListItem.replace('%data%', 'email ' + bio.contacts.email);
list += htmlListItem.replace('%data%', 'github ' + bio.contacts.github);
list += htmlListItem.replace('%data%', 'location ' + bio.contacts.location);
content += htmlList.replace('%data%', list);

content += htmlParagraph.replace('%data%', bio.welcomeMessage);

if (bio.skills.length > 0) {
  content += htmlDiv.replace('%data%', 'Skills at a Glance:');
  list = '';

  bio.skills.forEach(function (skill) {
    list += htmlListItem.replace('%data%', skill);
  });

  content += htmlList.replace('%data%', list);
}

// item work
if (work.jobs.length > 0) {
  content += htmlHead.replace('%data%', 'Work Experience');

  work.jobs.forEach(function (job) {
    section = htmlLink.replace('%data%', job.employer + ' - ' + job.title);
    section += htmlNewline.replace('%data%', job.dates + ' ' + job.location);
    section += htmlNewline.replace('%data%', job.description);
    content += htmlParagraph.replace('%data%', section);
  });
}

// item projects
if (projects.projects.length > 0) {
  content += htmlHead.replace('%data%', 'Projects');

  projects.projects.forEach(function (project) {
    section = htmlSpan.replace('%data%', project.title);
    section += htmlNewline.replace('%data%', project.dates);
    section += htmlNewline.replace('%data%', project.description);
    content += htmlParagraph.replace('%data%', section);
  });
}

// item education
if (education.schools.length > 0) {
  content += htmlHead.replace('%data%', 'Education');

  education.schools.forEach(function (school) {
    section = htmlLink.replace('#', school.url).replace('%data%', school.name + ' - ' + school.degree);
    section += htmlNewline.replace('%data%', school.dates);
    section += htmlNewline.replace('%data%', 'Major: ' + school.majors.join(', '));
    content += htmlDiv.replace('%data%', section);
  });

  if (education.onlineCourses.length > 0) {
    content += htmlHead.replace('%data%', 'Online Classes');

    education.onlineCourses.forEach(function (course) {
      section = htmlLink.replace('#', course.url).replace('%data%', course.title + ' - ' + course.school);
      section += htmlNewline.replace('%data%', course.dates);
      section += '<br>' + htmlLink.replace('#', course.url).replace('%data%', course.url);
      content += htmlDiv.replace('%data%', section);
    });
  }
}

feed.addItem({
  title: 'Resume',
  id: siteUrl,
  link: siteUrl,
  description: 'My resume',
  content: content,
  author: [{
    name: 'Jun Zhang',
    email: 'neuqzhj@gmail.com',
    link: siteUrl
  }],
  date: new Date()
});

writeFile.sync('rss.xml', feed.rss2());