import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaTicketAlt } from 'react-icons/fa';

interface TourEvent {
  date: string;
  title: string;
  location: string;
  venue: string;
  city: string;
  state: string;
  description?: string;
  eventUrl?: string;
  ticketUrl?: string;
}

export default function TourDatesSection() {
  const tourEvents: TourEvent[] = [
    {
      date: 'Thu, Mar 5',
      title: 'In Person: FLY LEAF BOOKS',
      location: 'Chapel Hill',
      venue: 'Fly Leaf Books',
      city: 'Chapel Hill',
      state: 'NC',
      description: '752 M.L.K. Jr Blvd, Chapel Hill, NC 27514',
      eventUrl: 'https://www.google.com/maps?q=752+M.L.K.+Jr+Blvd++Chapel+Hill+NC+27514',
    },
    {
      date: 'Fri, Mar 20',
      title: 'In Person: FIRESTORM BOOKS',
      location: 'Asheville',
      venue: 'Firestorm Books',
      city: 'Asheville',
      state: 'NC',
      description: '6:30pm - 1022 Haywood Rd, Asheville, NC 28806',
      eventUrl: 'https://www.google.com/maps?q=1022+Haywood+Rd++Asheville+NC+28806',
    },
    {
      date: 'Wed, Apr 8',
      title: 'In Person: BOULDER BOOKSTORE',
      location: 'Boulder',
      venue: 'Boulder Bookstore',
      city: 'Boulder',
      state: 'CO',
      description: '6:30pm - 1107 Pearl St, Boulder, CO 80302',
      eventUrl: 'https://www.google.com/maps?q=1107+Pearl+St++Boulder+CO+80302',
    },
  ];

  return (
    <section
      id="tour-dates"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl sm:text-6xl font-black font-light uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Tour Dates
          </h2>
          <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#8FB9CB' }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Upcoming events, readings, and appearances
          </p>
        </div>

        {tourEvents.length > 0 ? (
          <div className="grid gap-8">
            {tourEvents.map((event, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 bg-white overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundImage: 'linear-gradient(to right, #8FB9CB, #d63447)' }}></div>

                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-all duration-300 mt-1" style={{ fontSize: '1.375rem', color: 'inherit' }}>
                      <FaCalendarAlt className="w-6 h-6" style={{ color: '#8FB9CB' }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 font-light tracking-widest mb-2">
                        Date
                      </p>
                      <p className="text-lg text-gray-900 font-light leading-tight">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-all duration-300 mt-1" style={{ fontSize: '1.375rem' }}>
                      <FaMapMarkerAlt className="w-6 h-6" style={{ color: '#8FB9CB' }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 font-light tracking-widest mb-2">
                        Location
                      </p>
                      <p className="text-lg text-gray-900 font-light leading-tight">
                        {event.city}, {event.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-all duration-300 mt-1" style={{ fontSize: '1.375rem' }}>
                      <FaTicketAlt className="w-6 h-6" style={{ color: '#8FB9CB' }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-gray-500 font-light tracking-widest mb-2">
                        Venue
                      </p>
                      <p className="text-lg text-gray-900 font-light leading-tight">{event.venue}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-6">
                  <p className="text-gray-900 font-light text-lg mb-3">{event.title}</p>
                  {event.description && (
                    <p className="text-gray-600 text-sm font-light leading-relaxed">{event.description}</p>
                  )}
                </div>

                <div className="flex gap-4 flex-wrap">
                  {event.ticketUrl && (
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent-red text-white rounded-none hover:bg-accent-red/90 transition-all duration-300 font-light text-sm"
                    >
                      Get Tickets
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {event.eventUrl && (
                    <a
                      href={event.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border rounded-none transition-all duration-300 font-light text-sm"
                      style={{ borderColor: '#8FB9CB', color: '#8FB9CB' }}
                    >
                      View Map
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center py-20">
            <p className="text-lg text-gray-700 font-light mb-2">
              Tour dates coming soon!
            </p>
            <p className="text-gray-500 font-light">
              Follow on{' '}
              <a
                href="https://www.instagram.com/kelseydays"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal hover:text-accent-teal/80 border-b border-accent-teal hover:border-accent-teal/60 transition-colors"
              >
                Instagram
              </a>
              {' '}and{' '}
              <a
                href="https://kelseydays.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal hover:text-accent-teal/80 border-b border-accent-teal hover:border-accent-teal/60 transition-colors"
              >
                Substack
              </a>
              {' '}for updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
