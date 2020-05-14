export const Articles = {
   articles: [ 
     {
      id: 1,
      Author: "Frank",
      date: new Date('December 17, 1995 03:24:00'),
      Title: "IpsumLorem",
      image: "https://i.pinimg.com/originals/55/14/f0/5514f0c8c9af2b910d75145c700e8e4c.jpg",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      Author: "Pete",
      date: new Date('December 17, 2020 03:24:00'),
      Title: "IpsumLorem",
      image: "https://i.pinimg.com/originals/55/14/f0/5514f0c8c9af2b910d75145c700e8e4c.jpg",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 3,
      Author: "Dave",
      date: new Date('December 17, 2015 03:24:00'),
      Title: "IpsumLorem",
      image: "https://i.pinimg.com/originals/55/14/f0/5514f0c8c9af2b910d75145c700e8e4c.jpg",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 4,
      Author: "Max",
      date: new Date('November 17, 2020 03:24:00'),
      Title: "IpsumLorem",
      image: "https://i.pinimg.com/originals/55/14/f0/5514f0c8c9af2b910d75145c700e8e4c.jpg",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  all: function() { return this.articles },
  get: function(id) {
    const isArticle = a => a.id === id
    return this.articles.find(isArticle)
  }
};

