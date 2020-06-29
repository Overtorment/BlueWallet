module.exports = {
  _: {
    storage_is_encrypted:
      'Vaše úložisko je zašifrované. Zadajte heslo k odomknutiu',
    enter_password: 'Zadajte heslo',
    bad_password: 'Zlé heslo, prosím skúste to znovu',
    never: 'nikdy',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Vyberte peňaženku',
    options: 'možnosti',
    createBitcoinWallet:
      'Momentálne nemáte Bitcoinovú peňaženku. Na naplnenie Lightning peňaženky potrebujete vytvoriť alebo importovať Bitcoinovú peňaženku. Chcete aj tak pokračovať?',
    list: {
      app_name: 'BlueWallet',
      title: 'peňaženky',
      header:
        'Peňaženka reprezentuje dvojicu tajného (súkromného) kľúča a adresy, ktorú môžete zdieľať, aby ste získali Bitcoiny',
      add: 'Pridať peňaženku',
      create_a_wallet: 'pridať peňaženku',
      create_a_wallet1: 'Je to zadarmo a môžete vytvoriť',
      create_a_wallet2: 'koľko len budete chcieť',
      create_a_button: 'pridať teraz',
      latest_transaction: 'posledná transakcia',
      empty_txs1: 'Tu sa zobrazia vaše transakcie,',
      empty_txs2: 'zatiaľ žiadne',
      empty_txs1_lightning:
        'Lightning peňaženka by sa mala používať na denné transakcie. Sú bleskovo rýchle a poplatky sú neporovnateľne nižšie/žiadne.',
      empty_txs2_lightning:
        '\nKliknite na "spravovať zostatok" a naplňte si peňaženku.',
      tap_here_to_buy: 'Kliknite sem pre nákup Bitcoinov',
    },
    reorder: {
      title: 'Zoradiť peňaženky',
    },
    add: {
      title: 'pridať peňaženku',
      description:
        'Môžete naskenovať papierovú zálohu (WIF - Wallet Import Format), alebo vytvoriť novú peňaženku. Segwit peňaženky sú podporované štandardne.',
      scan: 'Skenovať',
      create: 'Vytvoriť',
      label_new_segwit: 'Nová SegWit',
      label_new_lightning: 'Nová Lightning',
      wallet_name: 'názov peňaženky',
      wallet_type: 'typ',
      or: 'alebo',
      import_wallet: 'Importovať peňaženku',
      imported: 'Importovaná',
      coming_soon: 'Už čoskoro',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
      entropy_provide: 'Provide entropy via dice rolls',
      entropy_generated: '{gen} bytes of generated entropy',
      entropy_remain:
        '{gen} bytes of generated entropy. Remaining {rem} bytes will be obtained from the System random number generator.',
    },
    details: {
      title: 'Peňaženka',
      address: 'Adresa',
      master_fingerprint: 'Hlavný odtlačok prsta',
      type: 'Typ',
      label: 'Popis',
      destination: 'cieľ',
      description: 'Popis',
      are_you_sure: 'Ste si istý?',
      yes_delete: 'Ano, zmazať',
      no_cancel: 'Nie, zrušiť',
      delete: 'Zmazaž',
      save: 'Uložiť',
      delete_this_wallet: 'Zmazať peňaženku',
      export_backup: 'Exportovať / zálohovať',
      buy_bitcoin: 'Kúpiť Bitcoin',
      show_xpub: 'Ukázať XPUB',
      connected_to: 'Napojené na',
      advanced: 'Rozšírené',
      use_with_hardware_wallet: 'Použiť s hardwarovou peňaženkou',
    },
    export: {
      title: 'exportovať peňaženku',
    },
    xpub: {
      title: 'XPUB peňaženku',
      copiedToClipboard: 'Skopírované do schránky.',
    },
    import: {
      title: 'importovať',
      explanation:
        'Zadajte svoj mnemonic seed, súkromný kľúč, WIF, alebo čokoľvek, čo máte. BlueWallet sa pokúsi uhádnuť správny formát a naimportovať vašu peňaženku',
      imported: 'Importovaná',
      error:
        'Chyba pri importe. Prosím uistite sa, že poskytnuté údaje sú správne.',
      success: 'Úspech',
      do_import: 'Importovať',
      scan_qr: 'alebo radšej naskenovať QR kód?',
    },
    scanQrWif: {
      go_back: 'Späť',
      cancel: 'Zrušiť',
      decoding: 'Dekódujem',
      input_password: 'Vložte heslo',
      password_explain: 'Toto je BIP38 zašifrovaný súkromný kľúč',
      bad_password: 'Zlé heslo',
      wallet_already_exists: 'Táto peňaženka už existuje',
      bad_wif: 'Zlý WIF',
      imported_wif: 'Importovaný WIF ',
      with_address: ' s adresou ',
      imported_segwit: 'Importovaná SegWit',
      imported_legacy: 'Importovaná Legacy',
      imported_watchonly: 'Importovaná Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transakcie',
      title: 'transakcie',
      description: 'Zoznam prijatých a odoslaných transakcií vaších peňaženiek',
      conf: 'potvrdenie',
    },
    details: {
      title: 'Transakcia',
      from: 'Input',
      to: 'Output',
      copy: 'Kopírovať',
      transaction_details: 'Detaily transakcie',
      show_in_block_explorer: 'Ukázať v block exploreri',
    },
  },
  send: {
    header: 'Poslať',
    details: {
      title: 'vytvoriť transakciu',
      amount_field_is_not_valid: 'Čiastka nie je správne vyplnená',
      fee_field_is_not_valid: 'Poplatok nie je správne vyplnený',
      address_field_is_not_valid: 'Adresa nie je správne vyplnená',
      total_exceeds_balance:
        'Čiastka, ktorú chcete poslať, presahuje dostupný zostatok.',
      create_tx_error:
        'Nastala chyba pri vytváraní transakcie. Prosím uistite sa, že adresa je platná.',
      address: 'adresa',
      amount_placeholder: 'čiastka k odoslaniu (v BTC)',
      fee_placeholder: 'plus transakčný poplatok (v BTC)',
      note_placeholder: 'poznámka pre seba',
      cancel: 'Zrušiť',
      scan: 'Skenovať',
      send: 'Poslať',
      create: 'Vytvoriť',
      remaining_balance: 'Zostatok',
    },
    confirm: {
      header: 'Potvrdiť',
      sendNow: 'Poslať teraz',
    },
    success: {
      done: 'Hotovo',
    },
    create: {
      details: 'Detaily',
      title: 'vytvoriť transakciu',
      error: 'Chyba pri vytváraní transakcie. Nesprávna adresa alebo čiastka?',
      go_back: 'Spať',
      this_is_hex:
        'Toto je vaša transakcia, podpísaná a pripravená k odoslaniu.',
      to: 'Cieľ',
      amount: 'Čiastka',
      fee: 'Poplatok',
      tx_size: 'veľkosť transakcie',
      satoshi_per_byte: 'Satoshi/byte',
      memo: 'Popis',
      broadcast: 'Odoslať',
      not_enough_fee: 'Nedostatočný poplatok. Zvýšte poplatok.',
    },
  },
  receive: {
    header: 'Prijať',
    details: {
      title: 'Zdieľajte túto adresu s odosielateľom',
      share: 'zdieľať',
      copiedToClipboard: 'Skopírované do schránky.',
      label: 'Popis',
      create: 'Vytvoriť',
      setAmount: 'Prijať čiastku...',
    },
  },
  buyBitcoin: {
    header: 'Kúpiť Bitcoin',
    tap_your_address: 'Kliknite na svoju adresu pre skopírovanie do schránky:',
    copied: 'Skopírované do schránky.',
  },
  settings: {
    header: 'Nastavenia',
    plausible_deniability: 'Plausible deniability...',
    storage_not_encrypted: 'Úložisko: nezašifrované',
    storage_encrypted: 'Úložisko: zašifrované',
    password: 'Heslo',
    password_explain: 'Vytvorte si heslo k zašifrovanému úložisku.',
    retype_password: 'Heslo znovu',
    passwords_do_not_match: 'Hesla se nezhodujú',
    encrypt_storage: 'Zašifrovat úložisko',
    lightning_settings: 'Lightning nastavenia',
    lightning_settings_explain:
      'Na pripojenie vlastného LND node prosím nainštalujte LndHub' +
      ' a vložte jeho URL tu v nastaveniach. Prázdna hodnota znamená defaultný ' +
      'LndHub\n (lndhub.io)',
    electrum_settings: 'Electrum nastavenia',
    electrum_settings_explain: 'Prázdne hodnoty znamenajú defaultné nastavenia',
    save: 'Uložiť',
    about: 'O BlueWallet',
    language: 'Jazyk',
    currency: 'Mena',
    advanced_options: 'Pokročilé nastavenia',
    enable_advanced_mode: 'Povoliť rozšírené nastavenia',
  },
  plausibledeniability: {
    title: 'Plausible Deniability',
    help:
      'Za určitých okolností môžete byť donútení k prezradeniu hesla. ' +
      'K zaisteniu bezpečnosti vaších prostriedkov, BlueWallet môže vytvořiť ' +
      'ďalšie zašifrované úložiská s rozdielným heslom. V prípade potreby ' +
      'môžete toto heslo dať tretej strane. Pokiaľ bude zadané do BlueWallet, ' +
      'odomkne nové "falošné" úložisko. Toto bude vyzerať hodnoverne, ale ' +
      'udrží vaše pravé hlavné úložisko v bezpečí.',
    help2:
      'Nové úložisko bude plne funkčné, môžete naň uložiť minimálnu čiastku, aby vyzeralo uveriteľnejšie.',
    create_fake_storage: 'Vytvoriť falošné zašifrované úložisko',
    go_back: 'Späť',
    create_password: 'Vytvoriť heslo',
    create_password_explanation:
      'Heslo k falošnému úložisku nesmie byť rovnaké ako heslo k hlavnému úložisku',
    password_should_not_match:
      'Heslo k falošnému úložisku nesmie byť rovnaké ako heslo k hlavnému úložisku',
    retype_password: 'Heslo znovu',
    passwords_do_not_match: 'Hesla se nezhodujú, skúste znovu',
    success: 'Úspech',
  },
  lnd: {
    title: 'spravovať zostatok',
    choose_source_wallet: 'Vyberte zdrojovú peňaženku',
    refill_lnd_balance: 'Doplniť zostatok na Lightning peňaženke',
    refill: 'Doplniť',
    exchange: 'Exchange',
    withdraw: 'Vybrať',
    expired: 'Expirovaná',
    placeholder: 'Faktúra',
    sameWalletAsInvoiceError:
      'Faktúra sa nedá uhradiť s rovnakou peňaženkou ako tá, ktorá ju vytvorila.',
  },
  pleasebackup: {
    title: 'Vaša peňaženka je vytvorená...',
    text:
      'Prosím zapíšte si túto mnemonic frázu na papier. Slúži ako záloha na obnovu peňaženky na inom zariadení.',
    ok: 'OK, zapísané!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'Táto faktúra nebola uhradená a expirovala',
    has_been_paid: 'Táto faktúra bola uhradená',
    please_pay: 'Prosím zaplaťte',
    sats: 'sats',
    for: 'Za:',
    additional_info: 'Doplňujúce informácie',
    open_direct_channel: 'Otvoriť priamy kanál s týmto uzlom:',
  },
  entropy: {
    title: 'Entropy',
    save: 'Save',
    undo: 'Undo',
  },
}
