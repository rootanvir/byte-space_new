import Image from "next/image";

const learners = [
    { name: "Ava", avatar: "/img/profile1.png" },
    { name: "Ben", avatar: "/img/profile2.png" },
    { name: "Dan", avatar: "/img/profile4.png" },
    { name: "Cara", avatar: "/img/profile3.png" },
];

function HappyStudents() {
    return (
        <div className="w-[250px] rounded-xl bg-[#d7f73b] px-3.5 py-3 shadow-lg">
            <p className="text-sm font-medium text-neutral-950">Happy Students</p>
            <p className="mt-0.5 flex items-center gap-1 text-[10px] text-neutral-700">
                <span className="font-semibold">4.5</span>
                <span className="text-neutral-500">(240)</span>
                <span className="text-blue-600">★</span>
            </p>
            <div className="mt-2 flex items-center">
                {[...learners, ...learners].slice(0, 7).map((l, i) => (
                    <Image
                        key={i}
                        src={l.avatar}
                        alt={l.name}
                        width={30}
                        height={30}
                        className="-ml-1.5 h-[30px] w-[30px] rounded-full border-2 border-[#d7f73b] object-cover first:ml-0"
                    />
                ))}
                <span className="-ml-1.5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-neutral-950 text-[10px] font-semibold text-white">
                    2K+
                </span>
            </div>
        </div>
    );
}
export default HappyStudents;