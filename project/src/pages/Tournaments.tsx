import React from 'react';
import { Calendar, Users, Trophy } from 'lucide-react';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: 'Summer Championship 2024',
      status: 'Active',
      teams: 12,
      startDate: '2024-06-01',
      endDate: '2024-08-30',
      categories: ['Maxi', 'Super', 'Master'],
    },
    {
      id: 2,
      name: 'Winter League 2024',
      status: 'Registration',
      teams: 8,
      startDate: '2024-09-15',
      endDate: '2024-12-15',
      categories: ['Maxi', 'Super'],
    },
    {
      id: 3,
      name: 'Spring Cup 2024',
      status: 'Planning',
      teams: 0,
      startDate: '2024-03-01',
      endDate: '2024-05-30',
      categories: ['Master'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Tournaments</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Create Tournament
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{tournament.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    tournament.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : tournament.status === 'Registration'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }
                `}
              >
                {tournament.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{tournament.startDate} to {tournament.endDate}</span>
              </div>

              <div className="flex items-center text-gray-500">
                <Users className="h-5 w-5 mr-2" />
                <span>{tournament.teams} teams registered</span>
              </div>

              <div className="flex items-center text-gray-500">
                <Trophy className="h-5 w-5 mr-2" />
                <div className="flex flex-wrap gap-2">
                  {tournament.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-gray-100 rounded-md text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Manage
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View Fixtures
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;