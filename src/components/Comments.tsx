import { WEBSITE_URL } from "config";
import commentForm from "./CommentForm";
import { currentUser } from "@clerk/nextjs";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {
      next: { revalidate: 5 },
    });
  } catch (error) {console.log(error)}
}

return (
<div>
    <CommentForm slug={slug}/>
    <h3>Comments</h3>
    <ul>
       {Comments.map((comment)) => {
        return (
           <li key={commentForm.uuid}>
           {comment.username} says...
           <br />
           {comment.comment}
           </li>
    </ul>
</div>

)
        
