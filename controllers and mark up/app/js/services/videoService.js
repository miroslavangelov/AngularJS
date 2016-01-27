app.factory("videoService", function() {
    var videos = [{
        title: 'JavaScript',
        pictureUrl: 'images/Shane_and_Friends_logo.jpg',
        length: '6:32',
        category: 'IT',
        subscribers: 3,
        date: new Date(2014, 12, 15),
        haveSubtitles: false,
        comments: [
            {
                username: 'Pesho Peshev',
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0),
                likes: 223,
                websiteUrl: 'http://pesho.com/'
            }
        ]
    },
        {
            title: 'Course introduction',
            pictureUrl: 'images/Standarte_Reichspräsident_1926-1933.svg',
            length: '53:32',
            category: 'IT',
            subscribers: 23,
            date: new Date(2015, 10, 8),
            haveSubtitles: true,
            comments: [
                {
                    username: 'Gosho Peshev',
                    content: 'Congratulations Miro',
                    date: new Date(2015, 12, 15, 12, 30, 0),
                    likes: 13,
                    websiteUrl: 'http://gosho.com/'
                }
            ]
        },
        {
            title: 'PHP',
            pictureUrl: 'images/Standarte_Reichspräsident_1926-1933.svg',
            length: '13:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2013, 10, 8),
            haveSubtitles: true,
            comments: [
                {
                    username: 'Gosho Peshev',
                    content: 'Congratulations Miro',
                    date: new Date(2015, 12, 15, 12, 30, 0),
                    likes: 13,
                    websiteUrl: 'http://gosho.com/'
                }
            ]
        }
    ];
    for(var i = 0, len = videos.length; i < len; i++) {
        var currentLength = videos[i].length;
        var number = parseFloat(currentLength.replace(":", "."));
        videos[i].length = number;
    }
    return {
        getVideos: function() {
            return videos;
        },
        addVideo: function(videoData) {
            videos.push(videoData);
            return videos;
        }
    }
});

app.factory("categoryService", function() {
    var categories = [
        {
            id: 1,
            name: "IT"
        },
        {
            id: 2,
            name: "Cars"
        },
        {
            id: 3,
            name: "Animals"
        }
    ];
    return {
        getCategories: function() {
            return categories;
        }
    }
});