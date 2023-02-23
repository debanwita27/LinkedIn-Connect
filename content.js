var conList;
window.onload = () => {
  setTimeout(() => {
    conList = document.querySelectorAll(
      ".artdeco-button--secondary.invitation-card__action-btn"
    );
    if (confirm("Accept All Connections? ") == true) onClickHandler();
  }, "2000");
};

function onClickHandler() {
  //console.log(conList.length);
  for (var i = 0; i < conList.length; i = i + 1) conList[i].click();
  document.body.appendChild(conList);
}
