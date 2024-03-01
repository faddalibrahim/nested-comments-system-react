import { useState } from "react";
import { addComment } from "@/comment_section/utils/functions";

import { CommentEntryBlockProps } from "@/comment_section/utils/types";

export default function CommentEntryBlock({
  allComments,
  setAllComments,
  currentUser,
}: CommentEntryBlockProps) {
  const [commentText, setCommentText] = useState("");
  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <textarea
        className="bg-[rgba(178,178,238,0.05)] text-white p-4 outline-0 border-0 ring-0 resize-none rounded-md w-full"
        placeholder="start typing..."
        cols={30}
        rows={5}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      {commentText.length > 0 && (
        <button
          className="bg-[rgba(59,53,70,1)] font-medium text-[#f3f5f7] p-3 rounded"
          onClick={() => {
            if (commentText.trim().length) {
              addComment(
                allComments,
                setAllComments,
                commentText,
                currentUser,
                null
              );
              setCommentText("");
            }
          }}
        >
          add comment
        </button>
      )}
    </div>
  );
}
