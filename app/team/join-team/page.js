export const metadata = {
    title: "join the team · pxlcorp",
    description: "if you build weird internet stuff, come vibe with us.",
  };
  
  export default function JoinTeamPage() {
    return (
      <div className="mx-auto max-w-[800px] p-8 text-justify">
        <h1 className="text-pxl-purple text-3xl md:text-4xl font-bold mb-4 font-mono">
          join the team
        </h1>
  
        <p className="text-base italic text-gray-600 mb-8">
          building pxlcorp needs more crazy brains.
        </p>
  
        <div className="space-y-6 text-[1.05rem] leading-7 font-mono text-black">
          <p>
            we're still tiny. most days, it's just me (yash) building with help from my ai teammates.
          </p>
  
          <p>
            but the vision is big. and we need people who:
            <br />
            – love building stuff <br />
            – are obsessed with design / code / content / ops <br />
            – want to learn and grow with pxlcorp, not just work
          </p>
  
          <p>
            doesn't matter where you're from or what your resume says. if you can vibe, prototype, think from first
            principles, and take initiative — you're already close.
          </p>
  
          <p>
            you can be a generalist, a specialist, or just figuring it all out. roles are fluid here.
            we care more about *why you build* than *what you know*.
          </p>
  
          <p>
            if this sounds like something you wanna be part of — reach out.
          </p>
  
          <p className="text-pxl-purple">
          [ status: building? come vibe with us 🤝 ]
          </p>
  
          <div className="mt-6 space-x-4 text-[1.05rem] font-mono">
            <a
              href="mailto:0xyashkr@gmail.com"
              className="no-underline hover:text-pxl-purple underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              [ email yash → ]
            </a>
            <a
              href="https://instagram.com/pxlcorp.xyz"
              className="no-underline hover:text-pxl-purple underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              [ dm on insta → ]
            </a>
            <a
              href="https://x.com/yashpxl"
              className="no-underline hover:text-pxl-purple underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              [ dm on x → ]
            </a>
          </div>
        </div>
      </div>
    );
  }
  