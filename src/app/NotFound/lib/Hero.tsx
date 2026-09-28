const BTN = "inline-flex items-center justify-center rounded-full bg-[#d4fb27] px-6 py-3.5 text-[15px] font-medium text-[#111] cursor-pointer";
function Hero() {
    return (
        <main className="px-5 pt-10 pb-20 text-center sm:px-20 md:pt-24 md:pb-32">
            <div
                aria-hidden="true"
                className="bg-gradient-to-b from-[#d4fb27] from-35% to-[#d4fb27]/0 bg-clip-text text-[160px] font-bold leading-[0.85] text-transparent sm:text-[280px] md:text-[400px]"
            >
                404
            </div>
            <h1 className="relative -mt-10 mx-auto max-w-md text-3xl font-semibold leading-tight sm:-mt-16 sm:max-w-lg sm:text-4xl md:-mt-24 md:text-5xl">
                The page you are looking for doesn’t exist
            </h1>

            <p className="mx-auto my-8 max-w-md text-sm font-light opacity-90">
                Try to use a correct url or go back to homepage to start again
            </p>

            <a className={BTN}>Back to Home</a>
        </main>
    );
}

export default Hero;