import React from 'react';
import { Trophy, Users, UserSquare2, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Active Tournaments', value: '3', icon: Trophy, color: 'bg-purple-500' },
    { name: 'Registered Teams', value: '24', icon: Users, color: 'bg-blue-500' },
    { name: 'Total Players', value: '312', icon: UserSquare2, color: 'bg-green-500' },
    { name: 'Upcoming Matches', value: '18', icon: Calendar, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          New Tournament
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Matches</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((match) => (
              <div key={match} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">Team Red</p>
                    <p className="text-sm text-gray-500">Division A</p>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                    <p className="text-lg font-bold">2 - 1</p>
                  </div>
                  <div>
                    <p className="font-medium">Team Blue</p>
                    <p className="text-sm text-gray-500">Division A</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Scorers</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((player) => (
              <div key={player} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://images.unsplash.com/photo-${1500 + player}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80`}
                    alt={`Player ${player}`}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Player {player}</p>
                    <p className="text-sm text-gray-500">Team {player}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">{12 - player}</span>
                  <span className="text-sm text-gray-500">goals</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;