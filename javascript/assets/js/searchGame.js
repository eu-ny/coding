    //cssProperty : 데이터 객체화 시키기
    const cssProperty = [
        { num: 1, category: "etc", name: "accent-color", desc: " 요소의 강조 색상을 지정합니다. " },
        { num: 2, category: "flex", name: "align-content", desc: " 콘텐츠 사이와 콘텐츠 주위 빈 공간을 플렉스 박스의 교차축 또는 그리드의 블록 축을 따라 배치하는 방식을 결정합니다." },
        { num: 3, category: "flex", name: "align-items", desc: " 교차축에서 아이템 정렬 하는 속성입니다. 주로 flex에서 item들을 정렬할 때 사용됩니다." },
        { num: 4, category: "flex", name: "align-self", desc: " 특정 item의 정렬을 따로 하고 싶을 때 사용합니다." },
        { num: 5, category: "etc", name: "all", desc: " CSS 사용자 지정 속성을 제외한 모든 속성을 초기화합니다. 초깃값, 상속값, 아니면 다른 스타일시트 출처의 값로 설정할 수 있습니다." },
        { num: 6, category: "animation", name: "animation", desc: " 애니메이션과 관련된 속성을 일괄적로 처리합니다." },
        { num: 7, category: "animation", name: "animation-delay", desc: " 애니메이션 지연 시간을 설정합니다." },
        { num: 8, category: "animation", name: "animation-direction", desc: " 애니메이션 움직임 방향을 설정합니다." },
        { num: 9, category: "animation", name: "animation-duration", desc: " 애니메이션 움직인 시간을 설정합니다." },
        { num: 10, category: "animation", name: "animation-fill-mode", desc: " 애니메이션이 끝난 후의 상태를 설정합니다." },
        { num: 11, category: "animation", name: "animation-iteration-count", desc: " 애니메이션의 반복 횟수를 설정합니다." },
        { num: 12, category: "animation", name: "animation-name", desc: " 애니메이션 keyframe 이름을 설정합니다." },
        { num: 13, category: "animation", name: "animation-play-state", desc: " 애니메이션 진행상태를 설정합니다." },
        { num: 14, category: "animation", name: "animation-timeline", desc: " 애니메이션의 타임라인을 설정합니다." },
        { num: 15, category: "animation", name: "animation-timing-function", desc: " 애니메이션 움직임의 속도를 설정합니다." },
        { num: 16, category: "etc", name: "appearance", desc: " 운영체제 및 브라우저에 기본적로 설정되어 있는 테마를 기반로 요소를 표현한다." },
        { num: 17, category: "etc", name: "aspect-ratio", desc: " 요소의 크기를 비율대로 조정할 수 있게 한다." },
        { num: 18, category: "etc", name: "backdrop-filter", desc: " 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다." },
        { num: 19, category: "etc", name: "backface-visibility", desc: " 요소의 뒷쪽에서 앞면이 보이게 할지 정하는 속성입니다." },
        { num: 20, category: "background", name: "background", desc: " 백그라운드 속성을 일괄적로 설정합니다. " },
        { num: 21, category: "background", name: "background-attachment", desc: " 배경 이미지의 고정 여부를 설정합니다." },
        { num: 22, category: "background", name: "background-blend-mode", desc: " 배경을 혼합했을 때 그래픽 효과를 설정합니다." },
        { num: 23, category: "background", name: "background-clip", desc: " 백그라운드 이미지의 위치 기준점을 설정합니다." },
        { num: 24, category: "background", name: "background-color", desc: " 백그라운드 색을 설정합니다." },
        { num: 25, category: "background", name: "background-image", desc: " 백그라운드 이미지 속성을 설정합니다." },
        { num: 26, category: "background", name: "background-origin", desc: " 백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
        { num: 27, category: "background", name: "background-position", desc: " 백그라운드 이미지의 위치 영역을 설정합니다." },
        { num: 28, category: "background", name: "background-position-x", desc: " 백그라운드 이미지의 X축위치 영역을 설정합니다." },
        { num: 29, category: "background", name: "background-position-y", desc: " 백그라운드 이미지의 Y축위치 영역을 설정합니다." },
        { num: 30, category: "background", name: "background-repeat", desc: "백그라운드 이미지 반복 여부를 설정합니다." },
        { num: 31, category: "background", name: "background-size", desc: " 백그라운드 이미지 사이즈를 설정합니다." },
        { num: 32, category: "etc", name: "block-size", desc: " 블럭의 크기를 지정합니다." },
        { num: 33, category: "border", name: "border", desc: " 테두리 속성을 일괄적로 설정합니다." },
        { num: 34, category: "border", name: "border-block", desc: " 보더블럭 속성을 지정합니다. " },
        { num: 35, category: "border", name: "border-block-color", desc: " 보더블럭 색상을 지정합니다." },
        { num: 36, category: "border", name: "border-block-end", desc: " 보더블럭 끝부분을 설정합니다." },
        { num: 37, category: "border", name: "border-block-end-color", desc: " 보더블럭 끝부분 색상을 설정합니다." },
        { num: 38, category: "border", name: "border-block-end-style", desc: " 보더블럭 끝부분 스타일을 설정합니다." },
        { num: 39, category: "border", name: "border-block-end-width", desc: " 보더블럭 끝부분 너비를 설정합니다." },
        { num: 40, category: "border", name: "border-block-start", desc: " 보더블럭의 시작부분을 설정합니다." },
        { num: 41, category: "border", name: "border-block-start-color", desc: " 보더블럭 시작부분을 설정합니다." },
        { num: 42, category: "border", name: "border-block-start-style", desc: " 보더블럭 시작부분 스타일을 설정합니다." },
        { num: 43, category: "border", name: "border-block-start-width", desc: " 보더블럭 시작부분 너비값을 설정합니다." },
        { num: 44, category: "border", name: "border-block-style", desc: " 보더블럭 스타일을 설정합니다." },
        { num: 45, category: "border", name: "border-block-width", desc: " 보더블럭의 너비값을 지정합니다." },
        { num: 46, category: "border", name: "border-bottom", desc: " 아래쪽 속성을 일괄적로 설정합니다." },
        { num: 47, category: "border", name: "border-bottom-color", desc: " 테두리 아래쪽 색 속성을 설정합니다." },
        { num: 48, category: "border", name: "border-bottom-left-radius", desc: " 아래 왼쪽 모서리 굴곡을 설정합니다." },
        { num: 49, category: "border", name: "border-bottom-right-radius", desc: " 아래 오른쪽 모서리 굴곡을 설정합니다." },
        { num: 50, category: "border", name: "border-bottom-style", desc: " 테두리 아래쪽 스타일 속성을 설정합니다." },
        { num: 51, category: "border", name: "border-bottom-width", desc: " 테두리 아래쪽 두께 속성을 설정합니다." },
        { num: 52, category: "border", name: "border-collapse", desc: " 테이블 cell 테두리의 겹침 속성을 설정한다." },
        { num: 53, category: "border", name: "border-color", desc: " 테두리의 색상을 지정합니다. " },
        { num: 54, category: "border", name: "border-end-end-radius", desc: " 속성은 요소의에 따라 물리적 경계 반경에 매핑하는 요소에 논리적 경계 반경 정의 writing-mode , direction , 및 text-orientation . 이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다 ." },
        { num: 55, category: "border", name: "border-end-start-radius", desc: " 이 속성은 요소의 블록 끝과 인라인 시작면 사이의 모서리에 영향을줍니다." },
        { num: 56, category: "border", name: "border-image", desc: " 테두리의 이미지를 지정합니다. " },
        { num: 57, category: "border", name: "border-image-outset", desc: " 테두리를 벗어나는 이미지 양을 지정." },
        { num: 58, category: "border", name: "border-image-repeat", desc: " 원본 이미지의 모서리 영역을 요소의 테두리 이미지 크기에 맞춰 조절할 때 사용할 방법을 지정합니다." },
        { num: 59, category: "border", name: "border-image-slice", desc: " border-image-source로 설정한 이미지를 여러 개의 영역로 나눕니다." },
        { num: 60, category: "border", name: "border-image-source", desc: " 요소의 테두리 이미지로 사용할 원본 이미지를 지정합니다." },
        { num: 61, category: "border", name: "border-image-width", desc: " 요소의 테두리 이미지로 사용할 원본 이미지를 지정합니다." },
        { num: 62, category: "border", name: "border-inline", desc: " 스타일 시트에서 하나의 장소에서 각각의 논리적 인라인 border 속성 값을 설정합니다." },
        { num: 63, category: "border", name: "border-inline-color", desc: " 논리적 인라인 테두리의 색상을 정의합니다." },
        { num: 64, category: "border", name: "border-inline-end", desc: " 요소의 논리적 인라인 엔드 테두리 폭을 정의합니다." },
        { num: 65, category: "border", name: "border-inline-end-color", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 색상에 매핑하는 요소의 논리적 인라인 엔드 테두리 색상을 정의합니다." },
        { num: 66, category: "border", name: "border-inline-end-style", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 스타일에 매핑하는 요소의 논리적 인라인 끝 테두리 스타일을 정의합니다." },
        { num: 67, category: "border", name: "border-inline-end-width", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는 요소의 논리적 인라인 엔드 테두리 폭을 정의합니다." },
        { num: 68, category: "border", name: "border-inline-start", desc: " 스타일 시트에서 하나의 장소에서 각각의 논리적 인라인 시작 border 속성 값을 설정합니다." },
        { num: 69, category: "border", name: "border-inline-start-color", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 색상에 매핑하는 요소의 논리적 인라인 시작 테두리 색상을 정의합니다." },
        { num: 70, category: "border", name: "border-inline-start-style", desc: " 속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 스타일에 매핑하는 요소의 논리적 인라인 시작 테두리 스타일을 정의합니다." },
        { num: 71, category: "border", name: "border-inline-start-width", desc: " 속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는 요소의 논리적 인라인 시작 테두리 폭을 정의합니다." },
        { num: 72, category: "border", name: "border", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 테두리 스타일에 매핑하는 요소의 논리적 인라인 테두리의 스타일을 정의합니다." },
        { num: 73, category: "border", name: "border-inline-width", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 폭 물리적 경계에 매핑하는 요소의 논리적 인라인 테두리의 폭을 정의합니다." },
        { num: 74, category: "border", name: "border-left", desc: " 왼쪽 테두리를 설정합니다." },
        { num: 75, category: "border", name: "border-left-color", desc: " 박스의 왼쪽 테두리 색상을 지정합니다." },
        { num: 76, category: "border", name: "border-left-style", desc: " 박스의 왼쪽 테두리 영역의 스타일을 지정합니다." },
        { num: 77, category: "border", name: "border-left-width", desc: " 박스의 왼쪽 테두리 영역의 너비를 지정합니다." },
        { num: 78, category: "border", name: "border-radius", desc: " 테두리를 둥글게 만들 수 있는 속성입니다." },
        { num: 79, category: "border", name: "border-right", desc: " 오른쪽 테두리를 설정합니다. " },
        { num: 80, category: "border", name: "border-right-color", desc: " 박스의 오른쪽 테두리 색상을 지정합니다." },
        { num: 81, category: "border", name: "border-right-style", desc: " 박스의 오른쪽 테두리 영역의 스타일을 지정합니다." },
        { num: 82, category: "border", name: "border-right-width", desc: " 박스의 오른쪽 테두리 영역의 너비를 지정합니다." },
        { num: 83, category: "border", name: "border-spacing", desc: " 테이블 cell과 테두리와의 간격을 지정한다." },
        { num: 84, category: "border", name: "border-start-end-radius", desc: " 이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다 ." },
        { num: 85, category: "border", name: "border-start-start-radius", desc: " 이것은 텍스트 방향 및 쓰기 모드에 관계없이 작업 할 스타일을 작성할 때 유용 합니다 ." },
        { num: 86, category: "border", name: "border-style", desc: " 박스의 테두리 영역의 스타일을 지정합니다." },
        { num: 87, category: "border", name: "border-top", desc: " 위쪽 테두리를 설정합니다." },
        { num: 88, category: "border", name: "border-top-color ", desc: " 박스의 상단 테두리 색상을 지정합니다." },
        { num: 89, category: "border", name: "border-top-left-radius", desc: " 라운드 코너의 곡률을 규정하는 타원의 반경 (또는 세미 메이저 및 세미 마이너 축의 반경)을 지정하여 소자의 왼쪽 상단." },
        { num: 90, category: "border", name: "border-top-right-radius", desc: " 속성 라운드 코너의 곡률을 규정하는 타원의 반경 (또는 세미 메이저 및 세미 마이너 축의 반경)을 지정하여 소자의 오른쪽 상단." },
        { num: 91, category: "border", name: "border-top-style", desc: " 박스의 상단 테두리 영역의 스타일을 지정합니다." },
        { num: 92, category: "border", name: "border-top-width", desc: " 박스의 상단 테두리 영역의 너비를 지정합니다." },
        { num: 93, category: "border", name: "border-width", desc: " 박스의 테두리 영역의 너비를 지정합니다." },
        { num: 94, category: "etc", name: "bottom", desc: " 블럭의 높이를 참조합니다. 요소가 밑에서부터 어디쯤 배치 될 지 결정합니다." },
        { num: 95, category: "etc", name: "box-decoration-break", desc: " 요소의 방법 속성을 지정 조각이 여러 행, 열 또는 페이지에 걸쳐 깨진 경우 렌더링해야합니다." },
        { num: 96, category: "etc", name: "box-shadow", desc: " 요소의 프레임 주위에 그림자 효과를 추가합니다." },
        { num: 97, category: "etc", name: "box-sizing", desc: " 박스의 크기를 어떤 것을 기준로 계산할지를 정하는 속성입니다." },
        { num: 98, category: "etc", name: "break-after", desc: " 속성 설정 페이지, 열, 또는 지역 구분은 생성 된 박스 후 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다." },
        { num: 99, category: "etc", name: "break-before", desc: " 세트 페이지, 열, 또는 지역 구분은 생성 된 박스 전에 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다." },
        { num: 100, category: "etc", name: "break-inside", desc: " 속성 설정 페이지, 열, 또는 지역 나누기 생성 된 상자 안에 행동해야하는 방법. 생성 된 상자가 없으면 속성이 무시됩니다." },
        { num: 101, category: "etc", name: "caption-side", desc: " 표(table)의 캡션의 위치를 정하는 속성" },
        { num: 102, category: "etc", name: "caret-color", desc: " 색상 설정 삽입 캐럿 , 다음 문자 입력 된 삽입 될 볼 마커를. 이를 텍스트 입력 커서 라고도합니다 ." },
        { num: 103, category: "etc", name: "clear", desc: " float 속성을 해제한다." },
        { num: 104, category: "clip", name: "clip", desc: " 요소의 보이는 부분을 정의합니다." },
        { num: 105, category: "clip", name: "clip-path", desc: " 요소의 어떤 부분 집합을 표시 할 것인지 클리핑 영역을 생성한다." },
        { num: 106, category: "etc", name: "color", desc: " 텍스트 내용의 글자 색상을 지정합니다." },
        { num: 107, category: "etc", name: "color-scheme", desc: " 요소가 편안하게 렌더링 할 수있는 색 구성표 표시 할 수 있습니다." },
        { num: 108, category: "grid", name: "column-count", desc: " 해당 요소를 몇 개의 칼럼(column)로 나눌지를 설정합니다." },
        { num: 109, category: "grid", name: "column-fill", desc: " 컬럼로 쪼갤 때, 얼마나 요소들이 균형이 맞는지 컨트롤 합니다." },
        { num: 110, category: "grid", name: "column-gap (grid-column-gap)", desc: " 그리드 레이아웃에서 컬럼 간의 간격을 정의합니다." },
        { num: 111, category: "grid", name: "column-rule", desc: " 다중 열 레이아웃의 열 사이에 그려진 라인의 폭, 스타일, 색상을 설정한다." },
        { num: 112, category: "grid", name: "column-rule-color", desc: " 다중 열 레이아웃의 열 사이에 그려진 라인의 색을 설정한다." },
        { num: 113, category: "grid", name: "column-rule-style", desc: " 다중 열 레이아웃에서 열 사이에 그려진 라인의 스타일을 설정합니다." },
        { num: 114, category: "grid", name: "column-rule-width", desc: " 다중 열 레이아웃의 열 사이에 그려진 라인의 폭을 설정한다." },
        { num: 115, category: "grid", name: "column-span", desc: " 컬럼 span을 설정합니다." },
        { num: 116, category: "grid", name: "column-width", desc: " 다중 열 레이아웃에서 이상적인 컬럼 폭을 설정한다." },
        { num: 117, category: "etc", name: "columns", desc: " 다단을 정의 - 단축 속성" },
        { num: 118, category: "etc", name: "contain", desc: " 특정 요소와 콘텐츠가 문서 트리의 다른 부위와 독립되어있음을 나타낼 때 사용합니다." },
        { num: 119, category: "etc", name: "content", desc: " 엘리먼트의 앞(:before)이나 뒤(:after)에 내용을 생성합니다." },
        { num: 120, category: "etc", name: "content-visibility", desc: " 페이지로드 성능을 개선하는 데 가장 영향력있는 속성" },
        { num: 121, category: "etc", name: "counter-increment", desc: " counter-reset로 설정한 값을 증가시키는 역할" },
        { num: 122, category: "etc", name: "counter-reset", desc: " 카운터를 사용하려면, counter-reset로 먼저 카운터 이름과 시작값을 설정 해야 합니다" },
        { num: 123, category: "etc", name: "counter-set", desc: " CSS 카운터 를 주어진 값로 설정합니다." },
        { num: 124, category: "etc", name: "cursor", desc: " 마우스 커서의 모양을 지정한다." },
        { num: 125, category: "etc", name: "direction", desc: " 텍스트의 표기 방향을 지정한다." },
        { num: 126, category: "etc", name: "display", desc: " 엘리먼트의 디스플레이 속성을 지정한다." },
        { num: 127, category: "etc", name: "empty-cells", desc: " 테두리와 배경이 주위에 표시할지 여부 " },
        { num: 128, category: "etc", name: "filter", desc: " 요소 흐림 또는 색상 변화와 같은 그래픽 효과를 적용한다." },
        { num: 129, category: "flex", name: "flex", desc: " 요소들을 자유자제로 위치 시키는 속성로, 레이아웃을 쉽게 잡을 수 있다." },
        { num: 130, category: "flex", name: "flex-basis", desc: " 플렉스 항목의 초기 기본 크기를 설정합니다." },
        { num: 131, category: "flex", name: "flex-direction", desc: " CSS3에 추가된 속성로 flexible item이 flex 컨테이너 안에 위치되는 방법을 지정한다." },
        { num: 132, category: "flex", name: "flex-flow", desc: " 플렉스 컨테이너의 방향,뿐만 아니라 포장 동작을 지정한다." },
        { num: 133, category: "flex", name: "flex-grow", desc: " flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 선언합니다." },
        { num: 134, category: "flex", name: "flex-shrink", desc: " 공간을 넘어갈 경우에 각 아이템들을 줄이는 방법을 설정하는 방법입니다." },
        { num: 135, category: "flex", name: "flex-wrap", desc: " flexible item을 wrap 할것인지 아닌지를 지정한다." },
        { num: 136, category: "etc", name: "float", desc: " 용기박스를 왼쪽 또는 오른쪽로 이동하거나 이동하지 않음을 지정한다." },
        { num: 137, category: "font", name: "font", desc: " 엘리먼트안의 텍스트 컨텐츠의 font-style, font-variant, font-weight, font-size, line-height, font-family를 설정하는 약식속성이다." },
        { num: 138, category: "font", name: "font-family", desc: " 특정 글꼴이나 대표 글꼴을 지정한다. " },
        { num: 139, category: "font", name: "font-feature-settings", desc: " 오픈타입 폰트의 다양한 오픈타입 피처를 설정합니다." },
        { num: 140, category: "font", name: "border", desc: " 저장된 폰트 자간 정보의 사용을 설정한다. " },
        { num: 141, category: "font", name: "font-language-override", desc: " 서체에서 특정 언어의 상형 문자의 사용을 제어합니다." },
        { num: 142, category: "font", name: "font-optical-sizing", desc: " 서로 다른 크기로 볼 수 있도록 최적화되어 있는지 설정합니다." },
        { num: 143, category: "font", name: "font-size", desc: " 글꼴의 크기를 지정한다." },
        { num: 144, category: "font", name: "font-size-adjust", desc: " (대문자의 크기를 정의하는) 현재의 폰트 크기에 대한 소문자의 크기를 설정한다." },
        { num: 145, category: "font", name: "font-stretch", desc: " 글꼴 에서 노멀, 압축 또는 확장면을 선택합니다." },
        { num: 146, category: "font", name: "font-style", desc: "font-family에서 지정된 폰트의 스타일을 지정합니다." },
        { num: 147, category: "font", name: "font-synthesis", desc: " 브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다." },
        { num: 148, category: "font", name: "font-variant", desc: " 소문자를 작은 대문자, 즉 소문자 크기의 대문자로 바꾸는 속성입니다." },
        { num: 149, category: "font", name: "font-variant-alternates", desc: " 대체 글리프의 사용을 제어합니다." },
        { num: 150, category: "font", name: "font-variant-caps", desc: " 대문자를위한 대체 글리프의 사용을 제어합니다." },
        { num: 151, category: "font", name: "font-variant-east-asian", desc: " 일본과 중국 등 동아시아 스크립트를 대체 글리프의 사용." },
        { num: 152, category: "font", name: "font-variant-ligatures", desc: " ligatures 글꼴의 글자들을 서로 더 조화롭게 보이도록 하는 기능을 지정합니다." },
        { num: 153, category: "font", name: "font-variant-numeric", desc: " 숫자, 분수 및 서수 마커 대체 글리프의 사용을 제어합니다." },
        { num: 154, category: "font", name: "font-variant-position", desc: " 글꼴에 내장된 윗 첨자 또는 아랫첨자를 사용하도록 지정합니다." },
        { num: 155, category: "font", name: "font-variation-settings", desc: " Variable fonts(가변 폰트) 의 폰트 스타일을 제어하는 CSS 속성입니다." },
        { num: 156, category: "font", name: "font-weight", desc: " 글꼴의 굵기를 지정한다." },
        { num: 157, category: "etc", name: "forced-color-adjust", desc: " 강제 색상 모드 중 선택 하여 특정 요소에 대한 저장을 할 수 있습니다." },
        { num: 158, category: "grid", name: "gap (grid-gap)", desc: " row-gap 및 column-gap 의 약어 입니다. (갭제어)" },
        { num: 159, category: "grid", name: "grid", desc: " 2차원 표형태의 레이아웃을 만들 수 있는 속성입니다." },
        { num: 160, category: "grid", name: "grid-area", desc: " grid-templete-areas에 지정한 영역을 정의해준다." },
        { num: 161, category: "grid", name: "grid-auto-columns", desc: " 암시 적로 생성 된 그리드 컬럼의 크기를 지정 트랙 이나 트랙의 패턴을 지정합니다." },
        { num: 162, category: "grid", name: "grid-auto-flow", desc: " 자동 배치 알고리즘이 자동 배치 항목을 그리드로 유입 얻을 방법을 정확하게 지정 작동 방식 CSS 속성을 제어합니다." },
        { num: 163, category: "grid", name: "grid-auto-rows", desc: " 암시 적로 생성 된 그리드 행의 크기를 지정 트랙 이나 트랙의 패턴을 지정합니다." },
        { num: 164, category: "grid", name: "grid-column", desc: " 격자 아이템의 크기 및 위치 지정 합니다." },
        { num: 165, category: "grid", name: "grid-column-end", desc: " 그리드 열 내에서 그리드 항목의 끝 위치를 지정합니다." },
        { num: 166, category: "grid", name: "grid-column-start", desc: " 그리드 열 내에서 그리드 항목의 시작 위치를 지정합니다." },
        { num: 167, category: "grid", name: "grid-row", desc: " 그리드의 인라인 시작 및 인라인 끝 가장자리를 지정합니다." },
        { num: 168, category: "grid", name: "grid-row-end", desc: " 그리드 영역 의 인라인 끝 가장자리를 지정합니다." },
        { num: 169, category: "grid", name: "grid-row-start", desc: " 그리드 영역 의 인라인 시작 가장자리를 지정합니다." },
        { num: 170, category: "grid", name: "grid-template", desc: " 그리드의 열, 행 및 지역을 정의하기위한 약식속성입니다." },
        { num: 171, category: "grid", name: "grid-template-areas", desc: " 레이아웃이 어떤 형태로 구성되는지 설계도의 역할을 한다." },
        { num: 172, category: "grid", name: "grid-template-columns", desc: " 열 넓이를 지정한다." },
        { num: 173, category: "grid", name: "grid-template-rows", desc: " 행 높이를 지정한다." },
        { num: 174, category: "etc", name: "hanging-punctuation", desc: " 구두점이 시작 정지 또는 텍스트 행의 종료 여부를 속성 지정합니다." },
        { num: 175, category: "etc", name: "height", desc: " 블럭레벨 요소의 높이를 지정한다." },
        { num: 176, category: "etc", name: "hyphenate-character", desc: " 하이픈 나누기 전 줄 끝에서 사용되는 문자(또는 문자열)를 설정합니다." },
        { num: 177, category: "etc", name: "hyphens", desc: " 단어를 여러 줄에 걸쳐 때 텍스트 랩을 하이픈되어야하는 속성을 지정합니다." },
        { num: 178, category: "image", name: "image-orientation", desc: " 이미지 방향에 대한 레이아웃 독립적 수정을 지정합니다." },
        { num: 179, category: "image", name: "image-rendering", desc: " 이미지 스케일링 알고리즘을 설정한다." },
        { num: 180, category: "image", name: "image-resolution", desc: " 해상도를 설정합니다. " },
        { num: 181, category: "etc", name: "ime-mode", desc: " IME(Input Method Editor)의 상태를 반환하거나 설정합니다." },
        { num: 182, category: "etc", name: "initial-letter", desc: " 세트, 떨어 제기하고, 침몰 초기 문자에 대한 스타일링." },
        { num: 183, category: "etc", name: "initial-letter-align", desc: " 단락 내에서 초기 문자의 정렬을 지정합니다." },
        { num: 184, category: "etc", name: "inline-size", desc: " 요소의 블록의 수평과 수직 크기를 정의한다." },
        { num: 185, category: "inset", name: "inset", desc: " element와 테두리 사이의 element 내부에 있는 공간을 의미합니다." },
        { num: 186, category: "inset", name: "inset-block", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 실제 오프셋에 매핑하는 요소의 논리 블록의 시작과 끝 오프셋을 정의합니다." },
        { num: 187, category: "inset", name: "inset-block-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 인 세트에 매핑하는 요소의 오프셋 (offset) 논리 블록의 끝을 정의합니다." },
        { num: 188, category: "inset", name: "inset-block-start", desc: " 논리적 블록 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 인 세트에 매핑하는 요소의 오프셋 시작을 정의합니다." },
        { num: 189, category: "inset", name: "inset-inline", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 실제 오프셋에 매핑 인라인 방향로 요소의 논리적 시작과 끝 오프셋을 정의합니다." },
        { num: 190, category: "inset", name: "inset-inline-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 오프셋에 매핑하는 요소의 논리적 인라인 최종 삽입을 정의합니다." },
        { num: 191, category: "inset", name: "inset-inline-start", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 오프셋에 매핑하는 요소의 논리적 인라인 시작 인 세트를 정의합니다." },
        { num: 192, category: "etc", name: "isolation", desc: " 요소가 새로운 생성해야하는지 여부를 결정합니다. " },
        { num: 193, category: "flex", name: "justify-content", desc: " 가로축 - 중심축을 기준로 아이템들을 정렬한다. 주로 flex랑 사용된다." },
        { num: 194, category: "flex", name: "justify-items", desc: " 수직축을 중심로 좌우로 위치를 조정하는 속성입니다. Flexbox와 같은 개념입니다." },
        { num: 195, category: "flex", name: "justify-self", desc: " 상자가 적절한 축 방향의 정렬 컨테이너 내부 정당화되는 방법을 설정합니다." },
        { num: 196, category: "etc", name: "left", desc: " 용기블럭의 너비를 참조합니다. 요소가 왼쪽에서 어느 위치에 배치 될 지 결정합니다." },
        { num: 197, category: "etc", name: "letter-spacing", desc: " 텍스트 문자 사이의 수평 간격 동작을 설정합니다." },
        { num: 198, category: "etc", name: "line-break", desc: " 줄 바꿈 규칙을 어떻게 할지 결정합니다. " },
        { num: 199, category: "etc", name: "line-height", desc: " 인라인 박스의 높이를 지정한다. " },
        { num: 200, category: "etc", name: "line-height-step", desc: " 라인 박스의 높이에 대한 공정 유닛을 설정한다." },
        { num: 201, category: "etc", name: "list-style", desc: " 목록 항목의 속성들(list-style-type, list-style-position, list-style-image)을 한꺼번에 지정하는 약식속성입니다." },
        { num: 202, category: "etc", name: "list-style-image", desc: " 목록 항목 마커로 사용되는 이미지를 설정합니다." },
        { num: 203, category: "etc", name: "list-style-position", desc: " 속성의 위치 설정 합니다." },
        { num: 204, category: "etc", name: "list-style-type", desc: " 목록 항목 요소 (예 : 디스크, 문자, 또는 사용자 정의 카운터 스타일 등) 마커를 설정합니다" },
        { num: 205, category: "margin", name: "margin", desc: " 엘리먼트와 엘리먼트 사이의 간격을 지정" },
        { num: 206, category: "margin", name: "margin-block", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리 블록의 시작과 끝 여백을 정의합니다." },
        { num: 207, category: "margin", name: "margin-block-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 블록 끝 마진을 정의합니다." },
        { num: 208, category: "margin", name: "margin-block-start", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리 블록 시작 마진을 정의합니다." },
        { num: 209, category: "margin", name: "margin-bottom", desc: " 요소 밑에 쪽 마진을 설정합니다. " },
        { num: 210, category: "margin", name: "margin-inline", desc: " 약식 속성입니다 정의하는 두 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 시작과 끝 여백." },
        { num: 211, category: "margin", name: "margin-inline-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 끝 마진을 정의합니다." },
        { num: 212, category: "margin", name: "margin-inline-start", desc: " 속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 한계에 매핑하는 요소의 논리적 인라인 시작 마진을 정의합니다." },
        { num: 213, category: "margin", name: "margin-left", desc: " 소 왼쪽의 여백 영역을 설정 합니다. " },
        { num: 214, category: "margin", name: "margin-right", desc: " 엘리먼트의 오른쪽 마진을 지정한다. " },
        { num: 215, category: "margin", name: "margin-top", desc: " 엘리먼트의 상단 마진을 지정한다." },
        { num: 216, category: "margin", name: "margin-trim", desc: " 컨테이너가 컨테이너의 가장자리에 인접한 자식의 여백을 트리밍할 수 있습니다 ." },
        { num: 217, category: "mask", name: "mask", desc: " 아이템이 부분적로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수 있는 기능을 가지고 있습니다." },
        { num: 218, category: "mask", name: "mask-border", desc: " 요소의 경계의 가장자리를 따라 마스크를 만들 수 있습니다." },
        { num: 219, category: "mask", name: "mask-border-mode", desc: " 블렌딩 모드를 지정하는 마스크의 테두리" },
        { num: 220, category: "mask", name: "mask-border-outset", desc: " 요소의있는 거리 지정 마스크 보더 의 경계 상자에서 밖로 설정됩니다." },
        { num: 221, category: "mask", name: "mask-border-repeat", desc: " 속성 세트 에지 영역 , 소스 이미지가 요소의의 크기에 맞게 조정되는 마스크 테두리." },
        { num: 222, category: "mask", name: "mask-border-slice", desc: " 요소 마스크 테두리 의 구성 요소를 형성하는 데 사용됩니다 ." },
        { num: 223, category: "mask", name: "mask-border-source", desc: " 동적 최종 마스크 테두리에 적용되는 영역로 소스 이미지를 분할하는데 사용된다." },
        { num: 224, category: "mask", name: "mask-border-width", desc: " 속성은 엘레멘트의 너비 설정 마스크 경계를 설정합니다." },
        { num: 225, category: "mask", name: "mask-clip", desc: " 마스크에 의해 영향을받는 영역을 결정한다. " },
        { num: 226, category: "mask", name: "mask-composite", desc: " 그 다음 마스크 층과 현재의 마스크 층에 사용되는 합성 동작을 나타낸다." },
        { num: 227, category: "mask", name: "mask-image", desc: " 마스크 층로서 사용되는 화상을 설정한다. " },
        { num: 228, category: "mask", name: "mask-mode", desc: " 정의 된 마스크 참조 여부 속성 세트" },
        { num: 229, category: "mask", name: "mask-origin", desc: " 마스크의 원점을 설정합니다." },
        { num: 230, category: "mask", name: "mask-position", desc: " 마스크의 위치를 설정합니다. " },
        { num: 231, category: "mask", name: "mask-repeat", desc: " 마스크 이미지를 반복하는 방법을 속성 집합을 설정합니다." },
        { num: 232, category: "mask", name: "mask-size", desc: " 마스크 이미지의 크기를 지정합니다." },
        { num: 233, category: "mask", name: "mask-type", desc: " 마스크 타입을 설정합니다." },
        { num: 234, category: "etc", name: "max-block-size", desc: " 기입 방향로 규정되는 방향의 반대측에있는 요소들의 최대 크기를 지정하는 writing-mode . 즉, 쓰기 방향이 수평이면 max-block-size 는 max-height 와 같습니다 . " },
        { num: 235, category: "etc", name: "max-height", desc: " 엘리먼트의 최대 높이를 지정한다." },
        { num: 236, category: "etc", name: "max-inline-size", desc: " 기록 모드에 따라서, 요소의 블록의 수평 또는 수직의 최대 크기를 정의한다." },
        { num: 237, category: "etc", name: "max-width", desc: " 엘리먼트의 최대 넒이를 지정한다." },
        { num: 238, category: "etc", name: "min-block-size", desc: " 기록 모드에 따라서, 요소의 블록의 최소 수평 또는 수직 크기를 정의한다." },
        { num: 239, category: "etc", name: "min-height", desc: " 엘리먼트의 내용영역 높이의 최소값을 지정한다. 음수값은 지정할 수 없다." },
        { num: 240, category: "etc", name: "min-inline-size", desc: " 기록 모드에 따라서, 요소의 블록의 수평 또는 수직의 최소 크기를 정의한다." },
        { num: 241, category: "etc", name: "min-width", desc: " 엘리먼트의 최소 넓이를 지정한다." },
        { num: 242, category: "etc", name: "mix-blend-mode", desc: " 요소의 내용은 요소의 부모의 내용과 요소의 배경로 혼합하는 방법." },
        { num: 243, category: "etc", name: "object-fit", desc: " img 나 video 요소와 같은 대체 요소의 콘텐츠 크기를 어떤 방식로 조절해 요소에 맞출 것인지 지정합니다." },
        { num: 244, category: "etc", name: "object-position", desc: " 대체 요소의 콘텐츠 정렬 방식을 지정합니다." },
        { num: 245, category: "offset", name: "offset", desc: " 정의 된 경로를 따라 애니메이션화 된 요소에 필요한 모든 속성을 설정한다." },
        { num: 246, category: "offset", name: "offset-anchor", desc: " 실제로 경로를 따라 움직이는 offset-path 를 따라 이동하는 요소의 상자 내부 지점을 지정합니다 ." },
        { num: 247, category: "offset", name: "offset-distance", desc: " CSS 속성 지정은 함께 위치 offset-path 요소의 위치가된다." },
        { num: 248, category: "offset", name: "offset-path", desc: " 수행 할 요소의 이동 경로를 지정하고, 부모 컨테이너 내의 요소의 위치를 정의 또는 SVG 좌표계." },
        { num: 249, category: "offset", name: "offset-position", desc: " 오프셋의 위치값을 설정합니다." },
        { num: 250, category: "offset", name: "offset-rotate", desc: " 소자의 배향 / 정의 방향 offset-path ." },
        { num: 251, category: "etc", name: "opacity", desc: " 요소의 투명도를 결정합니다." },
        { num: 252, category: "etc", name: "order", desc: " 플렉스 또는 그리드 컨테이너에서 항목을 배치하는 순서를 설정합니다." },
        { num: 253, category: "etc", name: "orphans", desc: " 표시해야하는 블록 컨테이너 선의 최소 설정 저면 (A)의 페이지 , 영역 또는 컬럼 ." },
        { num: 254, category: "etc", name: "outline", desc: " 단일 선언에서 대부분의 개요 속성을 설정합니다 . " },
        { num: 255, category: "etc", name: "outline-color", desc: " 요소의 외곽선의 색상을 설정합니다." },
        { num: 256, category: "etc", name: "outline-offset", desc: " 간 공간 설정 윤곽 요소의 가장자리 또는 경계." },
        { num: 257, category: "etc", name: "outline-style", desc: " 요소의 윤곽의 스타일을 설정합니다. 윤곽선은 border 외부의 요소 주위에 그려지는 선입니다 ." },
        { num: 258, category: "etc", name: "outline-width", desc: " 엘레멘트의 윤곽의 두께를 설정합니다." },
        { num: 259, category: "overflow", name: "overflow", desc: " 내용이 박스보다 큰 경우 밖로 넘친 부분을 어떻게 표시할지를 지정한다." },
        { num: 260, category: "overflow", name: "overflow-anchor", desc: " 조정 스크롤 위치가 내용의 변화를 최소화하기 위해 브라우저의 스크롤 고정 행동을 거부 할 수있는 방법을 제공합니다." },
        { num: 261, category: "overflow", name: "overflow-block", desc: " 상자의 블록 시작과 블록 끝 가장자리를 오버 플로우 어떤 쇼 속성 집합. 이것은 아무것도, 스크롤 막대 또는 오버플로 내용 일 수 있습니다." },
        { num: 262, category: "overflow", name: "overflow-clip-margin", desc: " 얼마나 외부의 경계를 가지는 요소를 결정" },
        { num: 263, category: "overflow", name: "overflow-inline", desc: " 내용이 상자의 인라인 시작과 끝 가장자리를 오버 플로우 어떤 쇼 속성 집합." },
        { num: 264, category: "overflow", name: "overflow-wrap", desc: " 라우저가 줄 상자를 넘쳐에서 텍스트를 방지하기 위해 다른 깨지지 않는 문자열 내에서 줄 바꿈을 삽입할지 여부를 설정, 인라인 요소에 적용됩니다." },
        { num: 265, category: "overflow", name: "overflow-x", desc: " 블록 레벨 요소의 왼쪽과 오른쪽 가장자리를 오버 플로우 어떤 쇼 속성 집합." },
        { num: 266, category: "overflow", name: "overflow-y", desc: " 블록 레벨 엘리먼트의 상부 및 하부 가장자리를 넘쳐 어떤 방송 속성 세트. 이것은 아무것도 아니거나 스크롤 막대 또는 오버플로 내용 일 수 있습니다." },
        { num: 267, category: "scroll", name: "overscroll-behavior", desc: " 스크롤 영역의 경계에 도달 할 때 브라우저가 무엇 CSS 속성을 설정합니다." },
        { num: 268, category: "scroll", name: "overscroll-behavior-block", desc: " 스크롤 영역의 블록 방향 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다." },
        { num: 269, category: "scroll", name: "overscroll-behavior-inline", desc: " 스크롤 영역의 인라인 방향의 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다." },
        { num: 270, category: "scroll", name: "overscroll-behavior-x", desc: " 스크롤 영역의 수평 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다." },
        { num: 271, category: "scroll", name: "overscroll-behavior-y", desc: " 스크롤 영역의 수직 경계에 도달하면 CSS 속성은 브라우저의 동작을 설정합니다." },
        { num: 272, category: "padding", name: "padding", desc: " 엘리먼트의 상, 하, 좌, 우 여백을 한꺼번에 지정합니다." },
        { num: 273, category: "padding", name: "padding-block-end", desc: " 속성은 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 블록 끝 패딩을 정의합니다." },
        { num: 274, category: "padding", name: "padding-block-start", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리 블록 시작 패딩을 정의합니다." },
        { num: 275, category: "padding", name: "padding-bottom", desc: " 요소 내부의 아래쪽 여백을 설정합니다." },
        { num: 276, category: "padding", name: "padding-inline-end", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 인라인 최종 패딩을 정의합니다." },
        { num: 277, category: "padding", name: "padding-inline-start", desc: " 요소의 쓰기 모드, 방향성, 텍스트 방향에 따라 물리적 패딩에 매핑하는 요소의 논리적 인라인 시작 패딩을 정의합니다." },
        { num: 278, category: "padding", name: "padding-left", desc: " 엘리먼트의 왼쪽 여백을 지정한다. " },
        { num: 279, category: "padding", name: "padding-right", desc: " 엘리먼트의 오른쪽 여백을 지정한다." },
        { num: 280, category: "padding", name: "padding-top", desc: " 요소의 위쪽 패딩을 결정합니다." },
        { num: 281, category: "etc", name: "page-break-after", desc: " 페이지 나누기 후 현재 요소." },
        { num: 282, category: "etc", name: "page-break-before", desc: " 이 속성은 break-before 속성 로 대체되었습니다 ." },
        { num: 283, category: "etc", name: "page-break-inside", desc: " 이 속성은 break-inside 속성로 대체되었습니다 ." },
        { num: 284, category: "etc", name: "perspective", desc: " 3 차원 위치 요소 일부 관점을 제공하기 위해, Z = 0 인 평면과 사용자 사이의 거리를 결정한다." },
        { num: 285, category: "etc", name: "perspective-origin", desc: " 변형되는 요소에 배치되는 perspective() 변형 함수 와 달리 3차원 공간에서 변형된 자식의 부모에 첨부됩니다 ." },
        { num: 286, category: "etc", name: "place-content", desc: " CSS의 단축형 속성 (즉, 한 번에 블록 및 인라인 두 방향을 따라 정렬 내용을 수행 할 수 있습니다 align-content 및 justify-content 등 관련 레이아웃 시스템의 특성) 그리드 또는 인 flexbox ." },
        { num: 287, category: "etc", name: "place-items", desc: " 약식 속성은 한 번에 블록 및 인라인 두 방향을 따라 정렬 항목을 수행 할 수 있습니다 (즉, align-items 및 justify-items 속성)과 같은 관련 레이아웃 시스템에 그리드 또는 인 flexbox . 두 번째 값이 설정되지 않은 경우 첫 번째 값도 사용됩니다." },
        { num: 288, category: "etc", name: "place-self", desc: " 단축형 속성은 당신이 (즉, 한 번에 블록과 인라인 방향 모두에서 개별 항목을 정렬 할 수 있습니다" },
        { num: 289, category: "etc", name: "pointer-events", desc: " 어떤 상황 (있는 경우)에 따라 속성 집합은 특정 그래픽 요소가 될 수있는 대상 포인터 이벤트." },
        { num: 290, category: "etc", name: "position", desc: " 엘리먼트의 배치방법을 지정한다." },
        { num: 291, category: "etc", name: "print-color-adjust", desc: " 출력 장치에서 요소의 모양을 최적화하기 위해 사용자 에이전트 가 수행할 수 있는 작업을 설정합니다." },
        { num: 292, category: "etc", name: "quotes", desc: " 브라우저가 사용하는 추가 인용 부호를 렌더링하는 방법을 속성 집합을 설정합니다." },
        { num: 293, category: "etc", name: "resize", desc: " 요소 의 크기를 조정할 수 있는지 여부와 방향을 결정합니다." },
        { num: 294, category: "etc", name: "right", desc: " 용기블럭의 너비를 참조합니다. 요소가 오른쪽에서 어디에 배치 될 지 결정합니다." },
        { num: 295, category: "etc", name: "rotate", desc: " 각각 독립적로의 회전 변환을 지정할 수 있습니다 " },
        { num: 296, category: "grid", name: "row-gap (grid-row-gap)", desc: " 요소의 행 사이 의 간격( gutter ) 크기를 설정합니다." },
        { num: 297, category: "etc", name: "ruby-align", desc: " 기재 위에 다른 루비 원소의 분포를 정의한다." },
        { num: 298, category: "etc", name: "ruby-position", desc: " 기본 요소에 루비 요소 친척의 위치를 정의합니다. 요소 위( over ), 요소 아래( under ) 또는 오른쪽에 있는 문자 사이( inter-character )에 위치할 수 있습니다" },
        { num: 299, category: "etc", name: "scale", desc: " 개별적로 독립적 규모의 변환을 지정할 수 있습니다." },
        { num: 300, category: "scroll", name: "scroll-behavior", desc: " 탐색 또는 CSSOM 스크롤 API에서 트리거 스크롤 할 때 속성은 스크롤 상자의 동작을 설정합니다." },
        { num: 301, category: "scroll", name: "scroll-margin", desc: " 훨씬처럼 값을 지정, 한 번에 요소의 스크롤 여백의 모든 설정합니다." },
        { num: 302, category: "scroll", name: "scroll-margin-block", desc: " 블록 차원의 요소의 스크롤 마진을 설정한다." },
        { num: 303, category: "scroll", name: "scroll-margin-block-end", desc: " 상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 끝에서 스크롤 스냅 영역의 여백을 정의합니다 ." },
        { num: 304, category: "scroll", name: "scroll-margin-block-start", desc: " 이 상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 시작 부분에서 스크롤 스냅 영역의 여백을 정의합니다." },
        { num: 305, category: "scroll", name: "scroll-margin-bottom", desc: " 엘리먼트의 하단 마진을 지정한다." },
        { num: 306, category: "scroll", name: "scroll-margin-inline", desc: " 인라인 차원의 요소의 스크롤 마진을 설정한다." },
        { num: 307, category: "scroll", name: "scroll-margin-inline-end", desc: " 이 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 끝에서 스크롤 스냅 영역의 여백을 정의합니다 ." },
        { num: 308, category: "scroll", name: "scroll-margin-inline-start", desc: " 이 상자를 snapport에 맞추는 데 사용되는 인라인 차원의 시작 부분에서 스크롤 스냅 영역의 여백을 정의합니다 ." },
        { num: 309, category: "scroll", name: "scroll-margin-left", desc: " 엘리먼트의 왼쪽 마진을 지정한다." },
        { num: 310, category: "scroll", name: "scroll-margin-right", desc: " 이 상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 오른쪽 여백을 정의합니다." },
        { num: 311, category: "scroll", name: "scroll-margin-top", desc: " 이 상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 위쪽 여백을 정의합니다." },
        { num: 312, category: "scroll", name: "scroll-padding", desc: " 한 번에 요소의 모든면에 세트 스크롤 패딩을 설정합니다." },
        { num: 313, category: "scroll", name: "scroll-padding-block", desc: " 블록 차원의 요소의 스크롤 패딩을 설정한다." },
        { num: 314, category: "scroll", name: "scroll-padding-block-end", desc: " 블록 사이즈의 단부 에지 오프셋을 정의합니다." },
        { num: 315, category: "scroll", name: "scroll-padding-block-start", desc: " 블록 사이즈의 시작 에지에 대한 속성을 정의 오프셋을 설정합니다." },
        { num: 316, category: "scroll", name: "scroll-padding-bottom", desc: " 밑바닥 오프셋을 정의" },
        { num: 317, category: "scroll", name: "scroll-padding-inline", desc: " 인라인 차원의 요소의 스크롤 패딩을 설정한다." },
        { num: 318, category: "scroll", name: "scroll-padding-inline-end", desc: " 인라인 측정에 단부 가장자리의 속성을 정의" },
        { num: 319, category: "scroll", name: "scroll-padding-inline-start", desc: " 인라인 측정의 시작 에지에 대한 속성을 정의 옵셋 영역 보는 최적의 사용자의 관점에서 일을 배치하기위한 대상 영역" },
        { num: 320, category: "scroll", name: "scroll-padding-left", desc: " 좌측의 속성을 정의 옵셋 최적 가시 영역 은 사용자의 관점에서 일을 배치하기위한 대상 영역로서 사용하는 영역을 정의합니다." },
        { num: 321, category: "scroll", name: "scroll-padding-right", desc: " 우측에 대한 오프셋을 정의합니다." },
        { num: 322, category: "scroll", name: "scroll-padding-top", desc: " 속성의 상단에 대해 오프셋을 정의" },
        { num: 323, category: "scroll", name: "scroll-snap-align", desc: " 상자의 스냅 위치를 스냅 컨테이너의 스냅포트(정렬 컨테이너) 내에서 스냅 영역(정렬 주제)의 정렬로 지정합니다." },
        { num: 324, category: "scroll", name: "scroll-snap-coordinate", desc: " 이 기능은 더 이상 권장되지 않습니다." },
        { num: 325, category: "scroll", name: "scroll-snap-destination", desc: " 이 기능은 더 이상 권장되지 않습니다." },
        { num: 326, category: "scroll", name: "scroll-snap-points-x", desc: " 물리보다는 논리상 방향과 차원 맵핑을 통해 레이아웃을 제어하는 능력을 제공하는 속성 및 값을 정의하는 CSS 모듈입니다." },
        { num: 327, category: "scroll", name: "scroll-snap-points-y", desc: " 물리보다는 논리상 방향과 차원 맵핑을 통해 레이아웃을 제어하는 능력을 제공하는 속성 및 값을 정의하는 CSS 모듈입니다" },
        { num: 328, category: "scroll", name: "scroll-snap-stop", desc: " 스크롤 컨테이너가 가능한 스냅 위치에 허용되는지 여부 속성을 정의합니다." },
        { num: 329, category: "scroll", name: "scroll-snap-type", desc: " 포인트를 고정하는 방법을 엄격 속성 집합 하나가 경우에 스크롤 컨테이너에 적용됩니다" },
        { num: 330, category: "scroll", name: "scrollbar-color", desc: " 속성은 스크롤 트랙과 엄지 손가락의 색상을 설정합니다." },
        { num: 331, category: "scroll", name: "scrollbar-width", desc: " 사용하면 작성자가 요소 의 스크롤 막대가 표시될 때 최대 두께를 설정할 수 있습니다." },
        { num: 332, category: "etc", name: "shape-image-threshold", desc: " 속성에 대한 값로 이미지를 이용한 형상 추출 할 알파 채널 임계 값을 설정합니다." },
        { num: 333, category: "etc", name: "shape-margin", desc: " 속성 집합은 CSS 모양의 마진을 사용하여 생성 된 shape-outside ." },
        { num: 334, category: "etc", name: "shape-outside", desc: " 속성은 인접한 인라인 콘텐츠가 둘러싸야 하는 사각형이 아닐 수 있는 모양을 정의합니다 " },
        { num: 335, category: "etc", name: "tab-size", desc: " 탭 문자 (+ 0009 U)의 폭을 지정하는 데 사용됩니다." },
        { num: 336, category: "etc", name: "table-layout", desc: " 테이블의 레이아웃을 정의합니다. " },
        { num: 337, category: "text", name: "text-align", desc: " 블럭안 인라인 인라인 요소의 수평 정렬을 지정한다" },
        { num: 338, category: "text", name: "text-align-last", desc: " 블록 또는 행의 마지막 줄 오른쪽 강제 줄 바꿈하기 전에, 정렬되는 방식 CSS 속성을 설정합니다." },
        { num: 339, category: "text", name: "text-combine-upright", desc: " 속성 세트는 문자의 조합을 단일 문자의 공간로. 결합 된 텍스트가 1em보다 넓은 경우 사용자 에이전트는 1em 이내의 콘텐츠에 맞아야합니다." },
        { num: 340, category: "text", name: "text-decoration", desc: " 텍스트에 밑줄, 윗줄, 가운데줄이나 깜빡거림의 장식적인 요소를 지정한다." },
        { num: 341, category: "text", name: "text-decoration-color", desc: " 텍스트 요소의 밑줄의 색깔을 결정합니다." },
        { num: 342, category: "text", name: "text-decoration-line", desc: " 속성 집합 같은 밑줄 또는 윗줄로, 요소의 텍스트에 사용되는 장식의 종류." },
        { num: 343, category: "text", name: "text-decoration-skip", desc: " 요소에 영향을 미치는 텍스트 장식이 건너뛰어야 하는 요소 콘텐츠의 부분을 설정합니다." },
        { num: 344, category: "text", name: "text-decoration-skip-ink", desc: " 글리프 센더와 디 센더를 통해 통과 할 때 overlines와 밑줄이 그려하는 방법 속성 지정합니다." },
        { num: 345, category: "text", name: "text-decoration-style", desc: " 속성에 의해 지정된 라인의 스타일 설정 text-decoration-line . 스타일은 text-decoration-line 로 설정된 모든 행에 적용됩니다 . " },
        { num: 346, category: "text", name: "text-emphasis", desc: " 텍스트에 강조 표시를 적용합니다." },
        { num: 347, category: "text", name: "text-emphasis-color", desc: " 속성을 강조 마크의 색상을 설정합니다." },
        { num: 348, category: "text", name: "text-emphasis-position", desc: " 루비 텍스트처럼 강조 표시를위한 공간이 충분하지 않으면 줄 높이가 증가합니다." },
        { num: 349, category: "text", name: "text-emphasis-style", desc: " 속성이 강조 표시의 모양을 설정합니다." },
        { num: 350, category: "text", name: "text-indent", desc: " 블록의 텍스트 행하기 전에 넣어 빈 공간 (들여 쓰기)의 길이를 설정합니다." },
        { num: 351, category: "text", name: "text-justify", desc: " 텍스트에 적용되어야한다" },
        { num: 352, category: "text", name: "text-orientation", desc: " 속성은 행의 텍스트 문자의 방향을 설정합니다." },
        { num: 353, category: "text", name: "text-overflow", desc: " 숨겨진 오버플로 콘텐츠가 사용자에게 신호되는 방식을 설정합니다." },
        { num: 354, category: "text", name: "text-rendering", desc: " 텍스트를 렌더링 할 때 최적화 할 작업에 대한 렌더링 엔진에 대한 정보를 제공합니다." },
        { num: 355, category: "text", name: "text-shadow", desc: " 텍스트에 그림자를 추가합니다." },
        { num: 356, category: "text", name: "text-size-adjust", desc: " (모바일 폰트 크기 조정 관련)" },
        { num: 357, category: "text", name: "text-transform", desc: " 텍스트를 활용하는 CSS 속성을 지정합니다." },
        { num: 358, category: "text", name: "text-underline-position", desc: " 속성은 사용하여 설정 밑줄의 위치를 지정합니다." },
        { num: 359, category: "etc", name: "top", desc: " 용기블럭의 높이를 참조합니다. 위쪽에서 요소가 어디에 배치 될 것인가 결정합니다." },
        { num: 360, category: "etc", name: "touch-action", desc: " 터치 스크린 사용자가 조작 할 수있는 방법을 CSS 속성을 설정합니다." },
        { num: 361, category: "transform", name: "transform", desc: " 요소를 변형시킬 수 있습니다." },
        { num: 362, category: "transform", name: "transform-box", desc: " 박스의 변형효과를 설정합니다." },
        { num: 363, category: "transform", name: "transform-origin", desc: " 요소의 변환에 대한 원점을 설정합니다." },
        { num: 364, category: "transform", name: "transform-style", desc: " 요소의 아이들이 3D 공간에 위치하거나 요소의 평면에 평평 여부 속성 집합." },
        { num: 365, category: "transition", name: "transition", desc: " 애니메이션 효과를 입힐 때 속도를 조절하는 방법을 제공합니다." },
        { num: 366, category: "transition", name: "transition-delay", desc: " 속성의 시작하기 전에 대기하는 CSS 속성 지정 기간 전환 효과 때 그 값 변경." },
        { num: 367, category: "transition", name: "transition-duration", desc: " 전환 애니메이션 완료하는 데 소요되는 시간을 설정합니다." },
        { num: 368, category: "transition", name: "transition-property", desc: " 트렌지션 프로퍼티를 설정합니다." },
        { num: 369, category: "transition", name: "transition-timing-function", desc: " 트랜지션의 타이밍을 설정합니다." },
        { num: 370, category: "etc", name: "translate", desc: " transform 속성로 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다." },
        { num: 371, category: "etc", name: "unicode-bidi", desc: " 함께와 direction 특성, 문서의 양방향 텍스트가 처리되는 방법을 결정합니다." },
        { num: 372, category: "etc", name: "user-select", desc: " 사용자가 텍스트를 선택할 수 있는지 여부를 속성을 제어합니다." },
        { num: 373, category: "etc", name: "vertical-align", desc: " 인라인 엘리먼트나 테이블의 셀 안에서 수직정렬을 지정한다." },
        { num: 374, category: "etc", name: "visibility", desc: " 문서의 레이아웃을 변경하지 않고 CSS 속성 표시하거나 숨기는 소자입니다." },
        { num: 375, category: "etc", name: "white-space", desc: " 공백문자를 어떻게 다룰것인가를 정의 한다." },
        { num: 376, category: "etc", name: "widows", desc: " 표시해야하는 블록 컨테이너 선의 최소 개수 설정 상부 (A)의 페이지 , 영역 또는 컬럼 ." },
        { num: 377, category: "etc", name: "width", desc: " 블록 레벨 요소의 너비를 지정한다." },
        { num: 378, category: "etc", name: "will-change", desc: " 요소에 예상되는 변화의 종류에 관한 힌트를 브라우저에 제공케 한다." },
        { num: 379, category: "etc", name: "word-break", desc: " 단어의 분리를 어떻게 할 것인지 결정합니다." },
        { num: 380, category: "etc", name: "word-spacing", desc: " 단어 사이의 간격을 지정한다. " },
        { num: 381, category: "etc", name: "writing-mode", desc: " 텍스트의 선이 수평 또는 수직으로 배치 여부 속성 집합뿐만 아니라 블록이 진행되는 방향." },
        { num: 382, category: "etc", name: "z-index", desc: " 엘리먼트의 겹쳐지는 순서를 지정한다." }
    ];


    const searchTime = document.querySelector(".time span");
    const searchList = document.querySelector(".search__list");
    const searchAnswers = document.querySelector(".search__answers");
    const searchMissAnswers = document.querySelector(".search__missAnswers");
    const searchStart = document.querySelector(".search__box .start");
    const searchInput = document.querySelector("#search");
    const searchAudio = document.querySelector("#audio");
    // const musicPlay = document.querySelector(".search__audio .play");
    const musicStop = document.querySelector(".search__audio .stop");
    const searchScoreNow = document.querySelector(".search__info .now");
    const searchResult = document.querySelector(".search__result .result");
    const searchResultWrap = document.querySelector(".search__result");
    const searchRestart = document.querySelector(".search__result .restart");

    let timeReamining = 120,  // 남은 시간
        timeInterval = "",
        score = 0,      // 점수
        answers = {};   // 새로운 정답

        let total = cssProperty.length;
        document.querySelector(".num").innerText = total;

    function updateList(){
        cssProperty.forEach(data => {
            searchList.innerHTML += `<span>${data.name}</span>`;
        })
    }
    updateList();


    // 게임 시작하기
    function startQuiz(){
        // 시작 버튼 숨기기
        searchStart.style.display = "none";
        searchList.style.display = "none";

        // 시간 설정(1초에 한번씩 줄어듦)
        timeInterval = setInterval(reduceTime, 1000);

        // 속성 리스트 없애기

        // 음악 추가
        music();

        // 점수 계산
        let score = 0;

        // 정답 체크
        checkAnswers();
    }


    // 음악 재생
    function music(){
        musicStop.addEventListener("click", () => {
            musicStop.style.display = "none";
            document.querySelector(".search__audio .play").style.display = "block";
            searchAudio.pause();
        });
        document.querySelector(".search__audio .play").addEventListener("click", () => {
            document.querySelector(".search__audio .play").style.display = "none";
            musicStop.style.display = "block";
            searchAudio.play();
        });
        searchAudio.play();
    }


    // 인풋 체크하기
    function checkInput(){
        let input = event.currentTarget.value.trim().toLowerCase();  // 사용자가 입력한 값 가져오기
        if(answers.hasOwnProperty(input) && !answers[input]){
            answers[input] = true;
            // 정답 표시
            searchAnswers.style.display = "block";
            searchAnswers.innerHTML += `<span>${input}</span>`;
            // 점수 반영
            score++;
            searchScoreNow.innerText = score;
            // 정답 초기화
            searchInput.value = "";
        }
    }


    // 정답 체크하기 : 정답을 객체 파일로 만들기
    function checkAnswers() {
        cssProperty.forEach(item => {
            let answer = item.name.trim().toLocaleLowerCase();
            answers[answer] = false;
        });
    }


    // 오답 보여주기
    function missAnswers(){
        searchMissAnswers.style.display = "block";
        cssProperty.forEach(item => {
            let answer = item.name.trim().toLocaleLowerCase();
            if(answers[answer] == false){
                searchMissAnswers.innerHTML += `<span>${item.name}</span>`
            }
        })
    }


    // 시간 설정하기 0:00
    function reduceTime(){
        timeReamining--;
        if(timeReamining == 0) endQuiz();
        searchTime.innerText = displayTime();
    }


    // 시간 표시하기
    function displayTime(){
        if(timeReamining <= 0){
            return "0:00";
        } else {
            let minutes = Math.floor(timeReamining / 60);
            let seconds = timeReamining % 60;
            // 초 단위가 한자리수일 때 0 추가
            if(seconds < 10) seconds = "0" + seconds;
            return minutes + ":" + seconds;
        }
    }


    // 게임이 끝났을 때
    function endQuiz(){
        // 시작 버튼 만들기
        searchStart.style.display = "block";
        searchStart.style.pointerEvents = "none";
        
        // 오답 보여주기
        missAnswers();

        // 음악 끄기
        searchAudio.pause();

        // 메시지 출력
        searchResultWrap.classList.add("show");
        let point = Math.round(score / cssProperty.length * 100);
        searchResult.innerHTML = `게임이 종료되었습니다.<br>${cssProperty.length}개 중 ${score}개를 맞혔습니다.<br>점수는 ${point}점입니다.`;
    
        //시간정지
        clearInterval(timeInterval);
    }

    //다시 시작하기 - 리셋
    function restart(){
        setTimeout(() => {
            searchResultWrap.classList.remove("show");

            searchStart.style.display = "none";  // 버튼 숨김
            searchStart.style.pointerEvents = "all";
            searchList.style.display = "none";
            
            //다시 시작할 때 기존 데이터 초기화
            searchAnswers.innerHTML= "";
            searchMissAnswers.innerHTML= "";


            startQuiz();
            timeReamining = 120;  // 시간
            score = 0;
            searchScoreNow.innerText = 0;
        }, 1000)
    }
    // 버튼 이벤트
    searchStart.addEventListener("click", startQuiz); // 게임 시작
    searchInput.addEventListener("input", checkInput);
    searchRestart.addEventListener("click", restart);