module.exports = {
  _: {
    storage_is_encrypted:
      'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Şifre gir',
    bad_password: 'Hatalı şifre, tekrar deneyin',
    never: 'asla',
    continue: 'Devam et',
    ok: 'Tamam',
  },
  wallets: {
    select_wallet: 'Cüzdan Seç',
    options: 'seçenekler',
    createBitcoinWallet:
      'Şu anda Bitcoin cüzdanınız yok. Lightning cüzdanına yükleme yapmak için Bitcoin cüzdanı oluşturmak veya içeri yüklemek gerekir. Yine de devam etmek istiyor musunuz?',
    list: {
      app_name: 'BlueWallet',
      title: 'cüzdanlar',
      header:
        'Cüzdan biri gizli, biri halka açık olan bir çift anahtar ve koin almak için' +
        ' paylaşabileceğiniz bir adrestir.',
      add: 'Cüzdan Ekle',
      create_a_wallet: 'Cüzdan oluştur',
      create_a_wallet1: 'Oluşturması bedava ve',
      create_a_wallet2: 'istediğiniz kadar oluşturabilirsiniz',
      create_a_button: 'şimdi ekle',
      latest_transaction: 'en son işlem',
      empty_txs1: 'İşlemleriniz burada görünür,',
      empty_txs2: 'şu anda hiç yok',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning:
        '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Bitcoin almak için buraya dokunun',
    },
    reorder: {
      title: 'Cüzdanları Sırala',
    },
    add: {
      title: 'cüzdan ekle',
      description:
        'Kağıt cüzdan (WIF - Wallet Import Format olarak) tarayarak içeri yükleyebilirsiniz veya cüzdan oluşturabilirsiniz. Segwit cüzdanlar standard olarak desteklenir.',
      scan: 'Tara',
      create: 'Oluştur',
      label_new_segwit: 'Yeni SegWit',
      label_new_lightning: 'Yeni Lightning',
      wallet_name: 'isim',
      wallet_type: 'tip',
      or: 'veya',
      import_wallet: 'Cüzdan İçeri Yükle',
      imported: 'Yüklendi',
      coming_soon: 'Yakında',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
      entropy_provide: 'Provide entropy via dice rolls',
      entropy_generated: '{gen} bytes of generated entropy',
      entropy_remain:
        '{gen} bytes of generated entropy. Remaining {rem} bytes will be obtained from the System random number generator.',
    },
    details: {
      title: 'Cüzdan',
      address: 'Adres',
      master_fingerprint: 'Master fingerprint',
      type: 'Tip',
      label: 'Etiket',
      destination: 'hedef',
      description: 'tanım',
      are_you_sure: 'Emin misiniz?',
      yes_delete: 'Evet, sil',
      no_cancel: 'Hayır, vazgeç',
      delete: 'Sil',
      save: 'Kaydet',
      delete_this_wallet: 'Bu cüzdanı sil',
      export_backup: 'Dışa yükle / yedekle',
      buy_bitcoin: 'Bitcoin satın al',
      show_xpub: 'Cüzdan XPUB göster',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'cüzdan yedekle',
    },
    xpub: {
      title: 'cüzdan XPUB',
      copiedToClipboard: 'Panoya kopyalandı',
    },
    import: {
      title: 'içeri yükle',
      explanation:
        'Buraya cüzdan yedek cümlenizi, gizli anahtarınızı, WIF veya diğer bilginizi yazın. BlueWallet elinden gelen en iyi tahmini yaparak cüzdanınızı içeri aktarmaya çalışacak.',
      imported: 'İçeri aktarıldı',
      error:
        'İçeri aktarma başarısız oldu. Lütfen girilen bilginin doğru olduğundan emin olun.',
      success: 'Başarılı',
      do_import: 'İçe Aktar',
      scan_qr: 'veya QR kod tara?',
    },
    scanQrWif: {
      go_back: 'Geri Git',
      cancel: 'Vazgeç',
      decoding: 'Deşifre ediliyor',
      input_password: 'Şifre gir',
      password_explain: 'Bu BIP38 şifreli gizli anahtar',
      bad_password: 'Hatalı şifre',
      wallet_already_exists: 'Böyle bir cüzdan zaten var',
      bad_wif: 'Hatalı WIF',
      imported_wif: 'İçeri aktarılmış WIF ',
      with_address: ' adres ile ',
      imported_segwit: 'İçeri Aktarılmış SegWit',
      imported_legacy: 'İçeri Aktarılmış Eski Tip',
      imported_watchonly: 'İçeri Aktarılmış Sadece-izleme',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'İşlemler',
      title: 'işlemler',
      description: 'Cüzdanlarınıza gelen ve giden işlemlerin bir listesi',
      conf: 'onay',
    },
    details: {
      title: 'İşlem',
      from: 'Girdi',
      to: 'Çıktı',
      copy: 'Kopya',
      transaction_details: 'İşlem detayları',
      show_in_block_explorer: 'Blok gezgininde göster',
    },
  },
  send: {
    header: 'Gönder',
    details: {
      title: 'işlem oluştur',
      amount_field_is_not_valid: 'Miktar alanı geçerli değil',
      fee_field_is_not_valid: 'Ücret alanı geçerli değil',
      address_field_is_not_valid: 'Adres alanı geçerli değil',
      total_exceeds_balance: 'Gönderme miktarı mevcut bakiyeyi aşıyor.',
      create_tx_error:
        'İşlem oluşturulurken bir hata oluştu. Lütfen adresin geçerli olduğundan emin olun.',
      address: 'adres',
      amount_placeholder: 'gönderilecek miktar (BTC cinsinden)',
      fee_placeholder: 'artı işlem ücreti (BTC cinsinden)',
      note_placeholder: 'kendime not',
      cancel: 'Vazgeç',
      scan: 'Tara',
      send: 'Gönder',
      create: 'Oluştur',
      remaining_balance: 'Kalan bakiye',
    },
    confirm: {
      header: 'Onayla',
      sendNow: 'Şimdi gönder',
    },
    success: {
      done: 'Tamam',
    },
    create: {
      details: 'Detaylar',
      title: 'işlem oluştur',
      error: 'İşlem yaratma hatası. Geçersiz adres veya gönderim miktarı?',
      go_back: 'Geri dön',
      this_is_hex: 'Bu işlemin hexi, imzalanmış ve ağa yayınlanmaya hazır.',
      to: 'Kime',
      amount: 'Miktar',
      fee: 'Ücret',
      tx_size: 'TX boyutu',
      satoshi_per_byte: 'Bayt başına Satoshi',
      memo: 'Not',
      broadcast: 'Yayınla',
      not_enough_fee: 'Yetersiz ücret. Ücreti arttırın',
    },
  },
  receive: {
    header: 'Al',
    details: {
      title: 'Bu adresi ödeyenle paylaş',
      share: 'paylaş',
      copiedToClipboard: 'Panoya kopyalandı.',
      label: 'Açıklama',
      create: 'Oluştur',
      setAmount: 'Miktar ile al',
    },
  },
  buyBitcoin: {
    header: 'Bitcoin Satın al',
    tap_your_address: 'Panoya kopyalamak için adresinize dokunun:',
    copied: 'Panoya kopyalandı!',
  },
  settings: {
    header: 'ayarlar',
    plausible_deniability: 'Makul ret...',
    storage_not_encrypted: 'Depolama: şifreli değil',
    storage_encrypted: 'Depolama: şifreli',
    password: 'Şifre',
    password_explain:
      'Depolamanın şifresini çözmek için kullanacağınız şifreyi oluşturun',
    retype_password: 'Şifrenizi yeniden girin',
    passwords_do_not_match: 'Şifreler eşleşmedi',
    encrypt_storage: 'Depolamayı şifrele',
    lightning_settings: 'Lightning Ayarları',
    lightning_settings_explain:
      'Kendi LND düğümünüze bağlanmak için lütfen LndHubı yükleyin.' +
      " ve URL’sini buraya, ayarlara yazın. BlueWallet'in LNDHub (lndhub.io) programını kullanmak için boş bırakın. Değişiklikleri kaydettikten sonra oluşturulan cüzdanlar belirtilen LNDHub'a bağlanacaktır.",
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'Kaydet',
    about: 'Hakkında',
    language: 'Dil',
    currency: 'Para Birimi',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Makul Ret',
    help:
      'Bazı koşullar altında, şifrenizi açıklamanız gerekebilir. ' +
      'Paralarınızı güvende tutmak için, BlueWallet başka bir şifre ile ' +
      'şifreli depolama alanı yaratabilir. Baskı altında, ' +
      'Bu şifreyi 3. bir tarafa söyleyebilirsiniz. Girilirse ' +
      "BlueWallet, yeni 'sahte' bir depolamanın kilidini açacaktır. Bu 3. şahıslara " +
      'normal görünecektir, ancak paraların olduğu ana depolama alanınızı gizlice saklamaya ' +
      'devam edecektir.',
    help2:
      'Yeni depolama alanı tamamen işlevsel olacak ve ufak ' +
      'bir miktar tutarsanız daha inanılır görünecektir.',
    create_fake_storage: 'Sahte şifreli depolama oluşturun',
    go_back: 'Geri Dön',
    create_password: 'Şifre oluştur',
    create_password_explanation:
      'Sahte depolama şifreniz, ana depolama şifrenizle aynı olmamalıdır.',
    password_should_not_match:
      'Sahte depolama şifreniz, ana depolama şifrenizle aynı olmamalıdır',
    retype_password: 'Şifrenizi yeniden yazın',
    passwords_do_not_match: 'Şifreler eşleşmedi, tekrar dene',
    success: 'Başarılı',
  },
  lnd: {
    title: 'paraları yönet',
    choose_source_wallet: 'Kaynak bir cüzdan seçin',
    refill_lnd_balance: 'Lightning cüzdana bakiye yükle',
    refill: 'Yükle',
    withdraw: 'Çek',
    exchange: 'Exchange',
    expired: 'Süresi doldu',
    placeholder: 'Fatura',
    sameWalletAsInvoiceError:
      'Bir faturayı, oluştururken kullandığınız cüzdan ile ödeyemezsiniz.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
  entropy: {
    title: 'Entropy',
    save: 'Save',
    undo: 'Undo',
  },
}
