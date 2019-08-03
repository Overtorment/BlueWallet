module.exports = {
  _: {
    storage_is_encrypted: 'Lageret er krypteret. Indtast adgangskode for at dekryptere',
    enter_password: 'Indtast adgangskode',
    bad_password: 'Forkert adgangskode, prøv igen',
    never: 'aldrig',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Vælg wallet',
    options: 'valgmuligheder',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',
    list: {
      app_name: 'BlueWallet',
      title: 'wallets',
      header: 'En wallet består af par af hemmelige (private nøgler) og en adresse' + 'som du kan dele med andre for at modtage coins.',
      add: 'Tilføj Wallet',
      create_a_wallet: 'Opret en  wallet',
      create_a_wallet1: 'Det er helt gratis og du kan oprette',
      create_a_wallet2: 'lige så mange du vil',
      latest_transaction: 'seneste transaktion',
      empty_txs1: 'Dine transaktioner vil blive vist her,',
      empty_txs2: 'ingen endnu',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Tryk her for at købe Bitcoin',
    },
    reorder: {
      title: 'Ændre rækkefølgen af wallets',
    },
    add: {
      title: 'Tilføj wallet',
      description:
        'Du kan enten scanne en backup papir wallet (i et WIF - Wallet Import Format), eller oprette en ny wallet. Segwit wallets er understøttet som standard.',
      scan: 'Scan',
      create: 'Opret',
      label_new_segwit: 'Ny SegWit',
      label_new_lightning: 'Ny Lightning',
      wallet_name: 'wallet navn',
      wallet_type: 'type',
      or: 'eller',
      import_wallet: 'Importer wallet',
      imported: 'Importeret',
      coming_soon: 'Kommer snart',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Wallet',
      address: 'Adresse',
      type: 'Type',
      label: 'Etiket',
      destination: 'destination',
      description: 'bskrivelse',
      are_you_sure: 'Er du sikker?',
      yes_delete: 'Ja, slet',
      no_cancel: 'Nej, annuller',
      delete: 'Slet',
      save: 'Gem',
      delete_this_wallet: 'Slet denne wallet',
      export_backup: 'Eksporter / backup',
      buy_bitcoin: 'Køb Bitcoin',
      show_xpub: 'Vis wallet XPUB',
    },
    export: {
      title: 'wallet eksport',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'Kopieret til udklipsholder.',
    },
    import: {
      title: 'importer',
      explanation:
        'Indtast din huskeregel, private nøgle, WIF, eller hvad du end har. BlueWallet vil forsøge at gætte det rigtige format og importere din wallet',
      imported: 'Importeret',
      error: 'Importen lykkedes ikke. Er det en gyldig nøgle?',
      success: 'Succes',
      do_import: 'Importer',
      scan_qr: 'eller scan QR kode istedet?',
    },
    scanQrWif: {
      go_back: 'Tilbage',
      cancel: 'Annuller',
      decoding: 'Afkoder',
      input_password: 'Indtast adgangskode',
      password_explain: 'Dette er en BIP38 krypteret privat nøgle',
      bad_password: 'Forkert adgangkode',
      wallet_already_exists: 'En sådan wallet eksisterer allerede',
      bad_wif: 'Forkert WIF',
      imported_wif: 'Importeret WIF ',
      with_address: ' med adresse ',
      imported_segwit: 'Importeret SegWit',
      imported_legacy: 'Importeret Legacy',
      imported_watchonly: 'Importeret Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transaktioner',
      title: 'transaktioner',
      description: 'En liste af indgåeende og udgående transaktioner i dine wallets',
      conf: 'conf',
    },
    details: {
      title: 'Transaktion',
      from: 'Fra',
      to: 'Til',
      copy: 'Kopier',
      transaction_details: 'Transaktions detaljer',
      show_in_block_explorer: 'Vis i block-explorer',
    },
  },
  send: {
    header: 'Send',
    details: {
      title: 'opret transaktion',
      amount_field_is_not_valid: 'Beløbsfeltet er ikke gyldigt',
      fee_field_is_not_valid: 'Gebyr feltet er ikke gyldigt',
      address_field_is_not_valid: 'Adresse felt er ikke gyldigt',
      total_exceeds_balance: 'Beløbet du prøver at sende er større end din kontosaldo.',
      create_tx_error: 'Der skete en fejl ved oprettelse af transaktionen. Check om addressen er gyldig.',
      address: 'adresse',
      amount_placeholder: 'beløb der skal sendes (i BTC)',
      fee_placeholder: 'plus transaktionsgebyr (i BTC)',
      note_placeholder: 'Notat til eget brug',
      cancel: 'Annuller',
      scan: 'Scan',
      send: 'Send',
      create: 'Opret',
      remaining_balance: 'Resterende saldo',
    },
    confirm: {
      header: 'Bekræft',
      sendNow: 'Send nu',
    },
    success: {
      done: 'Udført',
    },
    create: {
      details: 'Detaljer',
      title: 'opret transaktion',
      error: 'Der skete en fejl ved oprettelse af transaktionen. Er addresssen og beløbet korrekt?',
      go_back: 'Tilbage',
      this_is_hex: 'Dette er transaktion hex, klar til at sende ud til netværket.',
      to: 'Til',
      amount: 'Beløb',
      fee: 'Gebyr',
      tx_size: 'TX størrelse',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Notat',
      broadcast: 'Transmitter',
      not_enough_fee: 'Gebyret er ikke højt nok. Forhøj gebyret.',
    },
  },
  receive: {
    header: 'Modtag',
    details: {
      title: 'Del denne adresse med betaleren',
      share: 'del',
      copiedToClipboard: 'Kopieret til udklipsholder.',
      label: 'Beskrivelse',
      create: 'Create',
      setAmount: 'Modtag med beløb',
    },
    scan_lnurl: 'Scan to receive'
  },
  buyBitcoin: {
    header: 'Køb Bitcoin',
    tap_your_address: 'Tryk på addressen og kopier den til udklipsholder:',
    copied: 'Kopieret til udklipsholder!',
  },
  settings: {
    header: 'indstillinger',
    plausible_deniability: 'Sandsynlig benægtelse...',
    storage_not_encrypted: 'Lager: ikke krypteret',
    storage_encrypted: 'Lager: krypteret',
    password: 'Adgangskode',
    password_explain: 'Indtast den adgangskode du vil bruge til at kryptere lageret',
    retype_password: 'Gentag adgangskoden',
    passwords_do_not_match: 'Adgangskoden er ikke den samme',
    encrypt_storage: 'Krypter lager',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'save',
    about: 'Andet',
    language: 'Sprog',
    currency: 'Valuta',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Sandsynlig benægtelse',
    help:
      'Under visse omstændighder, kan du blive tvunget til at give din ' +
      'adgangskode. For at beskytte dine coins kan du med Bluewallet lave ' +
      'et falsk krypteret lager, med en anden kode. I en presset situation, ' +
      'kan du give denne adgangskode istedet. Hvis denne kode indtastes i ' +
      'BlueWallet, vil brugeren se den alternative wallet. Det vil se helt' +
      'legitimt ud for andre, og dermed beskytte din originale wallet og ' +
      'dine coins.',
    help2: 'Det nye lager vil være fuldt funktionsdygtigt, og du kan evt have nogle ' + 'småbeløb så det ser troværdigt ud.',
    create_fake_storage: 'Opret falsk kryopteret lager',
    go_back: 'tilbage',
    create_password: 'Opret adgangskode',
    create_password_explanation: 'Adgangskoden til det falske lager må ikke være den samme som den du bruger til det rigtige lager',
    password_should_not_match: 'Adgangskoden til det falske lager må ikke være den samme som den du bruger til det rigtige lager',
    retype_password: 'Indtast adgangskoden igen',
    passwords_do_not_match: 'Adgangskoden er ikke den samme, prøv igen',
    success: 'Succes',
  },
  lnd: {
    title: 'Administration',
    placeholder: 'Invoice',
    choose_source_wallet: 'Vælge en wallet',
    refill_lnd_balance: 'Genopfyld Lightning wallet',
    refill: 'Genopfyld',
    withdraw: 'Træk coins tilbage',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device. You can use Electrum wallet on desktop (https://electrum.org/) to restore the same wallet.",
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
};
