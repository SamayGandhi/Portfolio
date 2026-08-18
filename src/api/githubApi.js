const USERNAME = "SamayGandhi";

export async function fetchGithubProfile() {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile");
  }

  return response.json();
}