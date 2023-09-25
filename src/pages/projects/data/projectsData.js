// importing local assets:
import {
  spendWise,
  boomEscape,
  uarQueue,
} from "../../../assets/projects/export";

export const ProjectsData = [
  {
    title: "UAR Queue System",
    description:
      "UAR Queue is a web-based queueing system designed for one of my client who's a streamer. Leveraging React.js for the frontend & FastAPI (Python) for the backend, the system uses PostgreSQL for efficient data management.",
    imgLink: [...uarQueue],
    visitLink: "https://www.upcomingartistradio.com/",
    codeLink: "https://github.com/naimur-29/ferm-queue-site",
  },
  {
    title: "SpendWise: Built with Firebase & React.js",
    description:
      "SpendWise is a financial tracking web app built with Firebase & React.js. It efficiently manages expenses and income, featuring secure data storage with Firebase & a seamless user interface with React.js",
    imgLink: [...spendWise],
    visitLink: "https://spendwise.naimur29.com/",
    codeLink: "https://github.com/naimur-29/SpendWise",
  },
  {
    title: "BoomEscape: Vanilla JS Web Game",
    description:
      "BoomEscape is a web-based game, similar to Minesweeper, highlighting my expertise in Vanilla JavaScript. This project demonstrates my ability to create engaging web games using pure JavaScript.",
    imgLink: [...boomEscape],
    visitLink: "https://boomescape.naimur29.com/",
    codeLink: "https://github.com/naimur-29/BoomEscape",
  },
];
