// 정훈: affair, 군악: band, 의무: medic, 헌병: police, 군종: pray, 병기: weapon

const SUPPLY_QUIZ = [
	{
		id: 1,
		question: "나는 노래방에서 마이크를 잘 놓지 않는 편이다.",
		answers: [
			{ text: "그렇다.", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 1 },
			{ text: "아니다.", affair: 0, band: 1, medic: 1, police: 1, pray: 0, weapon: 0 }
		],
	},
	{
		id: 2,
		question: "학교 / 직장에서 나를 뒷담화하는 이야기를 들었다. 이때 나의 반응은?",
		answers: [
			{ text: "나한테 어떻게 그럴 수가 있지?", affair: 0, band: 0, medic: 0, police: 0, pray: 1, weapon: 0  },
			{ text: "(속마음) 나한테 자격지심 느끼나..?", affair: 1, band: 0, medic: 0, police: 1, pray: 0, weapon: 1  },
			{ text: "모든 사람들이 나를 좋아할 순 없지!!", affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 0  },
			{ text: "나랑 친하지 않은 애니까 상관없어", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 0  },
		],
	},
	{
		id: 3,
		question: "학창시절로 돌아가서 한 과목만 공부하여 성공 할 수 있다면, 어떤 과목을 공부 할 것인가?",
		answers: [
            { text: "언어", affair: 5, band: 0, medic: 0, police: 0, pray: 5, weapon: 0  },
			{ text: "음악", affair: 0, band: 5, medic: 0, police: 0, pray: 0, weapon: 0 },
			{ text: "과학", affair: 0, band: 0, medic: 5, police: 0, pray: 0, weapon: 0  },
			{ text: "수학", affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 5 },
			{ text: "사회", affair: 0, band: 0, medic: 0, police: 5, pray: 0, weapon: 0 },
		],
	},
	{
		id: 4,
		question: "군대에 사단장님이 오셨다! 사진 촬영을 위해 카메라를 들고 나간 당신! 그런데 SD 카드가 없다면...?",
		answers: [
			{ text: "사실대로 SD카드가 없다고 말한 뒤 빨리 헐레벌떡 뛰어가서 가져온다.", affair: 0, band: 0, medic: 0, police: 1, pray: 1, weapon: 0 },
			{ text: "큰일났다.. 어쩌지.. 하면서 우물쭈물...", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 1 },
			{ text: "급한대로 휴대폰으로 우선 찍는다.", affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 0 },
			{ text: "당황스럽지만 사단장님 앞... 없어도 있는척! SD카드 없이 사진을 찍는다 .", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 },
		],
	},
	{
		id: 5,
		question: "직장(학교)에서 점심시간이 되었다. 오늘의 점심메뉴가 마음에 들지 않은 당신의 행동은?",
		answers: [
			{ text: "그냥 먹는다.", affair: 0, band: 0, medic: 0, police: 1, pray: 1, weapon: 1  },
			{ text: "밖에서 다른 음식을 먹는다.", affair: 1, band: 1, medic: 1, police: 0, pray: 0, weapon: 0  },
		],
	},
	{
		id: 6,
		question: "직장 / 학교에서 지인의 비밀을 들었을 때 나의 행동은?",
		answers: [
			{ text: "다른 사람이 겪었던 일처럼 돌려 말한다.", affair: 0, band: 1, medic: 1, police: 0, pray: 0, weapon: 0 },
			{ text: "일체 말을 하지 않는다.", affair: 1, band: 0, medic: 0, police: 1, pray: 1, weapon: 1 },
		],
    },
	{
		id: 7,
		question: "다음 중 내가 제일 듣고 싶은 문장은?",
		answers: [
			{ text: '" 기계를 엄청 잘 다루시네요. "', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 5 } ,
			{ text: '" 주변 사람들과의 관계가 엄청 좋으시네요. "', affair: 0, band: 0, medic: 0, police: 0, pray: 5, weapon: 0 } ,
			{ text: '" 언변이 엄청 뛰어나시네요. "', affair: 5, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 }, 
			{ text: '" 완전 교과서 같으시네요. "', affair: 0, band: 0, medic: 0, police: 5, pray: 0, weapon: 0 }, 
			{ text: '" 평소에도 남들을 잘 도와주는것 같아요. "', affair: 0, band: 0, medic: 5, police: 0, pray: 0, weapon: 0 },
			{ text: '" 악기를 굉장히 잘 다루시네요. "', affair: 0, band: 5, medic: 0, police: 0, pray: 0, weapon: 0 } 
		],
    },
	{
		id: 8,
		question: "친구들끼리 싸움이 일어났을 때 나의 반응은?",
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
		question: "평소에 내 방 상태는..?",
		answers: [
			{ text: '애초에 더러운 적이 없었다.', affair: 0, band: 0, medic: 0, police: 1, pray: 0, weapon: 0 } ,
			{ text: '엄청 깨끗하거나 엄청 더럽거나 둘 중 하나.', affair: 0, band: 1, medic: 1, police: 0, pray: 0, weapon: 0 } ,
			{ text: '한쪽에 모든걸 숨겨두고 겉모습은 깨끗해 보인다.', affair: 1, band: 0, medic: 0, police: 0, pray: 1, weapon: 0 } ,
			{ text: '청소를 하겠다는 마음만 있고 실제 행동으로 옮기지 않는다.', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 1 } ,
		],
    },
];

export { SUPPLY_QUIZ };