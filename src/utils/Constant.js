export const API_KEY = 'AIzaSyD9u3VcxFh6lYa3x06q0BcsAxQVuvNuIeA';

export const CHANNEL_ID = 'UCsT0YIqwnpJCM-mx7-gSA4Q';

export const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=30&key=AIzaSyD9u3VcxFh6lYa3x06q0BcsAxQVuvNuIeA&pageToken='

export const API_USER_PLAYLIST = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&id=PL38wFHH4qYZVs-liHzE8Ddgl4Yuewxp5g&key=AIzaSyD9u3VcxFh6lYa3x06q0BcsAxQVuvNuIeA'

export const API_VIDEOS_LIST = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PL38wFHH4qYZVs-liHzE8Ddgl4Yuewxp5g&key=AIzaSyD9u3VcxFh6lYa3x06q0BcsAxQVuvNuIeA'

export const API_SEARCH = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';


// UCAuUUnT6oDeKwE6v1NGQxug
// snippet,contentDetails
// mine=true

// https://youtube.com/playlist?list=PL38wFHH4qYZVs-liHzE8Ddgl4Yuewxp5g&si=mNdM5huwi-8E4M-a


export const commetsData = [
    {
    user:'user 1',
    text: 'hello nice one',
    id: 1,
    comment : [{
        user: 'user 1 sub',
        text: 'bad one',
        id:12,
        comment:  [{
        user: 'user 1 sub child',
        text: 'bad one',
        id:13,
        comment: []
    }]
   }]
    },
     {
    user:'user 2',
    text: 'hello nice one',
    id:2,
    comment : [{
        user: 'user 2 sub',
        text: 'bad one',
        comment:  [],
        id: 21
   }]
    },
     {
    user:'user 3',
    text: 'hello nice one',
    id: 3,
    comment : [{
        user: 'user 3 sub',
        text: 'bad one',
        comment:  [],
        id: 31
   }],
    },
     {
    user:'user 4',
    text: 'hello nice one',
    id: 4,
    comment : [{
        user: 'user 3 sub',
        text: 'bad one',
        comment:  [],
        id: 41
   }],
    }
];
