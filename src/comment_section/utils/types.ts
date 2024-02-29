interface User {
  id: string;
  name: string;
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
  comment: Comment;
}

interface CommentThreadProps {
  allComments: Comment[];
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export type { Comment, CommentBlockProps, CommentThreadProps, User };
