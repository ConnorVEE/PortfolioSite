import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[70vh] py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
            <Image
                src="/images/connor.png"
                alt="Connor"
                width={500}
                height={500}
                priority 
                className="rounded-full object-cover object-top aspect-square ring-4 ring-primary"
            />
            </div>

            <div className="flex max-w-xl flex-col gap-6">
                <h1 className="text-5xl font-bold md:text-6xl">Connor VanTress</h1>

                <h2 className="text-2xl font-medium md:text-3xl">
                    Software Developer focused on building thoughtful, user-centered web applications
                </h2>

                <p className="text-lg md:text-xl max-w-xl">
                    I enjoy turning ideas into polished software while continuously exploring new technologies and improving my craft
                </p>
            </div>
        </div>
    </section>
  );
}