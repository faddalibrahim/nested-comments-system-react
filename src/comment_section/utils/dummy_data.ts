import { Comment, User } from "./types";

export const dummyCurrentUser: User = {
  id: "4540fgdf",
  name: "Sukuna",
  handle: "@Sukuna",
  profileImg: "https://blah.com",
};

export const dummyCommentData: Comment[] = [
  {
    id: "dgy579e",
    text: "Throughout the heavens and the earth, I alone am the honored one!",
    user: {
      id: "Gojo Satoru",
      name: "Gojo Satoru",
      handle: "@GojoSatoru",
      profileImg: "https://blah.com",
    },
    replies: [
      {
        id: "banana",
        text: "I am a reply",
        user: {
          id: "4540fgdf",
          name: "Gojo Satoru",
          handle: "@GojoSatoru",
          profileImg: "https://blah.com",
        },
        replies: [
          {
            id: "congo",
            text: "I am a sub reply",
            user: {
              id: "4540fgdf",
              name: "Gojo Satoru",
              handle: "@GojoSatoru",
              profileImg: "https://blah.com",
            },
            replies: [],
            createdAt: new Date(),
            modifiedAt: new Date(),
            isModified: true,
          },
        ],
        createdAt: new Date(),
        modifiedAt: new Date(),
        isModified: false,
      },
    ],
    createdAt: new Date(),
    modifiedAt: new Date(),
    isModified: false,
  },
  {
    id: "df634dfdf",
    text: "Gotta deal with them monkeys asap!",
    user: {
      id: "4540fgdf",
      name: "Suguru Geto",
      handle: "@SuguruGeto",
      profileImg: "https://blah.com",
    },
    replies: [
      {
        id: "banana",
        text: "I am a reply",
        user: {
          id: "4540fgdf",
          name: "Gojo Satoru",
          handle: "@GojoSatoru",
          profileImg: "https://blah.com",
        },
        replies: [],
        createdAt: new Date(),
        modifiedAt: new Date(),
        isModified: true,
      },
    ],
    createdAt: new Date(),
    modifiedAt: new Date(),
    isModified: true,
  },
];
