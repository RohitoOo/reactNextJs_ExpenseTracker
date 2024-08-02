import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <br />
      <br />
      <h1>Welcome, {user.fullName}</h1>
    <AddTransaction/>
    </main>
  );
};

export default HomePage;
