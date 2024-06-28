```
type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        //주어진단어가 아직 사전에 존재하지 않음
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    get(term:string){
        return this.words[term]
    }
    delete(term:string){
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
    update(term: string, newDef: string){
        if (this.words[term] !== undefined) {
            this.words[term] = newDef;
        }
    }
    showAll() {
        Object.keys(this.words).forEach((term) => {
            console.log(`${term}: ${this.words[term]}`);
        });
    }
    count(): number {
        return Object.keys(this.words).length;
    }
    upsert(word: Word) {
        if (this.words[word.term] !== undefined) {
            // 이미 존재하는 경우 업데이트
            this.words[word.term] = word.def;
        } else {
            // 존재하지 않는 경우 추가
            this.words[word.term] = word.def;
        }
    }
    exists(term: string): boolean {
        return this.words[term] !== undefined;
    }
    bulkAdd(words: { term: string, def: string }[]) {
        words.forEach((word) => {
            this.add(new Word(word.term, word.def));
        });
    }
    bulkDelete(terms: string[]) {
        terms.forEach((term) => {
            if (this.words[term] !== undefined) {
                delete this.words[term];
            }
        });
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()

dict.add(kimchi);

// 단어의 정의를 리턴
dict.get("kimchi");

// 단어를 사전에서 삭제
const apple = new Word("apple", "사과");
dict.delete("apple");

// kimchi 단어의 정의를 업데이트
dict.update("kimchi", "한국의 전통 발효식품");

// 모든 단어 출력
dict.showAll();

// 사전에 있는 단어 총 갯수 출력
const totalCnt = dict.count();
console.log(`사전 단어 총 갯수: ${totalCnt}`);

// 단어 업데이트 또는 추가
const ramen = new Word("ramen", "일본의 면 요리");
dict.upsert(ramen);

// 단어 존재 여부 확인
const kimchiExists = dict.exists("kimchi");
console.log(`'kimchi' 단어가 사전에 존재하는가? ${kimchiExists}`); // true

// 여러 단어 한 번에 추가
const wordsToAdd = [
    { term: "아파트", def: "비싸네~" },
    { term: "라면", def: "맛있네~" }
];
dict.bulkAdd(wordsToAdd);

// 여러 단어 한 번에 삭제
const wordsToDelete = ["아파트", "라면"];
dict.bulkDelete(wordsToDelete);
```