function handleTheme() {
  //Init tooltips
  tippy(".link", {
    placement: "bottom",
  });

  //Toggle mode
  const toggle = document.querySelector(".js-change-theme");
  const body = document.querySelector("body");
  const profile = document.getElementById("profile");
  const subLi1 = document.getElementById("subLi1");
  const subLi2 = document.getElementById("subLi2");
  const subLi3 = document.getElementById("subLi3");

  var tabButtons = document.getElementById("tabs-tab").children;

  toggle.addEventListener("click", () => {
    if (body.classList.contains("text-gray-900") ||  !body.classList.contains("text-gray-100")) {
      toggle.innerHTML = "☀️";
      body.classList.remove("text-gray-900");
      body.classList.add("text-gray-100");

      profile.classList.remove("bg-white");
      profile.classList.add("bg-gray-900");

      subLi1.classList.remove("text-gray-900");
      subLi2.classList.remove("text-gray-900");
      subLi3.classList.remove("text-gray-900");
      subLi1.classList.add("text-gray-100");
      subLi2.classList.add("text-gray-100");
      subLi3.classList.add("text-gray-100");

      for (var i = 0; i < tabButtons.length; i++) {
        var tabButtonItem = tabButtons[i].children[0].classList;
        if (tabButtonItem.contains("hover:bg-gray-100")) {
          tabButtonItem.remove("hover:bg-gray-100");
          tabButtonItem.add("hover-bg-green-100");
        }
      }
    } else {
      toggle.innerHTML = "🌙";
      body.classList.remove("text-gray-100");
      body.classList.add("text-gray-900");

      subLi1.classList.remove("text-gray-100");
      subLi2.classList.remove("text-gray-100");
      subLi3.classList.remove("text-gray-100");
      subLi1.classList.add("text-gray-900");
      subLi2.classList.add("text-gray-900");
      subLi3.classList.add("text-gray-900");

      profile.classList.remove("bg-gray-900");
      profile.classList.add("bg-white");

      for (var i = 0; i < tabButtons.length; i++) {
        var tabButtonItem = tabButtons[i].children[0].classList;
        if (tabButtonItem.contains("hover:bg-green-100")) {
          tabButtonItem.remove("hover:bg-green-100");
          tabButtonItem.add("hover-bg-gray-100");
        }
      }
    }
  });
}
