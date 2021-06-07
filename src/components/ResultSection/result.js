import INFANTRY from "../../assets/infantry.jpg";
import ARTILLERY from "../../assets/artillery.jpg";
import ARMOR from "../../assets/armor.jpg";
import ENGINEER from "../../assets/engineer.jpg";
import SIGNAL from "../../assets/signal.jpg";
import INTELLIGENCE from "../../assets/intelligence.jpg";
import AFFAIR from "../../assets/affair.jpg";
import BAND from "../../assets/band.jpg";
import MEDIC from "../../assets/medic.jpg";
import POLICE from "../../assets/police.jpg";
import PRAY from "../../assets/pray.jpg";
import WEAPON from "../../assets/weapon.jpg";
import INFANTRY_ICON from "../../assets/infantry_icon.jpg";
import ARTILLERY_ICON from "../../assets/artillery_icon.jpg";
import ARMOR_ICON from "../../assets/armor_icon.jpg";
import ENGINEER_ICON from "../../assets/engineer_icon.jpg";
import SIGNAL_ICON from "../../assets/signal_icon.jpg";
import INTELLIGENCE_ICON from "../../assets/intelligence_icon.jpg";
import AFFAIR_ICON from "../../assets/affair_icon.jpg";
import BAND_ICON from "../../assets/band_icon.jpg";
import MEDIC_ICON from "../../assets/medic_icon.jpg";
import POLICE_ICON from "../../assets/police_icon.jpg";
import PRAY_ICON from "../../assets/pray_icon.jpg";
import WEAPON_ICON from "../../assets/weapon_icon.jpg";

