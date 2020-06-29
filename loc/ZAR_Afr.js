﻿module.exports = {
  _: {
    storage_is_encrypted:
      'U geheue spasie is nou ge-enkripteer. ‘n Wagwoord word benodig om toegang te verkry. ',
    enter_password: 'Sleutel wagwoord in',
    bad_password: 'Verkeerde wagwoord, probeer weer',
    never: 'nooit',
    continue: 'Gaan voort',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Kies Beursie',
    options: 'opsies',
    createBitcoinWallet:
      'U het nie huidiglik `n geldige Bitcoin Beursie nie. Skep of voer eers ‘n Bitcoin Beursie in, sodat ‘n Bitcoin Lightning Beursie geskep en bevonds mag word. Wil U voortgaan?',
    list: {
      app_name: 'BlueWallet',
      title: 'beursies',
      header:
        'U beursie verteenwoordig ‘n sleutelkombinasie, bestaande uit geheims (privaat sleutel) en address' +
        'wat u kan gebruik om fondse te ontvang.',
      add: 'Skep Beursie',
      create_a_wallet: 'Skep ‘n beursie',
      create_a_wallet1: 'Dit is gratis so skep',
      create_a_wallet2: 'soveel as wat u benodig',
      create_a_button: 'Add now',
      latest_transaction: 'laaste transaksie',
      empty_txs1: 'U transaksies is hier beskikbaar,',
      empty_txs2: 'huidiglik geen transaksies',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning:
        '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Raak hier om Bitcoin te koop',
    },
    reorder: {
      title: 'Herorganiseer Beursies',
    },
    add: {
      title: 'skep beursie',
      description:
        'U kan ‘n beursie invoer (in WIF - Wallet Import Format), of ‘n nuwe beursie skep. Beursies ondersteun Segwit as standaard.',
      scan: 'Skandeer',
      create: 'Skep',
      label_new_segwit: 'Nuwe SegWit',
      label_new_lightning: 'Nuwe Lightning',
      wallet_name: 'beursie naam',
      wallet_type: 'tipe',
      or: 'of',
      import_wallet: 'Beursie Invoer',
      imported: 'Ingevoer',
      coming_soon: 'In die toekoms',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
      entropy_provide: 'Provide entropy via dice rolls',
      entropy_generated: '{gen} bytes of generated entropy',
      entropy_remain:
        '{gen} bytes of generated entropy. Remaining {rem} bytes will be obtained from the System random number generator.',
    },
    details: {
      title: 'Beursiet',
      address: 'AdresAddress',
      master_fingerprint: 'Master fingerprint',
      type: 'Tipe',
      label: 'Etiket',
      destination: 'bestemming',
      description: 'beskrywing',
      are_you_sure: 'Is u Seker?',
      yes_delete: 'Ja, vernietig',
      no_cancel: 'Nee, kanseleerl',
      delete: 'Vernietig',
      save: 'Berg',
      delete_this_wallet: 'Vernietig hierdie beursie',
      export_backup: 'voer uit / kopieer',
      buy_bitcoin: 'Koop Bitcoin',
      show_xpub: 'Wys beursie XPUB',
      connected_to: 'Connected to',
      advanced: 'Advanced',
      use_with_hardware_wallet: 'Use with hardware wallet',
    },
    export: {
      title: 'beursie uitvoer',
    },
    xpub: {
      title: 'beursie XPUB',
      copiedToClipboard: 'Gestuur na klipbord.',
    },
    import: {
      title: 'Invoer',
      explanation:
        'Sleutel mnemonic, privaat sleutel, WIF, of enige text verwysing. BlueWallet sal die korrekte formaat kies en u beursie importeer ',
      imported: 'Invoer suksesvol',
      error:
        'U invoer het misluk. Maak asseblief seker u data is korrek en geldig.',
      success: 'Suksesvol',
      do_import: 'Invoer',
      scan_qr: 'of skandeer QR kode?',
    },
    scanQrWif: {
      go_back: 'Gaan Terug',
      cancel: 'Kanseleer',
      decoding: 'Decoding',
      input_password: 'Input password',
      password_explain: 'Hierdie is ‘n BIP38 ge-enkripteerde privaat sleutel',
      bad_password: 'Wagwoord verkeerd',
      wallet_already_exists: 'Hierdie beursie bestaan alreeds',
      bad_wif: 'WIF verkeerd',
      imported_wif: 'WIF invoer suksesvol ',
      with_address: ' met adres ',
      imported_segwit: 'Segwit Invoer Suksesvol',
      imported_legacy: 'Legacy Invoer',
      imported_watchonly: 'Kyk Slegs invoer suksesvol',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transaksies',
      title: 'transaksies',
      description: 'Lys met inkomende en uitgaande transaksies van u beursies',
      conf: 'bev.',
    },
    details: {
      title: 'Transaksie',
      from: 'Inset',
      to: 'Resultaat',
      copy: 'Kopieer',
      transaction_details: 'Transaksie besonderhede',
      show_in_block_explorer: 'Wys in blok verkenner',
    },
  },
  send: {
    header: 'Stuur',
    details: {
      title: 'skep transaksie',
      amount_field_is_not_valid: 'Bedrag is ongeldig',
      fee_field_is_not_valid: 'Fooi spasie is ongeldig',
      address_field_is_not_valid: 'Adres is ongeldig',
      total_exceeds_balance: 'Die bedrag is meer as die beskikbare balans.',
      create_tx_error:
        'Daar was ‘n probleem met die skepping van die transaksie. Bevestig asseblief die adres is geldig.',
      address: 'adres',
      amount_placeholder: 'bedrag om te stuur (in BTC)',
      fee_placeholder: 'plus transaksie fooi (in BTC)',
      note_placeholder: 'persoonlike notas',
      cancel: 'Kanselleer',
      scan: 'Skandeer',
      send: 'Stuur',
      create: 'Skep',
      remaining_balance: 'Oorblywende balans',
    },
    confirm: {
      header: 'Bevestig',
      sendNow: 'Stuur nou',
    },
    success: {
      done: 'Klaar',
    },
    create: {
      details: 'Besonderhede',
      title: 'skep transaksie',
      error:
        'Daar is ‘n probleem met die transaksie. Ongeldige adres of bedrag?',
      go_back: 'Gaan Terug',
      this_is_hex:
        'Hierdie is die transaksie hex, geteken en gereed om na die netwerk uitgesaai te word.',
      to: 'Aan',
      amount: 'Bedrag',
      fee: 'Fooi',
      tx_size: 'TX groote',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Memo',
      broadcast: 'Saai uit',
      not_enough_fee: 'Fooi te laag. Vermeerder die fooi',
    },
  },
  receive: {
    header: 'Ontvang',
    details: {
      title: 'Deel adres met krediteur',
      share: 'deel',
      copiedToClipboard: 'Gekopieer na klipbord.',
      label: 'Beskrywing',
      create: 'Skep',
      setAmount: 'Bedrag ontvang',
    },
  },
  buyBitcoin: {
    header: 'Koop Bitcoin',
    tap_your_address: 'Raak aan die adres om dit na die klipbord the stuur:',
    copied: 'Gekopieer na klipbord!',
  },
  settings: {
    header: 'instellings',
    plausible_deniability: 'Geloofwaardige ontkenbaarheid...',
    storage_not_encrypted: 'Berging: Nie-geenkripteer nie',
    storage_encrypted: 'Berging: Ge-enkripteer',
    password: 'Wagwoord',
    password_explain:
      'Skep die wagwoord wat u sal gebruik om u berging te de-enkripteer',
    retype_password: 'Hervoer wagwoord',
    passwords_do_not_match: 'Wagwoorde stem nie oor een nie',
    encrypt_storage: 'Enkripteer Berging',
    lightning_settings: 'Lightning Instellings',
    lightning_settings_explain:
      'Om u eie LND node te konnekteer, installeer asseblief LndHub' +
      ' and put its URL here in settings. Leave blank om die standaard LndHub' +
      '(lndhub.io) te gebruik',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'stoor',
    about: 'info',
    language: 'Taal',
    currency: 'Geldeenheid',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Geloofwaardige Ontkenbaarheid',
    help:
      'Onder sekere omstandighede mag u dalk geforseer word om u ' +
      'wagwoord te deel teen u wil. Om u te beskerm kan Bluewallet ‘n ' +
      'tweede “fantasie” beursie skep wat as skerm kan dien. Indien u  ' +
      'hierdie wagwoord deel sal die 3de party nie toegang tot u hoof fondse kry nie.',
    help2: 'Fantasie berging is heeltemal funksioneel',
    create_fake_storage: 'Skep fantasie berging wagwoord',
    go_back: 'Gaan terug',
    create_password: 'Skep ‘n wagwoord',
    create_password_explanation:
      'Die wagwoord vir fantasie berging moet verskil van die wagwoord vir hoof berging',
    password_should_not_match:
      'Die wagwoord vir fantasie berging moet verskil van die wagwoord vir hoof berging.',
    retype_password: 'Hervoer wagwoord',
    passwords_do_not_match: 'Wagwoorde vergelyk nie, probeer weer',
    success: 'Sukses',
  },
  lnd: {
    title: 'bestuur fondse',
    choose_source_wallet: 'Kies ‘n bron beursie',
    refill_lnd_balance: 'Herlaai Lightning beursie',
    refill: 'Herlaai',
    withdraw: 'Ontrek',
    expired: 'Verval',
    placeholder: 'Faktuur',
    exchange: 'Exchange',
    sameWalletAsInvoiceError:
      'U kan nie ‘n faktuur betaal met die selfde beursie waarmee die faktuur geksep is nie.',
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
