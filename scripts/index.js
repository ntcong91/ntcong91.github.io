function changeTab(event, index) {
  var tabButtons = document.getElementById("tabs-tab").children;
  var tabContents = document.getElementById("tabs-tabContent").children;

  for (var i = 0; i < tabButtons.length; i++) {
    var tabButtonItem = tabButtons[i].children[0].classList;
    var tabContentItem = tabContents[i].classList;
    if (tabButtonItem.contains("border-green-600")) {
      tabButtonItem.remove("border-green-600");
      tabButtonItem.add("border-transparent");
    }
    tabContentItem.add("hidden");
  }

  const firstChildOfTab = tabButtons[index].children[0].classList;
  if (!firstChildOfTab.contains("border-green-600")) {
    firstChildOfTab.add("border-green-600");
  }
  tabContents[index].classList.remove("hidden");

  if (index === 0) {
    // check and reload
    // var iframe = document.getElementById('iframe-cv');
    // if (!iframe.loaded) {
    //   iframe.src += "";
    // }
  }
}

function onLoad() {
  handleTheme();
  changeTab(null, 0);
}
