import enLocale from 'element-ui/lib/locale/lang/en';

const en = {
	tip: {
		noData: 'No data'
	},
	subscribe: {
		userName: 'Please enter your name',
		phone: 'Please enter your mobile phone number',
		email: 'Please enter your email address',
		option: 'Please select at least one subscription'
	},
	contact :{
		tip: 'Sorry, there are unfilled items'
	},
  systemName: {
    name: 'LX_ADMIN_VUE'
  },
  sysSetting: {
    refresh: 'Refresh',
    close: 'Close',
    closeOt: 'Close Others',
    closeAll: 'Close All'
  },
  keyWords: {
    loginType1: 'password login',
    loginType2: 'verification code login',
    accountTip: 'no account?',
    registerTxt: 'go to register',
    forgetTxt: 'forget password',
    btnLoginTxt: 'log in',
    btnNextTxt: 'next step',
    getCodeTxt: 'get verification code',
    switchTxt: 'switch language',
    resetPwd: 'reset password',
    registerAccount: 'register account',
    stepTxt: 'step',
    resetSuccessTxt: 'password reset succeeded',
    loginTxt: '去登陆',
    userRegisterTxt: 'go to login',
    staffRegisterTxt: 'employee registration'
  },
  placeholders: {
    defaultHolder: 'please enter',
    defaultSelectHolder: 'please choose',
    accountHolder: 'please enter the registered mobile phone number/email',
    passwordHolder: 'please enter the password',
    codeHolder: 'please enter verification code',
    userNameHolder: 'your username',
    companyHolder: 'your company name',
    provinceHolder: 'please select province',
    cityHolder: 'please select city',
    districtHolder: 'please select area',
    addressHolder: 'please enter detailed address',
    loginPwdHolder: 'please enter your password',
    loginPwdAgainHolder: 'please enter the login password again',
    staffIdHolder: 'please enter your job number',
    staffCompanyHolder: 'please select a branch',
    staffDepartmentHolder: 'please select a department',
    staffJobHolder: 'please select a position',
    changePwdHolder: 'please set an 8-digit password',
    changePwdAgainHolder: 'please enter the password again',
    policyNameHolder: 'system name',
    entryTimeHolder: '录入时间',
    systemAccountHolder: 'entry Time',
    clientNameHolder: "client's name",
    addressHolder2: 'address',
    telephoneHolder: 'landline phone',
    clientType: 'customer type',
    len6Holder: 'not more than 60 words',
    len10Holder: 'not more than 100 words',
    editHolder: 'click here for editing tips',
    autoCompanyNameHolder: '系统自动拉取客户公司名称',
    autoCompanyAddressHolder: '系统自动拉取客户公司地址',
    autoUserHolder: '选择联系人后自动获取',
    fuzzySearchHolder: '模糊查询',
    autoConnectHolder: '自动关联',
    autoComputedHolder: '自动计算',
    autoGetHolder: '自动获取',
    autoGetHolder2: '系统自动带入',
    autoGetHolder3: '系统自动带入 可编辑',
    autoGenerateHolder: '自动生成',
    testHolder: '自动计算小计费用合计金额',
    serviceHolder: '检测费用*1.15',
    moneyDefaultHolder: '请填写，精确至小数点后两位；不填则默认为0.00',
    bankDefaultHolder: '首次需填写，第二次开始预填上一次信息，可编辑',
    shortMoneyDefaultHolder: '不填则默认为0.00',
    getNameHolder: '拉取该员工姓名',
    getTelphoneHolder: '拉取该员工座机电话',
    getMobileHolder: '拉取该员工手机号',
    getEmailHolder: '拉取该员工邮箱',
    autoCompanyAddressHolder2: '系统自动拉取客户公司地址,可编辑',
    autoBankHolder: '选择账号名称后自动拉取',
    requiredHolder: '必填',
    optionalHolder: '选填',
    returnRequiredHolder: '如需退回样品则必填此项',
    selectHolder: '根据选择的检测项目自动获取',
    decideHolder: '判定则必填',
    require6Holder: '费用信息中如点击的是3%增值税普通发票则选填，6%增值税专用发票则必填',
    autoTabHolder: '自动填入填表人工号',
    customerNameHolder: '与工商营业执照的名称保持一致',
    supplierNameHolder: '供应商名称',
    supplierNatureHolder: '供应商性质',
    supplierCodeHolder: '供应商代码',
    supplierTypeHolder: '供应商类型',
    qualificationBookHolder: '请输入证书名称',
    qualificationAnnexHolder: '请输入附件名称',
    replyAccountHolder: '回复账号',
    startTimeHolder: '开始日期',
    endTimeHolder: '开始日期',
    startTimeHolder2: '开始日期时间',
    endTimeHolder2: '开始日期时间',
    inquireStartTimeHolder: '发起开始日期',
    inquireEndTimeHolder: '发起开始日期',
    autoGetAccountHolder: '自动获取工号ID',
    autoGenerateNoHolder: '根据规范自动生成',
    autoGenerateNoHolder2: '根据规范自动生成，例ETP001200115003',
    autoGetTimeHolder: '自动获取当前时间',
    autoGetTimeHolder2: '自动获取当天日期',
    dateTimeHolder: '选择日期时间',
    customerItemHolder: '输入时下拉框筛选出当前账号的所有客户',
    priceHolder: '选填，如果客户有对比价格或预算价格，可以填写',
    lostReasonHolder: '请输入丢单原因，不超过50字',
    returnReasonHolder: '请输入审核不通过原因，不超过50字',
    returnReasonHolder2: '请输入驳回申请原因，不超过50字',
    inquireNoHolder: '报价单编号',
    caseNoHolder: '案件编号',
    fuzzyAccountHolder: '输入时模糊查询客户账户名',
    remarkHolder: '填写备注',
    complaintHolder: '填写客户提出客诉原因',
    productTypeHolder: '产品类别',
    productNameHolder: '产品名称',
    productStandardHolder: '产品标准',
    testProjectHolder: '检测项目',
    projectMethodHolder: '项目方法',
    referenceChargesHolder: '参考收费',
    referenceCycleHolder: '参考周期',
    qualificationAbilityHolder: '资质能力',
    referenceSubcontractFeeHolder: '参考分包费',
    standardNoHolder: '标准号',
    standardNameHolder: '标准名称',
    sampleNameHolder: '样品名称',
    testStandardHolder: '检测标准',
    reportIssuingUnitHolder: '报告出具单位',
    infoNameHolder: '资料名称',
    issuedHolder: '发布单位',
    flowNoHolder: '流水号',
    flowTypeHolder: '选择类别',
    applicationReasonHolder: '申请事由',
    unitHolder: '单位/元',
    unitHolder2: '单位/元 不可超过申请金额',
    unitHolder3: '单位/公里',
    applicationStartTimeHolder: '申请开始日期',
    applicationEndTimeHolder: '申请开始日期',
    purchaseItemHolder: '采买物品',
    supplierHolder: '供应商',
    dateHolder: '选择日期',
    carReasonHolder: '用车事由',
    applicationAccountHolder: '申请账号',
    departmentHolder: '所属部门',
    typeHolder: '类别',
    abstractHolder: '摘要',
    applicationStatusHolder: '申请状态',
    receivingAccountHolder: '收款账户',
    staffIdHolder2: '工号',
    staffNameHolder: '员工姓名',
    mobileHolder: '手机号',
    userHolder: '用户姓名',
    companyNameHolder: '公司名称',
    editInstr: '点此编辑批示',
    testStandardApproach: '检测方法或标准'
  },
  labels: {
    accountTxt: '账号',
    accountTxt1: '注册账号',
    codeTxt: '验证码',
    passwordTxt: '新密码',
    passwordAgainTxt: '再次输入',
    passwordTxt1: '登录密码',
    passwordAgainTxt1: '确认密码',
    userName: '用户名称',
    companyName: '公司名称',
    telephone: '座机号码',
    email: '邮箱号码',
    reportAddress: '报告寄送地址',
    invoiceAddress: '发票寄送地址',
    staffId: '员工工号',
    company: '所属公司',
    department: '所属部门',
    job: '所属职位',
    mobile: '手机',
    wechat: '微信'
  },
  btnTexts: {
    search: '搜索',
    clear: '清空',
    download: '下载',
    uploadImg: '上传图片',
    uploadSystem: '上传制度',
    updateSystem: '更换制度',
    uploadFile: '上传文件',
    uploadInfo: '上传资料',
    uploadCriteria: '上传标准',
    updateCriteria: '更改资料',
    updateCriteria2: '更改标准',
    uploadTemplate: '上传模板',
    uploadCertificate: '上传证书',
    uploadAmount: '上传收费',
    uploadAnnex: '上传附件',
    uploadClick: '点击上传',
    checkFile: '查看文件',
    checkQualification: '查看资质',
    notAuthority: '暂无权限',
    modify: '修改',
    delete: '删除',
    addSubAccount: '新增子账号',
    create: '创建',
    cancel: '取消',
    authorityManagement: '权限管理',
    resetAuthority: '重置权限',
    edit: '编辑',
    settingPermission: '设置权限',
    approved: '通过',
    reject: '驳回',
    fillFeeApplication: '费用申请填报',
    fillPurchaseApplication: '采买申请填报',
    fillCarApplication: '用车申请填报',
    fillCarPaylication: '支付申请填报',
    addPurchaseType: '新增采买分类',
    addPayType: '新增申请类别',
    addCategory: '新增流水类别',
    submit: '提交',
    save: '保存',
    saveChange: '保存修改',
    saveEdit: '保存编辑',
    determine: '确定',
    addFlow: '新增流水',
    upload: '上传',
    view: '查看',
    clickView: '点击查看',
    viewNotes: '查看备注',
    modifyInfo: '信息修改',
    addRecord: '添加记录',
    maintainRecord: '维护记录',
    oralQuote: '口头报价',
    writtenQuote: '书面报价',
    signingContract: '签订合同',
    addAssociatedCustomer: '新增关联客户',
    addAssociatedSupplier: '新增关联供应商',
    instruction: '批示',
    instructed: '已批示',
    viewInstruction: '查看批示',
    uninstructed: '未批示',
    addContactPerson: '新增联系人',
    add: '新增',
    add2: '添加',
    viewQuotation: '查看报价单',
    signing: '去签约',
    submitReview: '提交审核',
    riseLevel: '升级',
    reviewing: '审核中',
    passed: '已通过',
    submitReply: '提交回复',
    makeLost: '标为丢单',
    openCase: '开案',
    finishedTest: '测试完成',
    complaint: '客诉',
    deal: '标为解决',
    reply: '回复'
  },
  tableTitles: {
    serialNumber: '序号',
    serialNumber2: '项目序号',
    uploadAccount: '上传账号',
    uploadTime: '上传时间',
    uploadImg: '上传图片',
    systemName: '制度名称',
    systemContent: '制度内容',
    visibleRange: '可见范围',
    operating: '操作',
    name: '姓名',
    mobile: '手机号',
    mobile2: '手机号码',
    userId: '用户ID',
    action: '操作动作',
    operationContent: '操作内容',
    operatingTime: '操作时间',
    organizationStructure: '企业组织架构',
    jobId: '工号',
    company: '公司',
    department: '部门',
    job: '职位',
    telephone: '座机',
    telephone2: '座机号码',
    telephone3: '座机电话',
    phone: '手机',
    email: '邮箱',
    email2: '邮箱地址',
    wechat: '微信',
    sex: '性别',
    reportingAddress: '报告寄送地址',
    invoiceAddress: '发票寄送地址',
    rolePermission: '角色权限',
    applicationDate: '申请日期',
    applicationAccount: '申请账号',
    applicationAmount: '申请金额',
    applicationReason: '申请事由',
    whetherAdvance: '是否预支',
    advanceExpenses: '预支费用',
    applicationStatus: '申请状态',
    company2: '所属公司',
    department2: '所属部门',
    job2: '所属岗位',
    useDate: '使用日期',
    purchaseItem: '采买物品',
    estimatedCost: '预计费用',
    supplier: '供应商',
    carTime: '用车时间',
    carReason: '用车事由',
    estimatedKilometers: '预计公里数',
    type: '类别',
    abstract: '摘要',
    amount: '金额',
    receivingAccountInfo: '收款账户信息',
    annex: '附件',
    recorder: '记录人',
    date: '日期',
    accountType: '账户类型',
    flowNumber: '流水号',
    income: '收入',
    expend: '支出',
    balance: '余额',
    otherAccount: '对方账户',
    infoLanguage: '资料语言',
    infoContent: '资料内容',
    issued: '发布单位',
    reportLanguage: '报告语言',
    sampleName: '样品名称',
    testItem: '检测项目',
    testStandard: '检测标准',
    testStandardApproach: '检测方法或标准',
    reportTemplate: '报告模板',
    reportIssuingUnit: '报告出具单位',
    standardNo: '标准号',
    standardName: '标准名称',
    standardLanguage: '标准语言',
    standardContent: '标准内容',
    productCategory: '产品类别',
    productName: '产品名称',
    productStandard: '产品标准',
    projectApproach: '项目方法',
    referenceCharges: '参考收费',
    referenceCycle: '参考周期',
    referenceSampleSize: '参考样品量',
    qualificationAbility: '资质能力',
    supplierCode: '供应商代码',
    referenceSubcontractFee: '参考分包费',
    entryTime: '录入时间',
    clientName: '客户名称',
    clientAddress: '客户地址',
    clientType: '客户类型',
    companyWebsite: '公司网址',
    contactPerson: '联系人',
    maintainTime: '维护时间',
    maintainType: '维护方式',
    maintainContent: '维护内容',
    helpContent: '需协助内容',
    maintainPerson: '维护人',
    companyName: '公司名称',
    companyAddress: '公司地址',
    projectUnitPrice: '项目单价',
    sampleNum: '样品数量',
    subtotalCost: '小计费用',
    expectedCycle: '预计周期',
    qualificationRequire: '资质要求',
    testAmount: '检测费用',
    serviceAmount: '服务费用',
    returnAmount: '大件快递退回费用',
    putAmount: '检测样品工装费用',
    otherAmount: '其他费用',
    summaryAmount: '费用合计',
    RMB: '人民币大写',
    customerService: '客服专员',
    mailAddress: '寄样地址',
    accountName: '账号名称',
    bankAccount: '银行账号',
    bankName: ' 开户银行',
    requester: '委托单位',
    requesterAddress: '委托单位地址',
    productionUnit: '生产单位',
    productionUnitAddress: '生产单位地址',
    ManufacturingUnit: '制造单位',
    ManufacturingUnitAddress: '制造单位地址',
    buyerName: '客户(买家)名称',
    remark: '备注信息',
    model: '型号',
    batchNo: '批号',
    specification: '规格',
    productionDate: '生产日期',
    sampleStatus: '样品状态',
    weatherReturn: '是否退回',
    sampleReturnAddress: '样品退回地址',
    otherRemark: '其他备注',
    weatherDecide: '是否判定',
    decideStandard: '判定标准',
    reportType: '报告类型',
    reportNum: '报告份数',
    reportQualification: '报告资质',
    reportMethod: '报告出具方式',
    companyTax: '公司税号',
    contactPhone: '联系电话',
    tabulation: '制表',
    audit: '审核',
    customerConfirm: '客户确认(盖章)',
    approvalConfirm: '批准(盖章)',
    signingDate: '合同签订日期',
    supplierName: '供应商名称',
    supplierNature: '供应商性质',
    supplierAddress: '供应商地址',
    supplierType: '供应商类型',
    customerQualification: '客户资质',
    signNum: '签约记录',
    complaintNum: '客诉记录',
    caseNo: '案件编号',
    inquireCaseNo: '询价案件编号',
    inquireStartTime: '询价发起时间',
    hopeReplyTime: '期待回复时间',
    realReplyTime: '实际回复时间',
    weatherLater: '是否延迟',
    replyAccount: '回复账号',
    replyStatus: '回复状态',
    referenceStandard: '参考标准',
    projectQualification: '项目资质',
    suggestedPrice: '建议报价/元',
    requireSampleNum: '需要样品量',
    attention: '注意事项',
    laterReason: '延迟原因',
    quoteTime: '报价时间',
    quoteDetail: '报价详情',
    caseStatus: '案件状态',
    inquireOrderNo: '报价单编号',
    inquireAmount: '报价金额/元',
    submitTime: '提交时间',
    signingTime: '签约时间',
    openMoney: '开案业绩/元',
    subcontractMoney: '分包业绩/元',
    netMoney: '净业绩/元',
    complaintCaseNo: '投诉案件编号',
    complaintTimes: '投诉次数',
    complaintPerson: '投诉人',
    complaintReason: '投诉原因',
    dealPerson: '处理人',
    systemAccount: '系统账号',
    lostReason: '丢单原因',
    failReason: '不通过原因',
    userName: '用户名称',
    subAccountNum: '子账号数量',
    infoName: '资料名称',
    openCaseTotalMoney: '开案总金额/元',
    discountedPrice: '优惠金额',
    caseTotalCost: '本次案件合计费用',
    testPeriod: '测试周期',
    prepayment: '预付款',
    subcontractor: '分包供应商',
    sampleNo: '样品编号',
    SubcontractingFee: '分包费用',
    prepareReportOut: '预计出报告时间',
    prepareReportOut2: '预计出报告日期',
    payType: '付款方式',
    ticketType: '发票类型',
    receiveAmount: '收款信息',
    bankName2: '开户行名称',
    sampleGetAddress: '样品寄件地址',
    contactType: '联系方式',
    Qualifications: '资质情况',
    certificateValidity: '证书有效期',
    supplierWritten: '供应商录入',
    supplierCheck: '供应商审核',
    supplierApprove: '供应商批准',
    receiveAmountProgress: '收款进度',
    ContractNo: '合同编号',
    lastParagraph: '尾款',
    payAmount: '支付金额',
    openCasePerson: '开案人员',
    weatherRush: '是否加急',
    weatherSubcontract: '是否分包',
    subcontractReason: '分包原因',
    subcontractNo: '分包合同编号',
    weatherFirstTime: '是否首次分包',
    supplierQualification: '供应商资质',
    prepareContractProject: ' 预分包项目',
    referenceSubcontractingFee: ' 参考分包费用',
    receivedAmount: '到账金额'
  },
  formLabels: {
    userAccountType: '账号类别',
    oldPwd: '原密码',
    newPwd: '新密码',
    newPwdAgain: '再次输入新密码',
    name: '姓名',
    mobile: '手机',
    mobile2: '手机号',
    telephone: '座机',
    telephone2: '座机电话',
    code: '验证码',
    initialPassword: '初始密码',
    jobId: '工号',
    company: '公司',
    department: '部门',
    job: '职务',
    company2: '所属公司',
    department2: '所属部门',
    job2: '所属岗位',
    sex: '性别',
    email: '邮箱',
    wechat: '微信',
    permissionSetting: '权限设置',
    selectRolePermission: '选择角色权限',
    subAccountNum: '子账号数量',
    systemAccount: '系统账号',
    applicationAccount: '申请账号',
    applicationAmount: '申请金额',
    applicationReason: '申请事由',
    whetherAdvance: '是否预支',
    advanceExpenses: '预支费用',
    applicationDate: '申请日期',
    useDate: '使用日期',
    purchaseItem: '采买物品',
    estimatedCost: '预计费用',
    supplier: '供应商',
    carTime: '用车时间',
    carReason: '用车事由',
    estimatedKilometers: '预计公里数',
    type: '类别',
    abstract: '摘要',
    amount: '金额',
    receivingAccount: '收款账户',
    receivingAccountName: '银行开户行',
    receivingAccountNo: '收款账号',
    annex: '附件资料',
    itemName: '物品名称',
    typeName: '类别名称',
    recorder: '记录人',
    date: '日期',
    accountType: '账户类型',
    flowNumber: '流水单号',
    receivedAmount: '到账金额',
    flowType: '流水类型',
    flowAmount: '流水金额',
    flowCategory: '流水类别',
    otherAccount: '对方账户',
    issued: '发布单位',
    infoLanguage: '资料语言',
    infoFile: '资料文件',
    reportLanguage: '报告语言',
    sampleName: '样品名称',
    testItem: '检测项目',
    standardNo: '标准号',
    reportIssuingUnit: '报告出具单位',
    reportTemplate: '报告模板文件',
    standardName: '标准名称',
    standardLanguage: '标准语言',
    standardFile: '标准文件',
    productCategory: '产品类别',
    productName: '产品名称',
    projectApproach: '项目方法',
    referenceCharges: '参考收费/元',
    referenceCycle: '参考周期',
    referenceSampleSize: '参考样品量',
    qualificationAbility: '资质能力',
    supplierCode: '供应商代码',
    referenceSubcontractFee: '合作费用/元',
    remark: '备注',
    uploadGuide: '批量上传指南',
    uploadFile: '上传文件',
    uploadInfo: '上传资料',
    clientName: '客户名称',
    associatedCustomer: '关联客户',
    clientAddress: '客户地址',
    companyWebsite: '公司网址',
    clientType: '客户类型',
    entryTime: '录入时间',
    contactPerson: '联系人',
    contactTime: '联系时间',
    maintainType: '维护方式',
    maintainContent: '维护内容',
    weatherHelp: '是否需要协助',
    helpContent: '协助内容',
    quoteTime: '报价时间',
    oralQuoteType: '口头报价方式',
    quoteContent: '报价内容',
    supplierName: '供应商名称',
    supplierNature: '供应商性质',
    associatedSupplier: '关联供应商',
    supplierAddress: '供应商地址',
    supplierType: '供应商类型',
    qualificationBook: '资质证书',
    qualificationAnnex: '资质附件',
    CaseNo: '案件编号',
    inquireCaseNo: '询价案件编号',
    inquireStartTime: '询价发起时间',
    hopeReplyTime: '期待回复时间',
    customerSource: '客户来源',
    reportPurpose: '报告用途',
    priceRequirement: '价格要求',
    otherRemark: '其他备注',
    sampleInfo: '样品信息',
    inquireProject: '询价项目',
    referenceStandard: '参考标准',
    qualificationRequire: '资质要求',
    prepareContractProject: ' 预分包项目',
    referenceSubcontractingFee: ' 参考分包费用',
    complaintPerson: '投诉人',
    complaintReason: '客诉原因',
    policyFile: '制度文件',
    visibleRange: '可见范围',
    currentRole: '当前角色',
    ContractNo: '合同编号',
    payAmount: '支付金额',
    payAccount: '付款账户'
  },
  dialogTitles: {
    addSubAccount: '新增子账号'
  },
  message: {
    hello: 'hello, world'
  },
  placeholder: {
    enter: 'Please type in your favorite brand'
  },
  brands: {
    nike: 'Nike',
    adi: 'Adidas',
    nb: 'New Banlance',
    ln: 'LI Ning'
  },
  ...enLocale
};

export default en;
