import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://returngame-d8a65-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

type RankData = { [key: string]: { name: string; score: number } };

const extract = (data: RankData): { name: string; score: string }[] => {
    if (!data) {
        console.error("Invalid data provided");
        return [];
    }

    return Object.keys(data).map((key) => ({
        name: data[key].name,
        score: data[key].score.toString(), // 숫자를 문자열로 변환
    }));
};

export default async function FetchData(_index: number): Promise<{ name: string; score: string }[]> {
    const dbRef = ref(database, "/"); // Firebase 데이터 경로 설정

    // 게임별 키 매핑
    const gameKeys = ["Game1_Rank", "Game2_Rank", "Game3_Rank"];
    const selectedKey = gameKeys[_index];

    if (!selectedKey) {
        console.error("Invalid game index");
        return [];
    }

    try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data = snapshot.val()[selectedKey];
            if (data) {
                return extract(data); // 데이터를 변환 후 반환
            }
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return []; // 데이터가 없거나 에러가 발생한 경우 빈 배열 반환
}