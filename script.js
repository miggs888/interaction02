var data;
var bubbleWidth = 5;

//political party color variables
var demColor = 'rgba(0,0,255, 0.2)';
var repColor = 'rgba(255,0,0, 0.2)';
var indiColor = 'rgba(255,255,0, 0.25)';

// loads JSON with 116th Congression House member stats 
function preload() {
  data = loadJSON("members.json");
}

function setup() {
  createCanvas(windowWidth * .75, windowHeight * .6);
  var button = select('#submit');
  button.mousePressed(repLookUp);
  background(200, .0);
}
function repLookUp() {
  background(200, .1);
  if(data) {
      for (var i = 0; i < data.members.length; i++) {
        noStroke();
        // stroke('rgba(255,255,255, 0.33)');
      var party = data.members[i].party[0]; // defines variable for party affiliation 
      var voteStat = data.members[i].votes_against_party_pct; // defines variable for vote against party percentage
      var voteLocation = ((windowWidth * .75) / (100.01 / voteStat)); // converts the stat to a percentage of the canvas
        if(party === "R") { // REPUBLICAN fill & postision
          fill(repColor);
          ellipse(voteLocation, random(height), bubbleWidth, bubbleWidth);
        };
        if (party === "D") { // DEMOCRAT fill & postision 
          fill(demColor);
          ellipse((windowWidth * .75) - voteLocation, random(height), bubbleWidth, bubbleWidth);
        }; 
        if(party === "I") { // INDEPENDENT fill & postision 
          fill(indiColor);
          ellipse(voteLocation, random(height), bubbleWidth, bubbleWidth);
        }
      }
    }
  }
  console.log(data.members);
  alert("yas queen");
  function windowResized() { 
    resizeCanvas(windowWidth * .75 , windowHeight * .6); 
} 