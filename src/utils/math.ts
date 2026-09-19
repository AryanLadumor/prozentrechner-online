/**
 * Mathematical Calculation Engine for Percentage Calculator
 * Handles robust decimal parsing, localized input (comma and dot), 
 * multi-tool calculations, and step-by-step Rechenweg generation.
 */

export interface CalculationResult {
  value: number | null;
  formatted: string;
  isValid: boolean;
  error?: string;
  steps: CalculationStep[];
  proportion?: {
    percentage: number;
    part: number;
    total: number;
  };
}

export interface CalculationStep {
  title: string;
  formula?: string;
  substitution?: string;
  result?: string;
  explanation?: string;
}

/**
 * Safely parse a number from a string, supporting both dot (.) and comma (,) decimals.
 */
export function parseNumber(input: string | number | null | undefined): number | null {
  if (input === null || input === undefined) return null;
  if (typeof input === 'number') return isNaN(input) ? null : input;

  const sanitized = String(input)
    .trim()
    .replace(/\s+/g, '') // Remove whitespace
    .replace(/,/g, '.'); // Replace comma with period

  if (sanitized === '' || sanitized === '-' || sanitized === '.') return null;

  const parsed = Number(sanitized);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Format a number cleanly according to specified decimal precision.
 */
export function formatNumber(
  num: number | null,
  precision: 'auto' | 0 | 2 | 4 = 'auto',
  locale: 'en' | 'de' = 'en'
): string {
  if (num === null || isNaN(num)) return '—';

  let formattedNum: string;

  if (precision === 'auto') {
    // If it's an integer, show no decimals
    if (Number.isInteger(num)) {
      formattedNum = num.toLocaleString('en-US');
    } else {
      // Max 4 decimals, trim trailing zeros
      const rounded = Math.round(num * 10000) / 10000;
      formattedNum = rounded.toLocaleString('en-US', {
        maximumFractionDigits: 4,
        minimumFractionDigits: 0
      });
    }
  } else {
    formattedNum = num.toLocaleString('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    });
  }

  if (locale === 'de') {
    return num.toLocaleString('de-DE', {
      minimumFractionDigits: precision === 'auto' ? (Number.isInteger(num) ? 0 : 2) : precision,
      maximumFractionDigits: precision === 'auto' ? 4 : precision
    });
  }

  return formattedNum;
}

/**
 * Tool 1A: What is P% of V? (Prozentwert)
 * Formula: W = (V * P) / 100
 */
export function calcPercentageOf(pStr: string, vStr: string, lang: 'de' | 'en' = 'de'): CalculationResult {
  const p = parseNumber(pStr);
  const v = parseNumber(vStr);

  if (p === null || v === null) {
    return { value: null, formatted: '—', isValid: false, steps: [] };
  }

  const result = (v * p) / 100;
  const steps: CalculationStep[] = lang === 'de' ? [
    {
      title: 'Mathematische Formel',
      formula: 'Prozentwert (W) = (Grundwert × Prozentsatz) ÷ 100',
      explanation: 'Multipliziere den Grundwert mit dem Prozentsatz und dividiere durch 100.'
    },
    {
      title: 'Werte einsetzen',
      substitution: `W = (${formatNumber(v)} × ${formatNumber(p)}) ÷ 100 = ${formatNumber(v * p)} ÷ 100`,
      explanation: `Berechne ${formatNumber(p)}% von ${formatNumber(v)}.`
    },
    {
      title: 'Endergebnis',
      result: `${formatNumber(p)}% von ${formatNumber(v)} ist ${formatNumber(result)}`
    }
  ] : [
    {
      title: 'Mathematical Formula',
      formula: 'Percentage Value (W) = (Base Value × Percentage Rate) ÷ 100',
      explanation: 'Multiply the base amount by the percentage rate, then divide by 100.'
    },
    {
      title: 'Substitute Values',
      substitution: `W = (${formatNumber(v)} × ${formatNumber(p)}) ÷ 100 = ${formatNumber(v * p)} ÷ 100`,
      explanation: `Calculate ${formatNumber(p)}% of ${formatNumber(v)}.`
    },
    {
      title: 'Final Result',
      result: `${formatNumber(p)}% of ${formatNumber(v)} is ${formatNumber(result)}`
    }
  ];

  return {
    value: result,
    formatted: formatNumber(result),
    isValid: true,
    steps,
    proportion: {
      percentage: Math.min(Math.max(p, 0), 100),
      part: result,
      total: v
    }
  };
}

/**
 * Tool 1B: V1 is what % of V2? (Prozentsatz)
 * Formula: p = (V1 / V2) * 100
 */
export function calcPercentageRate(v1Str: string, v2Str: string, lang: 'de' | 'en' = 'de'): CalculationResult {
  const v1 = parseNumber(v1Str);
  const v2 = parseNumber(v2Str);

  if (v1 === null || v2 === null) {
    return { value: null, formatted: '—', isValid: false, steps: [] };
  }

  if (v2 === 0) {
    return {
      value: null,
      formatted: lang === 'de' ? 'Division durch 0 nicht möglich' : 'Cannot divide by 0',
      isValid: false,
      error: lang === 'de' ? 'Der Grundwert darf nicht Null sein.' : 'Base value cannot be zero.',
      steps: [{
        title: lang === 'de' ? 'Fehler' : 'Error',
        explanation: lang === 'de' ? 'Division durch Null ist mathematisch nicht definiert.' : 'Division by zero is mathematically undefined.'
      }]
    };
  }

  const result = (v1 / v2) * 100;
  const steps: CalculationStep[] = lang === 'de' ? [
    {
      title: 'Mathematische Formel',
      formula: 'Prozentsatz (p%) = (Prozentwert ÷ Grundwert) × 100',
      explanation: 'Dividiere den Anteil durch den Grundwert und multipliziere mit 100, um den Prozentsatz zu erhalten.'
    },
    {
      title: 'Werte einsetzen',
      substitution: `p% = (${formatNumber(v1)} ÷ ${formatNumber(v2)}) × 100 = ${(v1 / v2).toFixed(6)} × 100`,
      explanation: `Bestimme, welchen Anteil ${formatNumber(v1)} von ${formatNumber(v2)} darstellt.`
    },
    {
      title: 'Endergebnis',
      result: `${formatNumber(v1)} ist ${formatNumber(result)}% von ${formatNumber(v2)}`
    }
  ] : [
    {
      title: 'Mathematical Formula',
      formula: 'Percentage Rate (p%) = (Part Value ÷ Base Value) × 100',
      explanation: 'Divide the portion by the total base value, then multiply by 100 to get the percentage.'
    },
    {
      title: 'Substitute Values',
      substitution: `p% = (${formatNumber(v1)} ÷ ${formatNumber(v2)}) × 100 = ${(v1 / v2).toFixed(6)} × 100`,
      explanation: `Determine what fraction ${formatNumber(v1)} represents of ${formatNumber(v2)}.`
    },
    {
      title: 'Final Result',
      result: `${formatNumber(v1)} is ${formatNumber(result)}% of ${formatNumber(v2)}`
    }
  ];

  return {
    value: result,
    formatted: `${formatNumber(result)}%`,
    isValid: true,
    steps,
    proportion: {
      percentage: Math.min(Math.max(result, 0), 100),
      part: v1,
      total: v2
    }
  };
}

/**
 * Tool 1C: V is P% of what? (Grundwert)
 * Formula: G = (V * 100) / P
 */
export function calcBaseValue(vStr: string, pStr: string, lang: 'de' | 'en' = 'de'): CalculationResult {
  const v = parseNumber(vStr);
  const p = parseNumber(pStr);

  if (v === null || p === null) {
    return { value: null, formatted: '—', isValid: false, steps: [] };
  }

  if (p === 0) {
    return {
      value: null,
      formatted: lang === 'de' ? 'Prozentsatz darf nicht 0 sein' : 'Percentage cannot be 0',
      isValid: false,
      error: lang === 'de' ? 'Der Prozentsatz darf nicht Null sein.' : 'Percentage rate cannot be zero.',
      steps: [{
        title: lang === 'de' ? 'Fehler' : 'Error',
        explanation: lang === 'de' ? 'Grundwert kann nicht für 0% berechnet werden.' : 'Cannot compute base value for 0%.'
      }]
    };
  }

  const result = (v * 100) / p;
  const steps: CalculationStep[] = lang === 'de' ? [
    {
      title: 'Mathematische Formel',
      formula: 'Grundwert (G) = (Prozentwert × 100) ÷ Prozentsatz',
      explanation: 'Multipliziere den Prozentwert mit 100 und dividiere durch den Prozentsatz.'
    },
    {
      title: 'Werte einsetzen',
      substitution: `G = (${formatNumber(v)} × 100) ÷ ${formatNumber(p)} = ${formatNumber(v * 100)} ÷ ${formatNumber(p)}`,
      explanation: `Finde das 100%-Ganze, wenn ${formatNumber(v)} genau ${formatNumber(p)}% entspricht.`
    },
    {
      title: 'Endergebnis',
      result: `Wenn ${formatNumber(v)} gleich ${formatNumber(p)}% ist, beträgt der Grundwert ${formatNumber(result)}`
    }
  ] : [
    {
      title: 'Mathematical Formula',
      formula: 'Base Value (G) = (Part Value × 100) ÷ Percentage Rate',
      explanation: 'Multiply the part value by 100 and divide by the percentage rate.'
    },
    {
      title: 'Substitute Values',
      substitution: `G = (${formatNumber(v)} × 100) ÷ ${formatNumber(p)} = ${formatNumber(v * 100)} ÷ ${formatNumber(p)}`,
      explanation: `Find the 100% whole given that ${formatNumber(v)} corresponds to ${formatNumber(p)}%.`
    },
    {
      title: 'Final Result',
      result: `If ${formatNumber(v)} is ${formatNumber(p)}%, the total base is ${formatNumber(result)}`
    }
  ];

  return {
    value: result,
    formatted: formatNumber(result),
    isValid: true,
    steps,
    proportion: {
      percentage: Math.min(Math.max(p, 0), 100),
      part: v,
      total: result
    }
  };
}

/**
 * Tool 1D: Percentage Change from V1 to V2
 * Formula: % Change = ((V2 - V1) / V1) * 100
 */
export function calcPercentageChange(v1Str: string, v2Str: string, lang: 'de' | 'en' = 'de'): CalculationResult {
  const v1 = parseNumber(v1Str);
  const v2 = parseNumber(v2Str);

  if (v1 === null || v2 === null) {
    return { value: null, formatted: '—', isValid: false, steps: [] };
  }

  if (v1 === 0) {
    return {
      value: null,
      formatted: lang === 'de' ? 'Ausgangswert darf nicht 0 sein' : 'Initial value cannot be 0',
      isValid: false,
      error: lang === 'de' ? 'Der Ausgangswert darf für prozentuale Veränderung nicht Null sein.' : 'Initial value cannot be zero for percentage change.',
      steps: [{
        title: lang === 'de' ? 'Fehler' : 'Error',
        explanation: lang === 'de' ? 'Veränderung von 0 kann nicht als endlicher Prozentsatz ausgedrückt werden.' : 'Change from 0 cannot be expressed as a finite percentage.'
      }]
    };
  }

  const diff = v2 - v1;
  const result = (diff / v1) * 100;
  const isIncrease = diff > 0;
  const sign = isIncrease ? '+' : '';

  const steps: CalculationStep[] = lang === 'de' ? [
    {
      title: 'Mathematische Formel',
      formula: 'Prozentuale Veränderung = ((Neuer Wert − Alter Wert) ÷ Alter Wert) × 100',
      explanation: 'Berechne die absolute Veränderung, dividiere durch den ursprünglichen Wert und multipliziere mit 100.'
    },
    {
      title: 'Schritt 1: Absolute Differenz berechnen',
      substitution: `Differenz = ${formatNumber(v2)} − ${formatNumber(v1)} = ${formatNumber(diff)}`,
      explanation: isIncrease
        ? `Der Wert ist um ${formatNumber(diff)} gestiegen.`
        : `Der Wert ist um ${formatNumber(Math.abs(diff))} gesunken.`
    },
    {
      title: 'Schritt 2: Prozentsatz berechnen',
      substitution: `Veränderung% = (${formatNumber(diff)} ÷ ${formatNumber(v1)}) × 100 = ${sign}${formatNumber(result)}%`,
      explanation: `Relativ zum Ausgangswert ${formatNumber(v1)}.`
    },
    {
      title: 'Endergebnis',
      result: `Von ${formatNumber(v1)} auf ${formatNumber(v2)} ist eine ${isIncrease ? 'Steigerung' : 'Verringerung'} von ${sign}${formatNumber(result)}%`
    }
  ] : [
    {
      title: 'Mathematical Formula',
      formula: 'Percentage Change = ((New Value − Old Value) ÷ Old Value) × 100',
      explanation: 'Calculate the absolute change, divide by the original value, and multiply by 100.'
    },
    {
      title: 'Step 1: Calculate Absolute Difference',
      substitution: `Difference = ${formatNumber(v2)} − ${formatNumber(v1)} = ${formatNumber(diff)}`,
      explanation: isIncrease
        ? `The value increased by ${formatNumber(diff)}.`
        : `The value decreased by ${formatNumber(Math.abs(diff))}.`
    },
    {
      title: 'Step 2: Calculate Percentage',
      substitution: `Change% = (${formatNumber(diff)} ÷ ${formatNumber(v1)}) × 100 = ${sign}${formatNumber(result)}%`,
      explanation: `Expressed relative to the baseline ${formatNumber(v1)}.`
    },
    {
      title: 'Final Result',
      result: `From ${formatNumber(v1)} to ${formatNumber(v2)} is an ${isIncrease ? 'increase' : 'decrease'} of ${sign}${formatNumber(result)}%`
    }
  ];

  return {
    value: result,
    formatted: `${sign}${formatNumber(result)}%`,
    isValid: true,
    steps
  };
}

/**
 * Tool 1E: Add or Subtract P% to/from V
 * Formula: V * (1 ± P / 100)
 */
export function calcAddSubtractPercentage(
  vStr: string,
  pStr: string,
  operation: 'add' | 'subtract' = 'add',
  lang: 'de' | 'en' = 'de'
): CalculationResult {
  const v = parseNumber(vStr);
  const p = parseNumber(pStr);

  if (v === null || p === null) {
    return { value: null, formatted: '—', isValid: false, steps: [] };
  }

  const changeAmount = (v * p) / 100;
  const result = operation === 'add' ? v + changeAmount : v - changeAmount;
  const opSymbol = operation === 'add' ? '+' : '−';
  const opWord = lang === 'de'
    ? (operation === 'add' ? 'Erhöhung' : 'Rabatt/Verringerung')
    : (operation === 'add' ? 'increase' : 'discount/reduction');

  const steps: CalculationStep[] = lang === 'de' ? [
    {
      title: 'Schritt 1: Prozentwert berechnen',
      formula: `Delta = (${formatNumber(v)} × ${formatNumber(p)}) ÷ 100 = ${formatNumber(changeAmount)}`,
      explanation: `${formatNumber(p)}% von ${formatNumber(v)} entspricht ${formatNumber(changeAmount)}.`
    },
    {
      title: `Schritt 2: ${operation === 'add' ? 'Zum' : 'Vom'} Grundwert ${operation === 'add' ? 'addieren' : 'subtrahieren'}`,
      substitution: `Ergebnis = ${formatNumber(v)} ${opSymbol} ${formatNumber(changeAmount)} = ${formatNumber(result)}`,
      explanation: `${opWord} anwenden.`
    },
    {
      title: 'Endergebnis',
      result: `${formatNumber(v)} ${opSymbol} ${formatNumber(p)}% = ${formatNumber(result)} (Differenz von ${opSymbol}${formatNumber(changeAmount)})`
    }
  ] : [
    {
      title: 'Step 1: Calculate Percentage Amount',
      formula: `Delta = (${formatNumber(v)} × ${formatNumber(p)}) ÷ 100 = ${formatNumber(changeAmount)}`,
      explanation: `${formatNumber(p)}% of ${formatNumber(v)} equals ${formatNumber(changeAmount)}.`
    },
    {
      title: `Step 2: ${operation === 'add' ? 'Add to' : 'Subtract from'} Base Value`,
      substitution: `Result = ${formatNumber(v)} ${opSymbol} ${formatNumber(changeAmount)} = ${formatNumber(result)}`,
      explanation: `Applying the ${opWord}.`
    },
    {
      title: 'Final Result',
      result: `${formatNumber(v)} ${opSymbol} ${formatNumber(p)}% = ${formatNumber(result)} (difference of ${opSymbol}${formatNumber(changeAmount)})`
    }
  ];

  return {
    value: result,
    formatted: formatNumber(result),
    isValid: true,
    steps
  };
}

/**
 * Specialized Tool 2: Discount & Sale Calculator
 */
export interface DiscountCalculation {
  originalPrice: number;
  discountPct: number;
  extraDiscountPct: number;
  taxPct: number;
  discountedPrice: number;
  totalSaved: number;
  finalPrice: number;
  effectiveDiscountPct: number;
}

export function calcDiscount(
  priceStr: string,
  discountStr: string,
  extraDiscountStr: string = '0',
  taxStr: string = '0',
  lang: 'de' | 'en' = 'de'
): DiscountCalculation | null {
  const price = parseNumber(priceStr);
  const discount = parseNumber(discountStr);
  const extraDiscount = parseNumber(extraDiscountStr) || 0;
  const tax = parseNumber(taxStr) || 0;

  if (price === null || discount === null) return null;

  const firstDiscountAmount = (price * discount) / 100;
  const afterFirstDiscount = price - firstDiscountAmount;

  const extraDiscountAmount = (afterFirstDiscount * extraDiscount) / 100;
  const afterExtraDiscount = afterFirstDiscount - extraDiscountAmount;

  const taxAmount = (afterExtraDiscount * tax) / 100;
  const finalPrice = afterExtraDiscount + taxAmount;
  const totalSaved = price - afterExtraDiscount;
  const effectiveDiscountPct = price > 0 ? (totalSaved / price) * 100 : 0;

  return {
    originalPrice: price,
    discountPct: discount,
    extraDiscountPct: extraDiscount,
    taxPct: tax,
    discountedPrice: afterExtraDiscount,
    totalSaved,
    finalPrice,
    effectiveDiscountPct
  };
}

/**
 * Specialized Tool 3: VAT / Sales Tax Calculator
 */
export interface VatCalculation {
  net: number;
  gross: number;
  vatAmount: number;
  vatRate: number;
  mode: 'netToGross' | 'grossToNet';
}

export function calcVat(
  amountStr: string,
  rateStr: string,
  mode: 'netToGross' | 'grossToNet' = 'netToGross',
  lang: 'de' | 'en' = 'de'
): VatCalculation | null {
  const amount = parseNumber(amountStr);
  const rate = parseNumber(rateStr);

  if (amount === null || rate === null) return null;

  let net = 0;
  let gross = 0;
  let vatAmount = 0;

  if (mode === 'netToGross') {
    net = amount;
    vatAmount = (net * rate) / 100;
    gross = net + vatAmount;
  } else {
    gross = amount;
    net = gross / (1 + rate / 100);
    vatAmount = gross - net;
  }

  return {
    net,
    gross,
    vatAmount,
    vatRate: rate,
    mode
  };
}

/**
 * Specialized Tool 4: Rule of Three (Dreisatz) Calculator
 */
export interface RuleOfThreeCalculation {
  a: number;
  b: number;
  c: number;
  d: number;
  mode: 'direct' | 'inverse';
  unit1?: string;
  unit2?: string;
  steps: {
    step1: string;
    step2: string;
    step3: string;
  };
}

export function calcRuleOfThree(
  aStr: string,
  bStr: string,
  cStr: string,
  mode: 'direct' | 'inverse' = 'direct',
  unit1: string = 'Unit A',
  unit2: string = 'Unit B',
  lang: 'de' | 'en' = 'de'
): RuleOfThreeCalculation | null {
  const a = parseNumber(aStr);
  const b = parseNumber(bStr);
  const c = parseNumber(cStr);

  if (a === null || b === null || c === null || a === 0) return null;

  let d = 0;
  let steps = { step1: '', step2: '', step3: '' };

  if (mode === 'direct') {
    const unitRate = b / a;
    d = unitRate * c;
    steps = lang === 'de' ? {
      step1: `Gegeben: ${formatNumber(a)} ${unit1} entspricht ${formatNumber(b)} ${unit2}.`,
      step2: `Einzelsatz: 1 ${unit1} = ${formatNumber(b)} ÷ ${formatNumber(a)} = ${formatNumber(unitRate, 4)} ${unit2}.`,
      step3: `Zielsatz: Multipliziere mit ${formatNumber(c)}: ${formatNumber(unitRate, 4)} × ${formatNumber(c)} = ${formatNumber(d)} ${unit2}.`
    } : {
      step1: `Given: ${formatNumber(a)} ${unit1} corresponds to ${formatNumber(b)} ${unit2}.`,
      step2: `Unit Step: 1 ${unit1} = ${formatNumber(b)} ÷ ${formatNumber(a)} = ${formatNumber(unitRate, 4)} ${unit2}.`,
      step3: `Target Step: Multiply by ${formatNumber(c)}: ${formatNumber(unitRate, 4)} × ${formatNumber(c)} = ${formatNumber(d)} ${unit2}.`
    };
  } else {
    if (c === 0) return null;
    const totalWork = a * b;
    d = totalWork / c;
    steps = lang === 'de' ? {
      step1: `Gegeben: ${formatNumber(a)} ${unit1} entspricht ${formatNumber(b)} ${unit2} (Konstantes Produkt = ${formatNumber(totalWork)}).`,
      step2: `Einzelsatz: 1 ${unit1} würde ${formatNumber(a)} × ${formatNumber(b)} = ${formatNumber(totalWork)} ${unit2} benötigen.`,
      step3: `Zielsatz: Dividiere durch ${formatNumber(c)}: ${formatNumber(totalWork)} ÷ ${formatNumber(c)} = ${formatNumber(d)} ${unit2}.`
    } : {
      step1: `Given: ${formatNumber(a)} ${unit1} corresponds to ${formatNumber(b)} ${unit2} (Constant Product = ${formatNumber(totalWork)}).`,
      step2: `Unit Step: 1 ${unit1} would take ${formatNumber(a)} × ${formatNumber(b)} = ${formatNumber(totalWork)} ${unit2}.`,
      step3: `Target Step: Divide by ${formatNumber(c)}: ${formatNumber(totalWork)} ÷ ${formatNumber(c)} = ${formatNumber(d)} ${unit2}.`
    };
  }

  return { a, b, c, d, mode, unit1, unit2, steps };
}

/**
 * Specialized Tool 5: Percentage Difference Calculator
 */
export interface PercentageDiffCalculation {
  val1: number;
  val2: number;
  absoluteDiff: number;
  relativeChangeV1toV2: number;
  relativeChangeV2toV1: number;
  averageDiffPct: number;
}

export function calcPercentageDifference(
  v1Str: string,
  v2Str: string,
  lang: 'de' | 'en' = 'de'
): PercentageDiffCalculation | null {
  const v1 = parseNumber(v1Str);
  const v2 = parseNumber(v2Str);

  if (v1 === null || v2 === null) return null;

  const absoluteDiff = Math.abs(v2 - v1);
  const relativeChangeV1toV2 = v1 !== 0 ? ((v2 - v1) / v1) * 100 : 0;
  const relativeChangeV2toV1 = v2 !== 0 ? ((v1 - v2) / v2) * 100 : 0;
  const avg = (Math.abs(v1) + Math.abs(v2)) / 2;
  const averageDiffPct = avg !== 0 ? (absoluteDiff / avg) * 100 : 0;

  return {
    val1: v1,
    val2: v2,
    absoluteDiff,
    relativeChangeV1toV2,
    relativeChangeV2toV1,
    averageDiffPct
  };
}

/**
 * Specialized Tool 6: Salary & Pay Raise Calculator
 */
export interface SalaryCalculation {
  currentHourly: number;
  currentMonthly: number;
  currentAnnual: number;
  raisePct: number;
  raiseAnnualAmount: number;
  newHourly: number;
  newMonthly: number;
  newAnnual: number;
  differenceMonthly: number;
  differenceHourly: number;
}

export function calcSalaryRaise(
  baseSalaryStr: string,
  period: 'hourly' | 'monthly' | 'annual',
  raisePctStr: string,
  raiseAmountStr?: string,
  hoursPerWeek: number = 40,
  weeksPerYear: number = 52,
  lang: 'de' | 'en' = 'de'
): SalaryCalculation | null {
  const baseSalary = parseNumber(baseSalaryStr);
  const raisePctInput = parseNumber(raisePctStr);
  const raiseAmountInput = parseNumber(raiseAmountStr);

  if (baseSalary === null) return null;

  let currentAnnual = 0;
  const totalAnnualHours = hoursPerWeek * weeksPerYear;

  if (period === 'hourly') {
    currentAnnual = baseSalary * totalAnnualHours;
  } else if (period === 'monthly') {
    currentAnnual = baseSalary * 12;
  } else {
    currentAnnual = baseSalary;
  }

  const currentMonthly = currentAnnual / 12;
  const currentHourly = currentAnnual / totalAnnualHours;

  let effectiveRaisePct = 0;
  let raiseAnnualAmount = 0;

  if (raisePctInput !== null) {
    effectiveRaisePct = raisePctInput;
    raiseAnnualAmount = (currentAnnual * effectiveRaisePct) / 100;
  } else if (raiseAmountInput !== null) {
    if (period === 'hourly') {
      raiseAnnualAmount = raiseAmountInput * totalAnnualHours;
    } else if (period === 'monthly') {
      raiseAnnualAmount = raiseAmountInput * 12;
    } else {
      raiseAnnualAmount = raiseAmountInput;
    }
    effectiveRaisePct = currentAnnual > 0 ? (raiseAnnualAmount / currentAnnual) * 100 : 0;
  } else {
    return null;
  }

  const newAnnual = currentAnnual + raiseAnnualAmount;
  const newMonthly = newAnnual / 12;
  const newHourly = newAnnual / totalAnnualHours;

  return {
    currentHourly,
    currentMonthly,
    currentAnnual,
    raisePct: effectiveRaisePct,
    raiseAnnualAmount,
    newHourly,
    newMonthly,
    newAnnual,
    differenceMonthly: newMonthly - currentMonthly,
    differenceHourly: newHourly - currentHourly
  };
}
