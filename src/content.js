// export const data = {
//     greet: ["Let's connect!", 'Давайте знакомиться!'],
// }

const currentSiteData = process.env.NEXT_PUBLIC_SITE_ID

const organizationData = [
    {
        title: "Шамгунова Е.Н.",
        organization: "ИП Шамгунова Е.Н.",
        ogrn: '?????',
        license: 'Л041-01189-27/03100104 от 02.09.2025',
        metadata: {
            title: "ИП Шамгунова Е.Н. | Врач общей практики",
            description: "Индивидуальный подход и забота о вашем здоровье.",
        },
    }, {
        title: "Докмед",
        organization: "ООО Докмед",
        ogrn: '1242700016118',
        license: 'Л041-01189-27/03100104 от 02.09.2025',
        metadata: {
            title: "ООО Докмед | Врач общей практики",
            description: "Индивидуальный подход и забота о вашем здоровье.",
        },
    },
]

export const content = organizationData[currentSiteData]