export default function Footer() {
  return (
    <>
      <footer className="py-12 px-4 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-8 text-lg font-mono">
            <a href="https://x.com/yashpxl" target="_blank" rel="noopener" className="hover:text-purple-600 transition-colors">x</a>
            <span>/</span>
            <a href="https://instagram.com/pxlcorp.xyz" target="_blank" rel="noopener" className="hover:text-purple-600 transition-colors">insta</a>
          </div>
          <p className="mt-6 text-sm text-gray-600">built in public with caffeine &amp; curiosity</p>
        </div>
      </footer>
    </>
  )
} 