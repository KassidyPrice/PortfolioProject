const projectData = [
  {
    id: 1,
    projectTitle: 'Tribute Page',
    image: '../../images/Tribute-Page.jpg',
  },
  {
    id: 2,
    projectTitle: 'Product Landing Page',
    image: '../../images/Bitty Bows.jpg',
  },
  {
    id: 3,
    projectTitle: 'Some Bank Email',
    image: '../../images/logoblue.png',
  },
]
populateProjects()

function populateProjects() {
  const projectSection = document.getElementById('projects')
  console.log(projectSection)
  projectData.forEach((item) => {
    let card = document.createElement('div')
    card.className = 'project-card'

    buildImageTag(card, item.image)

    let projectContent = document.createElement('div')
    projectContent.className = 'project-content'
    buildTitleTag(projectContent, item.projectTitle)

    card.appendChild(projectContent)
    projectSection.appendChild(card)
  })
}
function buildImageTag(card, imageSource) {
  let image = document.createElement('img')
  image.width = 300
  image.src = imageSource
  card.appendChild(image)
}

function buildTitleTag(contentTag, title) {
  titleTag = document.createElement('div')
  titleTag.className = 'project-title'
  titleTag.innerHTML = title
  contentTag.appendChild(titleTag)
}
let modal = document.getElementById('myModal')
let span = document.getElementsByClassName('close')[0]

function openDialog(title, button) {
  button.addEventListener('click', () => {
    modal.style.display = 'block'
    const test = document.getElementById('modal-title')
    test.innerHTML = title
  })
}
