const dbaData = {
    debaters: [
        { id: 'aziz-calim', name: 'AZIZ CALIM', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'aziz_calim_debater.jpg', profileBanner: 'aziz_calim_banner.jpg',
            debateRecord: { win: 9, lose: 2, draw: 0 },
            record: [
                { opponent: 'PUTRA ABDULLAH', result: 'WIN', round: 3, time: '02:36', method: 'Logical Fallacy' },
                { opponent: 'KABILAN JELEVAN', result: 'WIN', round: 5, time: '01:50', method: 'Superior Argument' }
            ]
        },
        { id: 'putra-abdullah', name: 'PUTRA ABDULLAH', country: 'Malaysia', flag: 'my.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'putra_abdullah_debater.jpg', profileBanner: 'putra_abdullah_banner.jpg',
            debateRecord: { win: 5, lose: 1, draw: 0 },
            record: [
                { opponent: 'AZIZ CALIM', result: 'LOSE', round: 3, time: '02:36', method: 'Logical Fallacy' }
            ]
        },
        { id: 'kabilan-jelevan', name: 'KABILAN JELEVAN', country: 'Malaysia', flag: 'my.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'kabilan_jelevan_debater.jpg', profileBanner: 'kabilan_jelevan_banner.jpg',
            debateRecord: { win: 7, lose: 1, draw: 0 },
            record: [
                { opponent: 'RONAL SIAHAAN', result: 'WIN', round: 4, time: '02:00', method: 'Strong Rebuttal' }
            ]
        },
        { id: 'ronal-siahaan', name: 'RONAL SIAHAAN', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'ronal_siahaan_debater.jpg', profileBanner: 'ronal_siahaan_banner.jpg',
            debateRecord: { win: 6, lose: 2, draw: 0 },
            record: [
                { opponent: 'FAHRI ALAMSYAH', result: 'WIN', round: 3, time: '02:15', method: 'Data Presentation' }
            ]
        },
        { id: 'fahri-alamsyah', name: 'FAHRI ALAMSYAH', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'fahri_alamsyah_debater.jpg', profileBanner: 'fahri_alamsyah_banner.jpg',
            debateRecord: { win: 8, lose: 1, draw: 0 },
            record: [
                { opponent: 'JAKE NAIBAHO', result: 'WIN', round: 5, time: '01:40', method: 'Charisma' }
            ]
        },
        { id: 'jake-naibaho', name: 'JAKE NAIBAHO', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'jake_naibaho_debater.jpg', profileBanner: 'jake_naibaho_banner.jpg',
            debateRecord: { win: 4, lose: 3, draw: 0 },
            record: [
                { opponent: 'AZIZ CALIM', result: 'LOSE', round: 2, time: '02:50', method: 'Counter Argument' }
            ]
        },
        { id: 'yearmie-lee', name: 'YEARMIE LEE', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'yearmie_lee_debater.jpg', profileBanner: 'yearmie_lee_banner.jpg',
            debateRecord: { win: 9, lose: 2, draw: 0 },
            record: [
                { opponent: 'JUANG KADJA K', result: 'LOSE', round: 3, time: '02:36', method: 'Superior Logic' }
            ]
        },
        { id: 'juang-kadja', name: 'JUANG KADJA K', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE LIGHTWEIGHT', image: 'juang_kadja_debater.jpg', profileBanner: 'juang_kadja_banner.jpg',
            debateRecord: { win: 10, lose: 1, draw: 0 },
            record: [
                { opponent: 'YEARMIE LEE', result: 'WIN', round: 3, time: '02:36', method: 'Superior Logic' }
            ]
        },
        { id: 'jemz-mokoginta', name: 'JEMZ MOKOGINTA', country: 'Indonesia', flag: 'id.svg', division: 'BYON DEBATE WELTERWEIGHT', image: 'jemz_mokoginta_debater.jpg', profileBanner: 'jemz_mokoginta_banner.jpg',
            debateRecord: { win: 8, lose: 0, draw: 0 },
            record: [
                { opponent: 'PAWITCHAYA R', result: 'WIN', round: 5, time: '01:30', method: 'Dominant Rebuttal' }
            ]
        },
        { id: 'pawitchaya-r', name: 'PAWITCHAYA R', country: 'Thailand', flag: 'th.svg', division: 'BYON DEBATE WELTERWEIGHT', image: 'pawitchaya_r_debater.jpg', profileBanner: 'pawitchaya_r_banner.jpg',
            debateRecord: { win: 6, lose: 2, draw: 0 },
            record: [
                { opponent: 'JEMZ MOKOGINTA', result: 'LOSE', round: 5, time: '01:30', method: 'Dominant Rebuttal' }
            ]
        },
    ],

    rankings: {
        'BYON DEBATE LIGHTWEIGHT (61KG)': [
            { rank: 1, id: 'aziz-calim' },
            { rank: 2, id: 'putra-abdullah' },
            { rank: 3, id: 'kabilan-jelevan' },
            { rank: 4, id: 'ronal-siahaan' },
            { rank: 5, id: 'fahri-alamsyah' },
            { rank: 6, id: 'jake-naibaho' },
        ],
        'BYON DEBATE WELTERWEIGHT (77KG)': [
            { rank: 1, id: 'jemz-mokoginta' },
            { rank: 2, id: 'pawitchaya-r' }
        ]
    },

    events: {
        ongoing: [
            { title: 'AZIZ CALIM vs PUTRA ABDULLAH', subtitle: 'NATIONAL TITLE DEBATE | THEME: ARTIFICIAL INTELLIGENCE ETHICS', id: 'aziz-vs-putra',
                debater1: 'aziz-calim', debater2: 'putra-abdullah',
                date: '28 JUNI 2025', venue: 'TENNIS INDOOR SENAYAN', poster: 'aziz-putra-ongoing.jpg' },
            { title: 'JEMZ MOKOGINTA vs PAWITCHAYA R', subtitle: 'INTERNATIONAL FRIENDLY | THEME: GLOBAL CLIMATE POLICY', id: 'jemz-vs-pawitchaya',
                debater1: 'jemz-mokoginta', debater2: 'pawitchaya-r',
                date: '15 JULI 2025', venue: 'BALAI SIDANG JAKARTA', poster: 'jemz-pawitchaya-ongoing.jpg' },
        ],
        past: [
            { title: 'DBA SHOWCASE VOL. 1', date: '10 DESEMBER 2024', poster: 'dba-showcase1.jpg' },
            { title: 'DBA: THE BEGINNING', date: '22 AGUSTUS 2024', poster: 'dba-beginning.jpg' },
            { title: 'DBA: RISING STARS', date: '05 APRIL 2024', poster: 'dba-risingstars.jpg' },
            { title: 'DBA: GRAND FINALE', date: '01 FEBRUARI 2024', poster: 'dba-grandfinale.jpg' },
        ]
    }
};
