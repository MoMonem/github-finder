const github = new Github();
const ui = new UI();

// search input
const searchUser = document.querySelector("#searchUser");

// Event listener

searchUser.addEventListener("keyup", (e) => {
  const userName = e.target.value;
  if (userName !== "") {
    github.getUser(userName).then((data) => {
      if (data.profileData.message === "Not Found") {
        // show alert
        ui.showAlert();
      } else {
        // show profile
        ui.showProfile(data.profileData);
        console.log(data.repoData);
        ui.showRepos(data.repoData);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
