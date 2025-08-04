// MoodFood Application JavaScript - Enhanced with Custom Playlists

// Application data with custom playlist integration
const moodData = {
  "moods": {
    "happy": {
      "name": "Happy",
      "description": "Celebrate joy with vibrant, energizing foods and upbeat music",
      "color": "#FFD700",
      "icon": "😊",
      "ayurvedic_insight": "Sattvic foods promote clarity and joy by balancing all three doshas",
      "foods": [
        {
          "name": "Mango Kulfi Smoothie Bowl",
          "image": "mango-kulfi-smoothie.jpg",
          "description": "A festive blend of mango, cardamom, and pistachios topped with rose petals",
          "ingredients": ["Mango", "Greek yogurt", "Cardamom", "Pistachios", "Rose petals", "Honey"],
          "mood_benefit": "Mango boosts serotonin; cardamom lifts spirits and reduces stress",
          "indian_spice_power": "Cardamom (elaichi) is known as the 'Queen of Spices' and has mood-uplifting properties",
          "recipe_steps": [
            "Blend mango pulp with yogurt and ground cardamom",
            "Pour into bowl and top with chopped pistachios",
            "Garnish with rose petals and drizzle honey"
          ]
        },
        {
          "name": "Turmeric Golden Milk Oats",
          "image": "golden-milk-oats.jpg",
          "description": "Creamy oats infused with turmeric, cinnamon, and jaggery",
          "ingredients": ["Oats", "Turmeric", "Cinnamon", "Ginger", "Jaggery", "Almond milk"],
          "mood_benefit": "Turmeric's curcumin enhances mood and reduces inflammation",
          "indian_spice_power": "Turmeric (haldi) is considered sacred in Indian culture and promotes emotional balance",
          "recipe_steps": [
            "Heat almond milk with turmeric, cinnamon, and ginger",
            "Add oats and cook until creamy",
            "Sweeten with jaggery and serve warm"
          ]
        }
      ],
      "music": {
        "playlist_name": "My Custom Happy Playlist",
        "spotify_embed": "https://open.spotify.com/embed/playlist/0WbqJeFnCAlHGUwmd7qzqg?utm_source=generator",
        "description": "Your personalized happy music selection",
        "sample_tracks": ["Your favorite upbeat songs"],
        "is_custom": true
      }
    },
    "sad": {
      "name": "Sad",
      "description": "Comfort foods and soothing melodies to nurture your soul",
      "color": "#6495ED",
      "icon": "😢",
      "ayurvedic_insight": "Warm, nourishing Kapha-pacifying foods provide emotional grounding",
      "foods": [
        {
          "name": "Mom's Dal Chawal",
          "image": "dal-chawal.jpg",
          "description": "Simple yellow dal with basmati rice, ghee, and cumin tadka",
          "ingredients": ["Yellow dal", "Basmati rice", "Ghee", "Cumin", "Turmeric", "Ginger"],
          "mood_benefit": "Comfort food that triggers nostalgic memories and provides emotional warmth",
          "indian_spice_power": "Cumin (jeera) aids digestion and has calming properties",
          "recipe_steps": [
            "Cook dal with turmeric and ginger until soft",
            "Prepare cumin tadka in ghee",
            "Serve over rice with extra ghee"
          ]
        },
        {
          "name": "Kheer with Almonds",
          "image": "badam-kheer.jpg",
          "description": "Creamy rice pudding with cardamom, almonds, and saffron",
          "ingredients": ["Basmati rice", "Milk", "Almonds", "Cardamom", "Saffron", "Sugar"],
          "mood_benefit": "Almonds contain tryptophan; saffron is known as 'sunshine spice' for mood",
          "indian_spice_power": "Saffron (kesar) is traditionally used to treat depression and boost mood",
          "recipe_steps": [
            "Slow-cook rice in milk until creamy",
            "Add ground almonds and cardamom",
            "Garnish with saffron and serve warm"
          ]
        }
      ],
      "music": {
        "playlist_name": "Healing Ragas",
        "spotify_embed": "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
        "description": "Classical ragas and soothing melodies for emotional healing",
        "sample_tracks": ["Raga Yaman - Ustad Ravi Shankar", "Om Namah Shivaya", "Tum Hi Ho - Aashiqui 2"]
      }
    },
    "stressed": {
      "name": "Stressed",
      "description": "Calming foods and relaxing sounds to ease tension",
      "color": "#FF6347",
      "icon": "😰",
      "ayurvedic_insight": "Vata-pacifying warm, grounding foods calm the nervous system",
      "foods": [
        {
          "name": "Ashwagandha Moon Milk",
          "image": "ashwagandha-moon-milk.jpg",
          "description": "Warm milk with ashwagandha, nutmeg, and jaggery",
          "ingredients": ["Warm milk", "Ashwagandha powder", "Nutmeg", "Jaggery", "Ghee"],
          "mood_benefit": "Ashwagandha is a powerful adaptogen that reduces cortisol and stress",
          "indian_spice_power": "Nutmeg (jaiphal) has natural sedative properties and promotes restful sleep",
          "recipe_steps": [
            "Heat milk with a pinch of nutmeg",
            "Whisk in ashwagandha powder",
            "Sweeten with jaggery and add a drop of ghee"
          ]
        },
        {
          "name": "Masala Quinoa Bowl",
          "image": "masala-quinoa.jpg",
          "description": "Quinoa cooked with garam masala, vegetables, and ghee",
          "ingredients": ["Quinoa", "Mixed vegetables", "Garam masala", "Ghee", "Coriander", "Mint"],
          "mood_benefit": "Complete protein with stress-fighting spices for sustained energy",
          "indian_spice_power": "Garam masala blend warms the body and has anxiety-reducing compounds",
          "recipe_steps": [
            "Cook quinoa with turmeric and salt", 
            "Sauté vegetables with garam masala",
            "Mix together and garnish with fresh herbs"
          ]
        }
      ],
      "music": {
        "playlist_name": "Meditation & Mantras",
        "spotify_embed": "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u",
        "description": "Peaceful mantras and meditation music for stress relief",
        "sample_tracks": ["Om Gam Ganapataye", "Shanti Mantra", "Breathe - Prodigy"]
      }
    },
    "relaxed": {
      "name": "Relaxed", 
      "description": "Light, fresh foods and ambient sounds for peaceful moments",
      "color": "#98FB98",
      "icon": "😌",
      "ayurvedic_insight": "Cooling Pitta-pacifying foods maintain balance and tranquility",
      "foods": [
        {
          "name": "Cucumber Mint Raita",
          "image": "cucumber-raita.jpg",
          "description": "Cool yogurt with cucumber, mint, and roasted cumin",
          "ingredients": ["Greek yogurt", "Cucumber", "Fresh mint", "Roasted cumin", "Black salt", "Lemon"],
          "mood_benefit": "Cooling properties calm Pitta dosha and provide hydration",
          "indian_spice_power": "Mint (pudina) has cooling and calming effects on the mind",
          "recipe_steps": [
            "Grate cucumber and drain excess water",
            "Mix with yogurt and chopped mint",
            "Season with roasted cumin and black salt"
          ]
        },
        {
          "name": "Fennel Seed Tea",
          "image": "fennel-tea.jpg",
          "description": "Soothing tea made with fennel seeds and fresh mint",
          "ingredients": ["Fennel seeds", "Fresh mint", "Honey", "Lemon", "Warm water"],
          "mood_benefit": "Fennel aids digestion and has mild sedative properties",
          "indian_spice_power": "Fennel (saunf) is traditionally used after meals to promote relaxation",
          "recipe_steps": [
            "Steep fennel seeds in hot water for 10 minutes",
            "Add fresh mint leaves",
            "Sweeten with honey and add lemon juice"
          ]
        }
      ],
      "music": {
        "playlist_name": "Chillout Fusion",
        "spotify_embed": "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
        "description": "Indo-fusion and chill electronic music for relaxation", 
        "sample_tracks": ["Bombay Theme - A.R. Rahman", "Mumbai - Talvin Singh", "Sunset Lover - Petit Biscuit"]
      }
    },
    "energetic": {
      "name": "Energetic",
      "description": "Power foods and dynamic beats to fuel your active lifestyle",
      "color": "#FF4500", 
      "icon": "⚡",
      "ayurvedic_insight": "Rajasic foods with warming spices stimulate energy and motivation",
      "foods": [
        {
          "name": "Chickpea Chaat Power Bowl",
          "image": "chana-chaat.jpg",
          "description": "Protein-rich chickpeas with vegetables, chutneys, and sprouted mung",
          "ingredients": ["Chickpeas", "Onions", "Tomatoes", "Coriander", "Tamarind chutney", "Mung sprouts"],
          "mood_benefit": "High protein and B-vitamins support energy production and brain function",
          "indian_spice_power": "Chaat masala contains energizing spices that stimulate appetite and vitality",
          "recipe_steps": [
            "Mix boiled chickpeas with chopped vegetables",
            "Add sprouts and fresh coriander", 
            "Toss with chutneys and chaat masala"
          ]
        },
        {
          "name": "Masala Chai Energy Balls",
          "image": "chai-energy-balls.jpg",
          "description": "No-bake energy balls with dates, nuts, and chai spices",
          "ingredients": ["Dates", "Almonds", "Cardamom", "Cinnamon", "Ginger powder", "Coconut"],
          "mood_benefit": "Natural sugars provide quick energy; spices enhance circulation",
          "indian_spice_power": "Chai spices (masala) are warming and energizing, boosting metabolism",
          "recipe_steps": [
            "Blend dates and nuts until sticky",
            "Add chai spice powder",
            "Roll into balls and coat with coconut"
          ]
        }
      ],
      "music": {
        "playlist_name": "Bhangra Beats",
        "spotify_embed": "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
        "description": "High-energy Punjabi and dance tracks to pump you up",
        "sample_tracks": ["Jai Ho - A.R. Rahman", "Mundian To Bach Ke - Panjabi MC", "Thunder - Imagine Dragons"]
      }
    }
  }
};

