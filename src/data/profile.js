export const assets = {
  hero: new URL("../../纯背景.png", import.meta.url).href,
  heroReference: new URL("../../头图参考.png", import.meta.url).href,
  leftVine: new URL("../../左侧藤蔓素材图.png", import.meta.url).href,
  rightVine: new URL("../../右侧藤蔓与花素材透明图.png", import.meta.url).href,
  rightFlower: new URL("../../右侧大花素材图.png", import.meta.url).href,
  leftBottomTentacle: new URL("../../左下角触手透明素材图.png", import.meta.url).href,
  rightBottomTentacle: new URL("../../右下角触手素材图.png", import.meta.url).href,
  starParticles: new URL("../../星光粒子图.png", import.meta.url).href,
  dropParticles: new URL("../../水滴粒子图.png", import.meta.url).href,
  flowerOpen: new URL("../../花朵睁眼图.png", import.meta.url).href,
  flowerClosed: new URL("../../花朵闭眼图.png", import.meta.url).href,
  map: new URL("../../成长map路径参考图.png", import.meta.url).href,
  mapDetail: new URL("../../map节点放大图加文字后参考示例.png", import.meta.url).href,
  bigIsland: new URL("../../大浮岛素材图.png", import.meta.url).href,
  dailySpiritOpen: new URL("../../权杖精灵睁眼素材图.png", import.meta.url).href,
  dailySpiritClosed: new URL("../../权杖精灵闭眼图.png", import.meta.url).href,
  cardBackImage: new URL("../../卡片素材图.png", import.meta.url).href,
  vineEyesOpen: new URL("../../藤蔓延伸整个网页睁眼图.png", import.meta.url).href,
  vineEyesClosed: new URL("../../藤蔓延伸整个网页闭眼图.png", import.meta.url).href,
  campusReference: new URL("../../campus experience部分需要呈现的样子.png", import.meta.url).href,
  nodeIcons: [
    new URL("../../城市节点图.png", import.meta.url).href,
    new URL("../../圆拱门节点图.png", import.meta.url).href,
    new URL("../../爱心节点图.png", import.meta.url).href,
    new URL("../../星星节点图.png", import.meta.url).href,
    new URL("../../右侧大花素材图.png", import.meta.url).href
  ],
  resume: new URL("../../黄园实习岗简历_副本2.pdf", import.meta.url).href,
  books: [
    new URL("../../书籍1-李明博自传_副本.jpg", import.meta.url).href,
    new URL("../../书籍2-当下的力量_副本.jpg", import.meta.url).href,
    new URL("../../书籍3-撒哈拉的沙漠_副本.jpg", import.meta.url).href
  ],
  nonprofitInternship: [
    new URL("../../公益机构实习照片1_副本.JPG", import.meta.url).href,
    new URL("../../公益机构实习照片2_副本.JPG", import.meta.url).href,
    new URL("../../公益机构实习照片3_副本.JPG", import.meta.url).href
  ],
  internshipPhotos: {
    partyOffice: [
      new URL("../../党政办实习照片1.jpeg", import.meta.url).href,
      new URL("../../党政办实习照片2.jpeg", import.meta.url).href,
      new URL("../../党政办实习照片3.JPG", import.meta.url).href
    ],
    civilAffairs: [new URL("../../民宗局实习照片.JPG", import.meta.url).href],
    techCompany: [new URL("../../科技公司实习照片.JPG", import.meta.url).href]
  },
  otherAttempts: [
    new URL("../../志愿服务记录图片.jpg", import.meta.url).href,
    new URL("../../东鹏特饮分析截图.jpg", import.meta.url).href,
    new URL("../../旅游达人大赛照片素材.jpg", import.meta.url).href
  ],
  dailyPhotos: [
    new URL("../../沙漠.jpeg", import.meta.url).href,
    new URL("../../上一次逛展.JPG", import.meta.url).href,
    new URL("../../喜欢一个人.JPG", import.meta.url).href,
    new URL("../../最喜欢的酒.JPG", import.meta.url).href,
    new URL("../../不抽烟.JPG", import.meta.url).href,
    new URL("../../昆明之旅.JPG", import.meta.url).href,
    new URL("../../平常上课的样子.jpeg", import.meta.url).href,
    new URL("../../三月的樱花季.JPG", import.meta.url).href,
    new URL("../../我和我的好朋友.JPG", import.meta.url).href
  ],
  storyScenes: [
    new URL("../../城市节点放大图.png", import.meta.url).href,
    new URL("../../圆拱门节点放大图.png", import.meta.url).href,
    new URL("../../爱心节点放大图.png", import.meta.url).href,
    new URL("../../星星节点放大图.png", import.meta.url).href,
    new URL("../../map节点放大图加文字后参考示例.png", import.meta.url).href
  ]
};

