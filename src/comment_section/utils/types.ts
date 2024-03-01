interface User {
  id: string;
  name: string;
  handle: string;
  profileImg: string;
}

interface Comment {
  id: string;
  text: string;
  user: User;
  replies: Comment[];
  createdAt: Date;
  modifiedAt: Date;
  isModified: boolean;
}

interface CommentBlockProps {
  allComments: Comment[];
  comment: Comment;
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  parentId: string | null;
}

interface CommentEntryBlockProps {
  allComments: Comment[];
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  currentUser: User;
}

interface CommentThreadProps {
  allComments: Comment[];
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export type {
  Comment,
  CommentBlockProps,
  CommentThreadProps,
  User,
  CommentEntryBlockProps,
};
