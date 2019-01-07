module.exports = {
  _: {
    storage_is_encrypted: 'Dein Speicher ist verschlüsselt. Zum Entschlüsseln wird ein Passwort benötigt.',
    enter_password: 'Gib das Passwort ein',
    bad_password: 'Fasches Passwort, nächster Versuch',
    months_ago: 'Monate zurück',
    days_ago: 'Tage zurück',
    hours_ago: 'Stunden zurück',
    minutes_ago: 'Minuten zurück',
    never: 'nie',
  },
  wallets: {
    select_wallet: 'Wähle Wallet',
    options: 'Einstellungen',
    list: {
      app_name: 'Blue Wallet',
      title: 'Wallets',
      header:
        'Eine Wallet (Brieftasche) spiegelt ein Paar von kryptographischen Schlüssel wider. Einen geheimen und eine Adresse als öffentlichen Schlüssel. Letztern kann man zum Erhalt von DBD teilen.',
      add: 'Wallet hinzufügen',
      create_a_wallet: 'Wallet erstellen',
      create_a_wallet1: 'Es ist kostenlos und du kannst',
      create_a_wallet2: 'so viele erstellen, wie du möchtest',
      latest_transaction: 'Lezte Transaktion',
      empty_txs1: 'Deine Transaktionen erscheinen hier',
      empty_txs2: 'Noch keine Transaktionen',
      tap_here_to_buy: 'Klicke hier, um DBD zu kaufen',
    },
    reorder: {
      title: 'Wallets neu ordnen',
    },
    add: {
      title: 'Wallet hinzufügen',
      description:
        'Du kannst entweder ein Backup einer Paper-Wallet einscannen (im WIF - Wallet Import Format) oder eine neue Wallet erstellen. SegWit Wallets werden standardmäßig unterstützt.',
      scan: 'Scannen',
      create: 'Erstellen',
      label_new_segwit: 'Neue SegWit Wallet',
      label_new_lightning: 'Neue Lightning Wallet',
      wallet_name: 'Wallet Name',
      wallet_type: 'Typ',
      or: 'oder',
      import_wallet: 'Wallet importieren',
      imported: 'Importiert',
      coming_soon: 'Folgt bald',
      lightning: 'Lightning',
      bitcoin: 'DBD',
    },
    details: {
      title: 'Wallet',
      address: 'Adresse',
      type: 'Typ',
      label: 'Bezeichnung',
      destination: 'Zieladresse',
      description: 'Beschreibung',
      are_you_sure: 'Bist du dir sicher??',
      yes_delete: 'Ja, löschen',
      no_cancel: 'Nein, abbrechnen',
      delete: 'Löschen',
      save: 'Sichern',
      delete_this_wallet: 'Lösche diese Wallet',
      export_backup: 'Exportieren / Backup',
      buy_bitcoin: 'DBD kaufen',
      show_xpub: 'Wallet XPUB zeigen',
    },
    export: {
      title: 'Wallet exportieren',
    },
    xpub: {
      title: 'Wallet XPUB',
      copiedToClipboard: 'In die Zwischenablage kopiert.',
    },
    import: {
      title: 'Importieren',
      explanation:
        'Gib hier deine mnemonische Phrase, deinen privaten Schlüssel, WIF oder worüber du auch immer verfügst ein. BlueWallet wird bestmöglich dein Format interpretieren und die Wallet importieren',
      imported: 'Importiert',
      error: 'Fehler beim Import. Ist die Eingabe korrekt?',
      success: 'Erfolg',
      do_import: 'Importiere',
      scan_qr: 'oder QR-Code scannen?',
    },
    scanQrWif: {
      go_back: 'Zurück',
      cancel: 'Abbrechen',
      decoding: 'Decodieren',
      input_password: 'Passwort eingeben',
      password_explain: 'Das ist ein BIP38 verschlüsselter geheimer Schlüssel',
      bad_password: 'Falsches Passwort',
      wallet_already_exists: 'Diese Wallet existiert bereits',
      bad_wif: 'Falsches WIF',
      imported_wif: 'WIF importiert',
      with_address: ' mit Adresse ',
      imported_segwit: 'SegWit importiert',
      imported_legacy: 'Legacy importiert',
      imported_watchonly: 'Watch-Only importiert',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transaktionen',
      title: 'Transaktionen',
      description: 'Eine Liste eingehender oder ausgehender Transaktionen deiner Wallets',
      conf: 'conf',
    },
    details: {
      title: 'Transaktionen',
      from: 'Eingehend',
      to: 'Ausgehend',
      copy: 'Kopieren',
      transaction_details: 'Details',
      show_in_block_explorer: 'Im Block-Explorer zeigen',
    },
  },
  send: {
    header: 'Senden',
    details: {
      title: 'Transaktion erstellen',
      amount_field_is_not_valid: 'Betrageingabe ist nicht valide',
      fee_field_is_not_valid: 'Gebühreingabe ist nicht valide',
      address_field_is_not_valid: 'Adresseingabe ist nicht valide',
      total_exceeds_balance: 'Der zu sendende Betrag ist größer als der verfügbare Betrag.',
      create_tx_error: 'Fehler beim Erstellen der Transaktion. Bitte stelle sicher, dass die Adresse valide ist.',
      address: 'Adresse',
      amount_placeholder: 'Betrag (in DBD)',
      fee_placeholder: 'plus Gebühr (in DBD)',
      note_placeholder: 'Notiz',
      cancel: 'Abbrechen',
      scan: 'Scan',
      send: 'Senden',
      create: 'Erstellen',
      remaining_balance: 'Verfügbarer Betrag',
    },
    confirm: {
      header: 'Bestätigen',
      sendNow: 'Jetzt senden',
    },
    success: {
      done: 'Fertig',
    },
    create: {
      details: 'Details',
      title: 'Transaktion erstellen',
      error: 'Fehler beim Erstellen der Transaktion. Falsche Adresse oder Betrag?',
      go_back: 'Zurück',
      this_is_hex: 'Das ist die hexadezimale Darstellung der signierten Transaktion und bereit zum Übertragen an das Netzwerk',
      to: 'An',
      amount: 'Betrag',
      fee: 'Gebühr',
      tx_size: 'Größe',
      satoshi_per_byte: 'Satoshi pro Byte',
      memo: 'Memo',
      broadcast: 'Übertragen',
      not_enough_fee: 'Gebühr zu gering. Erhöhe die Gebühr',
    },
  },
  receive: {
    header: 'Erhalten',
    details: {
      title: 'Teile diese Adresse mit dem Zahlenden',
      share: 'Teilen',
      copiedToClipboard: 'In die Zwischenablage kopiert.',
      label: 'Beschreibung',
      setAmount: 'Zu erhaltender Betrag',
    },
  },
  buyBitcoin: {
    header: 'Kaufe DBD',
    tap_your_address: 'Adresse antippen, um sie in die Zwischenablage zu kopieren:',
    copied: 'In die Zwischenablage kopiert!',
  },
  settings: {
    header: 'Einstellungen',
    plausible_deniability: 'Glaubhafte Abstreitbarkeit...',
    storage_not_encrypted: 'Speicher: nicht verschlüsselt',
    storage_encrypted: 'Speicher: verschlüsselt',
    password: 'Passwort',
    password_explain: 'Erstelle das Passwort zum Entschlüsseln des Speichers',
    retype_password: 'Passwort wiederholen',
    passwords_do_not_match: 'Passwörter stimmen nicht überein',
    encrypt_storage: 'Speicher verschlüsseln',
    about: 'Über',
    language: 'Sprache',
    currency: 'Währung',
  },
  plausibledeniability: {
    title: 'Glaubhafte Abstreitbarkeit',
    help:
      'Unter bestimmten Umständen könntest du dazu gezwungen werden, ' +
      'dein Passwort preiszugeben. Um deine DBD zu sichern, kann ' +
      'BlueWallet einen weiteren verschlüsselten Speicher mit einem ' +
      'anderen Passwort erstellen. Unter äußeren Druck kannst du das ' +
      'zweite Passwort an Fremde weitergeben. Wenn eingegeben, öffnet ' +
      'BlueWallet einen anderen Speicher zur Täuschung. Dies wirkt ' +
      'auf Fremde täuschen echt und dein Hauptspeicher bleibt geheim ' +
      'und sicher.',
    help2: 'Der weitere Speicher ist voll funktional und man kann einen Minimalbetrag für die Glaubhaftigkeit hinterlegen.',
    create_fake_storage: 'Erstelle verschlüsselten Speicher zur Täuschung',
    go_back: 'Zurück',
    create_password: 'Erstelle ein Passwort',
    create_password_explanation: 'Das Passwort für den täuschenden Speicher darf nicht mit dem deines Hauptspeichers übereinstimmen',
    password_should_not_match: 'Das Passwort für den täuschenden Speicher darf nicht mit dem deines Hauptspeichers übereinstimmen',
    retype_password: 'Passwort wiederholen',
    passwords_do_not_match: 'Passwörter stimmen nicht überein. Neuer Versuch',
    success: 'Erfolg',
  },
  lnd: {
    title: 'Beträge verwalten',
    choose_source_wallet: 'Wähle eine Wallet als Quelle',
    refill_lnd_balance: 'Fülle deine Lightning Wallet auf',
    refill: 'Auffüllen',
    withdraw: 'Abheben',
  },
};
