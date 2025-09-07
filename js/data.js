const byonData = {
    fighters: [
        { id: 'aziz-calim', name: 'AZIZ CALIM', country: 'Indonesia', flag: 'id.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'aziz_calim.jpg', fightRecord: { win: 9, lose: 2, draw: 0 }, kickstrikingRecord: { win: 0, lose: 1, draw: 0 },
            record: [
                { opponent: 'PUTRA ABDULLAH', result: 'WIN', round: 3, time: '02:36', method: 'KO' }
            ]
        },
        { id: 'putra-abdullah', name: 'PUTRA ABDULLAH', country: 'Malaysia', flag: 'my.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'putra_abdullah.jpg', fightRecord: { win: 5, lose: 1, draw: 0 }, kickstrikingRecord: { win: 0, lose: 1, draw: 0 },
            record: [
                { opponent: 'AZIZ CALIM', result: 'LOSE', round: 3, time: '02:36', method: 'KO' }
            ]
        },
        { id: 'kabilan-jelevan', name: 'KABILAN JELEVAN', country: 'Malaysia', flag: 'my.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'kabilan_jelevan.jpg', fightRecord: { win: 7, lose: 1, draw: 0 }, kickstrikingRecord: { win: 0, lose: 0, draw: 0 },
            record: []
        },
        { id: 'ronal-siahaan', name: 'RONAL SIAHAAN', country: 'Indonesia', flag: 'id.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'ronal_siahaan.jpg', fightRecord: { win: 6, lose: 2, draw: 0 }, kickstrikingRecord: { win: 0, lose: 0, draw: 0 },
            record: []
        },
        { id: 'fahri-alamsyah', name: 'FAHRI ALAMSYAH', country: 'Indonesia', flag: 'id.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'fahri_alamsyah.jpg', fightRecord: { win: 8, lose: 1, draw: 0 }, kickstrikingRecord: { win: 0, lose: 0, draw: 0 },
            record: []
        },
        { id: 'jake-naibaho', name: 'JAKE NAIBAHO', country: 'Indonesia', flag: 'id.svg', division: 'BYON KICKSTRIKING LIGHTWEIGHT', image: 'jake_naibaho.jpg', fightRecord: { win: 4, lose: 3, draw: 0 }, kickstrikingRecord: { win: 0, lose: 0, draw: 0 },
            record: []
        },
        { id: 'juank-kadja-k', name: 'JUANG KADJA K', country: 'Indonesia', flag: 'id.svg', division: 'LIGHT FLYWEIGHT', image: 'juang_kadja.jpg', fightRecord: { win: 10, lose: 1, draw: 0 }, kickstrikingRecord: { win: 1, lose: 0, draw: 0 },
            record: [
                { opponent: 'YEARMIE LEE', result: 'WIN', round: 3, time: '02:36', method: 'KO' }
            ]
        },
        { id: 'yearmie-lee', name: 'YEARMIE LEE', country: 'Indonesia', flag: 'id.svg', division: 'LIGHT FLYWEIGHT', image: 'yearmie_lee.jpg', fightRecord: { win: 9, lose: 2, draw: 0 }, kickstrikingRecord: { win: 0, lose: 1, draw: 0 },
            record: [
                { opponent: 'JUANG KADJA K', result: 'LOSE', round: 3, time: '02:36', method: 'KO' }
            ]
        },
    ],

    rankings: {
        'BYON KICKSTRIKING LIGHTWEIGHT': [
            { rank: 1, id: 'aziz-calim' },
            { rank: 2, id: 'putra-abdullah' },
            { rank: 3, id: 'kabilan-jelevan' },
            { rank: 4, id: 'ronal-siahaan' },
            { rank: 5, id: 'fahri-alamsyah' },
            { rank: 6, id: 'jake-naibaho' },
        ]
        // Tambahkan divisi lain di sini
    },

    events: {
        ongoing: [
            { title: 'KKASAM vs WEERIAN', date: '30 AGUSTUS 2025', venue: 'STUDIO 6 EMTEK CITY', image: 'kksam-weerian.jpg' },
        ],
        past: [
            { title: 'BYON 3', image: 'byon3.jpg' },
            { title: 'BYON COMBAT TRYOUT', image: 'tryout.jpg' },
            { title: 'CELLOSXZ vs ERLANGGS', image: 'celloszxz-erlanggs.jpg' },
            { title: 'PARIS vs KKAJHE', image: 'paris-kkajhe.jpg' },
        ]
    }
};
