// libraries
import { useState } from "react";

// components
import CommentEntryBlock from "./components/CommentEntryBlock";
import CommentThread from "./components/CommentThread";

// utils
import {
  dummyCommentData,
  dummyCurrentUser,
} from "@/comment_section/utils/dummy_data";

// types
import { Comment } from "@/comment_section/utils/types";
import { countCommentsDFS } from "./utils/functions";

export default function CommentSection() {
  const [allComments, setAllComments] = useState<Comment[]>(dummyCommentData);

  const [currentUser] = useState(dummyCurrentUser);

  return (
    <div className="h-full w-full md:w-[35vw] overflow-y-auto flex flex-col-reverse md:flex-col items-center justify-between px-4 ">
      <CommentEntryBlock
        allComments={allComments}
        setAllComments={setAllComments}
        currentUser={currentUser}
      />
      <br />
      <h1 className="text-white text-2xl w-full text-left">
        {/* Comments ({allComments.length}) */}
        Comments ({countCommentsDFS(allComments)})
      </h1>
      <br />
      <CommentThread
        allComments={allComments}
        setAllComments={setAllComments}
      />
    </div>
  );
}
