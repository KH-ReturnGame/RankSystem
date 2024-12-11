import { useState, useEffect, useRef } from "react";
interface CardProps {
    title: string; // 카드에 표시될 제목
    bgColor: string; // 카드 배경색
    index: number;
    _data: { name: string; score: string }[];
    c_index: number;
}
const Rank_1 = ({ rank, id, score, className }: { rank: number; id: string; score: string; className?: string }) => {
    return (
        <li className={`w-full flex justify-center text-xl font-bold text-gray-800 ${className}`}>
            <div className="w-5/6 h-20 rounded-2xl bg-white/20 shadow-2xl backdrop-blur-md">
                <ul className="w-full h-full flex flex-row">
                    <li className="w-[10%]">
                        <p className="w-full h-full flex justify-center items-center text-2xl">#{rank}</p>
                    </li>
                    <li className="w-[20%]">
                        <p className="h-full flex justify-start items-center text-2xl whitespace-nowrap">{id}</p>
                    </li>
                    <li className="w-[45%]">
                        <p className="w-full h-full flex justify-center items-center text-2xl"></p>
                    </li>
                    <li className="w-[25%]">
                        <p className="h-full flex justify-start items-center text-2xl">{score} 초</p>
                    </li>
                </ul>
            </div>
        </li>
    );
};

// const Rank_1 = ({ rank, id, score }: { rank: number; id: string; score: string }) => {
//     return (
//         <li className="w-full flex justify-center text-xl font-bold text-gray-800">
//             <div className="w-5/6 h-20 rounded-2xl bg-white/20 backdrop-blur-md">
//                 <ul className="w-full h-full flex flex-row">
//                     <li className="w-[10%]"><p className="w-full h-full flex justify-center items-center text-2xl">#{rank}</p></li>
//                     <li className="w-[20%]"><p className="h-full flex justify-start items-center text-2xl whitespace-nowrap">{id}</p></li>
//                     <li className="w-[45%]"><p className="w-full h-full flex justify-center items-center text-2xl"></p></li>
//                     <li className="w-[25%]"><p className="h-full flex justify-start items-center text-2xl">{score} 초</p></li>
//                 </ul>
//             </div>
//         </li>
//     );
// };
const Rank_2 = ({ rank, id, score }: { rank: number; id: string; score: string }) => {
    return (
        <li className="w-full flex justify-center text-xl font-bold text-gray-800">
            <div className="w-5/6 h-20 rounded-2xl bg-white/20 backdrop-blur-md">
                <ul className="w-full h-full flex flex-row">
                    <li className="w-[10%]"><p className="w-full h-full flex justify-center items-center text-2xl">#{rank}</p></li>
                    <li className="w-[20%]"><p className="h-full flex justify-start items-center text-2xl whitespace-nowrap">{id}</p></li>
                    <li className="w-[45%]"><p className="w-full h-full flex justify-center items-center text-2xl"></p></li>
                    <li className="w-[25%]"><p className="h-full flex justify-start items-center text-2xl">{score} 점</p></li>
                </ul>
            </div>
        </li>
    );
};
const Rank_3 = ({ rank, id, score }: { rank: number; id: string; score: string }) => {
    return (
        <li className="w-full flex justify-center text-xl font-bold text-gray-800">
            <div className="w-5/6 h-20 rounded-2xl bg-white/20 backdrop-blur-md">
                <ul className="w-full h-full flex flex-row">
                    <li className="w-[10%]"><p className="w-full h-full flex justify-center items-center text-2xl">#{rank}</p></li>
                    <li className="w-[20%]"><p className="h-full flex justify-start items-center text-2xl whitespace-nowrap">{id}</p></li>
                    <li className="w-[45%]"><p className="w-full h-full flex justify-center items-center text-2xl"></p></li>
                    <li className="w-[25%]"><p className="h-full flex justify-start items-center text-2xl">{score}개 클리어</p></li>
                </ul>
            </div>
        </li>
    );
};


const RankCard = ({ index, data }: { index: number; data: { name: string; score: string }[][] }) => {
    const prevDataRef = useRef<{ name: string; score: string }[]>([]);
    const [positions, setPositions] = useState<Record<string, number>>({});

    useEffect(() => {
        const prevData = prevDataRef.current;
        const newPositions: Record<string, number> = {};

        // 현재 데이터 기준으로 순위 저장
        data[index].forEach(({ name }, idx) => {
            newPositions[name] = prevData.findIndex((item) => item.name === name) + 1 || idx + 1;
        });

        setPositions(newPositions);
        prevDataRef.current = [...data[index]];
    }, [data, index]);

    const getRankComponent = (rank: number, id: string, score: string, offset: number) => {
        const translateY = offset * 120; // 랭크 변화량에 따른 이동 크기
        const animationStyle = {
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.3s ease-in-out",
        };

        switch (index) {
            case 0:
                return (
                    <div style={animationStyle} key={id} className="w-full h-full">
                        <Rank_1 rank={rank} id={id} score={score} />
                    </div>
                );
            case 1:
                return (
                    <div style={animationStyle} key={id} className="w-full h-full">
                        <Rank_2 rank={rank} id={id} score={score} />
                    </div>
                );
            case 2:
                return (
                    <div style={animationStyle} key={id} className="w-full h-full">
                        <Rank_3 rank={rank} id={id} score={score} />
                    </div>
                );
            default:
                return null;
        }
    };
    let curRank = 0;
    let prvRank = 0;
    const new_data: Record<string, { curRank: number; prvRank: number; name: string; score: string; change: number }> = {};
    return (
        <>
            {[...data[index]]
                .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
                .map(({ name, score }, idx) => {
                    prvRank = positions[name];
                    curRank = idx + 1;
                    const change = -prvRank + curRank;
                    new_data[name] = { curRank, prvRank, name, score, change };
                    return null; // 반드시 값을 반환해야 함
                })}
            {[...data[index]].map(({ name, score }) => {
                const { curRank, change } = new_data[name];
                return getRankComponent(curRank, name, score, change);
            })}
        </>
    );
};

export default function Card({ title, bgColor, index, _data, c_index }: CardProps) {
    const [cardData, setCardData] = useState<{ name: string; score: string }[][]>([
        [{ name: "", score: "" }],
        [{ name: "", score: "" }],
        [{ name: "", score: "" }]
    ]);
    
    useEffect(() => {
        setCardData((prev) => {
            const updatedData = [...prev];
            updatedData[c_index] = _data;
            return updatedData;
        });
    }, [_data]); 

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div style={{ width: "90%", height: "90%" }} className="relative rounded-3xl shadow-2xl flex items-col justify-center">
                {/* 투명한 배경 레이어 */}
                <div
                    className={`absolute inset-0 ${bgColor} rounded-3xl opacity-80`}
                ></div>
                <ul className="w-full h-full">
                    <div>
                        <p className="text-7xl font-bold text-gray-800 relative z-10 mt-12 flex justify-center">{title}</p>
                    </div>
                    <ul className="relative z-10 mt-12 flex flex-col gap-10 items-center overflow-y-auto max-h-[70%]">
                        <RankCard index={index} data={cardData} />
                    </ul>
                </ul>
            </div>
        </div>
    );
}