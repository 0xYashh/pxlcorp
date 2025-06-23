export const metadata = {
    title: 'yash kumar · pxlcorp',
    description: 'founder & ceo of pxlcorp. learns in public. builds weird internet things.',
  }
  
  export default function YashPage() {
    return (
      <div className="mx-auto max-w-[800px] p-8 text-justify">
        {/* profile image */}
            <img
            src="/images/yash.png" // make sure this is in your public folder
            alt="yash kumar"
            className="w-29 h-28 mb-5"
            />
    
        {/* title */}
        <h1 className="text-pxl-purple text-3xl md:text-4xl font-bold mb-4 font-mono">
          yash
        </h1>
        <p className="text-base italic text-gray-600 mb-8">
          founder / ceo, pxlcorp
        </p>
  
        {/* about content */}
        <div className="space-y-6 text-[1.05rem] leading-7 font-mono text-justify text-black">
          <p>
            hey — i’m yash. 19. currently building pxlcorp solo — with a laptop, some
            stubbornness, and a bunch of ai bots pretending to be my team.
          </p>
  
          
<p>
  i’m into documenting things — whether it’s building startups, filming random street stuff, or capturing moments through my lens. i love creating. whether it’s code or content.
</p>
<p>
  i’m the founder & ceo (sounds cool lol). maybe one day this becomes a billion dollar company. or maybe just something fun and useful. either way, i’m showing up and building.
</p>
<p>
  & currently wearing all the hats at pxlcorp — building the products, writing the code, designing the pages, filming content, even writing this sentence. it’s a lot, but i love it. this is where i learn, create, and try to turn wild ideas into something real.
</p>

  
          <p className="text-pxl-purple">[ status: in the arena 🥽 ]</p>
          <p className="text-sm text-black mt-2">
  <a href="https://x.com/yashkumar" target="_blank" className="no-underline transition-colors duration-200 hover:text-pxl-purple mr-4">[ x → ]</a>
  <a href="https://instagram.com/yashkumar" target="_blank" className="no-underline transition-colors duration-200 hover:text-pxl-purple">[instagram → ]</a>
  <a
    href="mailto:yashkumarpxl@gmail.com"
    className="no-underline transition-colors duration-200 hover:text-pxl-purple"
  >
    [email me →]
  </a>
</p>
        </div>
      </div>
    )
  }
  