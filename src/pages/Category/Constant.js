//constants.js
const CATEGORIZE_QUIZ = [
	{
		id: 1,
		question: "조별과제 중 첫눈에 반한 이성이 있을 때 당신의 선택은?",
		answers: [
			{ text: "그(그녀)의 번호를 물어본다.", combat: 2, supply: 0 },
			{ text: "이성의 SNS를 들어가본다.", combat: 1, supply: 1 },
			{ text: "내 주변에 그(그녀)와 아는사람이 있는지 물어본다.", combat: 1, supply: 1},
			{ text: "인연이라면 언젠간 또 보겠지하며 무심코 지나간다.", combat: 1, supply: 1},
		],
		
	},
	{
		id: 2,
		question: "한라산 등반 도중 중간 지점까지 도착했는데 체력이 고갈된 상태다. 이때 당신의 선택은?",
		answers: [
			{ text: "여기까지 올라왔는데 정상은 찍어야지!", combat: 2, supply: 0 },
			{ text: "여기까지 올라온것도 대단한데 그만 내려가자.", combat: 0, supply: 1 },
		],
	},
	{
		id: 3,
		question: "메이플스토리에서 드디어 1차 전직을 할 수 있다! 어떤 직업을 선택할까? ",
		answers: [
			{ text: "전사", combat: 2, supply: 0 },
			{ text: "궁수", combat: 1, supply: 1 },
			{ text: "도적", combat: 1, supply: 1 },
			{ text: "마법사", combat: 0, supply: 1 },
		],
	},
	{
		id: 4,
		question: "친구와 식당에서 밥을 먹고있는데 직원이 실수로 물을 쏟았다. 이때 당신의 행동은?",
		answers: [
			{ text: "화를 내며 당장 사장을 불러달라고 한다.", combat: 2, supply: 0},
			{ text: "괜찮다며 웃으며 넘긴다.", combat: 1, supply: 1},
			{ text: "주문을 취소하고 식당을 나간다.", combat: 1, supply: 1},
			{ text: "SNS에서 별점을 1개만 준다.", combat: 0, supply: 1},
		],
	},
	{
		id: 5,
		question: "지나가던 골목에서 불량배가 어린아이의 돈을 뺐는 모습을 보았다. 이때 당신의 행동은?",
		answers: [
			{ text: "직접 가서 도와준다.", combat: 2, supply: 0 },
			{ text: "경찰에 신고하고 올 때까지 기다린다.", combat: 0, supply: 1 },
			{ text: "그냥 지나간다.", combat: 1, supply: 1 },
		],
	},
];

export { CATEGORIZE_QUIZ };
