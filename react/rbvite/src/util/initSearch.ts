const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

export const initSearch = (data: Cart[], firstSounds: string) => {
  const leArr = ['^', ...firstSounds].map((letter) => {
    if (ㄱㄴㄷ.includes(letter)) {
      const idx = ㄱㄴㄷ.indexOf(letter);
      const S = 가나다.at(idx);
      const E = 가나다.at(idx)!.charCodeAt(0) + 587;
      return `([${letter}${S}-${String.fromCharCode(E)}])`;
    }
    if (가나다.includes(letter)) {
      const idx = 가나다.indexOf(letter);
      const S = 가나다.at(idx);
      const E = 가나다.at(idx)!.charCodeAt(0) + 587;
      return `([${S}-${String.fromCharCode(E)}])`;
    }
    return letter;
  });
  const regex = new RegExp(leArr.join(''));
  return data.filter((d) => regex.test(d.name));
};
