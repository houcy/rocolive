numTabs = 0;

class Tab {
    constructor(type, name, div, button) {

        // type is the kind of interface out of: start page, mechanical, code, and composite
        this.type = type;
        // name is the name of the tab.
        this.name = name;

        if(div === undefined){
            // create new interface in a div
            this.div = document.createElement("div");
            // populate interface with relevant content
            this.div.innerHTML = type;
            this.div.setAttribute("id", type);
            this.div.classList.add("tabcontent");
        } else {
            this.div = div;
        }

        if (button === undefined){
            // name the interface
            this.button = document.createElement("button");
            this.button.innerHTML = name;
            this.button.classList.add("tablinks");

            // attach button to div
            this.button.addEventListener("click", function (evt) {
                openInterface(evt, type);
            });
        } else {
            this.button = button;
        }
    }
}

startTabDiv = document.getElementById("start");
startTab = document.getElementById("defaultOpen");

var tabs = [new Tab("Starting Page", "start", startTabDiv, startTab)];

lastTab = document.getElementById("dropbtn");

function addTab(t) {
    // create new button for interface in the tabs list
    t.div.style.display="none";
    document.getElementById("tabButtons").insertBefore(t.button, lastTab);
    document.getElementById("tabs").insertBefore(t.div, null);
}

function showOptions() {
    document.getElementById("rocoInterfaces").classList.toggle("show");

}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var rocoInterfaces = document.getElementById("rocoInterfaces");
      if (rocoInterfaces.classList.contains('show')) {
        rocoInterfaces.classList.remove('show');
      }
  }
}

function newInterface(event, type) {
    var t = "";
    if(type == 'm'){
        t = "mechanical";
    } else if (type == 'cc') {
        t = "composite";
    } else if (type == 'bc') {
        t = "base";
    }
    var name = "untitled" + (numTabs==0?"":numTabs);
    numTabs++;
    tabs.push(new Tab(t, name));
    addTab(tabs[tabs.length - 1]);
}