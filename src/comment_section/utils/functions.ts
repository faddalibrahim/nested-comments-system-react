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
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentText: string,
  currentUser: User,
  parentId: string | null
) {
  if (parentId) {
    addNestedComment(
      allComments,
      setAllComments,
      commentText,
      currentUser,
      parentId
    );
  } else {
    addTopLevelComment(setAllComments, commentText, currentUser);
  }
}

function addTopLevelComment(
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentText: string,
  currentUser: User
) {
  setAllComments((prevComments: Comment[]) => [
    newComment(commentText, currentUser),
    ...prevComments,
  ]);
}

function addNestedComment(
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentText: string,
  currentUser: User,
  parentId: string
) {
  const commentsWithReplies = [...allComments];

  for (let i = 0; i < commentsWithReplies.length; i++) {
    const comment = commentsWithReplies[i];
    if (comment.id === parentId) {
      comment.replies = [
        newComment(commentText, currentUser),
        ...comment.replies,
      ];
    } else {
      addNestedComment(
        comment.replies,
        setAllComments,
        commentText,
        currentUser,
        parentId
      );
    }
  }
  setAllComments(commentsWithReplies);
}

/*********** DELETING COMMENTS ********************/

export function deleteComment(
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string,
  parentId: string | null
) {
  // delete top-level comment
  if (!parentId) {
    deleteTopLevelComment(setAllComments, commentId);
    return;
  }
  // delete nested comment
  deleteNestedComment(allComments, setAllComments, commentId, parentId);
}

function deleteTopLevelComment(
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string
) {
  setAllComments((prevComments: Comment[]) =>
    prevComments.filter((comment: Comment) => comment.id != commentId)
  );
}

function deleteNestedComment(
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string,
  parentId: string
) {
  const commentsWithReplies = [...allComments];

  for (let i = 0; i < commentsWithReplies.length; i++) {
    const comment = commentsWithReplies[i];
    if (comment.id === parentId) {
      comment.replies = comment.replies.filter(
        (comment) => comment.id !== commentId
      );
    } else {
      deleteNestedComment(comment.replies, setAllComments, commentId, parentId);
    }
  }

  setAllComments(commentsWithReplies);
}

/*********** UPDATING COMMENTS ********************/

export function updateComment(
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string,
  newCommentText: string,
  parentId: string | null
) {
  // update top-level comment

  if (!parentId) {
    updateTopLevelComment(setAllComments, commentId, newCommentText);
    return;
  }

  // update nested comment
  updateNestedComment(allComments, setAllComments, commentId, newCommentText);
}

function updateTopLevelComment(
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

function updateNestedComment(
  allComments: Comment[],
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  commentId: string,
  newCommentText: string
) {
  const commentsWithReplies = [...allComments];

  for (let i = 0; i < commentsWithReplies.length; i++) {
    const comment = commentsWithReplies[i];
    if (comment.id === commentId) {
      comment.text = newCommentText;
      comment.isModified = true;
      comment.modifiedAt = new Date();

      return;
    } else {
      updateNestedComment(
        comment.replies,
        setAllComments,
        commentId,
        newCommentText
      );
    }
  }

  setAllComments(commentsWithReplies);
}

/*********** CONVERTING DATE ********************/

export function convertToLocaleDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
