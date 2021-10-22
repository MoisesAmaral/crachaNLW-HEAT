const LinksSocialMedia = {
    github: 'MoisesAmaral',
    youtube: 'MoisesAmaral',
    facebook: 'MoisesAmaral',
    instagram: 'MoisesAmaral',
    twitter: 'MoisesAmaral'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`


    }
  }
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userbio.textContent = data.bio
        userFoto.src = data.avatar_url
        userLink.href = data.html_url
        userLogin.textContent = data.login



    })
}

getGitHubProfileInfos()