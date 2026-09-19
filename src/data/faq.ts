// Question & answer content for the SEO FAQ sections.
// Single source of truth: the same strings are rendered visibly and emitted as
// FAQPage JSON-LD, so the structured data always matches the page content.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faqGroups: Record<'de' | 'en', FaqGroup[]> = {
  de: [
    {
      title: 'Prozentwert berechnen – „Wie viel ist X % von Y?"',
      items: [
        {
          q: 'Wie viel ist 20 % von 500 €?',
          a: '20 % von 500 € sind 100 €. Rechenweg: (500 × 20) ÷ 100 = 10.000 ÷ 100 = 100 €. Kurzweg: 10 % von 500 € sind 50 €, 20 % sind also doppelt so viel.',
        },
        {
          q: 'Wie viel ist 20 % von 100 €?',
          a: '20 % von 100 € sind 20 €. Rechenweg: (100 × 20) ÷ 100 = 20 €. Bei einem Grundwert von 100 entspricht der Prozentsatz immer direkt dem Prozentwert.',
        },
        {
          q: 'Wie rechne ich 20 % von etwas aus?',
          a: 'Multiplizieren Sie den Betrag mit 20 und teilen Sie das Ergebnis durch 100. Formel: Prozentwert = (Grundwert × Prozentsatz) ÷ 100. Beispiel: 20 % von 250 € = (250 × 20) ÷ 100 = 50 €. Als Abkürzung können Sie den Betrag auch direkt mit 0,2 multiplizieren: 250 × 0,2 = 50 €.',
        },
        {
          q: 'Wie viel ist 20 % von 550 €?',
          a: '20 % von 550 € sind 110 €. Rechenweg: (550 × 20) ÷ 100 = 11.000 ÷ 100 = 110 €. Alternativ: 550 × 0,2 = 110 €.',
        },
        {
          q: 'Was ist 20 % von 400 Euro?',
          a: '20 % von 400 € sind 80 €. Rechenweg: (400 × 20) ÷ 100 = 8.000 ÷ 100 = 80 €. Merkhilfe: 10 % wären 40 €, also sind 20 % genau das Doppelte.',
        },
        {
          q: 'Was ist 30 % von 500?',
          a: '30 % von 500 sind 150. Rechenweg: (500 × 30) ÷ 100 = 15.000 ÷ 100 = 150. Merkhilfe: 10 % sind 50, also sind 30 % dreimal 50.',
        },
        {
          q: 'Wie viel ist 10 % von 50?',
          a: '10 % von 50 sind 5. Rechenweg: (50 × 10) ÷ 100 = 500 ÷ 100 = 5. Der Trick: 10 % bedeutet „durch 10 teilen", also 50 ÷ 10 = 5.',
        },
        {
          q: 'Wie viel ist 20 % von 40 €?',
          a: '20 % von 40 € sind 8 €. Rechenweg: (40 × 20) ÷ 100 = 800 ÷ 100 = 8 €. Kurzweg: 40 × 0,2 = 8 €. 10 % wären 4 €, 20 % also 8 €.',
        },
        {
          q: 'Wie hoch ist 60 % von 1600 €?',
          a: '60 % von 1.600 € sind 960 €. Rechenweg: (1.600 × 60) ÷ 100 = 96.000 ÷ 100 = 960 €. Zerlegter Weg: 50 % = 800 € und 10 % = 160 €, zusammen 960 €.',
        },
        {
          q: 'Wie viel ist 1 % von 30 €?',
          a: '1 % von 30 € sind 0,30 € (30 Cent). Rechenweg: (30 × 1) ÷ 100 = 0,30 €. Der Trick: 1 % ist immer der Grundwert geteilt durch 100.',
        },
        {
          q: 'Wie viel ist 1 % von 1000?',
          a: '1 % von 1.000 sind 10. Rechenweg: (1.000 × 1) ÷ 100 = 10. Bei einem Prozent verschieben Sie das Komma einfach um zwei Stellen nach links: 1.000 → 10.',
        },
        {
          q: 'Was sind 2,5 % von 100?',
          a: '2,5 % von 100 sind 2,5. Rechenweg: (100 × 2,5) ÷ 100 = 250 ÷ 100 = 2,5. Bei einem Grundwert von 100 entspricht der Prozentsatz immer direkt dem Prozentwert.',
        },
      ],
    },
    {
      title: 'Prozentsatz berechnen – „Wie viel Prozent ist X von Y?"',
      items: [
        {
          q: 'Wie rechne ich, wie viel Prozent von etwas ist?',
          a: 'Teilen Sie den Anteil durch das Ganze und multiplizieren Sie das Ergebnis mit 100. Formel: Prozentsatz = (Anteil ÷ Grundwert) × 100. Beispiel: 30 € von 250 € sind (30 ÷ 250) × 100 = 0,12 × 100 = 12 %. Im Rechner oben wählen Sie dazu einfach die Frage „X ist wie viel Prozent von Y?".',
        },
        {
          q: 'Wie viel Prozent sind 30 € von 250 €?',
          a: '30 € von 250 € sind 12 %. Rechenweg: (30 ÷ 250) × 100 = 0,12 × 100 = 12 %. Gegenprobe: 12 % von 250 € = (250 × 12) ÷ 100 = 30 €.',
        },
        {
          q: 'Wie viel Prozent sind 33 von 42?',
          a: '33 von 42 sind rund 78,57 %. Rechenweg: (33 ÷ 42) × 100 = 0,7857 × 100 ≈ 78,57 %. Das entspricht etwa 79 von 100 Punkten, also knapp 80 %.',
        },
        {
          q: 'Wie viel Prozent sind 28 von 35?',
          a: '28 von 35 sind 80 %. Rechenweg: (28 ÷ 35) × 100 = 0,8 × 100 = 80 %. Kurzweg über den Bruch: 28/35 lässt sich mit 7 kürzen zu 4/5, und 4/5 = 0,8 = 80 %.',
        },
        {
          q: 'Wie viel Prozent sind 25 € von 200 €?',
          a: '25 € von 200 € sind 12,5 %. Rechenweg: (25 ÷ 200) × 100 = 0,125 × 100 = 12,5 %. Merkhilfe: 25 € von 200 € ist genau ein Achtel, und 1/8 = 12,5 %.',
        },
        {
          q: 'Wie viel Prozent sind 30 von 41?',
          a: '30 von 41 sind rund 73,17 %. Rechenweg: (30 ÷ 41) × 100 = 0,7317 × 100 ≈ 73,17 %.',
        },
        {
          q: 'Wie viel Prozent ist 2 von 15?',
          a: '2 von 15 sind rund 13,33 %. Rechenweg: (2 ÷ 15) × 100 = 0,1333 × 100 ≈ 13,33 %. Als Bruch ist 2/15 etwas weniger als 1/7 (gerundet 14,29 %).',
        },
        {
          q: 'Wie viel Prozent sind 2 von 18?',
          a: '2 von 18 sind rund 11,11 %. Rechenweg: (2 ÷ 18) × 100 = 0,1111 × 100 ≈ 11,11 %. Da 2/18 gekürzt 1/9 ergibt, entsteht der periodische Wert 11,11 %.',
        },
        {
          q: 'Wie viel Prozent sind 2 von 3?',
          a: '2 von 3 sind rund 66,67 %. Rechenweg: (2 ÷ 3) × 100 = 0,6666 × 100 ≈ 66,67 %. Der Bruch 2/3 liegt zwischen 50 % und 75 %.',
        },
        {
          q: 'Wie viel sind 2 von 50?',
          a: '2 von 50 sind 4 %. Rechenweg: (2 ÷ 50) × 100 = 0,04 × 100 = 4 %. Merkhilfe: 50 ist die Hälfte von 100, deshalb verdoppeln Sie den Anteil einfach zu 4 %.',
        },
        {
          q: 'Wie rechnet man Prozent von 2 Werten?',
          a: 'Bilden Sie den Quotienten der beiden Werte und multiplizieren Sie ihn mit 100. Formel: Prozentsatz = (Wert A ÷ Wert B) × 100. Beispiel: 15 von 60 sind (15 ÷ 60) × 100 = 25 %. Suchen Sie stattdessen die Veränderung zwischen zwei Werten, nutzen Sie ((neuer Wert − alter Wert) ÷ alter Wert) × 100.',
        },
        {
          q: 'Wie berechne ich Prozent von etwas?',
          a: 'Es gibt drei Grundfälle: Prozentwert = (Grundwert × Prozentsatz) ÷ 100, Prozentsatz = (Prozentwert ÷ Grundwert) × 100 und Grundwert = (Prozentwert × 100) ÷ Prozentsatz. Sobald zwei der drei Größen bekannt sind, liefert die passende Formel die dritte.',
        },
        {
          q: 'Was ist 5 von 20 von 100?',
          a: '5 von 20 sind 25 %, und 25 % von 100 sind 25. Rechenweg: Zuerst (5 ÷ 20) × 100 = 0,25 × 100 = 25 %. Danach (100 × 25) ÷ 100 = 25.',
        },
        {
          q: 'Wie viel ist 60 von 2000 €?',
          a: '60 € von 2.000 € sind 3 %. Rechenweg: (60 ÷ 2.000) × 100 = 0,03 × 100 = 3 %. Gegenprobe: 3 % von 2.000 € = (2.000 × 3) ÷ 100 = 60 €.',
        },
      ],
    },
    {
      title: 'Große Zahlen – „Wie viel ist 1 von 1 Million?"',
      items: [
        {
          q: 'Wie viel ist 1 von 1 Million?',
          a: '1 von 1.000.000 entspricht 0,0001 %. Rechenweg: (1 ÷ 1.000.000) × 100 = 0,0001 %. Als absoluter Anteil bleibt 1 von 1 Million natürlich der Wert 1.',
        },
        {
          q: 'Wie viel ist 1 Prozent von 1 Million?',
          a: '1 % von 1 Million sind 10.000. Rechenweg: (1.000.000 × 1) ÷ 100 = 10.000. Der Trick: 1 % ist der Grundwert geteilt durch 100.',
        },
        {
          q: 'Wie viel ist 1 von 1 Milliarde?',
          a: '1 von 1.000.000.000 entspricht 0,0000001 %. Rechenweg: (1 ÷ 1.000.000.000) × 100 = 0,0000001 %. Anders gesagt: 1 % von einer Milliarde sind bereits 10 Millionen.',
        },
        {
          q: 'Wie viel ist 1 % von 8 Milliarden?',
          a: '1 % von 8 Milliarden sind 80 Millionen. Rechenweg: (8.000.000.000 × 1) ÷ 100 = 80.000.000. Bei 1 % teilen Sie die Zahl einfach durch 100.',
        },
        {
          q: 'Wie viel ist 1 Prozent von 10 Milliarden?',
          a: '1 % von 10 Milliarden sind 100 Millionen. Rechenweg: (10.000.000.000 × 1) ÷ 100 = 100.000.000.',
        },
      ],
    },
    {
      title: 'Prozente im Kopf rechnen – Tricks & Erklärungen',
      items: [
        {
          q: 'Wie kann ich Prozente im Kopf leicht rechnen?',
          a: 'Zerlegen Sie jeden Prozentsatz in einfache Bausteine. 10 % erhalten Sie, indem Sie das Komma um eine Stelle nach links verschieben, 5 % sind die Hälfte davon und 1 % eine weitere Stelle nach links. Aus diesen Bausteinen setzen Sie jeden Wert zusammen: 35 % sind zum Beispiel 3 × 10 % plus 5 %.',
        },
        {
          q: 'Gibt es einen Trick, um Prozente schnell zu berechnen?',
          a: 'Ja, drei Tricks helfen am meisten: Erstens bei 10 % das Komma um eine Stelle nach links schieben. Zweitens bei 25 % durch 4 teilen und bei 50 % durch 2. Drittens Prozentsätze tauschen – X % von Y ist dasselbe wie Y % von X. Deshalb sind 8 % von 50 € genauso viel wie 50 % von 8 €, nämlich 4 €.',
        },
        {
          q: 'Welche Tricks gibt es, um im Kopf zu rechnen?',
          a: 'Besonders nützlich sind: Komma-Verschiebung für 10 % und 1 %, Halbieren für 5 % und 50 %, Vierteln für 25 % und 75 %, Zerlegen in 10er-Bausteine (60 % = 6 × 10 %), der Prozent-Tausch (X % von Y = Y % von X) sowie das Runden auf glatte Beträge mit anschließender Korrektur. Mit diesen Bausteinen lösen Sie die meisten Prozentaufgaben ohne Taschenrechner.',
        },
        {
          q: 'Wie kann ich Prozentrechnung einfach und schnell erklären?',
          a: 'Erklären Sie Prozent zuerst als „von Hundert": 1 % ist der Bruch 1/100. Stellen Sie danach immer dieselbe Frage: Bekannt ist der Grundwert, also das Ganze – gesucht ist entweder der Prozentwert (der Teil), der Prozentsatz (das Verhältnis) oder der Grundwert. Merken Sie sich eine Kernformel: Prozentwert = (Grundwert × Prozentsatz) ÷ 100; die beiden anderen ergeben sich durch Umstellen. Ein Alltagsbeispiel wie „20 % Rabatt auf 50 €" macht das Prinzip sofort greifbar.',
        },
      ],
    },
    {
      title: 'Grundlagen der Prozentrechnung',
      items: [
        {
          q: 'Was ist der Unterschied zwischen prozentualer Veränderung und prozentualem Unterschied?',
          a: 'Die prozentuale Veränderung geht von einer chronologischen Richtung aus, also vom alten Wert zum neuen Wert. Der prozentuale Unterschied vergleicht zwei Zahlen symmetrisch relativ zu ihrem durchschnittlichen Mittelpunkt. Das ist nützlich, wenn keine der beiden Zahlen als Basis dient.',
        },
        {
          q: 'Warum ergibt +19 % MwSt gefolgt von −19 % nicht den Anfangspreis?',
          a: 'Weil der Prozentsatz auf zwei verschiedenen Basisbeträgen berechnet wird. Wenn Sie 19 % zu 100 € addieren, beträgt der Bruttobetrag 119 €. Ziehen Sie anschließend 19 % von 119 € ab, erhalten Sie 96,39 € statt 100 €. Um die Mehrwertsteuer korrekt herauszurechnen, teilen Sie den Bruttobetrag durch 1,19.',
        },
        {
          q: 'Wie funktioniert der Dreisatz-Rechner?',
          a: 'Der Dreisatz löst proportionale Mathematikprobleme in drei Schritten: Zuerst wird das bekannte Verhältnis angegeben, dann wird der Einzelsatz berechnet, indem durch den ersten Wert geteilt wird, und schließlich wird auf die Zielmenge hochskaliert.',
        },
        {
          q: 'Wie berechne ich Rabatte und Sale-Preise?',
          a: 'Für einen Rabatt von X Prozent berechnen Sie X Prozent des Originalpreises und ziehen diesen Betrag vom Preis ab. Alternativ nutzen Sie die Formel: Endpreis = Originalpreis × (1 − Rabatt ÷ 100). Beispiel: 20 % Rabatt auf 50 € ergibt 50 € × 0,80 = 40 €.',
        },
        {
          q: 'Ist der Prozentrechner wirklich kostenlos und ohne Anmeldung?',
          a: 'Ja. Der Prozentrechner ist vollständig kostenlos, werbefrei und ohne Registrierung nutzbar. Die Berechnung läuft direkt im Browser, es werden keine Eingaben an einen Server übertragen.',
        },
      ],
    },
  ],  en: [
    {
      title: 'Percentage value – "What is X% of Y?"',
      items: [
        {
          q: 'What is 20% of $500?',
          a: '20% of $500 is $100. Worked steps: (500 × 20) ÷ 100 = 10,000 ÷ 100 = $100. Shortcut: 10% of $500 is $50, so 20% is exactly double that.',
        },
        {
          q: 'What is 20% of $100?',
          a: '20% of $100 is $20. Worked steps: (100 × 20) ÷ 100 = $20. With a base value of 100, the percentage rate always equals the percentage value directly.',
        },
        {
          q: 'How do I calculate 20% of a number?',
          a: 'Multiply the amount by 20 and divide the result by 100. Formula: percentage value = (base value × rate) ÷ 100. Example: 20% of $250 = (250 × 20) ÷ 100 = $50. As a shortcut you can also multiply directly by 0.2: 250 × 0.2 = $50.',
        },
        {
          q: 'What is 20% of $550?',
          a: '20% of $550 is $110. Worked steps: (550 × 20) ÷ 100 = 11,000 ÷ 100 = $110. Alternatively: 550 × 0.2 = $110.',
        },
        {
          q: 'What is 20% of $400?',
          a: '20% of $400 is $80. Worked steps: (400 × 20) ÷ 100 = 8,000 ÷ 100 = $80. Memory aid: 10% would be $40, so 20% is exactly double.',
        },
        {
          q: 'What is 30% of 500?',
          a: '30% of 500 is 150. Worked steps: (500 × 30) ÷ 100 = 15,000 ÷ 100 = 150. Memory aid: 10% is 50, so 30% is three times 50.',
        },
        {
          q: 'What is 10% of 50?',
          a: '10% of 50 is 5. Worked steps: (50 × 10) ÷ 100 = 500 ÷ 100 = 5. The trick: 10% simply means "divide by 10", so 50 ÷ 10 = 5.',
        },
        {
          q: 'What is 20% of $40?',
          a: '20% of $40 is $8. Worked steps: (40 × 20) ÷ 100 = 800 ÷ 100 = $8. Short version: 40 × 0.2 = $8. Since 10% is $4, 20% is $8.',
        },
        {
          q: 'What is 60% of $1,600?',
          a: '60% of $1,600 is $960. Worked steps: (1,600 × 60) ÷ 100 = 96,000 ÷ 100 = $960. Split approach: 50% = $800 plus 10% = $160 gives $960.',
        },
        {
          q: 'What is 1% of $30?',
          a: '1% of $30 is $0.30. Worked steps: (30 × 1) ÷ 100 = $0.30. The trick: 1% is always the base value divided by 100.',
        },
        {
          q: 'What is 1% of 1,000?',
          a: '1% of 1,000 is 10. Worked steps: (1,000 × 1) ÷ 100 = 10. For one percent, just move the decimal point two places to the left: 1,000 → 10.',
        },
        {
          q: 'What is 2.5% of 100?',
          a: '2.5% of 100 is 2.5. Worked steps: (100 × 2.5) ÷ 100 = 250 ÷ 100 = 2.5. With a base value of 100, the percentage rate always equals the percentage value directly.',
        },
      ],
    },
    {
      title: 'Percentage rate – "What percentage is X of Y?"',
      items: [
        {
          q: 'How do I calculate what percentage one number is of another?',
          a: 'Divide the part by the whole and multiply the result by 100. Formula: rate = (part ÷ base) × 100. Example: $30 of $250 is (30 ÷ 250) × 100 = 0.12 × 100 = 12%. In the calculator above, simply pick the "X is what percent of Y?" mode.',
        },
        {
          q: 'What percentage is $30 of $250?',
          a: '$30 of $250 is 12%. Worked steps: (30 ÷ 250) × 100 = 0.12 × 100 = 12%. Check: 12% of $250 = (250 × 12) ÷ 100 = $30.',
        },
        {
          q: 'What percentage is 33 of 42?',
          a: '33 of 42 is about 78.57%. Worked steps: (33 ÷ 42) × 100 = 0.7857 × 100 ≈ 78.57%. That is roughly 79 out of 100 points, so just under 80%.',
        },
        {
          q: 'What percentage is 28 of 35?',
          a: '28 of 35 is 80%. Worked steps: (28 ÷ 35) × 100 = 0.8 × 100 = 80%. Shortcut via the fraction: 28/35 reduces by 7 to 4/5, and 4/5 = 0.8 = 80%.',
        },
        {
          q: 'What percentage is $25 of $200?',
          a: '$25 of $200 is 12.5%. Worked steps: (25 ÷ 200) × 100 = 0.125 × 100 = 12.5%. Memory aid: $25 of $200 is exactly one eighth, and 1/8 = 12.5%.',
        },
        {
          q: 'What percentage is 30 of 41?',
          a: '30 of 41 is about 73.17%. Worked steps: (30 ÷ 41) × 100 = 0.7317 × 100 ≈ 73.17%.',
        },
        {
          q: 'What percentage is 2 of 15?',
          a: '2 of 15 is about 13.33%. Worked steps: (2 ÷ 15) × 100 = 0.1333 × 100 ≈ 13.33%. As a fraction, 2/15 is slightly less than 1/7 (roughly 14.29%).',
        },
        {
          q: 'What percentage is 2 of 18?',
          a: '2 of 18 is about 11.11%. Worked steps: (2 ÷ 18) × 100 = 0.1111 × 100 ≈ 11.11%. Since 2/18 simplifies to 1/9, you get the repeating value 11.11%.',
        },
        {
          q: 'What percentage is 2 of 3?',
          a: '2 of 3 is about 66.67%. Worked steps: (2 ÷ 3) × 100 = 0.6666 × 100 ≈ 66.67%. The fraction 2/3 sits between 50% and 75%.',
        },
        {
          q: 'What is 2 out of 50?',
          a: '2 out of 50 is 4%. Worked steps: (2 ÷ 50) × 100 = 0.04 × 100 = 4%. Memory aid: 50 is half of 100, so you simply double the part to get 4%.',
        },
        {
          q: 'How do you calculate a percentage from two values?',
          a: 'Take the quotient of the two values and multiply it by 100. Formula: rate = (value A ÷ value B) × 100. Example: 15 out of 60 is (15 ÷ 60) × 100 = 25%. If you need the change between two values instead, use ((new value − old value) ÷ old value) × 100.',
        },
        {
          q: 'How do I calculate a percentage of something?',
          a: 'There are three base cases: percentage value = (base value × rate) ÷ 100, rate = (percentage value ÷ base value) × 100, and base value = (percentage value × 100) ÷ rate. Once two of the three quantities are known, the matching formula gives you the third.',
        },
        {
          q: 'What is 5 out of 20 out of 100?',
          a: '5 out of 20 is 25%, and 25% of 100 is 25. Worked steps: first (5 ÷ 20) × 100 = 0.25 × 100 = 25%, then (100 × 25) ÷ 100 = 25.',
        },
        {
          q: 'What is 60 out of 2,000?',
          a: '$60 out of $2,000 is 3%. Worked steps: (60 ÷ 2,000) × 100 = 0.03 × 100 = 3%. Check: 3% of $2,000 = (2,000 × 3) ÷ 100 = $60.',
        },
      ],
    },
    {
      title: 'Large numbers – "How much is 1 out of 1 million?"',
      items: [
        {
          q: 'How much is 1 out of 1 million?',
          a: '1 out of 1,000,000 equals 0.0001%. Worked steps: (1 ÷ 1,000,000) × 100 = 0.0001%. As a plain share, of course, 1 out of 1 million is simply the value 1.',
        },
        {
          q: 'What is 1 percent of 1 million?',
          a: '1% of 1 million is 10,000. Worked steps: (1,000,000 × 1) ÷ 100 = 10,000. The trick: 1% is the base value divided by 100.',
        },
        {
          q: 'How much is 1 out of 1 billion?',
          a: '1 out of 1,000,000,000 equals 0.0000001%. Worked steps: (1 ÷ 1,000,000,000) × 100 = 0.0000001%. Put another way: 1% of a billion is already 10 million.',
        },
        {
          q: 'What is 1% of 8 billion?',
          a: '1% of 8 billion is 80 million. Worked steps: (8,000,000,000 × 1) ÷ 100 = 80,000,000. For 1%, just divide the number by 100.',
        },
        {
          q: 'What is 1 percent of 10 billion?',
          a: '1% of 10 billion is 100 million. Worked steps: (10,000,000,000 × 1) ÷ 100 = 100,000,000.',
        },
      ],
    },
    {
      title: 'Mental math – tricks & explanations',
      items: [
        {
          q: 'How can I calculate percentages in my head easily?',
          a: 'Break every percentage into simple building blocks. You get 10% by moving the decimal point one place to the left, 5% is half of that, and 1% is one more place to the left. From those blocks you can assemble any value: 35% is, for example, 3 × 10% plus 5%.',
        },
        {
          q: 'Is there a trick to calculate percentages quickly?',
          a: 'Yes, three tricks help the most. First, move the decimal point one place to the left for 10%. Second, divide by 4 for 25% and by 2 for 50%. Third, swap the percentages – X% of Y is the same as Y% of X. That is why 8% of $50 equals 50% of $8, namely $4.',
        },
        {
          q: 'What tricks are there for doing math in my head?',
          a: 'The most useful ones are: moving the decimal point for 10% and 1%, halving for 5% and 50%, quartering for 25% and 75%, splitting into blocks of ten (60% = 6 × 10%), the percentage swap (X% of Y = Y% of X), and rounding to clean amounts and correcting afterwards. With these building blocks you can solve most percentage problems without a calculator.',
        },
        {
          q: 'How can I explain percentage calculation simply and quickly?',
          a: 'Start by explaining percent as "out of one hundred": 1% is the fraction 1/100. Then always ask the same question: the base value (the whole) is known, and you are looking for either the percentage value (the part), the rate (the ratio), or the base value. Remember one core formula: percentage value = (base value × rate) ÷ 100; the other two follow by rearranging it. An everyday example such as "20% off $50" makes the idea click immediately.',
        },
      ],
    },
    {
      title: 'Percentage basics',
      items: [
        {
          q: 'What is the difference between percentage change and percentage difference?',
          a: 'Percentage change assumes a chronological direction, from the old value to the new value. Percentage difference compares two numbers symmetrically relative to their average midpoint, which is useful when neither number serves as the baseline.',
        },
        {
          q: 'Why does +19% VAT followed by −19% not return the original price?',
          a: 'Because the percentage is calculated on two different base amounts. When you add 19% to $100 the gross is $119. If you then subtract 19% of $119 you get $96.39 instead of $100. To extract VAT correctly, divide the gross amount by 1.19.',
        },
        {
          q: 'How does the rule of three calculator work?',
          a: 'The rule of three solves proportional math problems in three steps: state the known relation, compute the single-unit rate by dividing by the first value, and then scale up to the target quantity.',
        },
        {
          q: 'How do I calculate discounts and sale prices?',
          a: 'For a discount of X percent, calculate X percent of the original price and subtract that amount from the price. Alternatively use the formula: final price = original price × (1 − discount ÷ 100). Example: 20% off $50 gives $50 × 0.80 = $40.',
        },
        {
          q: 'Is the percentage calculator really free and without registration?',
          a: 'Yes. The percentage calculator is completely free, ad-free and usable without registration. All calculations run directly in your browser and no input is sent to a server.',
        },
      ],
    },
  ],
};
