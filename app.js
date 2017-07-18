(function(){
  var app=angular.module('store',[]);
  app.controller('StoreController',function(){
    this.products=gems;
  });
  app.controller('PanelController',function(){
    this.tab=1;
    this.selectTab=function(setTab){
      this.tab=setTab;
    };
    this.isSelected=function(checkTab){
      return this.tab === checkTab;
    };
  });
  app.controller('ReviewController',function(){
    this.review={};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review={};
    };
  });
  var gems=[
    {
    name: "Dodecahedron",
    price: 2.95,
    description: "Some gems have hidden quality beyond their lusture, beyond their shine..Dodecahedron is one among them",
    canPurchase: true,
    images:[
      {
        full:'dodecahedron.jpg',
        thumb:'dodecahedron.jpg'
      },
      {
        full:'dodecahedron1.gif',
        thumb:'dodecahedron1.gif'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "I love this product!",
        author: "joe@thomas.com"
      },
      {
        stars: 1,
        body: "This product sucks",
        author: "tim@hater.com"
      }
    ]
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "Some gems have hidden quality beyond their lusture, beyond their shine.Pentagonal is one among them",
    canPurchase: false,
    images:[
      {
        full:'pentagonal.jpg',
        thumb:'pentagonal.jpg'
      },
      {
        full:'pentagonal1.gif',
        thumb:'pentagonal1.gif'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "I love this product!",
        author: "joe@thomas.com"
      },
      {
        stars: 1,
        body: "This product sucks",
        author: "tim@hater.com"
      }
    ]
  }
];
})();
