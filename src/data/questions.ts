import type { Question } from "../types/Questions";

// 問題データの定義
const questions: Question[] = [
  {
    id: 0,
    text: "Reactで状態を管理するためのHookはどれですか？",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correctIndex: 1,
    explanation:
      "useStateは、Reactのコンポーネント内で状態を管理するためのHookです。状態が更新されると、Reactは必要に応じてコンポーネントを再レンダリングします。",
  },
  {
    id: 1,
    text: "JavaScriptで配列の各要素を変換し、新しい配列を作成するメソッドはどれですか？",
    options: ["filter()", "find()", "map()", "forEach()"],
    correctIndex: 2,
    explanation:
      "map()は、配列の各要素に指定した処理を適用し、その結果から新しい配列を作成するメソッドです。元の配列は変更されません。",
  },
  {
    id: 2,
    text: "TypeScriptで、オブジェクトの型を定義するために使用できるキーワードはどれですか？",
    options: ["const", "return", "import", "type"],
    correctIndex: 3,
    explanation:
      "typeは、TypeScriptでオブジェクトなどの型に名前を付けるためのキーワードです。例えば、type User = { name: string; age: number }; のように記述できます。",
  },
];

export default questions;
