const loadHomePage = () => {
    const mainCarousel = document.getElementById('main-carousel');
    const ongoingMatchesSection = document.getElementById('ongoing-matches');
    const pastEventsSection = document.getElementById('past-events');

    // Cek apakah ada ongoing matches untuk ditampilkan
    if (byonData.events.ongoing.length > 0) {
        ongoingMatchesSection.style.display = 'block';
        const carouselHtml = byonData.events.ongoing.map((event, index) => `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <img src="images/posters/${event.image}" alt="${event.title}">
                <div class="carousel-content">
                    <h1 class="main-event-title">${event.title}</h1>
                    <p class="main-event-info">${event.date} | ${event.venue}</p>
                </div>
            </div>
        `).join('');
        mainCarousel.innerHTML = carouselHtml;

        // Tambahkan navigasi dots
        const navDotsHtml = byonData.events.ongoing.map((_, index) => `<div class="nav-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('');
        const navContainer = document.createElement('div');
        navContainer.className = 'carousel-navigation';
        navContainer.innerHTML = navDotsHtml;
        mainCarousel.appendChild(navContainer);
        
        // Tambahkan event listener untuk dots
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                showSlide(parseInt(index));
            });
        });

    } else {
        ongoingMatchesSection.style.display = 'none'; // Sembunyikan jika tidak ada
        mainCarousel.style.display = 'none';
    }

    // Tampilkan past events
    if (byonData.events.past.length > 0) {
        pastEventsSection.style.display = 'block';
        const pastEventsGrid = pastEventsSection.querySelector('.past-events-grid');
        pastEventsGrid.innerHTML = byonData.events.past.map(event => `
            <a href="#" class="event-card">
                <img src="images/posters/${event.image}" alt="${event.title}">
            </a>
        `).join('');
    } else {
        pastEventsSection.style.display = 'none';
    }
};

const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
};

const loadRankingsPage = () => {
    const rankingContainer = document.getElementById('ranking-container');
    rankingContainer.innerHTML = ''; // Clear container

    for (const division in byonData.rankings) {
        const rankingList = byonData.rankings[division];
        
        const divisionHTML = document.createElement('div');
        divisionHTML.className = 'ranking-division';
        
        const divisionTitle = document.createElement('h2');
        divisionTitle.textContent = division;
        divisionHTML.appendChild(divisionTitle);
        
        const listContainer = document.createElement('div');
        listContainer.className = 'ranking-list';

        rankingList.forEach(rankItem => {
            const fighter = byonData.fighters.find(f => f.id === rankItem.id);
            if (!fighter) return;

            const isTopRanked = rankItem.rank === 1;
            const itemClass = `ranking-item ${isTopRanked ? 'top-ranked' : ''}`;
            
            const itemHTML = `
                <a href="profile.html?id=${fighter.id}" class="${itemClass}">
                    <span class="rank-number">#${rankItem.rank}</span>
                    <div class="debater-info">
                        <span class="name">${fighter.name}</span>
                        <span class="country">
                            <img src="images/flags/${fighter.flag}" alt="${fighter.country}"> ${fighter.country}
                        </span>
                    </div>
                    ${isTopRanked ? `<div class="debater-image-container"><img src="images/fighters/${fighter.image}" alt="${fighter.name}"></div>` : ''}
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
    const fighterId = urlParams.get('id');
    const fighter = byonData.fighters.find(f => f.id === fighterId);

    if (fighter) {
        const profileBanner = document.getElementById('profile-banner');
        profileBanner.className = 'profile-banner';
        profileBanner.style.backgroundImage = `url('images/fighters/${fighter.image}')`;
        
        const recordHtml = fighter.record.map(match => `
            <div class="match-card-detail ${match.result.toLowerCase()}">
                <div class="match-details">
                    <span>vs ${match.opponent}</span>
                    <span>${match.round} | ${match.time} | ${match.method}</span>
                </div>
                <div class="match-result">${match.result}</div>
            </div>
        `).join('');

        const profileInfoHtml = `
            <div class="profile-info">
                <div class="profile-stats">
                    <div class="stat-item">
                        <span>DIVISION</span>
                        <span class="division-text">${fighter.division}</span>
                    </div>
                    <div class="stat-item">
                        <span>STATUS</span>
                        <span class="status-text active-status">ACTIVE</span>
                    </div>
                </div>
                <h1>${fighter.name}</h1>
                <p class="country-info">
                    <img src="images/flags/${fighter.flag}" alt="${fighter.country}"> ${fighter.country}
                </p>
                <div class="record-row">
                    <div class="record-box">
                        <span class="record-number win-count">${fighter.fightRecord.win}</span>
                        <span class="record-text">WIN</span>
                    </div>
                    <div class="record-box">
                        <span class="record-number lose-count">${fighter.fightRecord.lose}</span>
                        <span class="record-text">LOSS</span>
                    </div>
                    <div class="record-box">
                        <span class="record-number draw-count">${fighter.fightRecord.draw}</span>
                        <span class="record-text">DRAW</span>
                    </div>
                </div>
            </div>
        `;
        profileBanner.innerHTML = profileInfoHtml;
        document.getElementById('byon-record-grid').innerHTML = recordHtml;

        // Tambahkan tombol achievement
        const achievementContainer = document.getElementById('achievement-container');
        achievementContainer.innerHTML = '<button class="achievement-btn">ACHIEVEMENT</button>';
    } else {
        document.body.innerHTML = '<div class="error-message"><h1>Fighter Not Found</h1></div>';
    }
};
