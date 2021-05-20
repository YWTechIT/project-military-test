const COMBAT_QUIZ = [
	{
		id: 1,
		question: "내가 선호하는 과제는?",
		answers: [
			{ text: "팀원들과 함께라면..", infantry: 0, artillery: 1, armor: 1, engineer: 1, signal: 0, intelligence: 1 },
			{ text: "인생은 혼자야!", infantry: 1, artillery: 0, armor: 0, engineer: 0, signal: 1, intelligence: 0 },
		],
	},
	{
		id: 2,
		question: "나는 해외여행을 갈 때",
		answers: [
			{ text: "여행사를 통해 계획된 여행지를 간다.", infantry: 0, artillery: 1, armor: 0, engineer: 1, signal: 1, intelligence: 1 },
			{ text: "계획? 그게 뭐야 일단 배낭메고 간다.", infantry: 1, artillery: 0, armor: 1, engineer: 0, signal: 0, intelligence: 0 },
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
		question: "나에게 능력이 하나 주어진다면? ",
		answers: [
			{ text: "상대방의 의도를 파악하는 능력", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 5 },
			{ text: "수학적인 계산에 탁월한 능력", infantry: 0, artillery: 5, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "무한 체력", infantry: 5, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
            { text: "설계도만 있으면 무엇이든 지을 수 있는 능력", infantry: 0, artillery: 0, armor: 0, engineer: 5, signal: 0, intelligence: 0},
            { text: "기계를 능숙하게 다룰 수 있는 능력", infantry: 0, artillery: 0, armor: 5, engineer: 0, signal: 5, intelligence: 0 },
		],
    },
    {
		id: 6,
		question: "집에서 15분거리인 장소에서 친구와 만나기로 했는데, 어떻게 갈까?",
		answers: [
			{ text: "걸어간다.", infantry: 5, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 5 },
			{ text: "대중교통 / 자차를 타고 간다.", infantry: 0, artillery: 3, armor: 3, engineer: 1, signal: 1, intelligence: 0 },
		],
	},
	{
		id: 7,
		question: '오늘은 전술평가가 있는 날이다. 출동준비를 마치고 잠깐 후임과 쉬고있던 나. 문득 어제 불침번근무 중 무전기 배터리를 충전하지 않은 것이 떠오르고 이 사실을 나만 알고있는데...?',
		answers: [
			{ text: "허겁지겁 분대장에게 달려가 배터리가 방전됐다고 보고한다.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "인생사 어쩔 수 없지. 그냥 모른체 한다.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "후임을 시켜 분대장에게 보고하라고 한다.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "나보다 짬이 낮은 옆 분대 무전병의 배터리를 몰래 가져온다.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
		],
	},
	
	{
		id: 8,
		question: "전쟁 중 적군과 1:1로 대치 중인 상황일때, 당신의 선택은?",
		answers: [
			{ text: "총알이 3발 남은 K-2 소총.", infantry: 1, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0},
			{ text: "녹슨 대검", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 1},
			{ text: "K-9 자주포", infantry: 0, artillery: 1, armor: 1, engineer: 0, signal: 0, intelligence: 0},
            { text: "지원요청을 한다.", infantry: 0, artillery: 0, armor: 0, engineer: 1, signal: 1, intelligence: 0},
		],
	},
	{
		id: 9,
		question: "나는 RCT, ATT, 국지도발훈련의 단어를 알고 있거나 직접 겪어 봤다.",
		answers: [
			{ text: "그렇다.", infantry: 1, artillery: 1, armor: 1, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "아니다.", infantry: 0, artillery: 0, armor: 0, engineer: 1, signal: 1, intelligence: 1 },
		],
	},
	{
		id: 10,
		question: "다음 중 호감이 가는 문장은?",
		answers: [
			{ text: "나를 따르라.", infantry: 10, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "통하라.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 10, intelligence: 0 },
			{ text: "우레!", infantry: 0, artillery: 10, armor: 0, engineer: 0, signal: 0, intelligence: 0 },
			{ text: "시작과 끝은 우리가.", infantry: 0, artillery: 0, armor: 0, engineer: 10, signal: 0, intelligence: 0 },
			{ text: "적을 먼저 찾아라.", infantry: 0, artillery: 0, armor: 0, engineer: 0, signal: 0, intelligence: 10 },
			{ text: "지상의 왕자.", infantry: 0, artillery: 0, armor: 10, engineer: 0, signal: 0, intelligence: 0 },
		],
	},
];

export { COMBAT_QUIZ };