// Custom playlist storage
let customPlaylists = [
  {
    id: 'custom-happy-1',
    name: 'My Custom Happy Playlist',
    mood: 'happy',
    embed_code: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0WbqJeFnCAlHGUwmd7qzqg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    description: 'Your personalized music selection',
    is_default: true
  }
];

// Application state
let currentMood = null;
let selectedFood = null;
let currentPlaylist = null;
let isDarkMode = false;

// DOM Elements
const elements = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  initializeTheme();
  setupEventListeners();
  setupSmoothScrolling();
  renderCustomPlaylists();
  console.log('MoodFood app initialized with custom playlists');
});

// Initialize DOM elements safely
function initializeElements() {
  elements.themeToggle = document.getElementById('themeToggle');
  elements.themeIcon = document.getElementById('themeIcon');
  elements.moodCards = document.querySelectorAll('.mood-card');
  elements.moodSelector = document.getElementById('moodSelector');
  elements.moodContent = document.getElementById('moodContent');
  elements.backToMoods = document.getElementById('backToMoods');
  elements.foodGrid = document.getElementById('foodGrid');
  elements.createCombo = document.getElementById('createCombo');
  elements.comboModal = document.getElementById('comboModal');
  elements.closeModal = document.getElementById('closeModal');
  elements.loading = document.getElementById('loading');
  
  // Playlist management elements
  elements.playlistName = document.getElementById('playlistName');
  elements.playlistEmbed = document.getElementById('playlistEmbed');
  elements.playlistMood = document.getElementById('playlistMood');
  elements.addPlaylist = document.getElementById('addPlaylist');
  elements.playlistList = document.getElementById('playlistList');
  elements.switchPlaylist = document.getElementById('switchPlaylist');
  elements.spotifyEmbedContainer = document.getElementById('spotifyEmbedContainer');
  elements.playlistModal = document.getElementById('playlistModal');
  elements.closePlaylistModal = document.getElementById('closePlaylistModal');
  elements.availablePlaylists = document.getElementById('availablePlaylists');
  
  // Log missing elements for debugging
  Object.entries(elements).forEach(([key, element]) => {
    if (!element) {
      console.warn(`Element not found: ${key}`);
    }
  });
}

