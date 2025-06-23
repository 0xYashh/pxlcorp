export const metadata = {
    title: 'buildslog · pxlcorp',
    description: 'public directory of indie builds — coming soon.',
  }
  
  export default function BuildslogPage() {
    return (
      <div className="mx-auto max-w-[800px] p-8 text-justify">
        <h1 className="text-pxl-purple text-3xl md:text-4xl font-bold mb-4 font-mono">
          buildslog
        </h1>
        <p className="text-base italic text-gray-600 mb-8">
          public directory of indie builds — alive, paused, or dead.
        </p>
        <div className="space-y-6 text-[1.05rem] leading-7 font-mono text-black">
          <p>
            we're currently building buildslog — our first real product at pxlcorp.
          </p>
          <p>
            it’ll be a place where you can drop your builds, browse others, and even pick one up. 
            kind of like a public scratchpad for indie projects — whether they’re shipping, stalled, or just vibes.
          </p>
          <p>
            launching soon. stay tuned.
          </p>
          <p className="text-pxl-purple">[ status: coming soon ⏳ ]</p>
        </div>
      </div>
    )
  }
  