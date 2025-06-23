// app/reads/build-notes/page.js

export const metadata = {
    title: 'build notes · pxlcorp',
    description: 'raw thoughts, sketches, and build logs from pxlcorp’s lab.',
  };
  
  export default function BuildNotesPage() {
    return (
      <div className="mx-auto max-w-[800px] p-8 text-justify">
        <h1 className="text-pxl-purple text-3xl md:text-4xl font-bold mb-4 font-mono">
          build notes
        </h1>
  
        <p className="text-base italic text-gray-600 mb-8 font-mono">
          raw notes, experiments, and logs from inside pxlcorp.
        </p>
  
        <div className="text-[1.05rem] leading-7 font-mono text-justify text-black space-y-6">
          <p>
            this section is for everything behind-the-scenes — from early sketches to messy ideas and build logs.
          </p>
  
          <p>
            it’s still under construction. notes will start appearing here once we open up the lab journal publicly.
          </p>
  
          <p className="text-pxl-purple">[ status: coming soon 🚧 ]</p>
        </div>
      </div>
    );
  }
  