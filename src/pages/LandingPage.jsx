import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import NavBar from "../components/landingPage/NavBar";
import SignUpSection from "../components/landingPage/SignUpSection";

function LandingPage() {
  return (
    <main className="h-screen bg-graphite-black text-white px-10 py-7 flex flex-col gap-y-20">
      <header className="flex flex-row justify-between">
        <Logo />
        <NavBar />
        <div>
          <Link className="border py-2 px-5 font-medium text-lg" to="/login">
            Sign in
          </Link>
        </div>
      </header>
      <section className="self-center flex flex-col items-center gap-y-8">
        <h1 className="text-6xl font-bold font-mplus text-center">
          Discover Your New Fit App
        </h1>
        <p>Join the world’s most widely adopted AI-powered fitness platform.</p>
        <SignUpSection />
      </section>
    </main>
  );
}

export default LandingPage;
