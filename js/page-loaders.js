// Function to load the homepage content dynamically
function loadHomePageContent() {
    const heroCarousel = document.getElementById('hero-carousel');
    const ongoingGrid = document.getElementById('ongoing-matches-grid');
    const pastGrid = document.getElementById('past-events-grid');

    const heroEvents = dbaData.events.ongoing.filter(e => e.type === 'hero');
    const ongoingMatches = dbaData.events.ongoing.filter(e => e.type === 'ongoing');
    
    // Inject Hero Section
    heroCarousel.innerHTML = heroEvents.map((event, index) => `
        <div class="carousel-slide ${index === 0 ? 'active' : ''}">
            <img src="https://via.placeholder.com/1200x675.png?text=${event.title.replace(' ', '+')}" alt="${event.title}">
            <div class="overlay-text">
                <h1>${event.title}</h1>
                <p>${event.subtitle}</p>
            </div>
        </div>
    `).join('');

    // Inject Ongoing Matches
    ongoingGrid.innerHTML = ongoingMatches.map(match => `
        <a href="profile.html?id=${match.participants[0]}" class="match-card">
            <img src="https://via.placeholder.com/1600x900.png?text=${match.title.replace(' ', '+')}" alt="${match.title}">
            <div class="match-info">
                <h3>${match.title}</h3>
            </div>
        </a>
    `).join('');

    // Inject Past Events
    pastGrid.innerHTML = dbaData.events.past.map(event => `
        <a href="#" class="event-card">
            <img src="https://via.placeholder.com/400x500.png?text=${event.title.replace(' ', '+')}" alt="${event.title}">
        </a>
    `).join('');
}

// Function to load the ranking page content dynamically
function loadRankingPage() {
    const rankingSections = document.getElementById('ranking-sections');
    rankingSections.innerHTML = '';

    for (const division in dbaData.rankings) {
        const debatersInDivision = dbaData.rankings[division];
        const rankingListHTML = debatersInDivision.map(rankItem => {
            const debater = dbaData.debaters.find(d => d.id === rankItem.id);
            if (!debater) return '';

            const isTopRanked = rankItem.rank === 1;
            const itemClass = isTopRanked ? 'ranking-item top-ranked' : 'ranking-item';
            const imageUrl = `https://via.placeholder.com/300x400.png?text=${debater.name.replace(' ', '+')}`;
            const flagUrl = `https://flagcdn.com/w80/${debater.flag.replace('.svg', '.png')}`;

            return `
                <div class="${itemClass}">
                    <div class="rank-number">#${rankItem.rank}</div>
                    <div class="debater-info">
                        <a href="profile.html?id=${debater.id}">
                            <span class="name">${debater.name}</span>
                        </a>
                        <span class="country">
                            <img src="${flagUrl}" alt="${debater.country} Flag"> ${debater.country}
                        </span>
                    </div>
                    ${isTopRanked ? `<div class="debater-image-container"><img src="${imageUrl}" alt="${debater.name}"></div>` : ''}
                </div>
            `;
        }).join('');

        const divisionHTML = `
            <div class="ranking-division">
                <h2>${division} RANKING</h2>
                <div class="ranking-list">
                    ${rankingListHTML}
                </div>
            </div>
        `;
        rankingSections.innerHTML += divisionHTML;
    }
}

// Function to load the debater profile page content dynamically
function loadProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterId = urlParams.get('id');
    const debater = dbaData.debaters.find(d => d.id === debaterId);

    if (debater) {
        document.getElementById('profile-header').style.backgroundImage = `url('https://via.placeholder.com/900x600.png?text=${debater.name}')`;
        document.getElementById('debater-division').textContent = debater.division;
        document.getElementById('debater-status').textContent = debater.status;
        document.getElementById('debater-status').classList.add(debater.status === 'ACTIVE' ? 'active' : 'inactive');
        document.getElementById('debater-name').textContent = debater.name;
        document.getElementById('debater-flag').src = `https://flagcdn.com/${debater.flag}`;
        document.getElementById('debater-flag').alt = `${debater.country} Flag`;
        document.getElementById('debater-country').textContent = debater.country;
        
        document.getElementById('record-win').textContent = debater.debateRecord.win;
        document.getElementById('record-lose').textContent = debater.debateRecord.lose;
        document.getElementById('record-draw').textContent = debater.debateRecord.draw;

        const matchHistoryGrid = document.getElementById('match-history-grid');
        if (debater.matchHistory && debater.matchHistory.length > 0) {
            matchHistoryGrid.innerHTML = debater.matchHistory.map(match => `
                <div class="match-history-card ${match.result.toLowerCase()}">
                    <div class="match-info-card">
                        <span>vs ${match.opponent}</span>
                        <span>${match.result}</span>
                        <span>${match.event}</span>
                    </div>
                </div>
            `).join('');
        } else {
            matchHistoryGrid.innerHTML = '<p class="no-data">No match history available.</p>';
        }

        // Achievements section (can be populated similarly)
        const achievementBox = document.getElementById('achievement-box');
        // You can add logic here to check for achievements in data.js
    } else {
        document.body.innerHTML = '<div class="error-message"><h1>Debater Not Found</h1><p>The debater you are looking for does not exist.</p></div>';
    }
}
