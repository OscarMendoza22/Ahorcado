let ramdompal: string[] = [
    'ANIMAL', 'CALMA', 'AMOR', 'ZZZZZZZ', 'DETALLE', 'FUTBOL', 'CALIDAD', 'ESTREÑIMIENTO', 'HAMBRE', 'LUGAR', 'HUMILDAD', 'PELOTA', 'DEMONIOS', 'OTRA',
    'NITROGENO', 'VIDA', 'MAMA', 'PAPA', 'BASE', 'OSCAR', 'CAPITAL','EDUCACION', 'NETFLIX', 'PASTILLA', 'VEHICULO', 'TECNOLOGIA', 'COMPROMISO',
]
export function Palabraramdom() {
    const numberRamdom = Math.floor(Math.random() * ramdompal.length);
    return ramdompal[numberRamdom];
};