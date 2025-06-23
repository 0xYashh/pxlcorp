// app/reads/blogs/page.js

export const metadata = {
    title: 'blogs · pxlcorp',
    description: 'long-form thoughts, stories, and internet experiments.',
  };
  
  export default function BlogsPage() {
    return (
      <div className="mx-auto max-w-[800px] p-8 text-justify">
        <h1 className="text-pxl-purple text-3xl md:text-4xl font-bold mb-4 font-mono">
          blogs
        </h1>
  
        <p className="text-base italic text-gray-600 mb-8 font-mono">
          long-form thoughts & internet experiments from pxlcorp.
        </p>
  
        <div className="text-[1.05rem] leading-7 font-mono text-justify text-black space-y-6">
          <p>
            we’re writing our first blogs right now — documenting what we’re building, breaking, and figuring out along the way.
          </p>
          <p>
            this section will go live soon. if you’re curious about what we’re up to, check back in a bit or follow along on the other experiments.
          </p>
          <p className="text-pxl-purple">[ status: drafting ✍️ ]</p>
        </div>
      </div>
    );
  }
  