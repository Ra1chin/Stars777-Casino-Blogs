const blogs = [
    {
        id: 1,
        title: "Top 10 Casino Strategies for Beginners",
        excerpt: "Discover expert tips to kickstart your casino journey with confidence.",
        image: "/Top 10 Casino Strategies for Beginners.jpg",
        link: "blog contents/top-10-casino-strategies-for-beginners.html",
        date: "2025-06-15"
    },
    {
        id: 2,
        title: "Blackjack Secrets Revealed",
        excerpt: "Unlock winning tips for Blackjack on Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=2",
        link: "https://stars777.org/games/blackjack/",
        date: "2025-06-10"
    },
    {
        id: 3,
        title: "3 Coin Treasures Slot Guide",
        excerpt: "Discover the thrills of 3 Coin Treasures at Stars777.",
        image: "https://picsum.photos/300/200?random=3",
        link: "https://stars777.org/games/3-coin-treasures/",
        date: "2025-06-05"
    },
    {
        id: 4,
        title: "Why Stars777's Bonuses Shine",
        excerpt: "Explore the best promotions at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=4",
        link: "https://stars777.org/promotions/",
        date: "2025-06-01"
    },
    {
        id: 5,
        title: "Secrets of Cleopatra Slot Tips",
        excerpt: "Master Infinity Reels with Stars777's Cleopatra slot.",
        image: "https://picsum.photos/300/200?random=5",
        link: "https://stars777.org/games/secrets-of-cleopatra/",
        date: "2025-05-28"
    },
    {
        id: 6,
        title: "Boxing King: Knockout Strategies",
        excerpt: "Punch your way to wins at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=6",
        link: "https://stars777.org/games/boxing-king/",
        date: "2025-05-25"
    },
    {
        id: 7,
        title: "Live Casino Thrills at Stars777",
        excerpt: "Experience real-time gaming with Stars777's live casino.",
        image: "https://picsum.photos/300/200?random=7",
        link: "https://stars777.org/games/live-casino/",
        date: "2025-05-20"
    },
    {
        id: 8,
        title: "Roulette Winning Strategies",
        excerpt: "Spin the wheel with confidence at Stars777.",
        image: "https://picsum.photos/300/200?random=8",
        link: "https://stars777.org/games/roulette/",
        date: "2025-05-15"
    },
    {
        id: 9,
        title: "Stars777 VIP Program Benefits",
        excerpt: "Unlock exclusive rewards with Stars777's loyalty program.",
        image: "https://picsum.photos/300/200?random=9",
        link: "https://stars777.org/promotions/",
        date: "2025-05-10"
    },
    {
        id: 10,
        title: "Beginner’s Guide to Poker",
        excerpt: "Start your poker journey with Stars777 tips.",
        image: "https://picsum.photos/300/200?random=10",
        link: "https://stars777.org/games/poker/",
        date: "2025-05-05"
    },
    {
        id: 11,
        title: "Slot Tournaments at Stars777",
        excerpt: "Compete for big prizes in Stars777 slot tournaments.",
        image: "https://picsum.photos/300/200?random=11",
        link: "https://stars777.org/games/slots/",
        date: "2025-05-01"
    },
    {
        id: 12,
        title: "Baccarat Mastery Guide",
        excerpt: "Learn to play Baccarat like a pro at Stars777.",
        image: "https://picsum.photos/300/200?random=12",
        link: "https://stars777.org/games/baccarat/",
        date: "2025-04-28"
    },
    {
        id: 13,
        title: "Stars777’s Mobile Gaming Experience",
        excerpt: "Play on the go with Stars777’s mobile platform.",
        image: "https://picsum.photos/300/200?random=13",
        link: "https://stars777.org/",
        date: "2025-04-25"
    },
    {
        id: 14,
        title: "Top 5 Slot Games at Stars777",
        excerpt: "Discover the best slots to play on Stars777.",
        image: "https://picsum.photos/300/200?random=14",
        link: "https://stars777.org/games/slots/",
        date: "2025-04-20"
    },
    {
        id: 15,
        title: "Responsible Gaming at Stars777",
        excerpt: "Play safely with Stars777’s responsible gaming tools.",
        image: "https://picsum.photos/300/200?random=15",
        link: "https://stars777.org/terms-of-service-and-guidelines/",
        date: "2025-04-15"
    },
    {
        id: 16,
        title: "Andar Bahar Winning Tips",
        excerpt: "Master Andar Bahar with Stars777 strategies.",
        image: "https://picsum.photos/300/200?random=16",
        link: "https://stars777.org/games/andar-bahar/",
        date: "2025-04-10"
    },
    {
        id: 17,
        title: "Stars777’s Fast Withdrawal Guide",
        excerpt: "Get your winnings quickly with Stars777.",
        image: "https://picsum.photos/300/200?random=17",
        link: "https://stars777.org/",
        date: "2025-04-05"
    },
    {
        id: 18,
        title: "How to Maximize Casino Bonuses",
        excerpt: "Boost your bankroll with Stars777 promotions.",
        image: "https://picsum.photos/300/200?random=18",
        link: "https://stars777.org/promotions/",
        date: "2025-04-01"
    },
    {
        id: 19,
        title: "Stars777’s Game Variety Explored",
        excerpt: "Find your favorite games at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=19",
        link: "https://stars777.org/games/",
        date: "2025-03-28"
    },
    {
        id: 20,
        title: "Poker Tournaments at Stars777",
        excerpt: "Join thrilling poker tournaments on Stars777.",
        image: "https://picsum.photos/300/200?random=20",
        link: "https://stars777.org/games/poker/",
        date: "2025-03-25"
    },
    {
        id: 21,
        title: "Stars777’s Security Features",
        excerpt: "Play with confidence at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=21",
        link: "https://stars777.org/stars777-privacy-policy/",
        date: "2025-03-20"
    },
    {
        id: 22,
        title: "Ultimate Guide to Slots",
        excerpt: "Spin and win with Stars777’s slot tips.",
        image: "https://picsum.photos/300/200?random=22",
        link: "https://stars777.org/games/slots/",
        date: "2025-03-15"
    },
    {
        id: 23,
        title: "Live Dealer Games at Stars777",
        excerpt: "Experience authentic casino action at Stars777.",
        image: "https://picsum.photos/300/200?random=23",
        link: "https://stars777.org/games/live-casino/",
        date: "2025-03-10"
    },
    {
        id: 24,
        title: "Stars777’s Welcome Bonus Guide",
        excerpt: "Start strong with Stars777’s welcome offer.",
        image: "https://picsum.photos/300/200?random=24",
        link: "https://stars777.org/promotions/",
        date: "2025-03-05"
    },
    {
        id: 25,
        title: "Advanced Blackjack Strategies",
        excerpt: "Outplay the dealer at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=25",
        link: "https://stars777.org/games/blackjack/",
        date: "2025-03-01"
    },
    {
        id: 26,
        title: "Stars777’s Loyalty Rewards",
        excerpt: "Earn more with Stars777’s VIP program.",
        image: "https://picsum.photos/300/200?random=26",
        link: "https://stars777.org/promotions/",
        date: "2025-02-25"
    },
    {
        id: 27,
        title: "Teen Patti Variations Explored",
        excerpt: "Discover Teen Patti styles at Stars777.",
        image: "https://picsum.photos/300/200?random=27",
        link: "https://stars777.org/games/teen-patti/",
        date: "2025-02-20"
    },
    {
        id: 28,
        title: "Slot Game Features at Stars777",
        excerpt: "Explore exciting slot mechanics at Stars777.",
        image: "https://picsum.photos/300/200?random=28",
        link: "https://stars777.org/games/slots/",
        date: "2025-02-15"
    },
    {
        id: 29,
        title: "Stars777’s Customer Support Guide",
        excerpt: "Get help anytime with Stars777 support.",
        image: "https://picsum.photos/300/200?random=29",
        link: "https://stars777.org/",
        date: "2025-02-10"
    },
    {
        id: 30,
        title: "Winning Big at Stars777",
        excerpt: "Tips to maximize wins at Stars777 Casino.",
        image: "https://picsum.photos/300/200?random=30",
        link: "https://stars777.org/",
        date: "2025-02-05"
    }
  ];
  
  const blogsPerPage = 6;
  let currentPage = 1;
  let currentSort = 'newest';
  
  function displayBlogs(page, sortedBlogs) {
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const paginatedBlogs = sortedBlogs.slice(start, end);
  
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
  
    paginatedBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p class="blog-date">Uploaded: ${blog.date}</p>
                <p>${blog.excerpt}</p>
                <a href="${blog.link}" target="_blank">Read More at Stars777</a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
  
    updatePagination(sortedBlogs);
  }
  
  function updatePagination(sortedBlogs) {
    const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
  
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            sortAndDisplayBlogs();
        }
    });
    pagination.appendChild(prevButton);
  
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? 'active' : '';
        pageButton.addEventListener('click', () => {
            currentPage = i;
            sortAndDisplayBlogs();
        });
        pagination.appendChild(pageButton);
    }
  
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            sortAndDisplayBlogs();
        }
    });
    pagination.appendChild(nextButton);
  }
  
  function sortAndDisplayBlogs() {
    let sortedBlogs = [...blogs];
    if (currentSort === 'newest') {
        sortedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (currentSort === 'oldest') {
        sortedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    displayBlogs(currentPage, sortedBlogs);
  }
  
  function filterBlogs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
  
    if (!searchInput) {
        // When search input is empty, revert to paginated view
        document.getElementById('pagination').style.display = 'flex';
        sortAndDisplayBlogs();
        return;
    }
  
    let filteredBlogs;
    if (searchInput.length === 1) {
        filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().startsWith(searchInput)
        );
    } else {
        filteredBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchInput) ||
            blog.excerpt.toLowerCase().includes(searchInput)
        );
    }
  
    filteredBlogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p class="blog-date">Uploaded: ${blog.date}</p>
                <p>${blog.excerpt}</p>
                <a href="${blog.link}" target="_blank">Read More at Stars777</a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
  
    document.getElementById('pagination').style.display = 'none';
  }
  
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  const sortSelect = document.getElementById('sortSelect');
  sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    currentPage = 1;
    sortAndDisplayBlogs();
  });
  
  sortAndDisplayBlogs();
  
  document.getElementById('searchInput').addEventListener('input', filterBlogs);
