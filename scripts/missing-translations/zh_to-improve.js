const zh = {
  _: {
    languageCode: 'zh-cn',
    storage_is_encrypted: '储存空间已加密。需要输入密码进行解密',
    enter_password: '输入密码',
    bad_password: '密码错误，请重试',
    never: '取消',
    continue: '继续',
    ok: '确认',
    click: '点击',
    here: '这里',
    save: '保存',
    confirm: '确认',
    copy: '负责',
    copied: '已复制！',
    or: '或',
    delete: '删除',
    created: '创建日期',
    invalid: '无效',
    satoshi: 'Sat',
    next: '下一个',
  },
  tabNavigator: {
    dashboard: '仪表盘',
    settings: '设置',
    addressBook: '地址簿',
    wallets: '钱包',
    authenticators: '验证器',
  },
  message: {
    somethingWentWrong: '出问题了',
    somethingWentWrongWhileCreatingWallet: '钱包创建发生错误。请返回控制面板重新尝试。',
    success: '操作成功',
    successfullWalletImport: '您的钱包已成功导入。您现在可以返回控制面板。',
    successfullWalletDelete: '您的钱包已成功删除。您现在可以返回控制面板。',
    returnToDashboard: '返回控制面板',
    creatingWallet: '创建钱包',
    creatingWalletDescription: '创建钱包时请耐心等待。可能需要一些时间。',
    allDone: '全部完成！',
    hooray: '太好了！',
    cancelTxSuccess: '您已成功取消交易。\n 正在出币。',
    wrongMnemonic: '错误助记键',
    wrongMnemonicDesc: '助记键与任何受支持的钱包均不匹配。\n您正在尝试导入无效助记键或未曾用过的钱包',
    returnToWalletChoose: '返回钱包类型选择',
    returnToWalletImport: '返回钱包导入',
    generateAddressesError: '无法生成地址',
    noTransactions: '在钱包中没有找到交易',
    noTransactionsDesc: '您可能正在尝试导入未曾用过的钱包',
    returnToAuthenticators: '返回验证器',
    creatingAuthenticator: '正在创建验证器',
    creatingAuthenticatorDescription: '创建验证器时请耐心等待。\n 可能需要一些时间。',
    importingAuthenticator: '正在导入您的验证器',
    importingAuthenticatorDescription: '导入验证器时请耐心等待。\n 可能需要一些时间。',
  },
  onboarding: {
    onboarding: '初始设置',
    pin: 'PIN',
    createPin: '创建PIN',
    createNewPin: '新的PIN',
    createPassword: '创建交易密码',
    createPinDescription: '您的PIN将用于登录应用。您之后可在设置一栏更改。',
    confirmPin: '确认PIN',
    confirmNewPin: '确认新的PIN',
    confirmPassword: '确认交易密码',
    passwordDoesNotMatch: '密码不匹配，请输入有效的密码。',
    createPasswordDescription:
      '您的交易密码将用于验证所有交易。\n您之后将无法更改。\n交易密码必须包含至少8位字母数字字符。',
    changePin: '更改PIN',
    currentPin: '现用PIN',
    pinDoesNotMatch: 'PIN不匹配。请输入有效的PIN。',
    successDescription: '好极了！\n 您已经成功创建了您的PIN。',
    successDescriptionChangedPin: '好极了！\n 您已经成功修改了您的PIN。',
    successButton: '前往仪表盘',
    successButtonChangedPin: '返回设置',
    failedTimes: '失败次数',
    failedTimesErrorInfo: '三次尝试不成功后，将阻止输入',
    goBack: '返回',
    minutes: '分钟。',
    numberOfAttemptsExceeded: '尝试次数超过',
    seconds: '秒',
    tryAgain: '之后再试',
  },
  unlock: {
    title: '解锁',
    touchID: 'Touch ID用于“Gold Wallet”',
    confirmButton: '确认指纹以继续。',
    enter: '输入PIN',
  },
  unlockTransaction: {
    headerText: '确认交易',
    title: '确认交易密码',
    description: '确认交易密码以便进行交易。',
  },
  wallets: {
    dashboard: {
      title: '钱包',
      allWallets: '所有钱包',
      noWallets: '无钱包',
      noWalletsDesc1: '无钱包可展示。',
      noWalletsDesc2: '添加首个钱包。',
      send: '汇出比特币',
      receive: '接收比特币',
      noTransactions: '无交易可展示。',
      availableBalance: '可用余额',
      wallet: '钱包',
      recover: '取消',
    },
    walletModal: {
      btcv: '比特币Vault',
      wallets: '钱包',
    },
    importWallet: {
      title: '导入您的钱包',
      header: '导入钱包',
      subtitle: '请在此处写下您的助记词、WIF或者私钥等。GoldWallet会尽力猜测正确的格式并导入您的钱包。',
      placeholder: '助记词、私钥、WIF',
      import: '导入',
      scanQrCode: '或扫描二维码',
      walletInUseValidationError: '钱包已使用。请输入有效的钱包。',
      chooseTypeDescription: '选择想要导入的钱包类型。',
      importARDescription1: '输入助记词',
      importARDescription2: '扫描想要导入的钱包 QR 码',
      scanWalletAddress: '扫描钱包地址',
      scanWalletAddressDescription: '扫描公用地址 QR 码，以开始与 GoldWallet 整合。',
      scanFastPubKey: '扫描快速键 QR 码',
      scanCancelPubKey: '扫描取消键 QR 码',
      scanPublicKeyDescription: '打开创建想要导入的钱包时生成的首个 PDF 文件，并使用该应用程序扫描公钥 QR 码。',
      unsupportedElectrumVaultMnemonic: '该种子来自 Electrum Vault，目前不受支持。不久将获得支持。',
    },
    exportWallet: {
      title: '助记词',
      header: '退出钱包',
    },
    exportWalletXpub: {
      header: '钱包扩展公钥 (XPUB)',
    },
    deleteWallet: {
      title: '删除您的钱包',
      header: '删除钱包',
      description1: '是否确认删除',
      description2: '？删除后无法撤销。',
      no: '否',
      yes: '是',
    },
    wallet: {
      none: '取消',
      latest: '最新交易',
      pendingBalance: '待定余额',
    },
    add: {
      title: '添加新的钱包',
      subtitle: '命名您的钱包',
      description: '请为您的新钱包输入名称。',
      inputLabel: '名称',
      addWalletButton: '添加新的钱包',
      importWalletButton: '导入钱包',
      advancedOptions: '高级选项',
      multipleAddresses: '多个地址',
      singleAddress: '单个地址',
      segwidAddress: '它包含一系列的由单一的24词种子生成的本地segwit地址',
      failed: '未能创建钱包',
      walletType: '钱包类型',
      ar: '执行“标准与取消”交易。',
      air: '执行“标准、取消与快速”交易。',
      legacyTitle: '旧版',
      legacyHDP2SHTitle: '旧版 HD P2SH',
      legacyP2SHTitle: '旧版 P2SH',
      legacyHDSegWitTitle: '旧版 HD SegWit',
      legacy: '执行默认类型的交易。',
      legacyHDP2SH: '它包含一系列由单一的 24 词种子生成的 P2SH 地址',
      LegacyP2SH: '它包含单个 P2SH 地址',
      LegacyHDSegWit: '它包含一系列由单一的 24 词种子生成的 segwit 地址',
      publicKeyError: '所提供的公钥无效',
    },
    addSuccess: {
      title: '添加新的钱包',
      subtitle: '操作成功',
      description:
        '您的钱包已创建。请花费一点时间在纸上写下这个助记词。这是您的备份。您可以在其它设备上使用备份来恢复钱包。',
      okButton: '好的，我写完了！',
    },
    details: {
      edit: '编辑',
      latestTransaction: '最新交易',
      typeLabel: '类型',
      nameLabel: '名称',
      exportWallet: '导出钱包',
      showWalletXPUB: '显示钱包扩展公钥 (XPUB)',
      deleteWallet: '删除钱包',
      nameEdit: '编辑名称',
    },
    export: {
      title: '钱包导出',
    },
    import: {
      title: '导入',
      explanation: '请在此处写下您的助记词、私钥、WIF等。GoldWallet会尽力猜测正确的格式并导入您的钱包',
      imported: '已导入',
      error: '导入失败。请确认提供的数据有效。',
      success: '操作成功',
      do_import: '导入',
      scan_qr: '或扫描二维码？',
    },
    scanQrWif: {
      go_back: '返回',
      cancel: '取消',
      decoding: '解码',
      input_password: '输入密码',
      password_explain: '这是 BIP38 加密的私钥',
      bad_password: '密码错误',
      wallet_already_exists: '此钱包已存在',
      bad_wif: 'WIF错误',
      imported_wif: '已导入WIF',
      with_address: '和地址',
      imported_segwit: '已导入隔离见证',
      imported_legacy: '已导入Legacy',
      imported_watchonly: '已导入 Watch-only 监视钱包',
    },
    publicKey: {
      recoverySubtitle: '添加取消键',
      webKeyGenerator: 'Web 密钥生成器：',
      recoveryDescription: '转到另一设备上的 web 密钥生成器，并使用该应用程序扫描公钥 QR 码。记得将密钥导出为 PDF！',
      instantSubtitle: '添加快速键',
      instantDescription: '转到另一设备上的 web 密钥生成器，并使用该应用程序扫描公钥 QR 码。记得将密钥导出为 PDF！',
      scan: '扫描',
    },
    errors: {
      invalidMnemonicWordsNumber: '所提供的 {receivedWordsNumber} 个词预计为 {expectedWordsNumber} 个',
      noIndexForWord: '找不到以下单词的索引：{word}',
      invalidPrivateKey: '无效私钥',
      invalidPublicKey: '无效公钥',
      invalidMnemonic: '无效助记键',
      invalidQrCode: '无效 QR 码',
      invalidSign: '无法进行交易签名',
      duplicatedPublicKey: '该公钥已添加',
    },
  },
  transactions: {
    list: {
      conf: '确认',
    },
    details: {
      title: '交易',
      detailTitle: '交易详情',
      transactionHex: '十六进制字符串交易标识符',
      transactionHexDescription: '这是十六进制字符串交易标识符，已签名并准备发送到网络',
      copyAndBoriadcast: '稍后复制和发送',
      verify: '在 coinb.in 上验证',
      amount: '金额',
      fee: '手续费',
      txSize: '交易大小',
      satoshiPerByte: '每字节聪',
      from: '从',
      to: '到',
      bytes: '字节',
      copy: '复制',
      noLabel: '无标签',
      details: '详情',
      transactionId: '交易 ID',
      confirmations: '确认',
      transactionDetails: '交易详情',
      viewInBlockRxplorer: '在区块浏览器中查看',
      addNote: '添加备注',
      note: '备注',
      inputs: '输入',
      ouputs: '输出',
      sendCoins: '汇出币',
      transactionType: '交易类型',
      transactioFee: '交易费',
      walletType: '钱包类型',
      addToAddressBook: '添加至地址簿',
      timePending: '待定时间',
    },
    label: {
      pending: '待定',
      annulled: '无效',
      done: '完成',
      canceled: '已取消',
      unblocked: '未锁定',
    },
    transactionTypeLabel: {
      standard: '标准',
      canceled: '已取消',
      fast: '快速',
      secure: '安全',
      secureFast: '快速安全',
    },
    errors: {
      notEnoughBalance: '余额不足，请尝试发送较小的金额。',
    },
  },
  send: {
    header: '汇出币',
    success: {
      title: '操作成功',
      description: '太好了！您已成功完成交易。',
      done: '完成',
      return: '返回控制面板',
    },
    details: {
      title: '创建交易',
      amount_field_is_not_valid: '金额字段无效',
      fee_field_is_not_valid: '手续费字段无效',
      address_field_is_not_valid: '地址字段无效',
      create_tx_error: '交易创建出现错误。请确保地址有效。',
      address: '地址',
      amount_placeholder: '汇款金额（比特币Vault）',
      fee_placeholder: '加上交易手续费（比特币Vault）',
      note_placeholder: '自我备注',
      cancel: '取消',
      scan: '扫描',
      send: '汇款',
      next: '下一个',
      note: '备注（可选）',
      to: '到',
      feeUnit: 'Sat/B',
      fee: '手续费：',
      create: '创建发票',
      remaining_balance: '余额',
      total_exceeds_balance: '汇出额超出可用余额。',
    },
    confirm: {
      sendNow: '立即汇出',
      cancelNow: '马上取消',
      availableBalance: '交易后的可用余额',
      pendingBalance: '交易后的待用余额',
    },
    create: {
      amount: '金额',
      fee: '手续费',
      setTransactionFee: '设定交易手续费',
      headerText: '当网络上存在大量未处理交易时 (>1500)，较高的手续费可加快您的交易处理速度。典型值为 1-500 sat/b',
    },
    recovery: {
      recover: '取消',
      useWalletAddress: '使用该钱包的地址',
      confirmSeed: '确认取消助记词',
      confirmSeedDesc: '打开创建钱包时生成的 PDF 文件，并按照相同顺序写下私钥助记词。',
      confirmFirstSeed: '确认取消助记词',
      confirmFirstSeedDesc: '打开创建钱包时生成的首个 PDF 文件，并按照相同顺序写下私钥助记词。',
      confirmSecondSeed: '确认快速助记词',
      confirmSecondSeedDesc: '打开创建钱包时生成的第二个 PDF 文件，并按照相同顺序写下私钥助记词。',
    },
    transaction: {
      instant: '快速',
      instantDesc: '该交易将立即得到确认。谨慎使用。',
      fastSuccess: '您已成功完成快速交易。',
      alert: '标准',
      alertDesc: '要确认该交易需要 144 个区块或大约 24 小时。您可以在该时间段内取消。',
      type: '交易类型',
      scanInstantKeyTitle: '扫描快速键',
      scanInstantKeyDesc: '打开创建钱包时生成的 PDF 文件，并扫描私钥 QR 码，以发送交易。',
      lightningError: '该地址似乎用于 Lighting 发票。请转到 Lighting 钱包，支付该发票。',
      watchOnlyError: '监视钱包不能发送交易',
    },
    error: {
      title: '错误',
      description: '创建交易之前，必须首先添加 Bitcoin Vault 钱包。',
    },
    warning: '警告: ',
    warningGeneral:
      '警告：请注意，在使用安全交易功能的过程中，您钱包中剩余的部分资金可能会被冻结。 这是与UTXO和比特币 Vault钱包的区块链参数的常规过程。 当交易通过验证（大约24小时后）或交易被取消（24小时内）后，资金冻结将被解除。',
  },
  receive: {
    header: '接收币',
    details: {
      amount: '金额',
      share: '分享',
      receiveWithAmount: '接收金额',
    },
  },
  settings: {
    language: '语言',
    general: '通用',
    security: '安全',
    about: '关于',
    electrumServer: 'Electrum 服务器',
    advancedOptions: '高级选项',
    changePin: '更改 PIN',
    fingerprintLogin: '指纹登录',
    aboutUs: '关于我们',
    header: '设置',
    notSupportedFingerPrint: '您的设备不支持指纹',
    TouchID: '允许指纹',
    FaceID: '允许FaceID',
    Biometrics: '允许生物特征',
  },
  aboutUs: {
    header: '关于我们',
    releaseNotes: '发行说明',
    runSelfTest: '运行自检',
    buildWithAwesome: '绝妙的架构：',
    rateGoldWallet: '为 GoldWallet 评分',
    goToOurGithub: '请访问我们的 Github',
    alwaysBackupYourKeys: '时刻备份您的秘钥',
    title: 'Gold wallet 是免费的开源比特币Vault钱包软件。由麻省理工授权。',
  },
  electrumServer: {
    header: 'Electrum 服务器',
    title: '更改electrum服务器',
    description: '您可以更改您的应用连接的服务器地址。推荐使用默认地址。',
    save: '保存',
    useDefault: '使用默认设置',
    host: '主机',
    port: '端口',
    successfullSave: '已成功保存更改。重启后，更改方可生效。',
    connectionError: '无法连接提供的 Electrum 浏览器',
  },
  advancedOptions: {
    title: '设置高级选项',
    description: '启用高级选项将允许您选择以下钱包类型：\n P2SH，HD P2SH，HD segwit。',
  },
  selectLanguage: {
    header: '语言',
    restartInfo: '重新选择一门新的语言后，请重启 GoldWallet 以使更改生效',
    confirmation: '确认',
    confirm: '确认',
    alertDescription: '选择语言并重启应用程序？',
    cancel: '取消',
  },
  contactList: {
    cancel: '取消',
    search: '查询',
    screenTitle: '地址簿',
    noContacts: '无联系人',
    noContactsDesc1: '无联系人可展示。 \n 点击',
    noContactsDesc2: '以添加首位联系人。',
    noResults: '无结果',
  },
  contactCreate: {
    screenTitle: '添加新的联系人',
    subtitle: '新联系人',
    description: '请输入您的新联系人姓名和地址。',
    nameLabel: '姓名',
    addressLabel: '地址',
    buttonLabel: '添加新的联系人',
    successTitle: '操作成功',
    successDescription: '太好了！您已成功添加新联系人。',
    successButton: '返回地址簿',
  },
  contactDetails: {
    nameLabel: '姓名',
    addressLabel: '地址',
    editName: '编辑姓名',
    editAddress: '编辑地址',
    sendCoinsButton: '汇出币',
    showQRCodeButton: '出示二维码',
    deleteButton: '删除联系人',
    share: '分享',
  },
  contactDelete: {
    title: '删除您的联系人',
    header: '删除联系人',
    description1: '是否确认删除',
    description2: '？\n 删除后无法撤销。',
    no: '否',
    yes: '是',
    success: '操作成功',
    successDescription: '您的联系人已成功删除。\n 您现在可以返回地址簿。',
    successButton: '返回地址簿',
  },
  scanQrCode: {
    permissionTitle: '允许使用相机',
    permissionMessage: '我们需要获取相机使用权限',
    ok: '确认',
    cancel: '取消',
  },
  filterTransactions: {
    header: '筛选交易',
    receive: '收到',
    send: '发送',
    filter: '筛选设置',
    to: '收款人',
    toAmount: '最大金额',
    toDate: '结束日期',
    from: '汇款人',
    fromAmount: '最小金额',
    fromDate: '起始日期',
    clearFilters: '清除筛选设置',
    received: '已收到',
    sent: '已发送',
    transactionType: '交易类型',
    transactionStatus: '交易状态',
    status: {
      pending: '待定',
      annulled: '无效',
      done: '完成',
      canceled: '已取消',
      unblocked: '未锁定',
    },
  },
  authenticators: {
    sign: {
      error: '验证器都不能进行交易签名',
    },
    options: {
      title: '验证器选项',
      export: '导出验证器',
      pair: '配对验证器',
      sectionTitle: '通用',
      delete: '删除验证器',
    },
    pair: {
      title: '配对验证器',
      pin: 'PIN',
      publicKey: '公钥',
      descPin: '使用该 PIN 在桌面应用程序上确认验证器配对。',
      descPublicKey: '使用 GoldWallet 选项在创建钱包的过程中可使用该公钥在桌面应用程序中导入验证器。',
    },
    import: {
      title: '导入验证器',
      success: '您已成功导入验证器。现在可供使用。',
      subtitle: '导入您的验证器',
      desc1: '写下助记词或扫描想要导入的验证器的 QR 码。',
      desc2: '通过点击下面的“或扫描 QR 码”扫描 RQ 码',
      textAreaPlaceholder: '助记词',
    },
    export: {
      title: '导出验证器',
    },
    delete: {
      title: '删除验证器',
      subtitle: '删除您的验证器',
      success: '您的验证器已成功删除。您可随时新建一个。',
    },
    list: {
      noAuthenticatorsDesc1: '点击',
      noAuthenticatorsDesc2: '以添加您的首个验证器。',
      noAuthenticators: '尚无验证器',
      scan: '扫描',
      title: 'Bitcoin Vault 验证器',
    },
    add: {
      successTitle: '您的验证器已就绪！',
      title: '添加新验证器',
      subtitle: '配对验证器',
      successDescription:
        '在安全地方写下该助记词。如需还原验证器，则为备份。记住，确认“快速与取消”交易需要使用验证器。',
      description:
        '打开 Electrum Vault 桌面应用程序，并新建钱包。执行屏幕上的步骤，直至看到 QR 码。用该应用程序进行扫描，以继续。',
      subdescription: '您还可以通过选择以下选项导入验证器。',
    },
    enterPIN: {
      subtitle: '输入 PIN',
      description: '将该 PIN 输入 Electrum Vault 应用程序中，以完成配对过程。',
    },
  },
  timeCounter: {
    title: '被阻止的应用程序',
    description: '因为登录尝试失败，您的应用程序已被阻止。请等待必要的时间，以便重试。',
    tryAgain: '重试',
    closeTheApp: '关闭应用程序',
  },
  security: {
    jailBrokenPhone:
      '您的设备似乎越狱了。这可能会出现安全问题、死机或其它问题。我们不建议在已越狱的设备上使用 GoldWallet。',
    rootedPhone:
      '您的设备似乎取得了 root 权限。这可能会出现安全问题、死机或其它问题。我们不建议在取得 root 权限的设备上使用 GoldWallet。',
    title: '安全问题',
    noPinOrFingerprintSet: '您的设备未设置PIN 密码或指纹登录。 不建议在不安全的设备上使用GoldWallet。',
  },
  betaVersion: {
    title: '这是GoldWallet钱包的测试版',
    description:
      '在正式发布之前，GoldWallet仍在接受最终测试。 该移动应用程序及程序上所有内容均基于“按原样 ”和“可使用”呈现。 使用该程序的风险由用户自行承担。',
    button: '我同意承担风险',
  },
};
