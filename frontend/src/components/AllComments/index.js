import { useEffect, useState, useHistory } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getComments} from '../../store/comment';
import DeleteComment from '../CommentDelete';
import CommentEdit from '../CommentEdit'
import './AllComments.css';
const AllComments = () => {

    const dispatch = useDispatch();
    // const history = useHistory()
    const comments = useSelector(state=> Object.values(state.comment))
    // console.log('state', comments)
  // console.log(comments[0], "allComments__________________________________________________")

    useEffect(()=> {

        dispatch(getComments())
    },[dispatch, DeleteComment])


    // const onSubmit = (e) => {
    //   e.preventDefault()
    // }

    // const addComment = event => {
    //   const formText = event.target.value
    //   console.log(formText, "_________________________")
    //   dispatch(getComments(songId, formText))
    // }



    return (
      <div>
        <div id="single-song">
          <h2></h2>
          {/* <form onSubmit={addComment}>
          <textarea />
          <button type="submit">Submit</button>
        </form> */}
          <ul id='comment-text'>
            {comments.map((comment) => (
              <li key={comment?.id}>
                {comment?.body}
                <DeleteComment commentId={comment?.id} />
                <CommentEdit id={comment?.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

}
export default AllComments;
