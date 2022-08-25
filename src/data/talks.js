import { speakers } from "./speakers";

const findSpeaker = (name) => {
  return speakers[speakers.findIndex((speaker) => speaker.name === name)];
};

const setSessionDetails = (session, order) => {
  let sessionDetails = {};
  let date = session === "1" ? "Sept 8th" : "Sept 13th";
  let calendarLink =
    session === "1"
      ? "https://calendar.google.com/event?action=TEMPLATE&tmeid=NG0zaDJ1aG45dXU1bWthYTVwbWtrNHQ4MmogYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co"
      : "https://calendar.google.com/event?action=TEMPLATE&tmeid=NmFsaGNxMnZjOThnMGRoaXByM25kczk0MDUgYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co";
  let timestamp = "";

  switch (order) {
    case 1:
      timestamp =
        session === "1"
          ? "2022-09-08T18:00:00.000Z"
          : "2022-09-13T13:00:00.000Z";
      break;
    case 2:
      timestamp =
        session === "1"
          ? "2022-09-08T18:10:00.000Z"
          : "2022-09-13T13:10:00.000Z";
      break;
    case 3:
      timestamp =
        session === "1"
          ? "2022-09-08T18:20:00.000Z"
          : "2022-09-13T13:20:00.000Z";
      break;
    case 4:
      timestamp =
        session === "1"
          ? "2022-09-08T18:30:00.000Z"
          : "2022-09-13T13:30:00.000Z";
      break;
    case 5:
      timestamp =
        session === "1"
          ? "2022-09-08T18:40:00.000Z"
          : "2022-09-13T13:40:00.000Z";
      break;
    case 6:
      timestamp =
        session === "1"
          ? "2022-09-08T18:50:00.000Z"
          : "2022-09-13T13:50:00.000Z";
      break;
    default:
      timestamp = "TBD";
      break;
  }
  return (sessionDetails = {
    calendarLink,
    date,
    timestamp,
  });
};

export const talks = [
  {
    sessionDetails: setSessionDetails("1", 1),
    title: "Queer Literature and Book Club Kickoff",
    description:
      "Take a deep dive into new releases in queer literature and the kick off for the Rainbow Stack Book Club!",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Cory Fairchild")],
  },
  {
    sessionDetails: setSessionDetails("1", 2),
    title: "Breaking the Cool/Uncool Binary",
    description:
      "If you’ve ever doubted how cool you are, this one’s for you! Let’s unpack what really goes into what is “cool” and how we can present what makes us unique without fear.",
    genre: "Self Care",
    speaker: [findSpeaker("Dany Johnson")],
  },
  {
    sessionDetails: setSessionDetails("1", 3),
    title: "Making Tech Careers Accessible for Everyone",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Tech",
    speaker: [findSpeaker("Brittany Joiner")],
  },
  {
    sessionDetails: setSessionDetails("1", 4),
    title: "Diversity in Tech Panel",
    description:
      "Bring your questions and conerns and let's have an honest conversation about how to improve!",
    genre: "Tech",
    speaker: [
      findSpeaker("Priscilla Parodi"),
      findSpeaker("Javier Detrinidad"),
    ],
  },
  {
    sessionDetails: setSessionDetails("1", 5),
    title: `"If you don't wanna qup": How I Made A New Prince Song from Old Prince Songs`,
    description:
      "Outlining the steps I took to make a neural network that generates Prince song lyrics.",
    genre: "Self Care",
    speaker: [findSpeaker("Courtney Wilburn")],
  },
  {
    sessionDetails: setSessionDetails("1", 6),
    title: "Finding Peace When the World's A Mess",
    description:
      "Our world is a bit chaotic these days to say the least. I've found these 6 practices can help you feel like a part of the kind of community we need in the world today. Suddenly you’re not alone against adversity, you’re  part of a very big “us” that’s full of miraculous people.",
    genre: "Self Care",
    speaker: [findSpeaker("Kiley Davidson")],
  },
  {
    sessionDetails: setSessionDetails("2", 1),
    title: "Desana and How Remote Employees Can Use It",
    description:
      "Do you sometimes need a break from your barky co-worker? Learn about the tools Elastic offers for remote employees to get a nice change of scenery.",
    genre: "Tech",
    speaker: [findSpeaker("Corey Williams")],
  },
  {
    sessionDetails: setSessionDetails("2", 2),
    title: "How to Find and Support LGBTQIA+ Orgs",
    description:
      "Want to support more causes, but don't know where to start? Learn how to get involved more with causes and organizations.",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Kristina Paiz")],
  },
  {
    sessionDetails: setSessionDetails("2", 3),
    title: "The Power of Reading the Docs",
    description:
      "Sometimes we see people who are experts, or have deep knowledge about something, a programming language, some program, a process, a technique or something else. To reach a similar level seems complicated, hard and we wonder how they achieved it. Most often than not, the secret might be just to read the docs. I'll share some real life examples to show the power of reading the docs and, I hope, they will inspire you.",
    genre: "Tech",
    speaker: [findSpeaker("Anderson Queiroz")],
  },
  {
    sessionDetails: setSessionDetails("2", 4),
    title: "Best LGBTQIA+ Twitter Accounts",
    description:
      "Need a laugh? Here's the best twitter accounts to follow for some good humor and entertainment.",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Wes Mason")],
  },
  {
    sessionDetails: setSessionDetails("2", 5),
    title: "How I Helped Myself by Helping Others at codebar.io",
    description:
      "A few year ago I started volunteering at codebar.io , an organisation where we promote diversity in Tech by offering free coding workshop, and ...",
    genre: "Tech",
    speaker: [findSpeaker("David Ricordel")],
  },
  {
    sessionDetails: setSessionDetails("2", 6),
    title: "How To Make Music",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: [findSpeaker("Julio Camarero")],
  },
  {
    sessionDetails: setSessionDetails(),
    title: "Something Really Cool But We Don't Know Yet",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: [findSpeaker("Alejandro Sánchez")],
  },
  {
    sessionDetails: setSessionDetails(),
    title: "Something Interest I'm Sure You'll Want To Hear",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "TBD",
    speaker: [findSpeaker("Javier Detrinidad")],
  },
];
