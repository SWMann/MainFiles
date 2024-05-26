// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import D12AForm from "@/components/D-12A_Form.tsx";
import Navbar from "@/components/Navbar";

function LandingPage() {
  const link = (
    <a href="#" className={"hover:text-blue-600"}>
      this page
    </a>
  );

  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Join Battlegroup Scarus
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      ARMA Reforgers first Warhammer 40,000 MILSIM. Fight in the
                      Emperors name on Land or in the Air.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                <img
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  height="550"
                  src="https://i.redd.it/is-there-an-imperial-guard-regiment-more-experienced-in-v0-ihcn32li53fa1.jpg?width=1920&format=pjpg&auto=webp&s=652eaa5d4c79b94837984edee0c77bd32ad24eab"
                  width="550"
                />
              </div>
            </div>
          </section>
        </main>

        <section className="w-full py-2 md:py-24 lg:py-32">
          <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1">
                <h2 className="text-3xl font-bold tracking-tight">
                  What we offer you:
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  These principles are the key behind our success.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                    {/*<RocketIcon className="w-6 h-6 text-primary"/>*/}
                  </div>
                  <h3 className="text-lg font-semibold">
                    Realistic Military Simulation
                  </h3>
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We aim to simulate dark and gritty reality of war in the 41st millenium in every way possible. Be it through the use of one life operations, challenging enemies or impossible odds.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                    {/*<Icon className="w-6 h-6 text-primary"/>*/}
                  </div>
                  <h3 className="text-lg font-semibold">Flexible Operations</h3>
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Utilizing our advanced AMOS and ORBAT system we utilize the
                  benefits of a fixed military structure, without the downsides
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-800">
                    {/*<Icon className="w-6 h-6 text-primary"/>*/}
                  </div>
                  <h3 className="text-lg font-semibold">Dynamic Operations</h3>
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  No two of our operations is the same, we offer the standard
                  lineup of military missions including patrols, assaults,
                  defences and everything inbetween as well as the halo
                  specialities that make it unique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Leadership
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 md:text-xl">
              Our command team is composed of talented individuals with diverse
              backgrounds and expertise, all united by a shared passion for
              creating incredible experiences, many are current or prior
              service.
            </p>
          </div>
          <Separator className={"my-20 "}></Separator>
          <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-4xl">
            Unit Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="LtCmdr. Brewer"
                className="rounded-full"
                height="120"
                src="assets/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Cdre. Phili</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Acting Captain - INS-Resolute (FF)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  The Commadore is a veteran of ARMA 3 and Reforger. He leads the unit both in and out of game.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="LtJG. Texas"
                className="rounded-full"
                height="120"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold"> LTJG. Texas</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Acting Executive Officer - UNSC Tripoli
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  A new-comer to the Milsim seen, LTJG. Texas is always seeking
                  to improve his craft.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="CPO. Jerome-092"
                className="rounded-full"
                height="120"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">CPO. Jerome-092</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Chief of the Boat - UNSC Tripoli
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  As the senior enlisted advisor to the Commander as well as the
                  SPARTAN detachment Commander, CPO. Jerome leads much of our
                  NCO development programs and is an expert at everything
                  infantry.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img
                alt="LTJG. Bitconnect"
                className="rounded-full"
                height="120"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">LTJG. Bitconnect</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Operations Officer - UNSC Tripoli
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  LTJG. Bitconnect draws from years of experience in the ARMA
                  franchise including 2 and 3 to help craft engaging and
                  difficult mission for the Battlegroup to overcome.
                </p>
              </div>
            </div>
          </div>
          <Separator className={"my-20 "}></Separator>

          <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-4xl content-center">
            Marine Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 justify-items-center justify-center align-middle grid">
            <div className="flex flex-col items-center space-y-3 max-w-80">
              <img
                alt="1LT. GamingPigdeon"
                className="rounded-full"
                height="120"
                src="assets/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">1Lt. GamingPigdeon</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Company Commander - SABER Company
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  1Lt. Gamingpidgeon leads the Marines in SABER Company of the
                  UNSC Tripoli and has great experience and wisdom from hundreds
                  of hours spent in that role in ARMA 3.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3 max-w-80">
              <img
                alt="GySgt. LilTrejon"
                className="rounded-full"
                height="120"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width="120"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">GySgt. LilTrejon</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Company Gunnery Sergeant - SABER Company
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  As SABER Company "Gunny" LilTrejon leads a large portion of
                  the trainings for the Marines and is the primary disciplinary
                  enforcer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-xl font-bold tracking-tighter sm:text-xl md:text-4xl content-center">
        Ready to Apply?
      </h2>

      <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 md:text-xl ">
        When you are ready and have made sure to thoroughly read through {link}{" "}
        before you apply. It goes everything you will need to know before
        attending s.
      </p>

      <div className={"py-10"}>
        <D12AForm></D12AForm>
      </div>
    </div>
  );
}

export default LandingPage;
