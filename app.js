function changeTab(tabIndex) {
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (content) {
    content.style.display = "none";
  });

  var selectedTabContent = document.getElementById(
    "tabContent" + (tabIndex + 1)
  );
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }
}
