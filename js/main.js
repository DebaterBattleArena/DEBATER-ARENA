const getDebaterById = (id) => dbaData.debaters.find(d => d.id === id);

const getDebaterRecord = (debaterId) => {
    const record = [];
    dbaData.matches.forEach(match => {
        const debater1 = getDebaterById(match.debaters[0]);
        const debater2 = getDebaterById(match.debaters[1]);
        
        if (debater1.id === debaterId || debater2.id === debaterId) {
            const opponent = debater1.id === debaterId ? debater2 : debater1;
            const result = match.winner === debaterId ? 'WIN' : 'LOSE';
            record.push({
                opponent: opponent.name,
                result: result,
                event: match.event
            });
        }
    });
    return record;
};

const getDebaterStats = (debaterId) => {
    const record = getDebaterRecord(debaterId);
    const wins = record.filter(r => r.result === 'WIN').length;
    const losses = record.filter(r => r.result === 'LOSE').length;
    return { wins, losses, draws: 0 };
};

const loadHomePage = () => {
    const mainCarousel = document.getElementById('main-carousel');
    const ongoingMatchesSection = document.getElementById('ongoing-matches');
    const pastEventsSection = document.getElementById('past-events');

    // ONGOING MATCHES
    if (dbaData.events.ongoing.length > 0) {
        ongoingMatchesSection.style.display = 'block';
        const carouselHtml = dbaData.events.ongoing.map((event, index) => {
            const debater1 = getDebaterById(event.title.split(' vs ')[0].toLowerCase());
            const debater2 = getDebaterById(event.title.split(' vs ')[1].toLowerCase());
            
            return `
                <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                    <img src="images/posters/${event.poster}" alt="${event.title}">
                    <div class="carousel-content">
                        <h1 class="main-event-title">${debater1.name} VS ${debater2.name}</h1>
                        <p class="main-event-info">${event.date} | ${event.venue}</p>
                    </div>
                </div>
            `;
        }).join('');
        mainCarousel.innerHTML = carouselHtml;

        const navDotsHtml = dbaData.events.ongoing.map((_, index) => `<div class="nav-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('');
        const navContainer = document.createElement('div');
        navContainer.className = 'carousel-navigation';
        navContainer.innerHTML = navDotsHtml;
        mainCarousel.appendChild(navContainer);
        
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                showSlide(parseInt(index));
            });
        });

        showSlide(0);

    } else {
        ongoingMatchesSection.style.display = 'none'; 
        mainCarousel.style.display = 'none';
    }

    // PAST EVENTS
    if (dbaData.events.past.length > 0) {
        pastEventsSection.style.display = 'block';
        const pastEventsGrid = pastEventsSection.querySelector('.past-events-grid');
        pastEventsGrid.innerHTML = dbaData.events.past.map(event => `
            <a href="#" class="event-card">
                <img src="images/posters/${event.poster}" alt="${event.title}">
                <div class="match-info">
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                </div>
            </a>
        `).join('');
    } else {
        pastEventsSection.style.display = 'none';
    }
};

const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
};

const loadRankingsPage = () => {
    const rankingContainer = document.getElementById('ranking-container');
    rankingContainer.innerHTML = ''; 

    for (const division in dbaData.rankings) {
        const rankingList = dbaData.rankings[division];
        
        const divisionHTML = document.createElement('div');
        divisionHTML.className = 'ranking-division';
        
        const divisionTitle = document.createElement('h2');
        divisionTitle.textContent = division;
        divisionHTML.appendChild(divisionTitle);
        
        const listContainer = document.createElement('div');
        listContainer.className = 'ranking-list';

        rankingList.forEach(rankItem => {
            const debater = getDebaterById(rankItem.id);
            if (!debater) return;

            const isTopRanked = rankItem.rank === 1;
            const itemClass = `ranking-item ${isTopRanked ? 'top-ranked' : ''}`;
            
            const profileImage = debater.profileBanner || debater.image;

            const itemHTML = `
                <a href="profile.html?id=${debater.id}" class="${itemClass}">
                    <span class="rank-number">#${rankItem.rank}</span>
                    <div class="debater-info">
                        <span class="name">${debater.name}</span>
                        <span class="country">
                            <img src="images/flags/${debater.flag}" alt="${debater.country}"> ${debater.country}
                        </span>
                    </div>
                    ${isTopRanked ? `<div class="debater-image-container"><img src="images/debaters/${profileImage}" alt="${debater.name}"></div>` : ''}
                </a>
            `;
            listContainer.innerHTML += itemHTML;
        });
        
        divisionHTML.appendChild(listContainer);
        rankingContainer.appendChild(divisionHTML);
    }
};

const loadProfilePage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterId = urlParams.get('id');
    const debater = getDebaterById(debaterId);

    if (debater) {
        const profileContainer = document.getElementById('profile-container');
        const stats = getDebaterStats(debaterId);
        
        profileContainer.innerHTML = `
            <div class="profile-info-box">
                <span class="logo-dba">DBA</span>
                <div class="profile-stats">
                    <div class="stat-item">
                        <span>DIVISION</span>
                        <span>${debater.division}</span>
                    </div>
                    <div class="stat-item">
                        <span>STATUS</span>
                        <span class="status-text active">${debater.status}</span>
                    </div>
                </div>
                <h1>${debater.name}</h1>
                <p class="country-info">
                    <img src="images/flags/${debater.flag}" alt="${debater.country}"> ${debater.country}
                </p>
                <div class="record-row-type">
                    <span class="record-label">DEBATE RECORD</span>
                    <div class="records-group">
                        <div class="record-box">
                            <span class="record-number win-count">${stats.wins}</span>
                            <span class="record-text">WIN</span>
                        </div>
                        <div class="record-box">
                            <span class="record-number lose-count">${stats.losses}</span>
                            <span class="record-text">LOSS</span>
                        </div>
                        <div class="record-box">
                            <span class="record-number draw-count">${stats.draws}</span>
                            <span class="record-text">DRAW</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const dbaRecordGrid = document.getElementById('dba-record-grid');
        const debaterRecord = getDebaterRecord(debaterId);

        dbaRecordGrid.innerHTML = debaterRecord.map(match => `
            <div class="match-card-detail ${match.result.toLowerCase()}">
                <div class="match-details">
                    <span>vs ${match.opponent}</span>
                    <span>${match.event}</span>
                </div>
                <div class="match-result ${match.result.toLowerCase()}">${match.result}</div>
            </div>
        `).join('');
        
    } else {
        document.body.innerHTML = '<div class="error-message"><h1>Debater Not Found</h1></div>';
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
    }
};
