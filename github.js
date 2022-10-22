class Github {
  constructor() {}

  async getUser(user) {
    // fetch the user from the github api
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`
    );
    // return the user data as an object
    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profileData,
      repoData,
    };
  }
}