const RESULT = {
  infantry: {
    title: "보병",
    src: INFANTRY,
    hashTag: "# 보병 # 최소비용 # 최대인력 # 행군",
    description:
      "보병병과는 적과의 근접전투를 위해 편성된 병과로, 지상군의 중심 전력이다. 인류가 전쟁을 하면서부터 생긴 보병은 역사적으로 제일 오래된 병과이며, 보병을 제외한 나머지 병과는 보병이 전쟁에서 이기는 것을 돕는 역할이고 전장에서 보병이 최후의 깃발을 꽂는다. 평소 걷거나 뛰는 것을 좋아하고, 밖에서 자는 것을 좋아하거나, FPS 게임에 자신있다면 보병을 지원하자.",
    similar: "정보 병과",
    opposite: "의무 병과",
    similar_icon: INTELLIGENCE_ICON,
    opposite_icon: MEDIC_ICON,
  },
  artillery: {
    title: "포병",
    src: ARTILLERY,
    hashTag: "# 포병 # 포방부 # 하나 둘 삼 준비... 쏴!",
    description:
      "포병병과는 화포를 주무기로 적을 타격하는 병과로, 육군의 핵심 전력이다. 그만큼 소요도 많으며 보병 다음으로 많이 가는 병과 중 하나다. 주변에 숫자를 셀 때 '하나 둘 삼 넷 오 여섯 칠 팔 아홉 공'으로 센다면 포병출신일 확률이 매우 높다. 40kg가 넘는 포탄을 한 손에 거뜬히 들 수 있을 정도로 몸을 키우고 싶거나 수학 계산에 자신있는 사람이라면 포병을 지원하자.",
    similar: "공병 병과",
    opposite: "군종 병과",
    similar_icon: ENGINEER_ICON,
    opposite_icon: PRAY_ICON,
  },
  armor: {
    title: "기갑",
    src: ARMOR,
    hashTag: "# 기갑 # 멋 # 권총 # 왕자",
    description:
      "기갑병과는 전차를 이용하여 기동전을 구사하는 병과로서 보병과 더불어 근접전투를 주로 하는 병과이다. 탱크를 보면 보통 '멋있다' 는 생각이 강하게 든다. 또, 개인화기로 소총 대신 권총을 사용하는데 기갑을 제외한 타 병과에서는 권총을 자주 볼 일이 없기 때문에 더 멋있게 보인다. 영화 퓨리를 보고 한쪽 가슴이 웅장해진다거나, 멋을 중요하게 여긴다거나, 살면서 언제 탱크 타보겠어?! 라고 생각하면 기갑을 지원해보자. ",
    similar: "헌병 병과",
    opposite: "보병 병과",
    similar_icon: POLICE_ICON,
    opposite_icon: INFANTRY_ICON,
  },
  engineer: {
    title: "공병",
    src: ENGINEER,
    hashTag: "# 공병 # 군대가면 철 든다 # SCV # 들엇",
    description:
      "공병병과는 아군 기동을 원활하게 보장하고 장애물 설치를 통해 적의 기동을 지연시키는것이 공병의 주 임무다. K-2보다 삽을 더 소중히 여길정도로 삽을 사용하는 일이 많다. ' 총검은 녹슬어도 삽날은 빛난다 ' 는 속담이 있다. 놀라운 점은 ' 무에서 유를 창조한다. ' 조립하거나 부수거나 고치는것에 희열(?)감을 느낀다면 공병을 지원하자.",
    similar: "헌병 병과",
    opposite: "군악 병과",
    similar_icon: POLICE_ICON,
    opposite_icon: BAND_ICON,
  },
  signal: {
    title: "통신",
    src: SIGNAL,
    hashTag: "# 통신 # 훅 훅 - 하나 둘 삼 넷 # 니퍼 # 어디갔지",
    description:
      " 통신병과는 군사 통신에 관한 임무를 맡은 병과다. 트레이드마크는 니퍼와 야전전화기. K-1보다 니퍼가 소중할 정도로 통신병은 니퍼를 사용하는 일이 매우 많다. 보통 ' 어디어디를 연결 하고 싶은데.. '라고 하면 통신병들이 움직인다고 생각하는것이 편하다. 황무지에서 내가 세운 안테나로 전파가 터질때의 쾌감을 느끼고 싶거나 선을 깔끔하게 정리하고 싶은 강박감이 있다면 당장 통신병과를 지원하자.",
    similar: "병기 병과",
    opposite: "보병 병과",
    similar_icon: WEAPON_ICON,
    opposite_icon: INFANTRY_ICON,
  },
  intelligence: {
    title: "정보",
    src: INTELLIGENCE,
    hashTag: "# 정보 # 보안은 # 생명",
    description:
      " 정보병과는 작전이 원할하게 진행되기 위해 군사 정보를 수집하거나 생산하여 전파하고 적의 활동으로부터 아군을 보호하는 것이 주 임무다. 병과 이름만 들어보면 모두가 007 첩보 요원처럼 비밀 침투기지를 습격하는 것처럼 보이지만, 일부만 해당되는 사항이고 주로 전투정보 혹은 군사보안을 다루게 된다. 자신이 첩보를 수집하는 것을 좋아하거나 통계와 분석에 능통하다면 정보병과를 지원하자.  ",
    similar: "통신 병과",
    opposite: "정훈 병과",
    similar_icon: SIGNAL_ICON,
    opposite_icon: AFFAIR_ICON,
  },
  affair: {
    title: "정훈",
    src: AFFAIR,
    hashTag: " # 정훈 # 사진 촬영하겠습니다! # 파이팅 하겠습니다! ",
    description:
      "정훈병과는 공보작전(국민으로부터 신뢰성을 확보하고, 장병들을 대상으로 하는 정신교육)을 담당하는 병과다. 정훈병과는 ' 카메라 ' 를 빼놓지 않을 수 없는데 정훈은 총기보다 카메라를 더 소중히 여길 정도로 카메라를 많이 사용하고 홍보자료 제작을 위해 영상작업을 많이 하는편이다. 자신이 정신개조에 자신있다거나 군 생활동안 사진, 영상물 작업 실력을 급속도로 키우고 싶다면 정훈병과를 지원하자.",
    similar: "군종 병과",
    opposite: "병기 병과",
    similar_icon: PRAY_ICON,
    opposite_icon: WEAPON_ICON,
  },
  band: {
    title: "군악",
    src: BAND,
    hashTag: "# 군악 # 마칭밴드 # 묵념곡 # 챙",
    description:
      "군악병과는 군대에서 각종 행사에 사용하는 군악을 직접 연주하는 병과다. 보통의 타 병과는 대대급으로 자대배치를 받는 반면, 군악대는 최소 사단급이상에 배치받기 때문에 높으신(?) 분들을 만날 확률이 매우 높다. A급 군악대에 입대하기 위해서는 최소 전공자 수준 이상의 실력과 오디션을 걸쳐 선발하므로 참고하자. 자신이 마칭밴드에 환상이 있거나 웅장한 음악을 연주하고 싶다면 군악병과를 지원하자.",
    similar: "통신 병과",
    opposite: "병기 병과",
    similar_icon: SIGNAL_ICON,
    opposite_icon: WEAPON_ICON,
  },
  medic: {
    title: "의무",
    src: MEDIC,
    hashTag: "# 의무 # 메딕 # 엠뷸 # 살려야 한다",
    description:
      "의무병과는 의료관련 업무를 담당하는 병과다. 꿀병과라는 소문이있지만 남들 훈련할 때 근무하고 남들 운동할 때 훈련하고 남들 휴식할 때 남들 아플때 똑같이 아픈 병과다. 자신이 학교에서 나이팅 게일 선서를 되뇌었거나 의료 관련 면허가 있다면 주저없이 의무 병과를 지원하자. 운이 좋아 군 병원에 배치 받으면 나름 대우를 받고 자신의 전공과 동일한 부서에 배치된다면 경력도 인정된다.  ",
    similar: "군종 병과",
    opposite: "보병 병과",
    similar_icon: PRAY_ICON,
    opposite_icon: INFANTRY_ICON,
  },
  police: {
    title: "헌병",
    src: POLICE,
    hashTag: "# 군사경찰 # 헌병 # 군기순찰 # 카리스마",
    description:
      "군사경찰병과는 군대 내 치안을 담당하는 경찰과 같은 역할을 하는 병과다. 밖에서 멋진 완장을 단 군인이 있다면 군사경찰일 확률이 높다. 군사경찰의 이름처럼 근무가 고되고 치안활동이 쉽지 않은만큼 지원조건도 까다롭다. 자신이 키가 175cm 이상(남성기준)에 용모가 단정하고 사상이 올바르거나 규정, 규율에 맞는 행동을 좋아하면 군사경찰을 지원하자. ",
    similar: "병기 병과",
    opposite: "보병 병과",
    similar_icon: WEAPON_ICON,
    opposite_icon: INFANTRY_ICON,
  },
  pray: {
    title: "군종",
    src: PRAY,
    hashTag: "# 군종 # 초코파이 # 땡보",
    description:
      "군종병과는 군 내에서 예배, 미사, 법회 등 종교 관련 업무를 담당하는 병과다. 군종은 훈련이 계획되어 있는 평일보다 매주 주말(특히, 일요일)이 가장 바쁘다. 자신이 미래에 종교 관련 직업을 가질 예정이거나, 악기(찬송가)를 잘 다룰 줄 안다면 군종병과를 지원하자. 만약, 부대가 연대급 이상이고 종교시설이 ' 영외 ' 에 있는 부대에 배치 받았다면.. 당신은 ' 땡보직 '의 호칭이 더 잘 어울릴 것이다.",
    similar: "군악 병과",
    opposite: "기갑 병과",
    similar_icon: BAND_ICON,
    opposite_icon: ARMOR_ICON,
  },
  weapon: {
    title: "병기",
    src: WEAPON,
    hashTag: "# 병기 # 전투장비지휘검열 # 샾밴 # 수리반",
    description:
      "병기병과는 병기(전투를 위해 만들어진 도구)의 수리 및 수리부속 보급과 반납을 담당하는 병과다. 군 생활에 95% 이상은 수리의 연속인데 그 중 ' 전투장비지휘검열(연 1회 진행되는 군용 장비 검열) ' 은 군 생활의 피날레를 장식하는 검열이다. 자신이 기계를 어느정도 다룰 줄 알고 고가의 장비를 하나씩 뜯으며 고치는 것에 희열(?)을 느낀다면 병기병과로 입대하여 전투장비지휘검열을 완벽하게 받고 ' A급 인재 ' 호칭을 얻어보자.",
    similar: "통신 병과",
    opposite: "정훈 병과",
    similar_icon: SIGNAL_ICON,
    opposite_icon: AFFAIR_ICON,
  },
};

export default RESULT;
