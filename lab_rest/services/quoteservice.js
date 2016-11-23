var quotes = [
    { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
    { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
    { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];


var findAll= function (){
    return quotes;
}

var findById = function (id) {
    return quotes[id];
}

var create = function (quote) {
    quotes.push(quote);
}

var remove = function (id){
    quotes.splice(id, 1);
}

module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.create = create;
module.exports.remove = remove;