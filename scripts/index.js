var TAB_KEYS = ["summary", "experience", "technical", "projects", "contact", "cv"];

function changeTab(event, indexOrKey, options) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }

  var index =
    typeof indexOrKey === "string" ? TAB_KEYS.indexOf(indexOrKey) : indexOrKey;
  if (index < 0 || index >= TAB_KEYS.length) index = 0;

  var tabButtons = document.getElementById("tabs-tab").children;
  var tabContents = document.getElementById("tabs-tabContent").children;

  for (var i = 0; i < tabButtons.length; i++) {
    var btn = tabButtons[i].children[0];
    var content = tabContents[i];
    if (i === index) {
      btn.classList.add("tab-active");
      btn.setAttribute("aria-selected", "true");
      content.classList.remove("hidden");
    } else {
      btn.classList.remove("tab-active");
      btn.setAttribute("aria-selected", "false");
      content.classList.add("hidden");
    }
  }

  var key = TAB_KEYS[index];
  var updateHash = !options || options.updateHash !== false;
  if (updateHash && window.history && window.history.replaceState) {
    window.history.replaceState(null, "", "#" + key);
  }
}

function getInitialTabIndex() {
  var hash = (window.location.hash || "").replace("#", "").toLowerCase();
  var idx = TAB_KEYS.indexOf(hash);
  return idx >= 0 ? idx : 0;
}

function onLoad() {
  handleTheme();
  changeTab(null, getInitialTabIndex(), { updateHash: false });

  window.addEventListener("hashchange", function () {
    changeTab(null, getInitialTabIndex(), { updateHash: false });
  });
}

function openEmail(event, address) {
  if (event && event.currentTarget && typeof event.currentTarget.blur === "function") {
    event.currentTarget.blur();
  }

  var gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(address);

  var fired = false;
  var timer = setTimeout(function () {
    if (fired) return;
    fired = true;
    window.open(gmailUrl, "_blank", "noopener");
  }, 700);

  var cancel = function () {
    if (fired) return;
    fired = true;
    clearTimeout(timer);
  };

  window.addEventListener("blur", cancel, { once: true });
  document.addEventListener(
    "visibilitychange",
    function () {
      if (document.hidden) cancel();
    },
    { once: true }
  );

  return true;
}
