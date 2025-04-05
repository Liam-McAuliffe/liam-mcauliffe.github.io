import './styles/reset.css';
import './styles/styles.css';
import './styles/contact.css';
import './styles/project.css';
import './styles/surprise.css';
import './styles/terminal.css';

import toDoScreenShot from './assets/projects/to-do-list-ss.webp';
import flaggedScreenShot from './assets/projects/flagged-ss.webp';
import weatherAppScreenShot from './assets/projects/weather-app-ss.webp';
import controlCVScreenShot from './assets/projects/control-cv-ss.webp';

import { terminal } from './scripts/terminal';
import { addProject } from './scripts/project';
import { initSurprise } from './scripts/surprise';

document.addEventListener('DOMContentLoaded', () => {
  terminal();
  initSurprise();

  addProject(
    'Flagged!',
    'https://github.com/Liam-McAuliffe/flagged',
    'https://flagged.web.app/',
    flaggedScreenShot,
    ['HTML', 'CSS', 'JavaScript'],
    'Test your vexillology in this flag-guessing game!'
  );

  addProject(
    'To-Do List',
    'https://github.com/Liam-McAuliffe/to-do-list',
    'https://liam-mcauliffe.github.io/to-do-list/',
    toDoScreenShot,
    ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    'Add tasks and mark them off when done.'
  );
  addProject(
    'Control CV',
    'https://github.com/Liam-McAuliffe/control-cv',
    'https://cv-application-7jr.pages.dev/',
    controlCVScreenShot,
    ['React', 'CSS', 'JavaScript', 'Webpack'],
    'Create a CV/Resume in seconds!'
  );
  addProject(
    'Weather App',
    'https://github.com/Liam-McAuliffe/weather-app',
    'https://liam-mcauliffe.github.io/weather-app/',
    weatherAppScreenShot,
    ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    'Look up weather data for any place in the world!'
  );
});
