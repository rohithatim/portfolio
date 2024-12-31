import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center p-4">
      <div>
        <p className="text-[1.5em]">Rohit Hatim</p>
        <p className="opacity-60">Full stack developer & tech enthusiast</p>
        <div className="opacity-60 flex flex-col gap-2 mt-8">
          {/* <p>
            Blog:{" "}
            <Link target="_blank" href={"https://google.com"}>
              https://google.com
            </Link>
          </p> */}
          <p>
            Resume:{" "}
            <Link
              target="_blank"
              href={
                "https://github.com/rohithatim/resume/blob/main/rohit_latest_resume.pdf"
              }
            >
              rohithatim/cv
            </Link>
          </p>
          <p>
            Socials:{" "}
            <div className="inline-flex gap-2 flex-wrap">
              <Link target="_blank" href={"https://github.com/rohithatim"}>
                github
              </Link>

              <Link target="_blank" href={"https://twitter.com/rohit.hatim"}>
                twitter
              </Link>

              <Link target="_blank" href={"https://linkedin.com/in/rohithatim"}>
                linkedin
              </Link>

              <Link target="_blank" href={"mailto:hatimrohit079@gmail.com"}>
                email
              </Link>

              <Link target="_blank" href={"https://instagram.com/rohit.hatim"}>
                instagram
              </Link>
            </div>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
