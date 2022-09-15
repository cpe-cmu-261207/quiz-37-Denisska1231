import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner
          name="Jedthaphon Kobkam 640612083"
          post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          like="1111"
          profile="/profileImages/mock_ST_newSadCat.jpg"
        />

        {/* Comment Example */}
        {comments.map((x, i) => {
          return (
            <Comment
              key={i}
              username={x.username}
              userImagePath={x.userImagePath}
              commentText={x.commentText}
              likeNum={x.likeNum}
              replies={x.replies}
            />
          );
        })}

        {/* Reply Example */}
      </div>
    </div>
  );
}
