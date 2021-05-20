// 정훈: affair, 군악: band, 의무: medic, 헌병: police, 군종: pray, 병기: weapon

const SUPPLY_QUIZ = [
	{
		id: 1,
		question: "나는 노래방에서 마이크를 잘 놓지 않는 편이다.",
		answers: [
			{ text: "그렇다.", affair: 0, band: 1, medic: 0, police: 1, pray: 1, weapon: 0 },
			{ text: "아니다.", affair: 1, band: 0, medic: 1, police: 0, pray: 0, weapon: 1 }
		],
	},
	{
		id: 2,
		question: "무술을 꼭 하나 배워야한다면 당신의 선택은..?",
		answers: [
			{ text: "상대방의 수를 읽는 검도", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0  },
			{ text: "상대의 힘을 역이용하는 유도", affair: 0, band: 0, medic: 1, police: 0, pray: 1, weapon: 0  },
			{ text: "남다른 순발력이 필요한 합기도", affair: 0, band: 1, medic: 0, police: 0, pray: 0, weapon: 1  },
			{ text: "상대방의 기선을 제압하는 태권도", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0  },
		],
	},
	{
		id: 3,
		question: "학창시절로 돌아가서 한 과목만 공부하여 성공 할 수 있다면, 어떤 과목을 공부할 것인가?",
		answers: [
            { text: "언어", affair: 5, band: 0, medic: 0, police: 0, pray: 5, weapon: 0  },
			{ text: "음악", affair: 0, band: 5, medic: 0, police: 0, pray: 0, weapon: 0 },
			{ text: "과학", affair: 0, band: 1, medic: 5, police: 0, pray: 0, weapon: 0  },
			{ text: "수학", affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 5 },
			{ text: "사회", affair: 0, band: 0, medic: 0, police: 5, pray: 0, weapon: 0 },
		],
	},
	{
		id: 4,
		question: "축제를 즐기던 도중, 사회자가 갑자기 나를 지목하여 무대로 올라오라고 했을 때 당신의 선택은?",
		answers: [
			{ text: "마이크를 쥐고 노래를 부른다.", affair: 0, band: 0, medic: 0, police: 1, pray: 1, weapon: 0 },
			{ text: "무대 위에 내가 자신있는 악기를 친다.", affair: 0, band: 5, medic: 0, police: 0, pray: 0, weapon: 0 },
			{ text: "내 옆에 있던 친구를 같이 데리고 올라간다.", affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 1 },
			{ text: "급하게 전화가 온 척한다..", affair: 0, band: 0, medic: 1, police: 0, pray: 0, weapon: 0 },
		],
	},
	{
		id: 5,
		question: "직장(학교)에서 점심시간이 되었다. 오늘의 점심메뉴가 마음에 들지 않은 당신의 행동은?",
		answers: [
			{ text: "그냥 먹는다.", affair: 0, band: 0, medic: 0, police: 3, pray: 0, weapon: 3  },
			{ text: "밖에서 다른 음식을 먹는다.", affair: 1, band: 1, medic: 0, police: 0, pray: 0, weapon: 0  },
			{ text: "점심은 건너뛰고 저녁에 맛있는 음식을 먹는다.", affair: 0, band: 0, medic: 1, police: 0, pray: 1, weapon: 0 },
		],
	},
	{
		id: 6,
		question: "나에게 어울리는 장소는?",
		answers: [
			{ text: "북적거리는 유명한 관광지", affair: 0, band: 1, medic: 1, police: 0, pray: 1, weapon: 0 },
			{ text: "조용한 공원", affair: 1, band: 0, medic: 0, police: 1, pray: 0, weapon: 1 },
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
		question: "한라산 등반 중 갈림길을 만났다. 당신의 선택은?",
		answers: [
			{ text: '험하지만 제일 빠르게 정상으로 가는 지름길', affair: 1, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 }, 
			{ text: '완만하지만 정상까지 조금 돌아가는 길', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 2 } ,
			{ text: '여기까지 올라온 것에 만족하고 하산한다.', affair: 0, band: 1, medic: 1, police: 0, pray: 1, weapon: 0 } ,
			{ text: '텐트를 치고 쉬었다가 내일 출발한다.', affair: 0, band: 0, medic: 0, police: 1, pray: 0, weapon: 0 } ,
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
		question: "지금으로부터 10년 전으로 돌아간다면, 당신이 제일 하고싶은 것은?",
		answers: [
			{ text: '비트코인을 구매한다.', affair: 3, band: 0, medic: 0, police: 0, pray: 0, weapon: 0 } ,
			{ text: '로또번호를 외워놓는다.', affair: 0, band: 0, medic: 0, police: 2, pray: 0, weapon: 0 } ,
			{ text: '친구들을 많이 사귄다.', affair: 0, band: 0, medic: 2, police: 0, pray: 2, weapon: 0 } ,
			{ text: '주식을 구매한다.', affair: 0, band: 2, medic: 0, police: 0, pray: 0, weapon: 0 } ,
			{ text: '나에게 잘 맞는 분야를 공부한다.', affair: 0, band: 0, medic: 0, police: 0, pray: 0, weapon: 3 } ,
		],
    },
];

export { SUPPLY_QUIZ };