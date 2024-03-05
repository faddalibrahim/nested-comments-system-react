// react library
import { useState } from "react";

// types
import { Comment, CommentBlockProps } from "@/comment_section/utils/types";

// functions
import {
  addComment,
  deleteComment,
  updateComment,
  convertToLocaleDate,
  countCommentsDFS,
} from "@/comment_section/utils/functions";

// components
import Icons from "./Icons";
import { dummyCurrentUser } from "../utils/dummy_data";

export default function CommentBlock({
  allComments,
  comment,
  setAllComments,
  parentId,
}: CommentBlockProps) {
  const [showEditBox, setShowEditBox] = useState(false);
  const [commentEditText, setCommentEditText] = useState(comment.text);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [commentReplyText, setCommentReplyText] = useState("");

  const [showReplies, setShowReplies] = useState(false);

  const replyCount = countCommentsDFS(comment.replies);

  return (
    <div className=" mt-3">
      <div className="flex flex-col justify-between gap-4 bg-[rgba(178,178,238,0.09)] py-4 px-4 rounded-lg">
        <div className="flex gap-3 justify-start items-start">
          <div className="w-[3rem] h-[3rem] rounded-full border border-[0.2rem] border-[rgba(178,178,238,1)]">
            <img
              src="https://i.pravatar.cc"
              alt=""
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="flex flex-col text-white gap-0">
            <div className="flex gap-2 items-center">
              <p className="text-white text-lg">{comment.user.name}</p>
              <small className="text-gray-600 font-medium">
                {convertToLocaleDate(
                  comment.isModified ? comment.modifiedAt : comment.createdAt
                )}
              </small>
              {comment.isModified && (
                <small className="text-gray-600 font-medium">editted</small>
              )}
            </div>
            <small className="text-gray-600">{comment.user.handle}</small>
          </div>
        </div>
        <div className="flex flex-col gap-4 grow">
          {showEditBox ? (
            <div className="flex flex-col gap-2 items-end">
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
                <button
                  className="bg-[rgba(59,53,70,1)] font-medium text-[#f3f5f7] px-3 py-1 rounded"
                  onClick={() => {
                    updateComment(
                      allComments,
                      setAllComments,
                      comment.id,
                      commentEditText,
                      parentId
                    );
                    setShowEditBox(false);
                  }}
                >
                  save
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white">{comment.text}</p>
          )}
          {!showEditBox && (
            <div className="flex gap-3 text-[rgba(178,178,238,0.5)] items-center">
              <button
                className="cursor-pointer p-2 bg-[rgba(178,178,238,0.03)] hover:bg-[rgba(178,178,238,0.2)] rounded-full"
                onClick={() => setShowReplyBox(!showReplyBox)}
              >
                <Icons.Reply />
              </button>
              <button
                onClick={() =>
                  deleteComment(
                    allComments,
                    setAllComments,
                    comment.id,
                    parentId
                  )
                }
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
              {replyCount > 0 && (
                <div
                  className="flex items-center gap-1 p-2 hover:bg-[rgba(178,178,238,0.1)] cursor-pointer rounded-2xl"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  {showReplies ? <Icons.CaretUp /> : <Icons.CaretDown />}
                  {`${replyCount} repl${replyCount > 1 ? "ies" : "y"}`}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {!showEditBox && showReplyBox && (
        <>
          <div className="ml-5 mt-4 flex flex-col items-end gap-2">
            <textarea
              className="bg-[rgba(178,178,238,0.05)] text-white p-4 outline-0 border-0 ring-0 resize-none rounded-md w-full"
              placeholder={`replying to ${comment.user.handle}`}
              name=""
              id=""
              rows={3}
              value={commentReplyText}
              onChange={(e) => setCommentReplyText(e.target.value)}
            ></textarea>
            <div className="flex gap-2">
              {/* <button
                className="text-[tomato]"
                onClick={() => setShowEditBox(false)}
              >
                cancel
              </button> */}
              <button
                className="bg-[rgba(59,53,70,1)] font-medium text-[#f3f5f7] px-3 py-1 rounded"
                onClick={() => {
                  addComment(
                    allComments,
                    setAllComments,
                    commentReplyText,
                    dummyCurrentUser,
                    comment.id
                  );
                  setShowEditBox(false);
                  setCommentReplyText(" ");
                  setShowReplyBox(false);
                  setShowReplies(true);
                }}
              >
                reply
              </button>
            </div>
          </div>
        </>
      )}

      {/* REPLIES */}

      {showReplies && (
        <div className="ml-5">
          {comment?.replies.length > 0 &&
            comment?.replies.map((reply: Comment) => (
              <CommentBlock
                key={reply.id}
                allComments={allComments}
                comment={reply}
                setAllComments={setAllComments}
                parentId={comment.id}
              />
            ))}
        </div>
      )}
    </div>
  );
}
