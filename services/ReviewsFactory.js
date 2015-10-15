nicksFlix.factory("ReviewsFactory", function ReviewsFactory() {
    var factory = {};
    factory.reviews = [
        // hard code the 6 examples here
        // just like students in last code review
                        { id: 1, title: "Hackers is the best movie ever!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

                        { id: 2, title: "Don't ever see Garden State", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

                        { id: 3, title: "My thought on the new Star Wars", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

                        { id: 4, title: "Sharknado is a classic", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

                        { id: 5, title: "Check out the new Thor movie", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},

                        { id: 6, title: "Seriously, don't ever see Garden State", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ];

    factory.addReveiw = function() {
        factory.reviews.push({id: factory.reviews.length + 1, title: factory.reviewTitle, body: factory.reviewBody})
        factory.reviewTitle = null;
        factory.reviewBody = null;
    };


    return factory;
});
