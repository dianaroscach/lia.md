export const formatCurrency=(value:number)=>new Intl.NumberFormat("ro-MD",{style:"currency",currency:"MDL",maximumFractionDigits:0}).format(value);
