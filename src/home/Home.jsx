import { Logout } from "../firebase/firebase-config";
export default function Home() {
  return (
    <div>
      Home
      <div onClick={Logout}>Logout</div>
    </div>
  );
}
