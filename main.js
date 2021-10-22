const linksSocialMedia = {
  github: 'TiagoSDF',
  youtube: 'channel/UC5egA8EOqoSmLYrVAqn1UjQ',
  instagram: 'tiago_sep',
  facebook: 'tiago.farias.3158',
  linkedin: 'in/tiago-farias-2947207b'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
