class Chobo {
      // 생성자: 객체가 생성될 때 속성을 초기화
    constructor(str, dex, agi, int, level, hp) {
        this.str = str;  // 모델명
        this.dex = dex;    // 제조사
        this.agi = agi;  // 색상
        this.int = int;    // 연식
        this.level = level;
        this.hp = hp;
    }

    attack(){
        console.log(`${this.level * 10 + this.str}`)
    }
};

const chobo3 = new Chobo(40, 50, 30, 10, 50, 60)

chobo3.str = 100000;
chobo3.attack()