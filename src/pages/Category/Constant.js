//constants.js
const CATEGORIZE_QUIZ = [
	{
		id: 1,
		question: "친구들과 5:5 LOL을 하기로 했다. 내가 가고 싶은 라인은? (실력은 동일)",
		answers: [
			{ text: "탑", combat: 2, supply: 0 },
			{ text: "미드", combat: 2, supply: 0 },
			{ text: "원딜", combat: 1, supply: 1 },
			{ text: "서폿", combat: 0, supply: 2 },
			{ text: "정글", combat: 1, supply: 0 },
		],
	},
	{
		id: 2,
		question: "전쟁 중 적군과 1:1로 대치 중인 상황일때, 당신의 선택은?",
		answers: [
			{ text: "총알 3발 남은 K-2 소총", combat: 2, supply: 0 },
			{ text: "녹슨 대검", combat: 2, supply: 0 },
			{ text: "조용히 드러누워 시체인척 한다.", combat: 0, supply: 1 },
			{ text: "지원요청을 한다.", combat: 0, supply: 2},
		],
	},
	{
		id: 3,
		question: "조별과제 중 첫눈에 반한 이성이 있을 때 당신의 행동은?",
		answers: [
			{ text: "그(그녀)의 번호를 물어본다.", combat: 2, supply: 0 },
			{ text: "이성의 SNS를 들어가본다.", combat: 0, supply: 1 },
			{ text: "내 주변에 그(그녀)와 아는사람이 있는지 물어본다.", combat: 1, supply: 2},
			{ text: "인연이라면 언젠간 또 보겠지하며 무심코 지나간다.", combat: 2, supply: 1},
		],
	},
	{
		id: 4,
		question: "친구와 식당에서 밥을 먹고있는데 직원이 실수로 물을 쏟았다. 이때, 당신의 행동은?",
		answers: [
			{ text: "화를 내며 당장 매니저를 불러달라고 한다.", combat: 2, supply: 0},
			{ text: "괜찮다며 웃으며 넘긴다.", combat: 0, supply: 2},
			{ text: "전화번호를 물어본다.", combat: 1, supply: 0},
			{ text: "SNS에서 별점을 1개만 준다.", combat: 0, supply: 1},
		],
	},
	{
		id: 5,
		question: "나는 단순하고 명확한 것을 좋아한다.",
		answers: [
			{ text: "O", combat: 1, supply: 0 },
			{ text: "X", combat: 0, supply: 1 },
		],
	},
];

export { CATEGORIZE_QUIZ };
