const COMBAT_QUIZ = [
	{
		id: 1,
		question: "내가 선호하는 과제는?",
		answers: [
			{ text: "팀원들과 함께라면..", infantry: 1, artillery: 1, armor: 1, engineer: 1, signal: 0, intelligence: 0 },
			{ text: "인생은 혼자야!!", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 1, intelligence: 1 },
		],
	},
	{
		id: 2,
		question: "나는 해외여행을 갈 때",
		answers: [
			{ text: "00투어를 찾아본다.", infantry: 0, artillery: 1, armor: 0, engineer: 1, signal: 1, intelligence: 1 },
			{ text: "배낭메고 출발한다.", infantry: 1, artillery: 0, armor: 1, engineer: 0, signal: 0, intelligence: 0 },
		],
	},
	{
		id: 3,
		question: "나는 겉으로 보여지는 것보다, 보이지 않는 곳에 신경이 더 쓰인다.",
		answers: [
			{ text: "그렇다.", infantry: 0, artillery: 1, armor: 0, engineer: 0, signal: 1, intelligence: 1},
			{ text: "아니다.", infantry: 1, artillery: 0, armor: 1, engineer: 1, signal: 0, intelligence: 0},
		],
	},
	{
		id: 4,
		question: "고등학교로 다시 돌아간다면 선택하고 싶은 과는?",
		answers: [
			{ text: "문과", infantry: 1, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 1 },
			{ text: "이과", infantry: 0, artillery: 1, armor: 1, engineer: 1, signal: 1, intelligence: 0 },
		],
	},
	{
		id: 5,
		question: "나에게 능력이 하나 주어진다면?",
		answers: [
			{ text: "상대방의 생각을 읽을 수 있는 능력", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 5 },
			{ text: "수학적인 계산에 탁월한 능력", infantry: 0, artillery: 5, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "무한 체력", infantry: 5, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
            { text: "설계도만 있으면 무엇이든 지을 수 있는 능력", infantry: 0, artillery: 0, armor: 0, engineer: 5, signal: 0, intelligence: 0},
            { text: "기계를 능숙하게 다룰 수 있는 능력", infantry: 0, artillery: 0, armor: 5, engineer: 0, signal: 5, intelligence: 0 },
		],
    },
    {
		id: 6,
		question: "집에서 13분 걸리는 장소에서 친구와 만나기로 했는데, 어떻게 갈까?",
		answers: [
			{ text: "걸어간다.", infantry: 1, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 1 },
			{ text: "대중교통 / 자차를 타고 간다.", infantry: 0, artillery: 1, armor: 1, engineer: 1, signal: 1, intelligence: 0 },
		],
	},
	{
		id: 7,
		question: '오늘은 전술평가 날이다. 문득 어제 불침번근무 중 무전기 배터리를 충전하지 않은 것을 나만 알고있는데..?',
		answers: [
			{ text: "분대장에게 달려가 배터리가 방전됐다고 보고한다.", infantry: 1, artillery: 1, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "그냥 모른 체 한다.", infantry: 0, artillery: 0, armor: 1, engineer: 1, signal: 0, intelligence: 0},
			{ text: "나보다 짬이 낮은 옆 분대 배터리를 몰래 가져온다.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 1, intelligence: 1},
		],
	},
	
	{
		id: 8,
		question: "전쟁 중 적군과 1:1로 대치 중인 상황일 때, 당신의 선택은?",
		answers: [
			{ text: "K-2 소총", infantry: 1, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "K-3 기관총", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 1},
			{ text: "K-201 유탄발사기", infantry: 0, artillery: 1, armor: 1, engineer: 0, signal: 0, intelligence: 0},
            { text: "지원요청", infantry: 0, artillery: 0, armor: 0, engineer: 1, signal: 1, intelligence: 0},
		],
	},
	{
		id: 9,
		question: "무술을 꼭 하나 배워야한다면 당신의 선택은?",
		answers: [
			{ text: "상대방의 수를 읽는 검도", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "상대의 힘을 역이용 하는 유도", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "남다른 순발력이 필요한 합기도", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "상대방의 기선을 제압하는 태권도", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
		],
	},
	{
		id: 10,
		question: "코로나 시국이 끝나고 가장 먼저 하고 싶은 일은?",
		answers: [
			{ text: "해외여행 가기", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "마스크 벗고 다니기", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "유명한 가수의 콘서트 관람", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "친구들과 밤새 술 마시기", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
		],
	},
];

export { COMBAT_QUIZ };
