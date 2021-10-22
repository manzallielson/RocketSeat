const linksSocialMedia = {
  github: 'ManzalliElson',
  youtube: '/channel/UCQlhY1Kq-NJV2XhhgTVAr5Q',
  facebook: 'elson.manzalli',
  instagram: 'elson_manzalli',
  twitter: 'elson_manzalli',
  linkedin: 'in/elson-manzalli-6b44237a/'
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
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
