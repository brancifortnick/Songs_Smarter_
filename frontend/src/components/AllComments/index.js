import { useEffect, useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getComments } from '../../store/comment';

const AllComments = () => {


    const dispatch = useDispatch();

    const comments = useSelector(state=> Object.values(state.comment))

    useEffect(()=> {

        dispatch(getComments(comments))
    },[dispatch])

    return (
      <div>
        this is comment
        <ol>
            <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
                {comment.body}
            </div>
          ))}
        </ol>
      </div>
    );

}
export default AllComments;
