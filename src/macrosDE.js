export const macrosPoo = (
[{title: 'Subject' , text: "Ihre Anfrage zur Fahrzeugregistrierung vom xxxdatexxx (xxxcasexxx)"},{title: 'Opener (Female)' , text: "Sehr geehrte Frau xxxapellidoxxx,\n\nVielen Dank für Ihr Interesse an Porsche."},{title: 'Opener (Male)' , text: "Sehr geehrter Herr xxxnamexxx,\n\nVielen Dank für Ihr Interesse an Porsche."},{title: 'Delayed response' , text: "Bitte entschuldigen Sie unsere verspätete Antwort. Wir bedanken uns für Ihre Geduld und bitten wegen der aufgetretenen Unannehmlichkeiten um Ihr Verständnis."},{title: 'Rejected: Docs (full)' , text: "xxxopenerxxx\nSie haben uns am xxxdatumxxx kontaktiert und um die Registrierung Ihres Fahrzeugs in Ihrem My Porsche Konto gebeten. Damit wir diese erfolgreich abschließen können, möchten wir Sie bitten, uns die folgenden Unterlagen zuzusenden:\n\nXXXDOCUMENTSXXX\n \nUm Ihre persönlichen Daten zu schützen, laden Sie das Dokument bitte über das Anmeldeformular [https://connect-portal.porsche.com/core/de/de_DE/vehicles/add] hoch, da so eine verschlüsselte Übertragung gewährleistet ist. \n\nSobald Ihre Unterlagen vollständig sind und Ihre Freischaltung für My Porsche erfolgreich abgeschlossen wurde, informieren wir Sie umgehend per E-Mail. Wenn Sie weitere Fragen oder Bedenken haben, zögern Sie bitte nicht, uns zu kontaktieren. \n \nMit freundlichen Grüßen,\nIhr Porsche Team."},{title: 'Rejected: Info (full)' , text: "xxxopenerxxx\nSie haben uns am xxxdatexxx kontaktiert und um die Registrierung Ihres Fahrzeugs in Ihrem My Porsche Konto gebeten. Damit wir es erfolgreich abschließen können, möchten wir Sie bitten, auf diese E-Mail mit den folgenden Informationen zu antworten:\n\nXXXINFORMATIONXXX\n\nSobald diese zusätzlichen Informationen verarbeitet wurden und Ihre Freischaltung für My Porsche erfolgreich abgeschlossen wurde, informieren wir Sie umgehend per E-Mail. Wenn Sie weitere Fragen oder Bedenken haben, zögern Sie bitte nicht, uns zu kontaktieren. \n \nMit freundlichen Grüßen, \nIhr Porsche Team."},{title: 'Missing document: ID' , text: "#. Personalausweis: Ihr gültiger nationaler Personalausweis, Reisepass oder Führerschein mit allen Daten sichtbar."},{title: 'Missing document: Vehicle' , text: "#. Fahrzeugschein: Der Fahrzeugschein auf den Namen des Benutzers, der sich identifiziert. Wenn das Fahrzeug auf den Namen einer Firma lautet, wird ein Berechtigungsschein benötigt."},{title: 'Missing document: Authorization' , text: "#. Autorisierungsdokument: Wenn das Fahrzeug auf den Namen einer Firma läuft, benötigen wir ein Dokument, das den Fahrer autorisiert, der sich in diesem Prozess identifiziert. Es muss die VIN des Fahrzeugs, Vor- und Nachname des Fahrers, Name des Unternehmens und die Unterschriften beider Parteien enthalten."},{title: 'Info: Different Dealer ID (VIN linked)' , text: "#. Sie haben in Ihrem Anmeldeformular das Porsche Zentrum xxxpcxformxxx als Präferenz ausgewählt, aber wir konnten feststellen, dass Ihr Fahrzeug bereits auf Ihren Namen im Porsche Zentrum xxxpcxvehiclexxx zugelassen ist. Unsere Serviceabteilung kann Ihnen bei dieser Änderung leider nicht helfen. Wir können die My Porsche Registrierung Ihres Fahrzeugs mit Ihren aktuellen Präferenzen durchführen, sofern Sie uns dazu die Freigabe erteilen. Sie können Ihre Präferenzen im Porsche Zentrum jederzeit durch einen Besuch oder durch direkte Kontaktaufnahme ändern."},{title: 'Info: Different Dealer ID (VIN not linked)' , text: "#. Sie haben im Anmeldeformular das Porsche Zentrum xxxpcxformxxx als Präferenz ausgewählt. Da Sie bisher in unserem Porsche Zentrum xxxpcxbpxxx angemeldet waren, müssen wir Sie um Bestätigung bitten, ob wir diese Änderung vornehmen sollen oder nicht."},{title: 'Documentation: PoO for VIN' , text: "INNSO xxxinnsoxxx\nPoO for VIN: xxxvinxxx\n\nMarket BP: xxxbpxxx > PC xxxpcxxx\n\nID:\n-First Name:\n-Last Name:\n-Date of Birth:\n-Validity:\n\nVehicle:\n-VIN:\n-First Name:\n-Last Name:\n-Address: \n-Registration Date:\n\nAuthorization:\n-Company Name:\n-Signed by:\n-VIN:\n-Auth. Driver First Name:\n-Auth. Driver Last Name:\n\nForm:\n-First Name:\n-Last Name:\n-Porsche ID:\n-Mobile:\n-Address:\n-Dealer ID:\n\n\nNotes: \n#-->: [xxxnamexxx] xxxdatexxx:"},{title: 'Documentation: VIN already linked to BP' , text: "INNSO xxxinnsoxxx\nVIN already linked to BP.\n\nMarket BP: xxxbpxxx > PC xxxpcxxx\n\nForm:\n-First Name:\n-Last Name:\n-Porsche ID:\n-Mobile:\n-Dealer ID: \n\n#-->: [xxxnamexxx] xxxdatexxx:"},{title: 'PC Notification Email DE (BP + VIN)' , text: "Sehr geehrte Damen und Herren,\n\nder Kunde xxxfirstxandxlastxxx hat sich über den Selbstregistrierungsprozess in My Porsche angemeldet und Ihr PZ als Wunsch-PZ angegeben.\n\nWir haben den GP xxxbpxxx neu angelegt und die Fahrzeugbeziehung nach Prüfung der eingereichten Unterlagen erstellt. \nIn My Porsche hat Ihr Kunde der einmaligen Kontaktaufnahme per Post oder per E-Mail durch seinen Wunschhändler zugestimmt. Bitte nehmen Sie zum Kunden Kontakt auf, um seine Daten zu vervollständigen.\n\nBitte holen Sie für die weitere Betreuung und werbliche Maßnahmen unbedingt das unterzeichnete C@P Datenschutzformular (EWE) des Kunden ein (falls noch nicht vorhanden) und aktualisieren die gesperrten Kanäle.\n\nMit freundlichen Grüßen,\nIhr Porsche Team"},{title: 'PC Notification Subject DE (BP+VIN)' , text: "Neuer Geschäftspartner über den Selbstregistrierungsprozess"},{title: 'PC Notification Email DE (VIN only)' , text: "Sehr geehrte Damen und Herren,\n\nder Kunde xxxfirstxandxlastxxx [xxxbpxxx] hat sich über den Selbstregistrierungsprozess im My Porsche angemeldet und Ihr PZ als Wunsch-PZ angegeben.\n\nWir haben die Fahrzeugbeziehung nach Prüfung der eingereichten Unterlagen erstellt.\n\nIn My Porsche hat Ihr Kunde der einmaligen Kontaktaufnahme per Post oder per E-Mail durch seinen Wunschhändler zugestimmt. Bitte nehmen Sie zum Kunden Kontakt auf, um seine Daten zu vervollständigen.\n\nBitte holen Sie für die weitere Betreuung und werbliche Maßnahmen unbedingt das unterzeichnete C@P Datenschutzformular (EWE) des Kunden ein (falls noch nicht vorhanden) und aktualisieren die gesperrten Kanäle.\n\nMit freundlichen Grüßen,\nIhr Porsche Team."},{title: 'PC Notification Subject DE (VIN only)' , text: "Geschäftspartner mit über My Porsche hinzugefügten Fahrzeug"},{title: 'PC Notification Email CH (BP + VIN)' , text: "Sehr geehrte Damen und Herren,\n\nGerne möchten wir Sie informieren, dass wir im Rahmen der Selbstregistrierung von Porsche Connect folgende Anpassungen durch den Kunden mitgeteilt bekommen haben und entsprechend im C@P aktualisiert haben:\n\n• Kunde xxxfullxnamexxx (xxxbpxxx) wurde neu im C@P für Sie angelegt.\n\n• Ebenfalls wurde eine aktive Fahrzeugbeziehung zwischen diesem Kunden (xxxbpxxx) und diesem Fahrzeug (xxxvinxxx) auf Kundenwunsch aktiviert.\n\nIn My Porsche hat Ihr Kunde der einmaligen Kontaktaufnahme per Post oder E-Mail durch seinen Wunschhändler zugestimmt. Wir bitten Sie, den Kunden zu kontaktieren um ihn im Porsche Zentrum willkommen zu heissen und seine C@P-Daten zu vervollständigen.\n\nFür Rückfragen können Sie sich gerne an uns wenden.\n\nFeundliche Grüsse,\nIhr Porsche Team."},{title: 'PC Notification Subject CH (BP + VIN)' , text: "Porsche Connect Switzerland - Datenaktualisierung auf Kundenwunsch"},{title: 'PC Notification Email CH (VIN only)' , text: "Sehr geehrte Damen und Herren,\n\nGerne möchten wir Sie informieren, dass wir im Rahmen der My Porsche Selbstregistrierung folgende Anpassungen durch Ihren Kunden xxxfullxnamexxx, (xxxbpxxx), mitgeteilt bekommen haben und entsprechend im C@P aktualisiert haben:\n\n• Erstellung einer aktiven Fahrzeugbeziehung zwischen diesem Kunden (xxxbpxxx) und diesem Fahrzeug (xxxvinxxx).\n\nFür Rückfragen können Sie sich gerne an uns wenden.\n\nFreundliche Grüsse,\nIhr Porsche Team."},{title: 'PC Notification Subject CH (VIN only)' , text: "Porsche Connect Switzerland - Datenaktualisierung auf Kundenwunsch"},{title: 'Customer Invitation Notification' , text: "xxxopenerxxx\nWir haben Ihre Anfrage zur Aufnahme eines Porsche Fahrzeugs in Ihr My Porsche Konto erhalten und freuen uns über Ihr Interesse an unserem My Porsche Portal.\n\nWir haben Ihnen eine Einladungs-E-Mail für My Porsche zugesandt. Sobald Sie diese Einladung annehmen, wird Ihr Fahrzeug in Ihrem Account aktiv. Bitte beachten Sie, dass diese Einladung innerhalb der kommenden 14 Tage angenommen werden muss.\n\nBei weiteren Fragen stehen wir Ihnen jederzeit gerne zur Verfügung.\n\nMit freundlichen Grüßen"},{title: 'Denied: Non-Supported Country' , text: "xxxopenerxxx\nSie haben uns am xxxdatexxx kontaktiert und um die Registrierung Ihres Fahrzeugs in Ihrem My Porsche Konto gebeten. Der Prozess konnte jedoch aus folgenden Gründen nicht abgeschlossen werden: \n\n-Für Fahrzeuge, die in xxxcountryxxx zugelassen sind, ist eine Online-Registrierung leider nicht möglich. Sie können den Vorgang abschließen, indem Sie sich direkt an Ihr bevorzugtes Porsche Zentrum wenden. \n\nWenn die Eigentumsinformationen nicht auf dem neuesten Stand sind, aktualisieren Sie bitte die Dokumentation, bevor Sie eine neue Anfrage einreichen. \n\nSollten Sie weitere Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren. \n\nMit freundlichen Grüßen,\nIhr Porsche Team."},{title: 'Denied: Not owner (full)' , text: "xxxopenerxxx\nSie haben uns am xxxdatexxx kontaktiert und um die Registrierung Ihres Fahrzeugs in Ihrem My Porsche Konto gebeten. Der Prozess konnte jedoch aus folgenden Gründen nicht abgeschlossen werden:\n\n1. Die Bestellung muss vom Konto des registrierten Besitzers aus erfolgen.\n\n2. Die Daten im Formular müssen mit der gesendeten Dokumentation übereinstimmen.\n\nWenn die Eigentumsinformationen nicht aktuell sind, aktualisieren Sie bitte die Dokumentation, bevor Sie eine neue Bestellung aufgeben. Wenn Sie nicht der Eigentümer des Fahrzeugs sind, können Sie sich als Zweitnutzer registrieren, indem Sie eine Einladung vom My Porsche Konto des Hauptnutzers senden.\n\nSollten Sie weitere Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.\n\nMit freundlichen Grüßen,\nIhr Porsche Team."}]

)