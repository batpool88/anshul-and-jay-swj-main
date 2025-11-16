import React, { useState, useEffect } from 'react';
import { Trophy, Users, Calendar, MapPin, Zap, Star, User, Mail, Phone } from 'lucide-react';
import './arcade-styles.css';

export default function StartupWeekendJaipur() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', experience: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [pixels, setPixels] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(3);

  useEffect(() => {
    const newPixels = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setPixels(newPixels);

    const scoreInterval = setInterval(() => {
      setScore((prev: number) => prev + 10);
    }, 2000);

    return () => clearInterval(scoreInterval);
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.role || !formData.experience) {
      alert('Please fill in all fields!');
      return;
    }
    if (coins > 0) {
      setCoins(coins - 1);
      setScore(score + 1000);
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', phone: '', role: '', experience: '' });
    }, 3000);
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'gray-600': 'bg-gray-600',
      'gray-700': 'bg-gray-700',
      'gray-800': 'bg-gray-800',
    };
    return colorMap[color] || 'bg-gray-600';
  };

  interface ArcadeMachineProps {
    title: string;
    color?: string;
    screen: React.ReactNode;
  }

  const ArcadeMachine: React.FC<ArcadeMachineProps> = ({ title, color = "gray-600", screen }) => (
    <div className="relative">
      {/* Arcade Cabinet */}
      <div className={`w-full ${getColorClass(color)} border-4 border-gray-700 pixel-corners relative`}>
        {/* Top Marquee */}
        <div className="bg-black border-b-2 sm:border-b-4 border-gray-700 p-2 sm:p-3 md:p-4 text-center">
          <div className="text-base sm:text-xl md:text-2xl font-black text-gray-100 arcade-text animate-pulse">
            {title}
          </div>
        </div>
        
        {/* Screen */}
        <div className="bg-black m-2 sm:m-3 md:m-4 p-3 sm:p-4 md:p-6 border-2 sm:border-4 border-gray-800 aspect-4/3 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-black opacity-50" />
          <div className="relative z-10 h-full flex items-center justify-center">
            {screen}
          </div>
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
          }} />
        </div>
        
        {/* Control Panel */}
        <div className="bg-gray-700 p-3 sm:p-4 md:p-6 border-t-2 sm:border-t-4 border-gray-800">
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-red-900 rounded-full border-2 sm:border-3 md:border-4 border-gray-800 shadow-inner" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-red-900 rounded-full border-2 sm:border-3 md:border-4 border-gray-800 shadow-inner" />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <div className="col-start-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 border-2 border-gray-600" />
              <div className="col-start-1 row-start-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 border-2 border-gray-600" />
              <div className="col-start-2 row-start-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 border-2 border-gray-600" />
              <div className="col-start-3 row-start-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 border-2 border-gray-600" />
              <div className="col-start-2 row-start-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-800 border-2 border-gray-600" />
            </div>
          </div>
        </div>
        
        {/* Base */}
        <div className="bg-gray-800 h-4 sm:h-6 md:h-8 border-t-2 sm:border-t-4 border-gray-700" />
      </div>
    </div>
  );

  const sponsors = [
    { name: 'Google For startup', style: 'font-family:Bagoss', tier: 'global', logo: '/sponsors/google.png' },
    { name: 'Brex', style: 'font-family:Bangers', tier: 'partners', logo: '/sponsors/brex.png' },
    { name: 'mercury', style: 'font-family:Bangers', tier: 'partners', logo: '/sponsors/mercury.png' },
    { name: 'deel', style: 'font-family:Bangers', tier: 'partners', logo: '/sponsors/deel.png' },
    { name: 'HSBC', style: 'font-family:Bangers', tier: 'partners', logo: '/sponsors/hsbc.png' },
  ];

  const organizers = [
    { name: 'Jatin Saxena', role: 'head-organiser', image: '/jatin.png' },
    { name: 'Arnab Roy', role: 'organiser', image: '/arnab.png' },
    { name: 'Mansi Negi', role: 'organiser', image: '/mansi.png' },
    { name: 'Krish', role: 'organiser', image: '/krish.png' },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Pixel Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {pixels.map(pixel => (
          <div
            key={pixel.id}
            className="absolute w-2 h-2 bg-gray-700 opacity-20"
            style={{
              left: `${pixel.left}%`,
              animation: `fall ${pixel.duration}s linear infinite`,
              animationDelay: `${pixel.delay}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b-2 border-gray-700 bg-black bg-opacity-80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/google.png" alt="Google" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <h1 className="text-lg sm:text-2xl md:text-3xl font-black arcade-text text-gray-100 text-center sm:text-left">
                STARTUP WEEKEND JAIPUR
              </h1>
            </div>
            
            {/* Arcade Score Display */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 bg-gray-900 px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-700 pixel-corners">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <span className="text-xs sm:text-sm md:text-base text-gray-100 font-black">SCORE: {score.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-700 pixel-corners">
                <span className="text-xs sm:text-sm md:text-base text-gray-100 font-black">COINS: </span>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 ${i < coins ? 'bg-yellow-600 border-yellow-500' : 'bg-gray-700 border-gray-600'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3 sm:mt-4 justify-center flex-wrap">
            {['home', 'register', 'organizers', 'sponsors'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-bold uppercase transition-all pixel-corners ${
                  activeTab === tab
                    ? 'bg-gray-200 text-black scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        {activeTab === 'home' && (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-block p-4 sm:p-6 md:p-8 neon-border bg-gray-900 bg-opacity-60 backdrop-blur pixel-corners w-full sm:w-auto">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black arcade-text text-gray-100 mb-3 sm:mb-4 px-2">
                  LEVEL UP YOUR STARTUP!
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-bold mb-4 sm:mb-6">
                  54 Hours • Jaipur • January 2026
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    <span className="text-sm sm:text-base font-bold">Jan 17-19, 2026</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    <span className="text-sm sm:text-base font-bold">Manipal University Jaipur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid with Arcade Machines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ArcadeMachine 
                title="PRIZES" 
                color="gray-700"
                screen={
                  <div className="text-center">
                    <Trophy className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-yellow-600 mb-3 sm:mb-4 mx-auto animate-bounce" />
                    <div className="text-2xl sm:text-3xl font-black text-gray-100 mb-2">₹5L+</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-bold">WIN BIG PRIZES</div>
                  </div>
                }
              />
              <ArcadeMachine 
                title="TEAM UP" 
                color="gray-700"
                screen={
                  <div className="text-center">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-400 mb-3 sm:mb-4 mx-auto" />
                    <div className="text-base sm:text-lg md:text-xl font-black text-gray-100 mb-2">BUILD YOUR CREW</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-bold">DEVELOPERS • DESIGNERS</div>
                  </div>
                }
              />
              <ArcadeMachine 
                title="MENTORS" 
                color="gray-700"
                screen={
                  <div className="text-center">
                    <Zap className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-400 mb-3 sm:mb-4 mx-auto animate-pulse" />
                    <div className="text-base sm:text-lg md:text-xl font-black text-gray-100 mb-2">LEVEL UP</div>
                    <div className="text-xs sm:text-sm text-gray-400 font-bold">EXPERT GUIDANCE</div>
                  </div>
                }
              />
            </div>

            {/* Event Timeline */}
            <div className="p-4 sm:p-6 md:p-8 neon-border bg-gray-900 bg-opacity-60 backdrop-blur pixel-corners">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-100 text-center mb-6 sm:mb-8 arcade-text">
                GAME PLAN
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { day: 'DAY 1', title: 'Friday Night', time: '6:00 PM', events: ['Opening Ceremony', 'Idea Pitching', 'Team Formation'] },
                  { day: 'DAY 2', title: 'Saturday', time: '9:00 AM', events: ['Build Sprint', 'Mentor Sessions', 'Food & Fun'] },
                  { day: 'DAY 3', title: 'Sunday', time: '9:00 AM', events: ['Final Push', 'Presentations', 'Awards Ceremony'] }
                ].map((day, i) => (
                  <div key={i} className="p-4 sm:p-6 bg-gray-800 bg-opacity-50 border-2 border-gray-600 pixel-corners">
                    <div className="text-gray-400 font-black text-lg sm:text-xl mb-2">{day.day}</div>
                    <h4 className="text-xl sm:text-2xl font-black text-gray-100 mb-2">{day.title}</h4>
                    <p className="text-gray-500 font-bold mb-3 sm:mb-4 text-sm sm:text-base">{day.time}</p>
                    <ul className="space-y-2">
                      {day.events.map((event, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-300">
                          <Star className="w-4 h-4 text-gray-500" />
                          <span className="font-semibold">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA with Coin Slot */}
            <div className="text-center">
              <div className="inline-block w-full sm:w-auto">
                <div className="bg-gray-800 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-gray-700 pixel-corners">
                  <div className="text-gray-400 font-black text-xs sm:text-sm mb-3 sm:mb-4">INSERT COIN TO CONTINUE</div>
                  <div className="w-24 sm:w-32 h-6 sm:h-8 bg-black border-2 border-gray-600 mx-auto mb-3 sm:mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-yellow-600 border-2 border-yellow-500 animate-bounce" />
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('register')}
                    className="px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-6 bg-gray-200 text-black text-base sm:text-xl md:text-2xl font-black pixel-corners hover:scale-110 hover:bg-white transition-all w-full sm:w-auto"
                  >
                    PRESS START
                  </button>
                  <div className="text-gray-500 font-bold text-xs mt-3 sm:mt-4">CREDITS: {coins}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Registration Form as Arcade Machine */}
              <ArcadeMachine 
                title="PLAYER REGISTRATION"
                color="gray-700"
                screen={
                  <div className="w-full h-full overflow-y-auto px-2">
                    <div className="space-y-3 text-left">
                      <div>
                        <label className="flex items-center gap-2 text-gray-400 font-bold text-xs mb-1">
                          <User className="w-4 h-4" />
                          NAME
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-900 border-2 border-gray-700 text-gray-100 font-bold text-sm focus:outline-none focus:border-gray-500"
                          placeholder="Enter name"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-gray-400 font-bold text-xs mb-1">
                          <Mail className="w-4 h-4" />
                          EMAIL
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-900 border-2 border-gray-700 text-gray-100 font-bold text-sm focus:outline-none focus:border-gray-500"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-gray-400 font-bold text-xs mb-1">
                          <Phone className="w-4 h-4" />
                          PHONE
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-900 border-2 border-gray-700 text-gray-100 font-bold text-sm focus:outline-none focus:border-gray-500"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                     
                    </div>
                  </div>
                }
              />

              {/* Info Display Machine */}
              <ArcadeMachine 
                title="GAME INFO"
                color="gray-700"
                screen={
                  <div className="text-center space-y-6">
                    {showSuccess ? (
                      <div className="animate-pulse">
                        <Trophy className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-600 mx-auto mb-3 sm:mb-4" />
                        <div className="text-lg sm:text-xl md:text-2xl font-black text-gray-100 mb-2">PLAYER REGISTERED!</div>
                        <div className="text-xs sm:text-sm text-gray-400">CHECK YOUR EMAIL</div>
                        <div className="text-2xl sm:text-3xl font-black text-gray-100 mt-3 sm:mt-4">+1000 PTS</div>
                      </div>
                    ) : (
                      <>
                        <div className="text-gray-100 font-black text-base sm:text-lg md:text-xl mb-3 sm:mb-4">READY PLAYER ONE?</div>
                        <div className="space-y-2 sm:space-y-3 text-left px-2 sm:px-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                            <span className="text-gray-300 font-bold text-xs sm:text-sm">JAN 17-19, 2026</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                            <span className="text-gray-300 font-bold text-xs sm:text-sm">MANIPAL UNIVERSITY JAIPUR</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                            <span className="text-gray-300 font-bold text-xs sm:text-sm">₹5L+ PRIZES</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                            <span className="text-gray-300 font-bold text-xs sm:text-sm">500+ PLAYERS</span>
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gray-900 border-2 border-gray-700">
                          <div className="text-gray-400 text-xs font-bold mb-2">DIFFICULTY</div>
                          <div className="flex gap-1 justify-center">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 fill-yellow-600" />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                }
              />
            </div>

            {/* Register Button */}
            <div className="text-center mt-6 sm:mt-8">
              <button
                onClick={handleSubmit}
                className="px-6 sm:px-12 md:px-16 py-3 sm:py-4 md:py-6 bg-gray-200 text-black text-base sm:text-xl md:text-2xl font-black pixel-corners hover:scale-105 hover:bg-white transition-all w-full sm:w-auto"
              >
                START GAME → [COST: 1 COIN]
              </button>
            </div>
          </div>
        )}

        {activeTab === 'organizers' && (
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black arcade-text text-gray-100 text-center mb-8 sm:mb-12">
              GAME MASTERS
            </h2>
            {/* Head Organizer - Centered on top */}
            {organizers.filter(org => org.role === 'head-organiser').map((org, i) => (
              <div key={i} className="flex justify-center mb-8 sm:mb-12">
                <div className="max-w-md w-full px-4 sm:px-0">
                  <ArcadeMachine
                    title={org.role.toUpperCase().replace('-', ' ')}
                    color="gray-700"
                    screen={
                      <div className="text-center">
                        <div className="mb-3 sm:mb-4 flex justify-center">
                          <img 
                            src={org.image} 
                            alt={org.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 sm:border-3 md:border-4 border-gray-600"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-100 mb-2 px-2">{org.name}</h3>
                        <div className="flex justify-center gap-2 mt-3 sm:mt-4">
                          {[1,2,3].map(j => (
                            <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 fill-gray-500" />
                          ))}
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            ))}
            {/* Other Organizers - Lined up below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {organizers.filter(org => org.role === 'organiser').map((org, i) => (
                <ArcadeMachine
                  key={i}
                  title={org.role.toUpperCase()}
                  color="gray-700"
                  screen={
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={org.image} 
                          alt={org.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-gray-600"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-black text-gray-100 mb-2">{org.name}</h3>
                      <div className="flex justify-center gap-2 mt-4">
                        {[1,2,3].map(j => (
                          <Star key={j} className="w-4 h-4 text-gray-500 fill-gray-500" />
                        ))}
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sponsors' && (
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black arcade-text text-gray-100 text-center mb-8 sm:mb-12">
              POWER-UP SPONSORS
            </h2>
            
            {['global', 'partners'].map(tier => {
              const tierSponsors = sponsors.filter(s => s.tier === tier);
              if (tierSponsors.length === 0) return null;
              
              return (
                <div key={tier} className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-4 sm:mb-6" style={{
                    color: tier === 'global' ? '#D1D5DB' : 
                           tier === 'partners' ? '#9CA3AF' : '#6B7280'
                  }}>
                    {tier.toUpperCase()} TIER
                  </h3>
                  <div className={`grid gap-4 sm:gap-6 justify-items-center ${tier === 'global' ? 'grid-cols-1 max-w-2xl mx-auto' : tier === 'partners' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'}`}>
                    {tierSponsors.map((sponsor, i) => (
                      <div key={i} className="p-4 sm:p-6 md:p-8 neon-border bg-gray-900 bg-opacity-60 backdrop-blur pixel-corners hover:scale-105 transition-transform w-full flex flex-col items-center text-center">
                        <div className={`${tier === 'global' ? 'h-24 sm:h-28 md:h-32' : 'h-20 sm:h-22 md:h-24'} mb-3 sm:mb-4 flex justify-center items-center w-full`}>
                          <img 
                            src={sponsor.logo} 
                            alt={sponsor.name} 
                            className={`max-w-full h-auto ${tier === 'global' ? 'max-h-24 sm:max-h-28 md:max-h-32' : 'max-h-20 sm:max-h-22 md:max-h-24'} object-contain mx-auto`} 
                            style={{ display: 'block', margin: '0 auto' }} 
                          />
                        </div>
                        <h4 className={`${tier === 'global' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl'} font-black text-gray-100 mb-2 w-full text-center px-2`} style={sponsor.style ? (() => {
                          const styleStr = sponsor.style;
                          if (styleStr.includes('font-family:')) {
                            const fontFamily = styleStr.match(/font-family:([^;]+)/)?.[1] || 'Bangers';
                            return { fontFamily: fontFamily.trim() };
                          }
                          return { fontFamily: 'Bangers' };
                        })() : undefined}>{sponsor.name}</h4>
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 pixel-corners font-bold mt-2 text-xs sm:text-sm" style={{
                          backgroundColor: tier === 'global' ? '#D1D5DB' : 
                                         tier === 'partners' ? '#9CA3AF' : '#6B7280',
                          color: '#000'
                        }}>
                          {tier} Sponsor
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 neon-border bg-gray-900 bg-opacity-60 backdrop-blur pixel-corners text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-100 mb-3 sm:mb-4">BECOME A SPONSOR</h3>
              <p className="text-gray-400 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Join us in powering the next generation of startups!</p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-200 text-black text-sm sm:text-base font-black pixel-corners hover:scale-105 hover:bg-white transition-all w-full sm:w-auto">
                UNLOCK SPONSORSHIP
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 sm:mt-16 md:mt-20 border-t-2 border-gray-700 bg-black bg-opacity-80 backdrop-blur py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-bold text-base sm:text-lg">
            🎮 STARTUP WEEKEND JAIPUR 2026 🎮
          </p>
          <p className="text-gray-500 font-semibold mt-2 text-sm sm:text-base px-2">
            Press START to begin <a href="https://www.techstars.com" className="text-gray-400 hover:text-gray-300 break-all sm:break-normal">www.techstars.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

