import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../store/slices/comments.slice";
import { RootState } from "../store";

function CommentsPage() {
  // DISPATCH
  const dispatch = useDispatch();

  // SELECTORS

  const { comments, commentsLoading } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <div>
      {!commentsLoading ? (
        <ul className="my-5 list-disc">
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading Comments...</h1>
      )}
    </div>
  );
}

export default CommentsPage;
