// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    const isOpen = !sidebar.classList.contains('-translate-x-full');
    sidebar.classList.toggle('-translate-x-full', isOpen);
    overlay.classList.toggle('hidden', isOpen);
}

// Dashboard data
const stats = [
    { name: 'Active Tournaments', value: '3', icon: 'trophy', color: 'bg-purple-500' },
    { name: 'Registered Teams', value: '24', icon: 'users', color: 'bg-blue-500' },
    { name: 'Total Players', value: '312', icon: 'user', color: 'bg-green-500' },
    { name: 'Upcoming Matches', value: '18', icon: 'calendar', color: 'bg-red-500' }
];

// Populate stats
const statsContainer = document.getElementById('stats-container');
stats.forEach(stat => {
    statsContainer.innerHTML += `
        <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div class="flex items-center">
                <div class="p-3 rounded-lg ${stat.color}">
                    <i class="lucide-${stat.icon} h-6 w-6 text-white"></i>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">${stat.name}</p>
                    <p class="text-2xl font-semibold text-gray-900">${stat.value}</p>
                </div>
            </div>
        </div>
    `;
});

// Recent matches data
const matches = [
    { team1: 'Team Red', team2: 'Team Blue', score: '2 - 1', time: '2h ago' },
    { team1: 'Team Green', team2: 'Team Yellow', score: '0 - 0', time: '3h ago' },
    { team1: 'Team Purple', team2: 'Team Orange', score: '3 - 2', time: '5h ago' }
];

// Populate recent matches
const recentMatches = document.getElementById('recent-matches');
matches.forEach(match => {
    recentMatches.innerHTML += `
        <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-4">
                <div class="text-right">
                    <p class="font-medium">${match.team1}</p>
                    <p class="text-sm text-gray-500">Division A</p>
                </div>
                <div class="px-4 py-2 bg-white rounded-lg shadow-sm">
                    <p class="text-lg font-bold">${match.score}</p>
                </div>
                <div>
                    <p class="font-medium">${match.team2}</p>
                    <p class="text-sm text-gray-500">Division A</p>
                </div>
            </div>
            <span class="text-sm text-gray-500">${match.time}</span>
        </div>
    `;
});

// Top scorers data
const topScorers = [
    { name: 'John Doe', team: 'Team Red', goals: 12, photo: '1501' },
    { name: 'Jane Smith', team: 'Team Blue', goals: 10, photo: '1502' },
    { name: 'Mike Johnson', team: 'Team Green', goals: 9, photo: '1503' },
    { name: 'Sarah Wilson', team: 'Team Yellow', goals: 8, photo: '1504' },
    { name: 'Tom Brown', team: 'Team Purple', goals: 7, photo: '1505' }
];

// Populate top scorers
const topScorersContainer = document.getElementById('top-scorers');
topScorers.forEach(player => {
    topScorersContainer.innerHTML += `
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <img
                    src="https://images.unsplash.com/photo-${player.photo}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt="${player.name}"
                    class="h-10 w-10 rounded-full"
                />
                <div>
                    <p class="font-medium">${player.name}</p>
                    <p class="text-sm text-gray-500">${player.team}</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold">${player.goals}</span>
                <span class="text-sm text-gray-500">goals</span>
            </div>
        </div>
    `;
});