const loadHomePage = () => {
    const mainCarousel = document.getElementById('main-carousel');
    const ongoingMatchesSection = document.getElementById('ongoing-matches');
    const pastEventsSection = document.getElementById('past-events');

    // --- ONGOING MATCHES (MAIN CAROUSEL) ---
    if (dbaData.events.ongoing.length > 0) {
        ongoingMatchesSection.style.display = 'block'; // Pastikan section terlihat
        
        const carouselHtml = dbaData.events.ongoing.map((event, index) => `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <img src="images/posters/${event.poster}" alt="${event.title}">
                <div class="carousel-content">
                    <h1 class="main-event-title">${event.title}</h1>
                    <p class="main-event-info">${event.date} | ${event.venue}</p>
                </div>
            </div>
        `).join('');
        mainCarousel.innerHTML = carouselHtml;

        // Tambahkan navigasi dots
        const navDotsHtml = dbaData.events.ongoing.map((_, index) => `<div class="nav-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`).join('');
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

        // Initialize carousel
        showSlide(0);

    } else {
        ongoingMatchesSection.style.display = 'none'; 
        mainCarousel.style.display = 'none';
    }

    // --- PAST EVENTS ---
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
    if (slides.length === 0) return; // Prevent error if no slides

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
            const debater = dbaData.debaters.find(f => f.id === rankItem.id);
            if (!debater) return;

            const isTopRanked = rankItem.rank === 1;
            const itemClass = `ranking-item ${isTopRanked ? 'top-ranked' : ''}`;
            
            const itemHTML = `
                <a href="profile.html?id=${debater.id}" class="${itemClass}">
                    <span class="rank-number">#${rankItem.rank}</span>
                    <div class="debater-info">
                        <span class="name">${debater.name}</span>
                        <span class="country">
                            <img src="images/flags/${debater.flag}" alt="${debater.country}"> ${debater.country}
                        </span>
                    </div>
                    ${isTopRanked ? `<div class="debater-image-container"><img src="images/debaters/${debater.image}" alt="${debater.name}"></div>` : ''}
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
    const debater = dbaData.debaters.find(d => d.id === debaterId);

    if (debater) {
        const profileBanner = document.getElementById('profile-banner');
        profileBanner.className = 'profile-banner';
        profileBanner.style.backgroundImage = `url('images/debaters/${debater.profileBanner}')`;
        
        const dbaRecordGrid = document.getElementById('dba-record-grid');
        dbaRecordGrid.innerHTML = debater.record.map(match => `
            <div class="match-card-detail ${match.result.toLowerCase()}">
                <div class="match-details">
                    <span>vs ${match.opponent}</span>
                    <span>Round ${match.round} | ${match.time} | Method: ${match.method}</span>
                </div>
                <div class="match-result ${match.result.toLowerCase()}">${match.result}</div>
            </div>
        `).join('');

        const profileInfoHtml = `
            <div class="profile-info-overlay">
                <div class="profile-stats">
                    <div class="stat-item">
                        <span>DIVISION</span>
                        <span class="division-text">${debater.division}</span>
                    </div>
                    <div class="stat-item">
                        <span>STATUS</span>
                        <span class="status-text active">ACTIVE</span>
                    </div>
                </div>
                <h1>${debater.name}</h1>
                <p class="country-info">
                    <img src="images/flags/${debater.flag}" alt="${debater.country}"> ${debater.country}
                </p>
                <div class="record-rows-container">
                    <div class="record-row-type">
                        <span class="record-label">DEBATE RECORD</span>
                        <div class="records-group">
                            <div class="record-box">
                                <span class="record-number win-count">${debater.debateRecord.win}</span>
                                <span class="record-text">WIN</span>
                            </div>
                            <div class="record-box">
                                <span class="record-number lose-count">${debater.debateRecord.lose}</span>
                                <span class="record-text">LOSS</span>
                            </div>
                            <div class="record-box">
                                <span class="record-number draw-count">${debater.debateRecord.draw}</span>
                                <span class="record-text">DRAW</span>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        `;
        profileBanner.innerHTML = profileInfoHtml;
        
        // Achievement section
        const achievementContainer = document.getElementById('achievement-container');
        achievementContainer.innerHTML = '<button class="achievement-btn">ACHIEVEMENT</button>'; // Sesuai tampilan BYON
    } else {
        document.body.innerHTML = '<div class="error-message"><h1>Debater Not Found</h1><p>The debater you are looking for does not exist.</p><a href="index.html">Go Home</a></div>';
        document.querySelector('header').style.display = 'none'; // Sembunyikan header jika debater tidak ditemukan
        document.querySelector('footer').style.display = 'none'; // Sembunyikan footer
    }
};
