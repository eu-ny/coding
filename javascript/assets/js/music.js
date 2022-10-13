const allMusic = [
    {
        name: "BACK ON TOP (feat.Griff)",
        artist: "HONNE",
        img: "game_musicPlayer_img01",
        audio: "music-1"
    },
    {
        name: "Tie Me Down",
        artist: "Gryffin, Elley Duhé",
        img: "game_musicPlayer_img02",
        audio: "music-2"
    },
    {
        name: "Angel Baby",
        artist: "Troye Sivan",
        img: "game_musicPlayer_img03",
        audio: "music-3"
    },
    {
        name: "Smells Like Me",
        artist: "Charlie puth",
        img: "game_musicPlayer_img04",
        audio: "music-4"
    },
    {
        name: "Windflower (Feat.알렉스)",
        artist: "지선",
        img: "game_musicPlayer_img05",
        audio: "music-5"
    },
    {
        name: "놀이",
        artist: "LUCY",
        img: "game_musicPlayer_img06",
        audio: "music-6"
    },
    {
        name: "Answer",
        artist: "숀",
        img: "game_musicPlayer_img07",
        audio: "music-7"
    },
    {
        name: "그라데이션",
        artist: "10cm",
        img: "game_musicPlayer_img08",
        audio: "music8"
    },
    {
        name: "내 기쁨은 너가 벤틀리를 끄는 거야",
        artist: "김승민",
        img: "game_musicPlayer_img09",
        audio: "music-9"
    },
    {
        name: "Tea time (Feat.10cm)",
        artist: "meenoi",
        img: "game_musicPlayer_img10",
        audio: "music-10"
    }
]

// 선택자
const musicWrap = document.querySelector(".music__wrap");
const musicView = musicWrap.querySelector(".music__view .img img");
const musicName = musicWrap.querySelector(".music__view .title h3");
const musicArtist = musicWrap.querySelector(".music__view .title p");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicListBtn = musicWrap.querySelector("#control-list");
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicWrap.querySelector(".music__list ul");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");

// 현재음악
let musicIndex = 1;

//음악재생
function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;
    musicArtist.innerText = allMusic[num-1].artist;
    musicView.src = `../assets/img/${allMusic[num-1].img}.png`;
    musicView.alt = allMusic[num-1].name;
    musicAudio.src = `../assets/audio/${allMusic[num-1].audio}.mp3`;
}

//재생버튼
function playMusic(){
    //속셩변경
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
}

//정지버튼
function pauseMusic(){
    //속성 변경
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
}

//이전 곡 듣기
function prevMusic(){
    //musicIndex --
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex); //매개변수
    playMusic(); //함수 실행
}

//다음 곡 듣기
function nextMusic(){
    //musicIndex ++
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex ++;
    loadMusic(musicIndex); //매개변수
    playMusic();
}

//뮤직 진행바 : currentTime
musicAudio.addEventListener("timeupdate", e => {
    // console.log(e); 요소 정보 보기

    const currentTime = e.target.currentTime;   //오디오의 총 길이
    const duration = e.target.duration; //현재 재생 시간

    let progressWidth = (currentTime/duration) * 100; //전체 길이에서 현재 진행되는 시간을 백분위로 나눠줍니다. 

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);  //전체 시간(초)을 분 단위로 쪼갭니다. (Floor : 나머지 값 버림)
        let totalSec = Math.floor(audioDuration % 60); //남은 초를 저장

        //토탈 초가 10보다 작으면
        if(totalSec < 10) totalSec = `0${totalSec}`; //초가 한 자릿수일 때 앞에 0을 붙인다.
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`; //완성된 시간을 문자열로 출력하기
    });


    //진행시간 (현재 재생 시간)
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;


});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

//진행바 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth; //진행바 전체 길이
    let clickedOffsetX = e.offsetX;  //진행바 기준으로 측정되는 X좌표
    let songDuration = musicAudio.duration; //오디오 전체 길이

    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration; //백분위로 나눈 숫자에 다시 전체길이를 곱해서 현재 재생값으로 바꾼다.
});

//반복 버튼 클릭
musicRepeat.addEventListener("click", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr){
        case "repeat" :
            musicRepeat.setAttribute("class", "repeat_one");
            musicRepeat.setAttribute("title", "한 곡 반복");
        break;

        case "repeat_one" : 
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
        break;

        case "shuffle" :
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
        break;
    }
});

//오디오가 끝날 경우
musicAudio.addEventListener("ended", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr){
        case "repeat" :
            nextMusic();
        break;
        case "repeat_one" :
            playMusic();
        break;
        case "shuffle" :
            //배열의 총 길이에서 랜덤으로 인덱스 값을 추출한다. 0부터 1까지의 수를 10을 곱하여 자연수로 만들어 준다. 그리고 floor로 나머지 값을 버린다. 마지막으로 +1을 하여 배열과 인덱스 값을 맞춰준다. 그러면 1부터 10 까지 값이 나온다.
            let randomIndex = Math.floor(Math.random() * allMusic.length + 1); //랜덤 인덱스 생성

            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex == randomIndex)
            musicIndex = randomIndex; //현재 인덱스를 랜덤 인덱스로 변경
            loadMusic(musicIndex);    //랜덤 인덱스가 반영된 현제 인덱스 값으로 음악을 다시 로드한다.
            playMusic();              //로드한 음악을 재생
        break;
    }
});

//뮤직 리스트 버튼
musicPlay.addEventListener("click", () => {
    musicList.classList.add("show");
});

// 뮤직 리스트 구현하기
for(let i=0; i < allMusic.length; i++){
    let li = `
        <li>
            <strong>${allMusic[i].name}</strong>
            <em>${allMusic[i].artist}</em>
            <span>재생시간</span>
        </li>
    `;

    musicListUl.innerHTML += li;
}

//플레이 버튼
//재생 버튼 클릭했을 때 함수 실행
//pause - 플레이 버튼을 누르면 정지 버튼이 나와야 한다.
musicPlay.addEventListener("click", () => {
    //클래스를 추가시켜 pause가 있는 경우 정지하고 없는 경우 재생시키기
    const isMusicPaused = musicWrap.classList.contains("paused"); //음악 재생 중
    isMusicPaused ? pauseMusic() : playMusic();
});

//이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

//다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});