const diplomas = [
    {
        name: "Information Technology",
        id: "information-technology",
        modules: [
            {
                name: "UI/UX Design for Apps",
                code: "C218",
                id: "c218-ui-ux-design-for-apps",
                desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
                lecturer: {
                    name: "Azhar Kamar",
                    title: "Lecturer",
                }
            },
            {
                name: "Mobile App Development",
                code: "C346",
                id: "c346-mobile-app-developement",
                desc: "In this module, students will learn the basics of creating Android Applications.",
                lecturer: {
                    name: "Derek Lee",
                    title: "Lecturer",
                }
            }
        ]
    },
    {
        name: "Financial Technology",
        id: "financial-technology",
        modules: [
            {
                name: "Software Application Development",
                code: "C237",
                id: "c237-software-application-development",
                desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
                lecturer: {
                    name: "Hannah Lim",
                    title: "Lecturer",
                }
            },
            {
                name: "Payment Technologies",
                code: "C372",
                id: "c372-payment-technnologies",
                desc: "This module introduces students to different payment technologies and systems.",
                lecturer: {
                    name: "Magdalene Lim",
                    title: "Senior Lecturer",
                }
            }
        ]
    }
]

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}