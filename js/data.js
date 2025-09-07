const dbaData = {
    debaters: [
        // Indonesian Debaters
        { id: 'hiroo', name: 'HIROO', country: 'Indonesia', flag: 'id.svg', division: 'MID TIER', status: 'ACTIVE' },
        { id: 'ranzt', name: 'RANZT', country: 'Indonesia', flag: 'id.svg', division: 'MID TIER', status: 'ACTIVE' },
        { id: 'zogratis', name: 'ZOGRATIS', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'pratama', name: 'PRATAMA', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'aheng', name: 'AHENG', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'aryanwt', name: 'ARYANWT', country: 'Indonesia', flag: 'id.svg', division: 'LOW TIER', status: 'ACTIVE' },
        { id: 'thinzel', name: 'THINZEL', country: 'Indonesia', flag: 'id.svg', division: 'LOW TIER', status: 'ACTIVE' },
        { id: 'lianx', name: 'LIANX', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'valen', name: 'VALEN', country: 'Indonesia', flag: 'id.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        { id: 'kureji', name: 'KUREJI', country: 'Indonesia', flag: 'id.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        { id: 'kariz', name: 'KARIZ', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'farras', name: 'FARRAS', country: 'Indonesia', flag: 'id.svg', division: 'UNKNOWN', status: 'ACTIVE' },

        // Malaysian Debaters
        { id: 'adyy', name: 'ADYY', country: 'Malaysia', flag: 'my.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'ryuu', name: 'RYUU', country: 'Malaysia', flag: 'my.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'muchibei', name: 'MUCHIBEI', country: 'Malaysia', flag: 'my.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'renji', name: 'RENJI', country: 'Malaysia', flag: 'my.svg', division: 'MID TIER', status: 'ACTIVE' },
        { id: 'rim', name: 'RIM', country: 'Malaysia', flag: 'my.svg', division: 'LOW TIER', status: 'ACTIVE' },
        { id: 'shade', name: 'SHADE', country: 'Malaysia', flag: 'my.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        { id: 'kyuki', name: 'KYUKI', country: 'Malaysia', flag: 'my.svg', division: 'HIGH TIER', status: 'ACTIVE' },

        // Vietnamese Debaters
        { id: 'klein', name: 'KLEIN', country: 'Vietnam', flag: 'vn.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Philippine Debaters
        { id: 'kaz', name: 'KAZ', country: 'Philippines', flag: 'ph.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Mexican Debaters
        { id: 'aaron', name: 'AARON', country: 'Mexico', flag: 'mx.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        
        // Brazilian Debaters
        { id: 'xavier', name: 'XAVIER', country: 'Brazil', flag: 'br.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        { id: 'mikael', name: 'MIKAEL', country: 'Brazil', flag: 'br.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Canadian Debaters
        { id: 'rabbitto', name: 'RABBITTO', country: 'Canada', flag: 'ca.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Italian Debaters
        { id: 'hyruki', name: 'HYRUKI', country: 'Italy', flag: 'it.svg', division: 'HIGH TIER', status: 'ACTIVE' },
        
        // French Debaters
        { id: 'larnex', name: 'LARNEX', country: 'France', flag: 'fr.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Romanian Debaters
        { id: 'iulian', name: 'IULIAN', country: 'Romania', flag: 'ro.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Russian Debaters
        { id: 'homura-kin', name: 'HOMURA KIN', country: 'Russia', flag: 'ru.svg', division: 'UNKNOWN', status: 'ACTIVE' },
        
        // Additional debaters from matches
        { id: 'raju', name: 'RAJU', country: 'Indonesia', flag: 'id.svg', division: 'HIGH TIER', status: 'INACTIVE' },
        { id: 'yulz', name: 'YULZ', country: 'Indonesia', flag: 'id.svg', division: 'MID TIER', status: 'ACTIVE' },
    ],

    rankings: {
        'HIGH TIER': [
            { rank: 1, id: 'zogratis' },
            { rank: 2, id: 'adyy' },
            { rank: 3, id: 'muchibei' },
            { rank: 4, id: 'lianx' },
            { rank: 5, id: 'ryuu' },
            { rank: 6, id: 'kyuki' },
            { rank: 7, id: 'aheng' },
            { rank: 8, id: 'pratama' },
            { rank: 9, id: 'aaron' },
            { rank: 10, id: 'hyruki' },
            { rank: 11, id: 'kariz' },
            { rank: 12, id: 'shade' }
        ],
        'MID TIER': [
            { rank: 1, id: 'ranzt' },
            { rank: 2, id: 'hiroo' },
            { rank: 3, id: 'renji' },
            { rank: 4, id: 'yulz' }
        ],
        'LOW TIER': [
            { rank: 1, id: 'aryanwt' },
            { rank: 2, id: 'thinzel' },
            { rank: 3, id: 'rim' }
        ]
    },

    events: {
        ongoing: [
            { title: 'RANZT vs HIROO', date: 'COMING SOON', venue: 'TBA', poster: 'ranzt-hiroo-ongoing.jpg' },
            { title: 'ADYY vs AHENG', subtitle: 'CO-MAIN EVENT', date: 'COMING SOON', venue: 'TBA', poster: 'adyy-aheng-ongoing.jpg' },
            { title: 'AARON vs HYRUKI', subtitle: 'MAIN EVENT', date: 'COMING SOON', venue: 'TBA', poster: 'aaron-hyruki-ongoing.jpg' },
            { title: 'IULIAN vs KARIZ', date: '25 JUNI 2025', venue: 'TBA', poster: 'iulian-kariz-ongoing.jpg' },
        ],
        past: [
            { title: 'DBA 2: THE MOON FIGHT', date: '10 AGUSTUS 2024', poster: 'dba2-past.jpg' },
            { title: 'DBA 1: INDONESIA VS MALAYSIA', date: '15 JUNI 2024', poster: 'dba1-past.jpg' }
        ],
        upcoming: [
            { title: 'DBA 3', date: 'TBA', poster: 'dba3-upcoming.jpg' },
            { title: 'DBA RAGNAROK', date: 'TBA', poster: 'dba-ragnarok-upcoming.jpg' },
            { title: 'DBA BATTLE MEMES', date: 'TBA', poster: 'dba-memes-upcoming.jpg' },
            { title: 'DBA 4', date: 'TBA', poster: 'dba4-upcoming.jpg' }
        ]
    },

    matches: [
        // DBA 1
        { event: 'DBA 1', debaters: ['hiroo', 'renji'], winner: 'hiroo', result: 'Win Hiroo', division: 'Mid Tier' },
        { event: 'DBA 1', debaters: ['zogratis', 'muchibei'], winner: 'zogratis', result: 'Win Zogratis', division: 'High Tier' },
        { event: 'DBA 1', debaters: ['aryanwt', 'rim'], winner: 'aryanwt', result: 'Win Aryanwt', division: 'Low Tier' },
        { event: 'DBA 1', debaters: ['thinzel', 'shade'], winner: 'shade', result: 'Win Shade', division: 'Low Tier' },
        { event: 'DBA 1', debaters: ['ranzt', 'ryuu'], winner: 'ranzt', result: 'Win Ranzt', division: 'Mid Tier' },
        { event: 'DBA 1', debaters: ['lianx', 'adyy'], winner: 'lianx', result: 'Win Lianx', division: 'High Tier' },

        // DBA 2
        { event: 'DBA 2', debaters: ['raju', 'ryuu'], winner: 'ryuu', result: 'Win Ryuu', division: 'High Tier' },
        { event: 'DBA 2', debaters: ['shade', 'kyuki'], winner: 'kyuki', result: 'Win Kyuki', division: 'High Tier' },
        { event: 'DBA 2', debaters: ['aheng', 'pratama'], winner: 'pratama', result: 'Win Pratama', division: 'High Tier' },
        { event: 'DBA 2', debaters: ['adyy', 'zogratis'], winner: 'adyy', result: 'Win Adyy', division: 'High Tier' },
        { event: 'DBA 2', debaters: ['aryanwt', 'aaron'], winner: 'aaron', result: 'Win Aaron', division: 'High Tier' },

        // DBA Special Match
        { event: 'DBA SPECIAL MATCH', debaters: ['yulz', 'kaz'], winner: 'yulz', result: 'Win Yulz', division: 'Mid Tier' },
        { event: 'DBA SPECIAL MATCH', debaters: ['iulian', 'kariz'], winner: 'kariz', result: 'Win Kariz', division: 'High Tier' },
    ]
};
