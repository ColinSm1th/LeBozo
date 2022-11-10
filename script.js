var tooltipSpan = document.getElementById('details-box');

document.addEventListener('mouseover', function(e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    document.getElementById("details-box").innerHTML = content;
    document.getElementById("details-box").style.opacity = "100%";
  }
  else {
    document.getElementById("details-box").style.opacity = "0%";
  }
});

window.onmousemove = function(e) {
  var x = e.clientX,
    y = e.clientY;
  tooltipSpan.style.top = (y + 20) + 'px';
  tooltipSpan.style.left = (x) + 'px';
};

var sound

function playSound(id) {
  if (document.getElementById(id)) {
    if (sound) {
      sound.pause()
    }
    setTimeout(function() {
      sound = document.getElementById(id);
      sound.currentTime = 0;
      sound.play();
    }, 1);

  }
}


document.getElementById("MN").addEventListener("click", function() {
  alert("Minnesota's Capital is Saint Paul, It has a population of 5.707 million, and its governor is Tim Walz");
  playSound("Minnesota")
});

document.getElementById("MT").addEventListener("click", function() {
  alert("Montanta why are you staring so intensly at Idaho like chill out");
});

document.getElementById("MA").addEventListener("click", function() {
  alert("Mark Whalberg be like Hey its me mark walhber");
});

document.getElementById("ND").addEventListener("click", function() {
  alert("What do you guys have going for yourself up there other than Bismarck and Fargo?");
});

document.getElementById("HI").addEventListener("click", function() {
  alert("Woah this is like Blue Hawaiʻi all over again");
});

document.getElementById("ID").addEventListener("click", function() {
  alert("POTATO POTATO POTATO POTATO POTATO POTATO!!!!!!");
  playSound("Idaho")
  document.body.style.backgroundImage = "url('Backgrounds/dancing-potato.gif')";
});

document.getElementById("WA").addEventListener("click", function() {
  alert("Microsoft in Seatle est 1979");
});

document.getElementById("AZ").addEventListener("click", function() {
  alert("Why do you live here the coldest night in winter is literally 100F");
});

document.getElementById("CA").addEventListener("click", function() {
  alert("California has a larger population than Canada so take that Canadians");
  playSound("California")
  document.body.style.backgroundImage = "url('Backgrounds/bazinga.gif')";
});

document.getElementById("CO").addEventListener("click", function() {
  alert("I'm going down to South Park Gonna have myself a time Friendly faces everywhere Humble folks without temptation I'm going down to South Park Gonna leave my woes behind Ample parking day or night People spouting Howdy neighbor! Heading on up to South Park Gonna see if I can't unwind Kenney's lines So come on down to South Park And meet some friends of mine");
  playSound("Colorado")
  document.body.style.backgroundImage = "url('Backgrounds/yelp.gif')";
});

document.getElementById("NV").addEventListener("click", function() {
  alert("Las Vegas enough said");
  playSound("Nevada")
  document.body.style.backgroundImage = "url('Backgrounds/alien.gif')";
});

document.getElementById("NM").addEventListener("click", function() {
  alert("Hi. I'm Saul Goodman. Did you know that you have rights? The Constitution says you do. And so do I. I believe that until proven guilty, every man, woman, and child in this country is innocent. And that's why I fight for you, Albuquerque! Better call Saul. Saul Goodman, attorney at law.");
  playSound("New Mexico")
  document.body.style.backgroundImage = "url('Backgrounds/better-call-saul-loop.gif')";
});

document.getElementById("OR").addEventListener("click", function() {
  alert("Orgeon more like I stole someones Organ and left them in a bathtub in a hotel filled with ice in Orgeon");
});

document.getElementById("UT").addEventListener("click", function() {
  alert("Super Mormon stopping crimes in Salt Lake City since 1947");
});

document.getElementById("WY").addEventListener("click", function() {
  alert("Enjoy your 2 escalators");
  document.body.style.backgroundImage = "url('Backgrounds/download.jpg')";
});

document.getElementById("AR").addEventListener("click", function() {
  alert("I did not have sexual relations with that woman");
});

document.getElementById("IA").addEventListener("click", function() {
  alert("The only state to be bordered on 2 sides by navigable rivers");
});

document.getElementById("KS").addEventListener("click", function() {
  alert("Kansas more like more like more like *dies of stroke*");
});

document.getElementById("MO").addEventListener("click", function() {
  alert("I'm not in Missouri im in misery");
});