// Theme Management
function initializeTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkMode = prefersDark;
  updateTheme();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  updateTheme();
  showNotification(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`);
}

function updateTheme() {
  if (elements.themeIcon) {
    document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
    elements.themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Mood card selection
  if (elements.moodCards) {
    elements.moodCards.forEach(card => {
      card.addEventListener('click', () => {
        const mood = card.dataset.mood;
        if (mood && moodData.moods[mood]) {
          showLoading();
          setTimeout(() => {
            selectMood(mood);
            hideLoading();
          }, 800);
        }
      });
    });
  }
  
  // Back to moods
  if (elements.backToMoods) {
    elements.backToMoods.addEventListener('click', showMoodSelector);
  }
  
  // Create combo
  if (elements.createCombo) {
    elements.createCombo.addEventListener('click', createMoodCombo);
  }
  
  // Modal controls
  if (elements.closeModal) {
    elements.closeModal.addEventListener('click', closeModal);
  }
  
  if (elements.comboModal) {
    elements.comboModal.addEventListener('click', (e) => {
      if (e.target === elements.comboModal) closeModal();
    });
  }
  
  // Playlist management
  if (elements.addPlaylist) {
    elements.addPlaylist.addEventListener('click', addCustomPlaylist);
  }
  
  if (elements.switchPlaylist) {
    elements.switchPlaylist.addEventListener('click', showPlaylistModal);
  }
  
  if (elements.closePlaylistModal) {
    elements.closePlaylistModal.addEventListener('click', closePlaylistModal);
  }
  
  if (elements.playlistModal) {
    elements.playlistModal.addEventListener('click', (e) => {
      if (e.target === elements.playlistModal) closePlaylistModal();
    });
  }
  
  // Share buttons (mock functionality)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('share-btn')) {
      const action = e.target.textContent.trim();
      showNotification(`${action} functionality would be implemented here!`);
    }
  });
  
  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.comboModal && !elements.comboModal.classList.contains('hidden')) {
        closeModal();
      }
      if (elements.playlistModal && !elements.playlistModal.classList.contains('hidden')) {
        closePlaylistModal();
      }
    }
  });
}

// Smooth scrolling
function setupSmoothScrolling() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator && elements.moodSelector) {
    scrollIndicator.addEventListener('click', () => {
      elements.moodSelector.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Loading states
function showLoading() {
  if (elements.loading) {
    elements.loading.classList.remove('hidden');
  }
}

function hideLoading() {
  if (elements.loading) {
    elements.loading.classList.add('hidden');
  }
}

// Custom Playlist Management
function addCustomPlaylist() {
  const name = elements.playlistName?.value?.trim();
  const embedCode = elements.playlistEmbed?.value?.trim();
  const mood = elements.playlistMood?.value;
  
  if (!name || !embedCode || !mood) {
    showNotification('Please fill in all fields!', 'error');
    return;
  }
  
  // Basic validation for Spotify embed code
  if (!embedCode.includes('spotify.com/embed') || !embedCode.includes('iframe')) {
    showNotification('Please enter a valid Spotify embed iframe code!', 'error');
    return;
  }
  
  // Extract Spotify URL from embed code
  const urlMatch = embedCode.match(/src="([^"]*spotify\.com\/embed[^"]*)"/);
  if (!urlMatch) {
    showNotification('Invalid Spotify embed code format!', 'error');
    return;
  }
  
  const spotifyUrl = urlMatch[1];
  
  // Create new playlist
  const newPlaylist = {
    id: `custom-${Date.now()}`,
    name: name,
    mood: mood,
    embed_code: embedCode,
    spotify_embed: spotifyUrl,
    description: `Custom playlist for ${mood} mood`,
    is_custom: true
  };
  
  customPlaylists.push(newPlaylist);
  
  // Clear form
  elements.playlistName.value = '';
  elements.playlistEmbed.value = '';
  elements.playlistMood.value = '';
  
  renderCustomPlaylists();
  showNotification(`Added "${name}" to ${mood} mood!`, 'success');
}

function renderCustomPlaylists() {
  if (!elements.playlistList) return;
  
  elements.playlistList.innerHTML = '';
  
  customPlaylists.forEach(playlist => {
    const playlistItem = document.createElement('div');
    playlistItem.className = 'playlist-item';
    if (playlist.is_default) playlistItem.classList.add('default-playlist');
    
    playlistItem.innerHTML = `
      <div class="playlist-info">
        <h4>${playlist.name}</h4>
        <p>${capitalizeFirst(playlist.mood)} mood • ${playlist.description}</p>
      </div>
      <div class="playlist-actions">
        <span class="status status--success">${playlist.is_default ? 'Default' : 'Custom'}</span>
        ${!playlist.is_default ? `<button class="btn btn--sm btn--outline delete-playlist" data-id="${playlist.id}">
          <i class="fas fa-trash"></i>
        </button>` : ''}
      </div>
    `;
    
    elements.playlistList.appendChild(playlistItem);
  });
  
  // Add delete event listeners
  document.querySelectorAll('.delete-playlist').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const playlistId = e.target.closest('.delete-playlist').dataset.id;
      deleteCustomPlaylist(playlistId);
    });
  });
}

function deleteCustomPlaylist(playlistId) {
  customPlaylists = customPlaylists.filter(p => p.id !== playlistId);
  renderCustomPlaylists();
  showNotification('Playlist deleted!', 'success');
}

function getPlaylistsForMood(mood) {
  return customPlaylists.filter(p => p.mood === mood);
}

// Mood selection and content display
function selectMood(mood) {
  currentMood = mood;
  const moodInfo = moodData.moods[mood];
  
  if (!moodInfo) {
    console.error('Mood not found:', mood);
    return;
  }
  
  console.log('Selecting mood:', mood, moodInfo);
  
  // Hide mood selector and show content
  if (elements.moodSelector) {
    elements.moodSelector.style.display = 'none';
  }
  
  if (elements.moodContent) {
    elements.moodContent.classList.remove('hidden');
  }
  
  // Update mood header
  updateMoodHeader(moodInfo);
  
  // Display food recommendations
  displayFoodRecommendations(moodInfo.foods);
  
  // Display music section with custom playlist support
  displayMusicSection(moodInfo.music, mood);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateMoodHeader(moodInfo) {
  const elements = {
    icon: document.querySelector('.current-mood-icon'),
    title: document.querySelector('.current-mood-title'),
    description: document.querySelector('.current-mood-description'),
    insight: document.querySelector('.insight-text')
  };
  
  if (elements.icon) elements.icon.textContent = moodInfo.icon;
  if (elements.title) elements.title.textContent = moodInfo.name;
  if (elements.description) elements.description.textContent = moodInfo.description;
  if (elements.insight) elements.insight.textContent = moodInfo.ayurvedic_insight;
}

function displayFoodRecommendations(foods) {
  if (!elements.foodGrid) {
    console.error('Food grid element not found');
    return;
  }
  
  elements.foodGrid.innerHTML = '';
  
  foods.forEach((food, index) => {
    const foodCard = createFoodCard(food, index);
    elements.foodGrid.appendChild(foodCard);
  });
  
  console.log('Displayed', foods.length, 'food recommendations');
}

function createFoodCard(food, index) {
  const card = document.createElement('div');
  card.className = 'food-card';
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.innerHTML = `
    <div class="food-header">
      <h4 class="food-name">${food.name}</h4>
      <p class="food-description">${food.description}</p>
      <div class="mood-benefit">
        <strong>Mood Benefit:</strong> ${food.mood_benefit}
      </div>
      <div class="spice-power">
        <strong>Indian Spice Power:</strong> ${food.indian_spice_power}
      </div>
    </div>
    <div class="food-details">
      <h5>Ingredients:</h5>
      <div class="ingredients-list">
        ${food.ingredients.map(ingredient => `<span class="ingredient-tag">${ingredient}</span>`).join('')}
      </div>
      <div class="recipe-steps">
        <h5>Recipe Steps:</h5>
        <ol>
          ${food.recipe_steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;
  
  // Add click handler to select this food
  card.addEventListener('click', () => {
    selectedFood = food;
    // Remove previous selection
    document.querySelectorAll('.food-card').forEach(c => c.classList.remove('selected'));
    // Add selection to current card
    card.classList.add('selected');
    showNotification(`Selected: ${food.name}`);
  });
  
  return card;
}

function displayMusicSection(music, mood) {
  const elements = {
    playlistName: document.querySelector('.playlist-name'),
    playlistDescription: document.querySelector('.playlist-description')
  };
  
  // Check for custom playlists for this mood
  const moodPlaylists = getPlaylistsForMood(mood);
  const activePlaylist = moodPlaylists.length > 0 ? moodPlaylists[0] : null;
  
  if (activePlaylist) {
    // Use custom playlist
    currentPlaylist = activePlaylist;
    if (elements.playlistName) elements.playlistName.textContent = activePlaylist.name;
    if (elements.playlistDescription) elements.playlistDescription.textContent = activePlaylist.description;
    
    // Update Spotify embed with custom playlist
    updateSpotifyEmbed(activePlaylist.embed_code);
  } else {
    // Use default playlist
    currentPlaylist = music;
    if (elements.playlistName) elements.playlistName.textContent = music.playlist_name;
    if (elements.playlistDescription) elements.playlistDescription.textContent = music.description;
    
    // Update Spotify embed with default playlist
    const defaultEmbedCode = `<iframe style="border-radius:12px" src="${music.spotify_embed}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    updateSpotifyEmbed(defaultEmbedCode);
  }
  
  // Show/hide switch playlist button based on available playlists
  if (elements.switchPlaylist) {
    const totalPlaylists = moodPlaylists.length + 1; // +1 for default
    elements.switchPlaylist.style.display = totalPlaylists > 1 ? 'inline-flex' : 'none';
  }
}

function updateSpotifyEmbed(embedCode) {
  if (!elements.spotifyEmbedContainer) return;
  
  // Clear existing content
  elements.spotifyEmbedContainer.innerHTML = '';
  
  // Create temporary div to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = embedCode;
  
  // Get the iframe and append it
  const iframe = tempDiv.querySelector('iframe');
  if (iframe) {
    iframe.style.width = '100%';
    iframe.style.height = '352px';
    iframe.style.borderRadius = '12px';
    elements.spotifyEmbedContainer.appendChild(iframe);
  }
}

function showPlaylistModal() {
  if (!elements.playlistModal || !currentMood) return;
  
  const moodPlaylists = getPlaylistsForMood(currentMood);
  const defaultMusic = moodData.moods[currentMood].music;
  
  // Populate available playlists
  elements.availablePlaylists.innerHTML = '';
  
  // Add default playlist
  const defaultItem = createPlaylistModalItem(defaultMusic, true);
  elements.availablePlaylists.appendChild(defaultItem);
  
  // Add custom playlists
  moodPlaylists.forEach(playlist => {
    const item = createPlaylistModalItem(playlist, false);
    elements.availablePlaylists.appendChild(item);
  });
  
  elements.playlistModal.classList.remove('hidden');
}

function createPlaylistModalItem(playlist, isDefault) {
  const item = document.createElement('div');
  item.className = 'available-playlist-item';
  
  const name = isDefault ? playlist.playlist_name : playlist.name;
  const description = isDefault ? playlist.description : playlist.description;
  const type = isDefault ? 'Default' : 'Custom';
  
  item.innerHTML = `
    <div class="playlist-info">
      <h4>${name}</h4>
      <p>${description} • ${type}</p>
    </div>
    <button class="btn btn--sm btn--primary">Select</button>
  `;
  
  item.addEventListener('click', () => {
    selectPlaylistFromModal(playlist, isDefault);
  });
  
  return item;
}

function selectPlaylistFromModal(playlist, isDefault) {
  if (isDefault) {
    // Use default playlist
    const music = moodData.moods[currentMood].music;
    displayMusicSection(music, currentMood);
  } else {
    // Use custom playlist
    currentPlaylist = playlist;
    const elements = {
      playlistName: document.querySelector('.playlist-name'),
      playlistDescription: document.querySelector('.playlist-description')
    };
    
    if (elements.playlistName) elements.playlistName.textContent = playlist.name;
    if (elements.playlistDescription) elements.playlistDescription.textContent = playlist.description;
    
    updateSpotifyEmbed(playlist.embed_code);
  }
  
  closePlaylistModal();
  showNotification(`Switched to: ${isDefault ? playlist.playlist_name : playlist.name}`);
}

function closePlaylistModal() {
  if (elements.playlistModal) {
    elements.playlistModal.classList.add('hidden');
  }
}

function showMoodSelector() {
  if (elements.moodContent) {
    elements.moodContent.classList.add('hidden');
  }
  
  if (elements.moodSelector) {
    elements.moodSelector.style.display = 'flex';
  }
  
  currentMood = null;
  selectedFood = null;
  currentPlaylist = null;
}

// MoodCombo functionality
function createMoodCombo() {
  if (!currentMood) {
    showNotification('Please select a mood first!', 'error');
    return;
  }
  
  // Auto-select first food if none selected
  if (!selectedFood && moodData.moods[currentMood].foods.length > 0) {
    selectedFood = moodData.moods[currentMood].foods[0];
  }
  
  displayMoodCombo();
}

function displayMoodCombo() {
  if (!elements.comboModal) return;
  
  const moodInfo = moodData.moods[currentMood];
  
  // Update modal content
  const elements = {
    icon: document.querySelector('.combo-mood-icon'),
    name: document.querySelector('.combo-mood-name'),
    foodName: document.querySelector('.selected-food-name'),
    playlistName: document.querySelector('.selected-playlist-name'),
    moodState: document.querySelector('.mood-state')
  };
  
  if (elements.icon) elements.icon.textContent = moodInfo.icon;
  if (elements.name) elements.name.textContent = moodInfo.name;
  if (elements.foodName) elements.foodName.textContent = selectedFood?.name || 'No food selected';
  if (elements.playlistName) {
    const playlistName = currentPlaylist?.name || currentPlaylist?.playlist_name || 'Default playlist';
    elements.playlistName.textContent = playlistName;
  }
  if (elements.moodState) elements.moodState.textContent = moodInfo.name.toLowerCase();
  
  // Show modal
  elements.comboModal.classList.remove('hidden');
}

function closeModal() {
  if (elements.comboModal) {
    elements.comboModal.classList.add('hidden');
  }
}

// Utility functions
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showNotification(message, type = 'info') {
  // Create a notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  
  // Add type-specific styling
  if (type === 'error') {
    notification.style.background = 'var(--color-error)';
  } else if (type === 'success') {
    notification.style.background = 'var(--color-success)';
  } else if (type === 'warning') {
    notification.style.background = 'var(--color-warning)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

console.log('MoodFood JavaScript loaded successfully with custom playlist support');