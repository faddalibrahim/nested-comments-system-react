import { Comment, User } from "./types";

export const dummyCurrentUser: User = {
  id: "4540fgdf",
  name: "Gojo Satoru",
  profileImg: "https://blah.com",
};

export const dummyCommentData: Comment[] = [
  {
    id: "dgy579e",
    text: "I am top level comment",
    user: {
      id: "4540fgdf",
      name: "Gojo Satoru",
      profileImg: "https://blah.com",
    },
    replies: [
      {
        id: "banana",
        text: "I am a reply",
        user: {
          id: "4540fgdf",
          name: "Gojo Satoru",
          profileImg: "https://blah.com",
        },
        replies: [
          {
            id: "congo",
            text: "I am a sub reply",
            user: {
              id: "4540fgdf",
              name: "Gojo Satoru",
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
    ],
    createdAt: new Date(),
    modifiedAt: new Date(),
    isModified: true,
  },
  {
    id: "df634dfdf",
    text: "I am top level comment 2",
    user: {
      id: "4540fgdf",
      name: "Gojo Satoru",
      profileImg: "https://blah.com",
    },
    replies: [
      {
        id: "banana",
        text: "I am a reply",
        user: {
          id: "4540fgdf",
          name: "Gojo Satoru",
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
