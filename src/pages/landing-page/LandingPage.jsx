import "./style.css";

import { LoginButton } from "../../components/login-button/LoginButton";
import loginWithTestUser from "../../firebase/function/testUser";
const LandingPage = () => {
  console.log("landing page");
  return (
    <div className="landing-page">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam deleniti
        quo cupiditate nam asperiores assumenda autem adipisci, voluptate
        possimus tempore illo officia ut repellendus mollitia ex iusto nobis at
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rerum
        adipisci animi explicabo magnam cumque, culpa, exercitationem est ea et
        iusto unde quod, in dolore similique atque quam laudantium rem. quis.
        lorem*8 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident aperiam nemo quae placeat exercitationem eveniet quia ex
        corrupti quo commodi cumque optio tempora ipsa delectus soluta eum odit,
        voluptate aspernatur! Recusandae, illum eius, quos temporibus est
        aliquam dolores explicabo sed dolor similique ipsa tenetur qui. Hic
        deserunt consequuntur provident reprehenderit maxime delectus. Commodi
        similique sequi aperiam cumque ipsum praesentium illum? Repellat odio
        omnis, excepturi atque non pariatur minima aspernatur corrupti doloribus
        vero autem architecto assumenda aliquam expedita ullam doloremque
        molestiae, suscipit animi incidunt modi. Ratione facere corrupti
        similique perspiciatis porro. Repellendus sapiente accusantium tenetur
        enim odio eligendi porro quas ex nam. Atque officiis laboriosam rerum
        eaque aperiam, iste dignissimos et dolores aut nostrum? Dolores,
        voluptatibus impedit. Architecto fugiat facilis dolores! Ab aliquam
        fugit rem distinctio maxime quod sint velit eos deserunt similique
        magnam amet commodi assumenda, in illum incidunt, voluptatibus veniam id
        vitae, voluptate hic aspernatur excepturi odit! Nobis, ullam.
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <div className="userpass">
          <div>
            <h4>User id:</h4>{" "}
            <input type="text" value={"******"} name="" id="" />
          </div>
          <div>
            <h4>Password:</h4>{" "}
            <input type="text" value={"*******"} name="" id="" />
          </div>
          <div>
            <button onClick={loginWithTestUser}>Login as Test user</button>
          </div>
        </div>
        <LoginButton />
      </div>
    </div>
  );
};
export default LandingPage;
