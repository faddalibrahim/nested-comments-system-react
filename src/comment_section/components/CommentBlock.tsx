// react library
import { useState } from "react";

// types
import { CommentBlockProps } from "@/comment_section/utils/types";

// functions
import {
  convertToLocaleDate,
  deleteComment,
} from "@/comment_section/utils/functions";

// components
import Icons from "./Icons";

export default function CommentBlock({
  comment,
  setAllComments,
}: CommentBlockProps) {
  const [showEditBox, setShowEditBox] = useState(false);
  const [commentEditText, setCommentEditText] = useState(comment.text);

  return (
    <div className=" py-7 bg-[rgba(178,178,238,0.1)] rounded-md p-5">
      <div className="flex gap-4 w-full">
        <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-full border border-[0.2rem] border-[rgba(178,178,238,1)]">
          <img
            src="https://i.pravatar.cc"
            alt=""
            className="rounded-full w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4 grow">
          <div className="flex items-center text-white gap-3">
            <p className="text-white text-xl">{comment.user.name}</p>
            <small className="text-gray-600 font-medium">
              {convertToLocaleDate(comment.createdAt)}
            </small>
          </div>
          {showEditBox ? (
            <div className="flex flex-col gap-2 items-end w-full">
              <textarea
                className="bg-[rgba(178,178,238,0.05)] text-white p-4 outline-0 border-0 ring-0 resize-none rounded-md w-full"
                placeholder="type comment"
                name=""
                id=""
                rows={3}
                value={commentEditText}
                onChange={(e) => setCommentEditText(e.target.value)}
              ></textarea>
              <div className="flex gap-2">
                <button
                  className="text-[tomato]"
                  onClick={() => setShowEditBox(false)}
                >
                  cancel
                </button>
                <button className="bg-[rgba(59,53,70,1)] font-medium text-[#f3f5f7] px-3 py-1 rounded">
                  save
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white">{comment.text}</p>
          )}
          {!showEditBox && (
            <div className="flex gap-3 text-[rgba(178,178,238,0.5)]">
              <button className="cursor-pointer p-2 bg-[rgba(178,178,238,0.03)] hover:bg-[rgba(178,178,238,0.2)] rounded-full">
                <Icons.Reply />
              </button>
              <button
                onClick={() => deleteComment(setAllComments, comment.id)}
                className="cursor-pointer p-2 bg-[rgba(178,178,238,0.03)] hover:bg-[rgba(178,178,238,0.2)] rounded-full"
              >
                <Icons.Delete />
              </button>
              <button
                className="cursor-pointer p-2 bg-[rgba(178,178,238,0.03)] hover:bg-[rgba(178,178,238,0.2)] rounded-full"
                onClick={() => {
                  setShowEditBox(true);
                }}
              >
                <Icons.Edit />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* {comment?.replies.length > 0 &&
        comment?.replies.map((reply: Comment) => (
          <CommentBlock
            key={reply.id}
            comment={reply}
            setAllComments={setAllComments}
          />
        ))} */}
    </div>
  );
}
