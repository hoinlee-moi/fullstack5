// import { useState } from 'react';

// const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
// const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

// export const useSearch = <T extends unknown[]>() => {
//   const [search, setSearch] = useState<T[]>([]);

//   const initSearch = (data: T, firstSounds: string) => {
//     const letterArr = ['^', ...firstSounds];
//     const regArr = letterArr.map((letter, idx) => {
//       if (idx === letterArr.length - 1) {
//         if (ㄱㄴㄷ.includes(letter)) {
//           const idx = ㄱㄴㄷ.indexOf(letter);
//           const S = 가나다.at(idx);
//           const E = 가나다.at(idx)!.charCodeAt(0) + 587;
//           return `([${letter}${S}-${String.fromCharCode(E)}])`;
//         }
//         if (가나다.includes(letter)) {
//           const idx = 가나다.indexOf(letter);
//           const S = 가나다.at(idx);
//           const E = 가나다.at(idx)!.charCodeAt(0) + 587;
//           return `([${S}-${String.fromCharCode(E)}])`;
//         }
//       }
//       return letter;
//     });
//     const regex = new RegExp(regArr.join(''));
//     const searchList = data.filter((d) => regex.test(d.name));
//     setSearch(searchList);
//   };
// };
