exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("photos").insert([
        {
          photo_link:
            "https://www.shihoriobata.com/wp-content/uploads/2020/12/shooting-star-and-moon-phone-wallpaper-background.jpg",
          caption: "the sky is a wonder",
          comment: 0,
          likes: 0,
          user_id: 2,
        },
        {
          photo_link:
            "https://i.pinimg.com/originals/52/5d/30/525d30d3d8050e3b11edd23a219de37f.jpg",
          caption: "the sponge is scared",
          comment: 0,
          likes: 0,
          user_id: 1,
        },
        {
          photo_link:
            "https://theknow.denverpost.com/wp-content/uploads/2020/08/IMG_4252.jpg",
          caption: "the pretty colors are actually pollution",
          comment: 0,
          likes: 0,
          user_id: 3,
        },
        {
          photo_link:
            "https://data.whicdn.com/images/340787305/original.jpg?t=1582458677",
          caption: "just creating my next banger",
          comment: 0,
          likes: 0,
          user_id: 6, 
        },
        {
          photo_link:
            "https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/nowhere-1997-002-kathleen-robertson-rachel-true.jpg?itok=NnHDcnhi",
          caption: "get in lets go shopping",
          comment: 0,
          likes: 0,
          user_id: 4, 
        },
        {
          photo_link:
            "https://i.pinimg.com/736x/a3/d6/0d/a3d60dda35294170e3f51fab58cb0c42.jpg",
          caption: "greece lightning",
          comment: 0,
          likes: 0,
          user_id: 5, 
        },
        {
          photo_link:
            "https://i.pinimg.com/736x/01/53/cc/0153cc4e4ffcdca3c896ac598c87a1c6.jpg",
          caption: "trippy",
          comment: 0,
          likes: 0,
          user_id: 8,       
         
        },
        {
          photo_link:
            "https://badgerherald.com/media/2017/10/IMG_0621.jpg",
          caption: "touchdownnnnn",
          comment: 0,
          likes: 0,
          user_id: 7,   
  
        },
        {
          photo_link:
            "https://i.pinimg.com/474x/9f/20/c0/9f20c0fce336dad0bdcec12265064467.jpg",
          caption: "skate is life",
          comment: 0,
          likes: 0,
          user_id: 9,     
        },
        {
          photo_link:
            "https://assets.vogue.com/photos/58912a1785b3959618472234/master/w_1600%2Cc_limit/00-date-night-embed.jpg",
          caption: "cuba was beautiful",
          comment: 0,
          likes: 0,
          user_id: 11,    
        },
        {
          photo_link:
            "https://i.pinimg.com/564x/85/17/51/8517513561ce6d6f46ee2bdd4cdbadaa.jpg",
          caption: "lorde concert beyond amazing",
          comment: 0,
          likes: 0,
          user_id: 10,  
        },
        {
          photo_link:
            "https://i.pinimg.com/564x/aa/f1/8f/aaf18f141b2fd4bb9f64e80d231fc5b4.jpg",
          caption: "summer nights",
          comment: 0,
          likes: 0,
          user_id: 12,  
        } 
      ]);
    });
};

         
    