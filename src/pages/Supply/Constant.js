// 정훈: affair, 군악: band, 의무: medic, 헌병: police, 군종: pray, 병기: weapon

const SUPPLY_QUIZ = [
	{
		id: 1,
		question: "나는 노래방에서 마이크를 잘 놓지 않는 편이다.",
		answers: [
			{ text: "그렇다.", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 1 },
			{ text: "아니다.", affair: 0, band: 1, medic: 1, police: 1, pray: 1, weapon: 0 }
		],
	},
	{
		id: 2,
		question: "학교 / 직장에서 나를 뒷담화하는 이야기를 들었다. 이때 나의 반응은?",
		answers: [
			{ text: "나한테 어떻게 그럴 수 있지?", affair: 0, band: 0, medic: 0, police: 0, pray: 1, weapon: 0  },
			{ text: "(속마음) 나한테 자격지심 느끼나?", affair: 1, band: 0, medic: 0, police: 1, pray: 0, weapon: 1  },
			{ text: "모두가 나를 좋아할 순 없지!", affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 0  },
			{ text: "나랑 친하지 않은 사람이니까 상관없어!", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 0  },
		],
	},
	{
		id: 3,
		question: "군대에 사단장님이 오셨다. 사진 촬영을 위해 카메라를 들고 나간 당신! 그런데 SD카드가 없다면..?",
		answers: [
            { text: "사실대로 SD카드가 없다고 말한 뒤 재빨리 가져온다.", affair: 0, band: 0, medic: 0, police: 1, pray: 1, weapon: 0  },
			{ text: "큰일났다! 어쩌지 하면서 우물쭈물..", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 1 },
			{ text: "급한대로 휴대폰으로 우선 촬영한다.", affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 0  },
			{ text: "당황스럽지만 사단장님 앞.. 없어도 있는척 SD카드 없이 사진을 찍는다.", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 },
		],
	},
	{
		id: 4,
		question: "직장 / 학교에서 지인의 비밀을 들었을 때 내가 하는 행동은?",
		answers: [
			{ text: "다른 사람이 겪었던 일처럼 돌려 말한다.", affair: 0, band: 1, medic: 1, police: 0, pray: 0, weapon: 0 },
			{ text: "당연히 말을 하지 않는다.", affair: 1, band: 0, medic: 0, police: 1, pray: 1, weapon: 1 },
		],
	},
	{
		id: 5,
		question: "행사 도중 퀴즈를 맞췄지만 상품을 받으려면 춤을 보여줘야 한다는 사회자의 말에 나는..",
		answers: [
			{ text: "열심히 춤을 춘다.", affair: 0, band: 1, medic: 0, police: 1, pray: 0, weapon: 0 },
			{ text: "춤 대신 내가 잘하는걸 보여준다.", affair: 0, band: 0, medic: 0, police: 0, pray: 1, weapon: 0  },
			{ text: "우물쭈물하며 그냥 서있는다.", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 1 },
			{ text: "포기하고 도망간다.", affair: 1, band: 0, medic: 0, police: 0, pray: 1, weapon: 0 },
		],
	},
	{
		id: 6,
		question: "오늘의 점심 메뉴는 고순조(고등어순살조림) + 된장국이다. 당신의 선택은..?",
		answers: [
			{ text: "그냥 먹는다.", affair: 0, band: 0, medic: 0, police: 1, pray: 1, weapon: 1  },
			{ text: "소대장에게 아프다고 보고하고 PX를 간다.", affair: 1, band: 1, medic: 1, police: 0, pray: 0, weapon: 0  },
		],
    },
	{
		id: 7,
		question: "내가 제일 듣고 싶은 문장은?",
		answers: [
			{ text: '" 기계를 매우 잘 다루시네요. "', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 5 } ,
			{ text: '" 신앙심이 매우 두터우시네요. "', affair: 0, band: 0, medic: 0, police: 0, pray: 5, weapon: 0 } ,
			{ text: '" 언변이 매우 뛰어나시네요. "', affair: 5, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 }, 
			{ text: '" 완전 교과서 같으시네요. "', affair: 0, band: 0, medic: 0, police: 5, pray: 0, weapon: 0 }, 
			{ text: '" 손재주가 굉장히 좋으세요. "', affair: 0, band: 5, medic: 5, police: 0, pray: 0, weapon: 0 },
		],
    },
	{
		id: 8,
		question: "친구들끼리 싸움이 났을 때 나의 반응은?",
		answers: [
			{ text: '싸움을 적극적으로 말린다.', affair: 1, band: 0, medic: 1, police: 1, pray: 0, weapon: 0 }, 
			{ text: '옆에서 관전한다.', affair: 0, band: 1, medic: 0, police: 0, pray: 1, weapon: 1 } ,
		],
    },
	{
		id: 9,
		question: "친구들과 여행을 가기로 결정했다. 나의 역할은?",
		answers: [
			{ text: '친구들의 의견 종합하기', affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 } ,
			{ text: '여행 루트 계획하기', affair: 0, band: 0, medic: 0, police: 1, pray: 0, weapon: 1 } ,
			{ text: '여행 비용 계산, 관리', affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 0 } ,
			{ text: '묻어가기', affair: 0, band: 0, medic: 1, police: 0, pray: 1, weapon: 0 } 
		],
    },
	{
		id: 10,
		question: "평소 나의 방 상태는?",
		answers: [
			{ text: '더러운적이 없었다.', affair: 0, band: 0, medic: 0, police: 1, pray: 0, weapon: 0 } ,
			{ text: '엄청 깨끗하거나 엄청 더럽거나.', affair: 0, band: 1, medic: 1, police: 0, pray: 0, weapon: 0 } ,
			{ text: '한쪽에 몰아놔서 겉모습은 깨끗해 보인다.', affair: 1, band: 0, medic: 0, police: 0, pray: 1, weapon: 0 } ,
			{ text: '청소를 하겠다는 마음만 있다.', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 1 } ,
		],
    },
];

export { SUPPLY_QUIZ };