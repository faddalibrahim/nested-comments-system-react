import { CommentThreadProps, Comment } from "@/comment_section/utils/types";
import CommentBlock from "./CommentBlock";

export default function CommentThread({
  allComments,
  setAllComments,
}: CommentThreadProps) {
  return (
    <div className="flex flex-col gap-5 grow overflow-y-auto w-full pr-2">
      {allComments.length > 0 &&
        allComments.map((comment: Comment) => (
          <CommentBlock
            allComments={allComments}
            key={comment.id}
            comment={comment}
            setAllComments={setAllComments}
            parentId={null}
          />
        ))}
    </div>
  );
}
