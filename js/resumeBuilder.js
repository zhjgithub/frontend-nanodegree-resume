(function () {
    var data = {
        biography: {
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
            biopic: 'images/fry.jpg'
        },

        work: {
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
            }]
        },

        projects: {
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
            }]
        },

        education: {
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
            }]
        },

        navbar: {
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
        },

        rss: {
            icon: 'images/feed-icon.png',
            url: 'https://zhjgithub.github.io/frontend-nanodegree-resume/rss.xml'
        }
    }

    var octopus = {
        init: function () {
            view.render();
        },

        getBiography: function () {
            return data.biography;
        },

        getContact: function () {
            return data.biography.contacts;
        },

        getWork: function () {
            return data.work;
        },

        getJobs: function () {
            return data.work.jobs;
        },

        getProjects: function () {
            return data.projects.projects;
        },

        getEducation: function () {
            return data.education;
        },

        getSchools: function () {
            return data.education.schools;
        },

        getOnlineCourses: function () {
            return data.education.onlineCourses;
        },

        getNavigatorItems: function () {
            return data.navbar.items;
        },

        getRSS: function () {
            return data.rss;
        }
    };

    var view = {
        init: function () {
            this.render();
        },

        render: function () {
            this.displayBiography();
            this.displayWork();
            this.displayProjects();
            this.displayEducation();
            this.displayNavbar();
            this.displayRSS();
            $('#mapDiv').append(googleMap);
        },

        displayBiography: function () {
            var biography = octopus.getBiography();
            var headerNode = $('#header');

            headerNode.prepend(
                HTMLheaderName.replace('%data%', biography.name),
                HTMLheaderRole.replace('%data%', biography.role));
            headerNode.append(HTMLbioPic.replace('%data%', biography.biopic));
            this.displayContacts([$('#topContacts'), $('#footerContacts')]);
            headerNode.append(HTMLwelcomeMsg.replace('%data%', biography.welcomeMessage));

            if (biography.skills.length > 0) {
                headerNode.append(HTMLskillsStart);
                var skillList = $('#skills');

                biography.skills.forEach(function (element) {
                    skillList.append(HTMLskills.replace('%data%', element));
                });
            }
        },

        displayContacts: function (contactsNodes) {
            var contacts = octopus.getContact();

            contactsNodes.forEach(function (node) {
                node.append(
                    HTMLmobile.replace('%data%', contacts.mobile),
                    HTMLemail.replace('%data%', contacts.email),
                    HTMLgithub.replace('%data%', contacts.github),
                    HTMLlocation.replace('%data%', contacts.location));
            })
        },

        displayWork: function () {
            var jobs = octopus.getJobs();

            if (jobs.length > 0) {
                var workExperienceNode = $('#workExperience');

                jobs.forEach(function (element) {
                    var workEntry = $(HTMLworkStart).appendTo(workExperienceNode);

                    workEntry.append(
                        HTMLworkEmployer.replace('%data%', element.employer) +
                        HTMLworkTitle.replace('%data%', element.title),
                        HTMLworkDates.replace('%data%', element.dates),
                        HTMLworkLocation.replace('%data%', element.location),
                        HTMLworkDescription.replace('%data%', element.description));
                });
            }
        },

        displayProjects: function () {
            var projects = octopus.getProjects();

            if (projects.length > 0) {
                var projectsNode = $('#projects');

                projects.forEach(function (project) {
                    var projectEntry = $(HTMLprojectStart).appendTo(projectsNode);

                    projectEntry.append(
                        HTMLprojectTitle.replace('%data%', project.title),
                        HTMLprojectDates.replace('%data%', project.dates),
                        HTMLprojectDescription.replace('%data%', project.description));

                    if (project.images !== undefined && project.images.length > 0) {
                        project.images.forEach(function (image) {
                            projectEntry.append(HTMLprojectImage.replace('%data%', image));
                        });
                    }
                });
            }
        },

        displayEducation: function () {
            var schools = octopus.getSchools();
            var onlineCourses = octopus.getOnlineCourses();
            var educationNode = $('#education');

            if (schools.length > 0) {
                schools.forEach(function (school) {
                    var educationEntry = $(HTMLschoolStart).appendTo(educationNode);
                    var schoolInfo = HTMLschoolName.replace('#', school.url)
                        .replace('%data%', school.name) +
                        HTMLschoolDegree.replace('%data%', school.degree);

                    educationEntry.append(
                        schoolInfo,
                        HTMLschoolDates.replace('%data%', school.dates),
                        HTMLschoolLocation.replace('%data%', school.location));

                    if (school.majors.length > 0) {
                        educationEntry.append(HTMLschoolMajor.replace('%data%', school.majors.join(',')));
                    }
                });
            }

            if (onlineCourses.length > 0) {
                educationNode.append(HTMLonlineClasses);

                onlineCourses.forEach(function (course) {
                    var educationEntry = $(HTMLschoolStart).appendTo(educationNode);
                    var courseInfo = HTMLonlineTitle.replace('#', course.url)
                        .replace('%data%', course.title) +
                        HTMLonlineSchool.replace('%data%', course.school);

                    educationEntry.append(
                        courseInfo,
                        HTMLonlineDates.replace('%data%', course.dates),
                        HTMLonlineURL.replace('%data%', course.url).replace('#', course.url));
                });
            }
        },

        displayNavbar: function () {
            var items = octopus.getNavigatorItems();

            if (items.length > 0) {
                $('#main').prepend(HTMLNavbar);
                var navbarList = $('#navbar-list');

                items.forEach(function (item) {
                    navbarList.append(
                        HTMLNavbarItem.replace('#', item.id)
                        .replace('%data%', item.content));
                });
            }
        },

        displayRSS: function () {
            var rss = octopus.getRSS();

            var rssLink = HTMLRSS.replace('#', rss.url)
                .replace('%data%', rss.icon);

            $('#footerContacts').append(rssLink);
        }
    };

    octopus.init();
    window.bio = octopus.getBiography();
    window.education = octopus.getEducation();
    window.work = octopus.getWork();
}());