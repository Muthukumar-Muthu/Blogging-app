import { getDoc, Timestamp, doc } from "firebase/firestore";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import "./style.css";
const Blog = () => {
  const { blogId } = useParams();
  console.log(blogId);
  let userObj = {};
  const [blogObj, setBlogObj] = useState({});
  useEffect(() => {
    const getBlog = async () => {
      try {
        const docObj = await getDoc(
          doc(db, `users/${userObj.uid}/blogs/${blogId}`)
        );
        const blog = docObj.data();
        setBlogObj(blog);
      } catch (error) {
        console.log(error);
      }
    };
    userObj = getAuth().currentUser;
    getBlog();
  }, []);

  const { heading, summary, timeStamp, name } = {
    heading: "Muthu",
    summary: "summary loren",
    timeStamp: null,
    name: "Muthu",
  }; //TODO:
  //console.log(timeStamp);
  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("LLL");
  } else {
    date = moment(new Date()).format("LLL");
  }

  return (
    <div className="blog-wrapper">
      <div className="blog">
        <h2 className="heading">{heading}</h2>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          inventore minus, accusamus explicabo dolor fuga recusandae. Recusandae
          illum magni harum maxime atque, iste dicta aut, quia exercitationem
          ipsum, eius repellat. Dolore eaque architecto similique. Fugiat
          voluptatibus aut assumenda, eos nostrum eum, facilis esse maiores
          veritatis veniam, saepe amet? Temporibus nostrum esse nesciunt itaque
          dolores natus ipsa ratione odit recusandae voluptatem? Aspernatur
          molestias maiores nostrum sint blanditiis in incidunt aperiam numquam,
          cumque at provident debitis perspiciatis laborum itaque omnis
          reprehenderit ipsa vero quaerat hic, corrupti expedita esse quis,
          fugit sit. Velit. Corporis omnis quos, exercitationem vitae adipisci
          porro labore reprehenderit nesciunt! Voluptates recusandae
          repudiandae, quibusdam alias esse id? Quo veritatis quam cumque! Vero
          cumque nobis laudantium harum ullam nemo qui accusamus? Repellendus
          commodi tempora ducimus reiciendis quo consectetur fugiat voluptas sed
          incidunt veritatis. Expedita optio nulla quidem, ipsam similique odio
          soluta tempora temporibus. Eos, hic est tempora saepe voluptatum atque
          nam! Quam, amet at. Quis molestiae pariatur nobis error. Omnis
          consequuntur dicta aspernatur quis cum voluptatem ipsa quos quod
          commodi repellendus, excepturi non officia, doloribus adipisci quidem
          tempora et, veritatis repellat? Sint reprehenderit quas obcaecati
          voluptatem accusantium repellat quidem nobis fugiat illum dolorem,
          accusamus unde recusandae ea praesentium voluptates beatae
          necessitatibus cumque dicta esse amet. Pariatur qui modi nulla sed
          molestias! Sit officia inventore nihil optio delectus odit vitae
          architecto repellat molestias. Repellat, vitae. Unde perspiciatis qui
          rerum, placeat cupiditate ad non aperiam necessitatibus voluptatem
          quas ratione in optio voluptates eaque? Quo fugit fuga temporibus
          recusandae facere rem repellendus saepe labore perspiciatis, debitis
          illo velit, nulla quam minus tempore. Cumque distinctio neque ipsam id
          facilis dolores atque facere iure expedita! Fuga. Aspernatur enim
          omnis libero, eum nostrum voluptas illo a ipsa voluptate sed
          consequuntur, nam reprehenderit ut! Perspiciatis iste enim, dolore,
          maiores perferendis distinctio sunt iure quasi nulla exercitationem
          eos nihil.
        </p>
        <div className="flex">
          <h4 className="author">{name || "name"}</h4>
          <h6 className="time">{date}</h6>
        </div>
      </div>
    </div>
  );
};
export default Blog;
