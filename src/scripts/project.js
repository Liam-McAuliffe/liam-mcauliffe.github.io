import html5Icon from '../assets/techstack/html5-icon.svg';
import css3Icon from '../assets/techstack/css3-icon.svg';
import javaScriptIcon from '../assets/techstack/javascript-icon.svg';
import webpackIcon from '../assets/techstack/webpack-icon.svg';
import reactIcon from '../assets/techstack/react-icon.svg';

import gitHubIcon from '../assets/github-mark.png';
import openIcon from '../assets/open.svg';

export const addProject = (
  title,
  githubUrl,
  liveUrl,
  screenshot,
  techstack,
  description
) => {
  const projectContainer = document.createElement('article');
  projectContainer.classList.add('project');

  const projectTitle = document.createElement('h3');
  projectTitle.textContent = title;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('project-img-container');

  const img = document.createElement('img');
  img.src = screenshot;
  img.alt = `${title} screenshot`;
  img.classList.add('project-screenshot');

  const livePreviewOverlay = document.createElement('a');
  livePreviewOverlay.href = liveUrl;
  livePreviewOverlay.target = '_blank';
  livePreviewOverlay.setAttribute('aria-label', 'Live preview');
  livePreviewOverlay.classList.add('live-preview-overlay');

  const liveIcon = document.createElement('img');
  liveIcon.src = openIcon;
  liveIcon.alt = 'Live Preview';
  liveIcon.classList.add('live-preview-icon');

  livePreviewOverlay.appendChild(liveIcon);
  imageContainer.appendChild(img);
  imageContainer.appendChild(livePreviewOverlay);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = description;

  const footerContainer = document.createElement('div');
  footerContainer.classList.add('project-footer');

  const linksContainer = document.createElement('div');
  linksContainer.classList.add('project-links');

  const githubAnchor = document.createElement('a');
  githubAnchor.href = githubUrl;
  githubAnchor.target = '_blank';
  githubAnchor.setAttribute('aria-label', 'GitHub repository');

  const githubIcon = document.createElement('img');
  githubIcon.src = gitHubIcon;
  githubIcon.alt = 'GitHub';
  githubIcon.classList.add('project-icon');
  githubIcon.classList.add('social-link');

  githubAnchor.appendChild(githubIcon);
  linksContainer.appendChild(githubAnchor);

  const techIconsContainer = document.createElement('div');
  techIconsContainer.classList.add('tech-icons-container');

  const techIconMap = {
    html: html5Icon,
    css: css3Icon,
    javascript: javaScriptIcon,
    webpack: webpackIcon,
    react: reactIcon,
  };

  techstack.forEach((tech) => {
    const iconSrc = techIconMap[tech.toLowerCase()];
    if (iconSrc) {
      const techIcon = document.createElement('img');
      techIcon.src = iconSrc;
      techIcon.alt = `${tech} icon`;
      techIcon.classList.add('tech-icon');
      techIconsContainer.appendChild(techIcon);
    }
  });

  footerContainer.appendChild(linksContainer);
  footerContainer.appendChild(techIconsContainer);

  projectContainer.appendChild(projectTitle);
  projectContainer.appendChild(imageContainer);
  projectContainer.appendChild(projectDescription);
  projectContainer.appendChild(footerContainer);

  document.querySelector('.project-list').appendChild(projectContainer);
};