document.getElementById("NE").addEventListener("click", function() {
  alert("Nebraska more like neck brace yeah");
  playSound("Nebraska")
  document.body.style.backgroundImage = "url('Backgrounds/weather.gif')";
});

document.getElementById("OK").addEventListener("click", function() {
  alert("State building go boom");
});

document.getElementById("SD").addEventListener("click", function() {
  alert("Mount Rushmore and literally nothing else");
});

document.getElementById("LA").addEventListener("click", function() {
  alert("New Orleans and Mr.Nevins");
});

document.getElementById("TX").addEventListener("click", function() {
  alert("Yeeeeee haw cowboy🤠");
  playSound("Texas")
});

document.getElementById("CT").addEventListener("click", function() {
  alert("Conneticut more like connecting flight on my way to be put on trial at the Hauge for my war crimes");
});

document.getElementById("NH").addEventListener("click", function() {
  alert("Remove the new y'all were founded in 1788");
  document.body.style.backgroundImage = "url('Backgrounds/ludwig.gif')";
});

document.getElementById("RI").addEventListener("click", function() {
  alert("Peter Griffin moment");
  playSound("Rhode Island")
  document.body.style.backgroundImage = "url('Backgrounds/brian_griffin.gif')";
});

document.getElementById("VT").addEventListener("click", function() {
  alert("💪💪Wake up the time has come💪💪");
});

document.getElementById("AL").addEventListener("click", function() {
  playSound("Alabama")
});

document.getElementById("FL").addEventListener("click", function() {
  alert("Enjoy your state wide bath crackheads");
  playSound("Flordia")
  document.body.style.backgroundImage = "url('Backgrounds/aligator.gif')";
});

document.getElementById("GA").addEventListener("click", function() {
  alert("Confederate laser show");
});

document.getElementById("MS").addEventListener("click", function() {
  alert("Are you from Mississippi cause your the only miss whos piss i wanna sippie");
  playSound("Mississippi")
});

document.getElementById("SC").addEventListener("click", function() {
  alert("L+Ratio+plus trash roads");
});

document.getElementById("IL").addEventListener("click", function() {
  alert("Michael Yordan");
  playSound("Illinois")
});

document.getElementById("IN").addEventListener("click", function() {
  alert("We need to remember what's important in life: Friends, waffles and work. Or waffles, friends, work. It doesn't matter. But work is third");
});

document.getElementById("KY").addEventListener("click", function() {
  alert("Ken Tucky more like im not lucky since i just lost $10 billion on horse gambling");
  document.body.style.backgroundImage = "url('Backgrounds/kfc.webp')";
});

document.getElementById("NC").addEventListener("click", function() {
  alert("Mr.Sellek");
});

document.getElementById("OH").addEventListener("click", function() {
  alert("Swag like Ohio down in Ohio");
  playSound("Ohio")
  document.body.style.backgroundImage = "url('Backgrounds/ohio.gif')";
});

document.getElementById("TN").addEventListener("click", function() {
  alert("Are you from Tennesse cause you're the only 10 I see");
});

document.getElementById("VA").addEventListener("click", function() {
  alert("City roads normal Virginia take me home");
  playSound("Virginia")
  document.body.style.backgroundImage = "url('Backgrounds/Cleveland_dance.gif')";
});

document.getElementById("WI").addEventListener("click", function() {
  alert("Cheese");
});

document.getElementById("WV").addEventListener("click", function() {
  playSound("West Virginia")
});

document.getElementById("DE").addEventListener("click", function() {
  alert("Le epic 1776 reference");
});

document.getElementById("DC").addEventListener("click", function() {
  alert("L+not a state");
});

document.getElementById("MD").addEventListener("click", function() {
  alert("Hairspray the state");
});

document.getElementById("NJ").addEventListener("click", function() {
  alert("In New Jersey we don't only wear wife beaters but are ones");
});

document.getElementById("NY").addEventListener("click", function() {
  alert("The rats are not going to like to hear this but guess what they don't own this city");
  playSound("New York")
  document.body.style.backgroundImage = "url('Backgrounds/pizzarat.gif')";
});

document.getElementById("PA").addEventListener("click", function() {
  alert("Cream Cheese be like hey I'm cream cheese");
});

document.getElementById("ME").addEventListener("click", function() {
  alert("Maine lobster rolls");
});

document.getElementById("MI").addEventListener("click", function() {
  alert("🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮");
  playSound("Michigan")
});

document.getElementById("AK").addEventListener("click", function() {
  alert("Nothing like the cold");
});