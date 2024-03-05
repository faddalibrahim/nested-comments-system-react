import { Comment, User } from "./types";

export const dummyCurrentUser: User = {
  id: "4540fgdf",
  name: "You",
  handle: "@ItadoriYuji",
  profileImg: "",
};

export const dummyCommentData: Comment[] = [
  {
    id: "dgy579e",
    text: "Throughout the heavens and the earth, I alone am the honored one!",
    user: {
      id: "Gojo Satoru",
      name: "Gojo Satoru",
      handle: "@GojoSatoru",
      profileImg:
        "https://wallpapers.com/images/hd/weird-pfp-of-gojo-yjixd3nd66m1f7dw.jpg",
    },
    replies: [
      {
        id: "58fghxyY729G",
        text: "With this treasure, I summon..",
        user: {
          id: "4540fgdf",
          name: "Megumi Fushiguro",
          handle: "@MegumiFushiguro",
          profileImg:
            "https://i.pinimg.com/736x/6d/19/ef/6d19efefb4a82eda8e8eaa6908ca8d8f.jpg",
        },
        replies: [
          {
            id: "d739fhsPyTd03df",
            text: "🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️🏃🏾‍♂️💨 ",
            user: {
              id: "4540fgdf",
              name: "Gojo Satoru",
              handle: "@GojoSatoru",
              profileImg:
                "https://wallpapers.com/images/hd/weird-pfp-of-gojo-yjixd3nd66m1f7dw.jpg",
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
    text: "Ryōiki Tenkai!",
    user: {
      id: "4540fgdf",
      name: "Ryomen Sukuna",
      handle: "@RyomenSukuna",
      profileImg:
        "https://staticg.sportskeeda.com/editor/2023/09/df62c-16945431809358-1920.jpg",
    },
    replies: [
      {
        id: "banana",
        text: "Infinite Void!",
        user: {
          id: "4540fgdf",
          name: "Gojo Satoru",
          handle: "@GojoSatoru",
          profileImg:
            "https://wallpapers.com/images/hd/weird-pfp-of-gojo-yjixd3nd66m1f7dw.jpg",
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