export const profile = {
  name: "Huang Yuan",
  chineseName: "黄园",
  tagline: "Labor and Social Security Student",
  subtitle: "Aspiring HRBP | Lifelong Learner | Explorer of Growth",
  school: "贵州大学（211）",
  major: "劳动与社会保障专业",
  email: "1079767350@qq.com",
  phone: "17885046044",
  assets,
  about: [
    "我目前就读于贵州大学劳动与社会保障专业，系统学习人力资源管理、薪酬管理、劳动与社会保障法学、社会保险学等课程。",
    "我关注人与组织之间的连接，也在行政支持、材料审核、活动组织、项目执行和 AI 评估等真实场景中持续训练自己的沟通、统筹与细节管理能力。",
    "未来希望向 HRBP 方向成长，在理解业务与人的基础上，为团队建立更有温度也更有效率的协作方式。"
  ],
  careerJourney: [
    {
      title: "党政办实习生",
      icon: assets.nodeIcons[0],
      scene: assets.storyScenes[0],
      period: "2024.01 - 2024.02",
      place: "望谟县蟠桃街道党政办",
      intro:
        "这是我较早接触基层行政工作的起点。我参与党员档案数字化录入与合规性审查，协助群众接待、政策咨询、会议记录与纪要整理，也参与苗年节活动的人员协调和后勤支持。",
      growth: ["档案合规意识", "群众沟通", "会议记录", "活动协调"],
      details: [
        "在党政办实习期间，我从基础、细致、重复但重要的行政工作入手，理解基层组织运转中信息准确性与流程规范的重要性。",
        "群众接待和政策咨询让我开始训练耐心表达与倾听能力；会议纪要和活动保障则提升了我对现场节奏、任务分工和后续整理的把控。"
      ],
      images: assets.internshipPhotos.partyOffice,
      reflection:
        "我的第一份实习记忆犹新，遇到一群很好的哥哥姐姐带着我学习。做的事情范围也特别广，小到办公室的文件处理，大到全县性的活动组织。感受到基层工作特别繁杂且累人，基层加班是常态，真正的为人民服务！（PS：单位食堂非常好吃，特别是火锅。）"
    },
    {
      title: "办公室实习",
      icon: assets.nodeIcons[1],
      scene: assets.storyScenes[1],
      period: "2025.01 - 2025.02",
      place: "望谟县民宗局",
      intro:
        "我负责群众接待与政策咨询，并协助完成民族成分变更材料的审核、整理与归档，在真实政务场景中提升材料判断和服务意识。",
      growth: ["材料审核", "政策沟通", "信息整理", "服务意识"],
      details: [
        "在民宗局的实习强化了我对公共服务窗口工作的理解：既要准确回应群众问题，也要在材料处理上保持谨慎和清晰。",
        "多份申请材料的整理经历，让我更加重视规范、证据链和细节，也培养了面对咨询时稳定、有条理的沟通方式。"
      ],
      images: assets.internshipPhotos.civilAffairs,
      reflection:
        "相对于上一份实习来说，我更加游刃有余了。我被安排在了“两个老前辈”的办公室，除了平时的工作外，我还跟着学习了怎么写公文，以及系统性地了解县里主要民族的历史进程。虽然我也是少数民族，却是第一次站在“官方”视角观看那些日常与我们息息相关的东西是怎么发展的。"
    },
    {
      title: "贵州项目专员实习",
      icon: assets.nodeIcons[2],
      scene: assets.storyScenes[2],
      period: "2025.07 - 2025.08",
      place: "杭州六个大包公益机构",
      intro:
        "我协助项目团队推进日常行政支持与项目材料整理，独立完成夏令营课程内容设计并组织活动，同时承担公众号文章撰写、视频剪辑等传播任务。",
      growth: ["项目执行", "课程设计", "活动组织", "内容传播"],
      details: [
        "这段公益机构实习让我从行政支持走向更完整的项目参与：既要保障材料、流程和执行效率，也要面向真实参与者设计课程和活动体验。",
        "夏令营课程内容设计、现场组织和宣传产出让我把策划、沟通、执行与复盘连接起来，也让我更清楚地看见公益项目中人的需求和组织协作的价值。"
      ],
      images: assets.nonprofitInternship,
      reflection:
        "对我来说，这是一次多方面收获的实习。前期在县份上的项目点正常处理项目工作，后期到不同镇上开展夏令营，给了我一段难忘的经历。所有工作再累，看到孩子们欢笑的神情，那一切就值得。有时候会恍惚地感慨：这些孩子绕过一重重的山，需要太多力气；好在总有人愿意在前方开路，未来我想我会成为这样的人。"
    },
    {
      title: "豆包训练项目实习",
      icon: assets.nodeIcons[3],
      scene: assets.storyScenes[3],
      period: "2026.01 - 2026.02",
      place: "贵州健信安科技有限公司",
      intro:
        "我参与 AI 模型产物测验，依据 rubric 规则为产物打分并撰写说明，训练自己用结构化标准判断内容质量。",
      growth: ["AI 评估", "结构化判断", "质量说明", "规则理解"],
      details: [
        "在豆包训练项目中，我需要根据明确规则对模型产物进行评分，并用可追溯的语言解释判断依据。",
        "这段经历训练了我的标准意识、逻辑表达和质量敏感度，也让我接触到 AI 产品背后需要大量细致评估与规则协同。"
      ],
      images: assets.internshipPhotos.techCompany,
      reflection:
        "这是一次让我适应快节奏和高效率要求的实习。每天都在不停开会、对齐 diff、更新规则。很庆幸能参与这个项目：相对于同批次很多专业门槛很高的项目，我参与的训练项目更依赖理解力，也让我这样非理工科背景的学生，能够直接接触豆包 AI 正在往哪些方向发展、又是怎样发展的。"
    },
    {
      title: "Future HRBP",
      icon: assets.nodeIcons[4],
      scene: assets.storyScenes[4],
      period: "Next Chapter",
      place: "目标方向",
      intro:
        "未来希望继续向 HRBP 方向成长，将专业知识、组织理解、沟通协调和业务意识结合起来，成为连接人与团队目标的伙伴。",
      growth: ["业务理解", "组织沟通", "人才发展", "协作机制"],
      details: [
        "我的下一站不是一个已经完成的经历，而是一条正在靠近的职业目标：在组织中理解业务需求，也理解人的状态与成长路径。",
        "我希望继续积累人力资源相关实践，把薪酬、劳动关系、组织沟通、员工体验与项目执行能力连接起来，成为真正能支持团队成长的 HRBP。"
      ],
      images: [],
      reflection: "",
      showGalleryPlaceholder: false
    }
  ],
  campus: [
    {
      title: "学生会素拓部",
      period: "Campus Chapter 01",
      image: assets.nodeIcons[2],
      text: "负责活动的组织与记录，并参与制作透视表，推进综测相关工作有序进行。",
      growth: ["活动组织", "记录整理", "数据透视", "流程推进"]
    },
    {
      title: "SRT项目",
      period: "Campus Chapter 02",
      image: assets.nodeIcons[4],
      text: "SRT为贵州大学一项支持学生自主开展科研而提供资金与导师指导的项目。 本项目在导师指导下，对“康养➕文旅”方向进行研究，在贵州境内进行实地调研与资料收集，项目成果已申报结项，同时其成果参与其他学科竞赛并获得奖项",
      growth: ["科研调研", "资料收集", "项目结项", "竞赛转化"]
    },
    {
      title: "创业社成员",
      period: "Campus Chapter 03",
      image: assets.nodeIcons[0],
      text: "参与猎聘初创期引流合作，并搭建校园学生交流圈，在探索型任务中训练连接资源和推动协作的能力。",
      growth: ["资源连接", "社群搭建", "探索执行"]
    },
    {
      title: "心理中心行政助理",
      period: "Campus Chapter 04",
      image: assets.nodeIcons[1],
      text: "负责来访接待、预约安排与简单电话心理咨询，在高敏感度沟通场景中培养倾听、共情和秩序维护能力。",
      growth: ["倾听沟通", "预约协调", "情绪感知"]
    },
    {
      title: "Awards & Skills",
      period: "Campus Chapter 05",
      image: assets.nodeIcons[3],
      text: "第十四届“挑战杯”中国大学生创业计划竞赛校赛一等奖、中国国际大学生创新大赛校赛铜奖；英语四级、普通话二甲，自学 PS 与剪辑，熟练掌握 Office。",
      growth: ["计划书撰写", "调研策划", "抗压协作", "工具应用"]
    }
  ],
  books: [
    {
      title: "《经营未来》",
      note: "起初是被互联网“贫穷的礼物”这一话题吸引而观看。整本书看下来，个人觉得前半部分讲自己，后半部分在讲韩国。虽然后半部分夹杂了些许政治意味，并不能完全体现李明博的个人魅力。但我还是觉得这本书很值得青年人观看而学习他的“气魄”。如轴一般的坚持原则，如水一般的灵活思想。",
      image: assets.books[0]
    },
    {
      title: "《当下的力量》",
      note: "这是一本我从大二看到大三的书。感觉到被情绪或欲念支配的痛苦时，我总会打开这本书。它不是明确的方法论，而是引导你思考如何意识到自我的存在，自如地活在当下。",
      image: assets.books[1]
    },
    {
      title: "《撒哈拉的沙漠》",
      note: "我很喜欢三毛的作品，感受她对世界的观察方式和细腻程度，仿佛让我找到了知音。想了很多句子去描述喜欢这本书的原因，删删改改还是决定只留下两个词：爱与灵性。",
      image: assets.books[2]
    }
  ],
  daily: [
    { src: assets.dailyPhotos[0], title: "沙漠", description: "去的最远的地方是新疆，看到了地图里的沙漠。", date: "Memory 01", label: "Daily" },
    { src: assets.dailyPhotos[1], title: "上一次逛展", description: "平时喜欢逛博物馆和展览，这幅《谭嗣同》记忆尤深。", date: "Memory 02", label: "Daily" },
    { src: assets.dailyPhotos[2], title: "喜欢一个人", description: "一个人到处逛其实并不孤独。", date: "Memory 03", label: "Daily" },
    { src: assets.dailyPhotos[3], title: "最喜欢的酒", description: "涩的不行，酸的不要，这款椰林飘香刚刚好。", date: "Memory 04", label: "Daily" },
    { src: assets.dailyPhotos[4], title: "不抽烟", description: "不抽烟，抽薯条。", date: "Memory 05", label: "Daily" },
    { src: assets.dailyPhotos[5], title: "昆明之旅", description: "昆明是一个我很喜欢的城市。", date: "Memory 06", label: "Daily" },
    { src: assets.dailyPhotos[6], title: "平常上课的样子", description: "憔悴中带一点点活力。", date: "Memory 07", label: "Daily" },
    { src: assets.dailyPhotos[7], title: "三月的樱花季", description: "三月学校里的樱花就开了，恰好是我的生日。", date: "Memory 08", label: "Daily" },
    { src: assets.dailyPhotos[8], title: "我和我的好朋友", description: "开心的时光就是和朋友待在一起。", date: "Memory 09", label: "Daily" }
  ],
  otherAttempts: [
    {
      title: "志愿活动",
      keywords: "公益参与 / 现场协作 / 服务意识",
      intro: "参与多类志愿服务，在真实服务场景中理解协作与责任。",
      detail:
        "参与 2024 年春节车站志愿服务、中秋十字街社区志愿服务，以及一些校内志愿活动等，在真实服务场景中理解协作与责任，观察不同人群。",
      image: assets.otherAttempts[0]
    },
    {
      title: "东鹏饮料公司分析报告",
      keywords: "品牌观察 / 公司分析 / 商业理解",
      intro: "从行业报告开始，围绕企业与市场进行资料整理与分析。",
      detail:
        "这是一次课程作业型探索。我从分析行业报告开始，围绕企业发展、品牌定位和市场竞争进行资料整理与分析，训练自己把资料转化为结构化判断。",
      image: assets.otherAttempts[1]
    },
    {
      title: "旅游达人大赛参与经历",
      keywords: "文案编写 / 视频剪辑 / 内容表达",
      intro: "从调研到策划、文案和剪辑，是大一参加的第一个比赛。",
      detail:
        "这是我大一参加的第一个比赛，主题是为贵州的景点制作宣传片。虽然没有获奖，但从调研到完成内容策划、文案撰写与剪辑尝试，让我看到了自己的表达潜能。",
      image: assets.otherAttempts[2]
    }
  ],
  cardBackImage: assets.cardBackImage
};
