let movies = [
    {titleName: 'Mystic Pizza',
     locationName: 'Connecticut',
     release: {year: 1988,
             month: 'October',
             day: 21},
     knownFor: ['Julia Roberts',
                'Mystic Pizza']
    },
    {titleName: 'Legally Blonde',
     locationName: 'California',
     release: {year: 2001,
             month: 'July',
             day: 13},
     knownFor: ['Reese Witherspoon',
                'Harvard University']
    },
    {titleName: 'Forrest Gump',
     locationName: 'Carolinas',
     release: {year: 1994,
             month: 'July',
             day: 6},
     knownFor: ['Tom Hanks',
                'Best picture']
    },
   {titleName: 'Empire Stikes Back',
     locationName: 'England',
     release: {year: 1980,
             month: 'May',
             day: 6},
     knownFor: ['Luke Skywalker',
                'Cloud City']
   },
   {titleName: 'Captain America The Winter Soldier',
     locationName: 'Baltimore',
     release: {year: 2014,
             month: 'April',
             day: 4},
     knownFor: ['Chris Evans',
                'Bucky Barnes']
   },
   {titleName: 'Avengers End Game',
     locationName: ' New York City',
     release: {year: 2019,
             month: 'April',
             day: 26},
     knownFor: ['Iron Man',
                'Captain America']
   },
   {titleName: 'Infinity War',
     locationName: 'Georgia',
     release: {year: 2018,
             month: 'April',
             day: 27},
     knownFor: ['Thanos',
                'The Ending']
   },
   {titleName: 'The Breakfast Club',
     locationName: 'Illinois',
     release: {year: 1985,
             month: 'February',
             day: 7},
     knownFor: ['Molly Ringwald',
                'Anthony Micheal Hall']
   },
   {titleName: '16 Candles',
     locationName: 'Illinois',
     release: {year: 1984,
             month: 'May',
             day: 4},
     knownFor: ['Molly Ringwald',
                'Jake Ryan']
   },
   {titleName: 'A New Hope',
     locationName: 'California',
     release: {year: 1977,
             month: 'May',
             day: 25},
     knownFor: ['Obi Wan Kenobi',
                'Luke Skywalker']
   },
];

for (let movie of movies) {
  document.write('<h1>'
                 + movie.titleName
                 + '</h1>');
  document.write('Release: '
                 + movie.release.month + ' '
                 + movie.release.day + ', '
                 + movie.release.year);
  document.write('<br>');
  document.write('Known for:');
  for (let topic of movie.knownFor) {
    document.write('<li>'
                   + topic
                   + '</li>');
  }
  document.write('<br>');
}
