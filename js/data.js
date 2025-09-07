const dbaData = {
    debaters: [
        // Asian Debaters
        { id: 'hiroo', name: 'HIROO', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'MID TIER', profileImage: 'hiroo.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'RENJI', result: 'Win', event: 'DBA 1' }] },
        { id: 'ranzt', name: 'RANZT', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'MID TIER', profileImage: 'ranzt.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'RYUU', result: 'Win', event: 'DBA 1' }] },
        { id: 'zogratis', name: 'ZOGRATIS', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'zogratis.jpg', debateRecord: { win: 1, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'MUCHIBEI', result: 'Win', event: 'DBA 1' }, { opponent: 'ADYY', result: 'Lose', event: 'DBA 2' }] },
        { id: 'pratama', name: 'PRATAMA', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'pratama.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'AHENG', result: 'Win', event: 'DBA 2' }] },
        { id: 'aheng', name: 'AHENG', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'aheng.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'PRATAMA', result: 'Lose', event: 'DBA 2' }] },
        { id: 'aryanwt', name: 'ARYANWT', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'LOW TIER', profileImage: 'aryanwt.jpg', debateRecord: { win: 1, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'RIM', result: 'Win', event: 'DBA 1' }, { opponent: 'AARON', result: 'Lose', event: 'DBA 2' }] },
        { id: 'thinzsel', name: 'THINZSEL', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'LOW TIER', profileImage: 'thinzsel.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'SHADE', result: 'Lose', event: 'DBA 1' }] },
        { id: 'lianx', name: 'LIANX', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'lianx.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'ADYY', result: 'Win', event: 'DBA 1' }] },
        { id: 'kariz', name: 'KARIZ', country: 'Indonesia', flag: 'id.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'kariz.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'IULIAN', result: 'Win', event: 'DBA Special Match' }] },
        
        { id: 'adyy', name: 'ADYY', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'adyy.jpg', debateRecord: { win: 1, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'LIANX', result: 'Lose', event: 'DBA 1' }, { opponent: 'ZOGRATIS', result: 'Win', event: 'DBA 2' }] },
        { id: 'ryuu', name: 'RYUU', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'MID TIER', profileImage: 'ryuu.jpg', debateRecord: { win: 1, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'RANZT', result: 'Lose', event: 'DBA 1' }, { opponent: 'RAJU', result: 'Win', event: 'DBA 2' }] },
        { id: 'muchibei', name: 'MUCHIBEI', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'muchibei.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'ZOGRATIS', result: 'Lose', event: 'DBA 1' }] },
        { id: 'renji', name: 'RENJI', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'MID TIER', profileImage: 'renji.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'HIROO', result: 'Lose', event: 'DBA 1' }] },
        { id: 'rim', name: 'RIM', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'LOW TIER', profileImage: 'rim.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'ARYANWT', result: 'Lose', event: 'DBA 1' }] },
        { id: 'shade', name: 'SHADE', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'LOW TIER', profileImage: 'shade.jpg', debateRecord: { win: 1, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'THINZSEL', result: 'Win', event: 'DBA 1' }, { opponent: 'KYUKI', result: 'Lose', event: 'DBA 2' }] },
        { id: 'kyuki', name: 'KYUKI', country: 'Malaysia', flag: 'my.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'kyuki.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'SHADE', result: 'Win', event: 'DBA 2' }] },
        
        { id: 'aaron', name: 'AARON', country: 'Mexico', flag: 'mx.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'aaron.jpg', debateRecord: { win: 1, lose: 0, draw: 0 }, matchHistory: [{ opponent: 'ARYANWT', result: 'Win', event: 'DBA 2' }] },
        { id: 'hyruki', name: 'HYRUKI', country: 'Italy', flag: 'it.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'hyruki.jpg', debateRecord: { win: 0, lose: 0, draw: 0 }, matchHistory: [] },
        { id: 'iulian', name: 'IULIAN', country: 'Romania', flag: 'ro.svg', status: 'ACTIVE', division: 'HIGH TIER', profileImage: 'iulian.jpg', debateRecord: { win: 0, lose: 1, draw: 0 }, matchHistory: [{ opponent: 'KARIZ', result: 'Lose', event: 'DBA Special Match' }] },
    ],

    rankings: {
        'HIGH TIER': [
            { id: 'zogratis', rank: 1 }, { id: 'adyy', rank: 2 }, { id: 'lianx', rank: 3 }, { id: 'aaron', rank: 4 },
            { id: 'kyuki', rank: 5 }, { id: 'pratama', rank: 6 }, { id: 'muchibei', rank: 7 }, { id: 'aheng', rank: 8 },
            { id: 'kariz', rank: 9 }, { id: 'iulian', rank: 10 }, { id: 'hyruki', rank: 11 }
        ],
        'MID TIER': [
            { id: 'ranzt', rank: 1 }, { id: 'hiroo', rank: 2 }, { id: 'ryuu', rank: 3 }, { id: 'renji', rank: 4 }
        ],
        'LOW TIER': [
            { id: 'shade', rank: 1 }, { id: 'aryanwt', rank: 2 }, { id: 'thinzsel', rank: 3 }, { id: 'rim', rank: 4 }
        ]
    },

    events: {
        ongoing: [
            { title: 'AARON vs HYRUKI', subtitle: 'MAIN EVENT | DEATH END', id: 'aaron-hyruki', participants: ['aaron', 'hyruki'], type: 'hero', poster: 'aaron-hyruki-main.jpg' },
            { title: 'ADYY vs AHENG', subtitle: 'CO MAIN EVENT', id: 'adyy-aheng', participants: ['adyy', 'aheng'], type: 'hero', poster: 'adyy-aheng-comain.jpg' },
            { title: 'YULZ vs KAZZ', id: 'yulz-kazz', participants: ['yulz', 'kaz'], type: 'ongoing', poster: 'yulz-kazz.jpg' },
            { title: 'IULIAN vs KARIZ', id: 'iulian-kariz', participants: ['iulian', 'kariz'], type: 'ongoing', poster: 'iulian-kariz.jpg' },
            { title: 'RANZT vs HIROO', id: 'ranzt-hiroo', participants: ['ranzt', 'hiroo'], type: 'ongoing', poster: 'ranzt-hiroo.jpg' }
        ],
        past: [
            { title: 'DBA 1', poster: 'dba1.jpg' },
            { title: 'DBA 2: The Moon Fight', poster: 'dba2.jpg' },
            { title: 'DBA 3 Upcoming', poster: 'dba3.jpg' },
            { title: 'DBA Ragnarok', poster: 'dbaragnarok.jpg' }
        ]
    }
};
