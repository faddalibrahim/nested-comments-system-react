import { User, Comment } from "./types";

export function newComment(commentText: string, currentUser: User) {
  return {
    id: String(Math.random()),
    text: commentText,
    user: currentUser,
    replies: [],
    createdAt: new Date(),
    modifiedAt: new Date(),
    isModified: false,
  };
}

export function addComment(
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentText: string,
  currentUser: User
) {
  setAllComments((prevComments: Comment[]) => [
    newComment(commentText, currentUser),
    ...prevComments,
  ]);
}

export function deleteComment(
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string
) {
  setAllComments((prevComments) =>
    prevComments.filter((comment) => comment.id != commentId)
  );
}

export function updateComment(
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string,
  newCommentText: string
) {
  setAllComments((prevComments) =>
    prevComments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          text: newCommentText,
          isModified: true,
          modifiedAt: new Date(),
        };
      }
      return comment;
    })
  );
}

export function convertToLocaleDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
