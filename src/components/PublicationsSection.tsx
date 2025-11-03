import { useState } from 'react';
import { FaExternalLinkAlt, FaBook, FaPenNib, FaChevronDown } from 'react-icons/fa';

interface Publication {
  title: string;
  venue: string;
  year: number;
  link?: string;
  notes?: string;
  type: 'prose' | 'poetry';
}

const publications: Publication[] = [
  // Prose
  {
    type: 'prose',
    title: 'A Sister Who Wasn\'t Ours',
    venue: 'Psyche',
    year: 2025,
    link: 'https://psyche.co/stories-of-change/losing-a-foster-sister-forever-changed-my-understanding-of-family',
  },
  {
    type: 'prose',
    title: 'Land loneliness',
    venue: 'Aeon',
    year: 2024,
    link: 'https://aeon.co/essays/the-body-has-a-trauma-response-to-climate-violence',
  },
  {
    type: 'prose',
    title: 'Spring Wedding',
    venue: 'Washington Square Review',
    year: 2024,
    notes: 'Nominated for Pushcart Prize',
  },
  {
    type: 'prose',
    title: 'When emotions rot, they compost and transform into something new',
    venue: 'Aeon',
    year: 2023,
    link: 'https://psyche.co/ideas/when-emotions-rot-they-compost-and-transform-into-something-new',
  },
  {
    type: 'prose',
    title: 'The Yellow Finch Blockade',
    venue: 'Expositions Magazine',
    year: 2021,
    link: 'https://drive.google.com/file/d/1QQm34mBx5GGbHCbB1V2SbOqo_vpm3ujE/view?usp=sharing',
  },
  {
    type: 'prose',
    title: 'How to Read Leaf-Lines',
    venue: 'Wilder Things Magazine',
    year: 2021,
    link: 'https://wilderthingsmagazi.wixsite.com/wilderthings',
  },
  {
    type: 'prose',
    title: 'Something Bright',
    venue: 'Reservoir Road',
    year: 2021,
    link: 'https://www.reservoirroadlit.com/issue-02/something-bright',
    notes: 'Nominated for Best of the Net',
  },
  {
    type: 'prose',
    title: 'More Song Than Scream',
    venue: 'Our Shared Memory Collective',
    year: 2021,
    link: 'http://www.sharedmemory.info/anthology',
    notes: 'Non-Fiction Fellowship Winner',
  },
  {
    type: 'prose',
    title: 'Mother',
    venue: 'Reader Beware',
    year: 2021,
    link: 'https://writingpun.itch.io/reader-beware-2021',
  },
  {
    type: 'prose',
    title: 'Man-Eater',
    venue: 'Catfish Creek',
    year: 2020,
    link: 'https://issuu.com/lorasduhawks/docs/catfishcreek2020',
    notes: 'Reedsy Short Story Contest Winner',
  },
  {
    type: 'prose',
    title: 'Blue',
    venue: 'Blindcorner Literary Magazine',
    year: 2020,
  },
  {
    type: 'prose',
    title: 'God\'s Glitch',
    venue: 'Stork Literary Magazine',
    year: 2019,
    notes: 'Print Only',
  },
  // Poetry
  {
    type: 'poetry',
    title: 'i am my own ancestor',
    venue: 'Orion Magazine',
    year: 2025,
    link: 'https://orionmagazine.org/article/i-am-my-own-ancestor/',
  },
  {
    type: 'poetry',
    title: 'natural habitat',
    venue: 'He, She, They Us: An Anthology of Queer Poems',
    year: 2024,
    link: 'https://www.panmacmillan.com/authors/charlie-castelletti/he-she-they-us/9781035034277',
  },
  {
    type: 'poetry',
    title: 'Expat Elegy',
    venue: 'The Atlantic',
    year: 2024,
    link: 'https://www.theatlantic.com/books/archive/2024/10/poem-kelsey-day-expat-elegy/680172/',
  },
  {
    type: 'poetry',
    title: 'no miracle',
    venue: 'The Atlantic',
    year: 2024,
    link: 'https://www.theatlantic.com/books/archive/2024/06/poem-kelsey-day-no-miracle/678577/',
  },
  {
    type: 'poetry',
    title: 'i swipe up on an infographic titled "protect your peace"',
    venue: 'Pembroke Magazine',
    year: 2024,
    link: 'https://pembrokemagazine.squarespace.com/submit',
  },
  {
    type: 'poetry',
    title: '50% off venus fly traps',
    venue: 'Reckoning',
    year: 2024,
    link: 'https://reckoning.press/author/kelseyday/',
  },
  {
    type: 'poetry',
    title: 'Sunday in Atlanta',
    venue: 'Reckoning',
    year: 2024,
    link: 'https://reckoning.press/author/kelseyday/',
  },
  {
    type: 'poetry',
    title: 'Samson Mythologies',
    venue: 'Freeman\'s',
    year: 2023,
    link: 'https://www.amazon.com/Freemans-Conclusions-12-John-Freeman/dp/0802161472/',
  },
  {
    type: 'poetry',
    title: 'privacy, please',
    venue: 'The Appalachian Journal',
    year: 2023,
    link: 'https://appjournal.appstate.edu/issues/volume-50-no-1-2',
  },
  {
    type: 'poetry',
    title: 'It\'s easy to live in the apocalypse',
    venue: 'The Appalachian Journal',
    year: 2023,
    link: 'https://appjournal.appstate.edu/issues/volume-50-no-1-2',
  },
  {
    type: 'poetry',
    title: 'field notes from the anthropocene',
    venue: 'The Appalachian Journal',
    year: 2023,
    link: 'https://appjournal.appstate.edu/issues/volume-50-no-1-2',
  },
  {
    type: 'poetry',
    title: 'My Brother Buys a Colony',
    venue: 'The Appalachian Review',
    year: 2023,
    link: 'https://uncpress.org/book/9781469672472/appalachian-review-summer-2022/',
  },
  {
    type: 'poetry',
    title: 'line of subarus at the trail of tears state park: a call and response',
    venue: 'The Appalachian Review',
    year: 2023,
    link: 'https://uncpress.org/book/9781469672472/appalachian-review-summer-2022/',
  },
  {
    type: 'poetry',
    title: 'Open File / Delete History',
    venue: 'Rattlesnake Magazine',
    year: 2023,
    notes: 'Print Only',
  },
  {
    type: 'poetry',
    title: 'Fungi Texts',
    venue: 'Oroboro, Volume Six',
    year: 2022,
    link: 'https://deathrattlewritersfest.org/penrose-vol-2',
  },
  {
    type: 'poetry',
    title: 'Insectarium',
    venue: 'The Foundationalist',
    year: 2021,
    link: 'https://issuu.com/thefoundationalist/docs/vol_vi_issue_i',
  },
  {
    type: 'poetry',
    title: 'Duke Energy: A Pipeline Protest Poem',
    venue: 'Storm Cellar',
    year: 2021,
    link: 'https://www.etsy.com/listing/1060179866/storm-cellar-92-ebook',
  },
  {
    type: 'poetry',
    title: 'Virgo Moon',
    venue: 'Brave Voices',
    year: 2021,
    link: 'https://bravevoicesmagazine.org/2021/03/14/a-poem-by-kelsey-day/',
  },
  {
    type: 'poetry',
    title: 'Morning',
    venue: 'Tipping the Scales Literary & Arts Journal',
    year: 2021,
    link: 'https://www.amazon.com/Tipping-Scales-Literary-Journal-Issue/dp/B0915RP7SF',
  },
  {
    type: 'poetry',
    title: 'Table Talk',
    venue: 'Tipping the Scales Literary & Arts Journal',
    year: 2021,
  },
  {
    type: 'poetry',
    title: 'Monochrome',
    venue: 'Please See Me',
    year: 2021,
    link: 'https://pleaseseeme.com/issue-7/poetry/monochrome-kelsey-day/',
  },
  {
    type: 'poetry',
    title: 'Deadwater',
    venue: 'Atlas Magazine',
    year: 2019,
  },
  {
    type: 'poetry',
    title: 'Routine',
    venue: 'The Emerson Review',
    year: 2019,
    link: 'https://issuu.com/emerson_review/docs/the_emerson_review-_pdf',
  },
  {
    type: 'poetry',
    title: 'Evergreen Darkness',
    venue: 'Pinesong',
    year: 2017,
    notes: 'Print Only',
  },
];

const INITIAL_VISIBLE = 4;

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<'prose' | 'poetry'>('prose');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredPublications = publications.filter((pub) => pub.type === activeTab);
  const visiblePublications = isExpanded ? filteredPublications : filteredPublications.slice(0, INITIAL_VISIBLE);
  const proseCount = publications.filter((pub) => pub.type === 'prose').length;
  const poetryCount = publications.filter((pub) => pub.type === 'poetry').length;

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Publications
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto"></div>
          <p className="text-gray-600 font-light text-lg mt-6">
            Featured in prestigious literary journals and anthologies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('prose')}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-light tracking-wide transition-all duration-300 ${activeTab === 'prose'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900'
              }`}
          >
            <FaBook className="w-4 h-4" />
            <span>Prose</span>
            <span className="text-sm opacity-75">({proseCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('poetry')}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-light tracking-wide transition-all duration-300 ${activeTab === 'poetry'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900'
              }`}
          >
            <FaPenNib className="w-4 h-4" />
            <span>Poetry</span>
            <span className="text-sm opacity-75">({poetryCount})</span>
          </button>
        </div>

        {/* Publications List */}
        <div className="space-y-4 mb-8">
          {visiblePublications.map((pub, index) => (
            <a
              key={index}
              href={pub.link || '#'}
              target={pub.link ? '_blank' : undefined}
              rel={pub.link ? 'noopener noreferrer' : undefined}
              className={`group block relative p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-900 transition-all duration-300 animate-fadeIn overflow-hidden ${!pub.link ? 'cursor-default' : 'hover:shadow-xl'
                }`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="absolute top-0 left-0 h-full w-0 bg-gray-50 group-hover:w-1 transition-all duration-300"></div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-3">
                    {pub.type === 'prose' && <FaBook className="text-gray-400 mt-1 flex-shrink-0 w-4 h-4" />}
                    {pub.type === 'poetry' && <FaPenNib className="text-gray-400 mt-1 flex-shrink-0 w-4 h-4" />}
                    <h3 className="text-lg font-light text-gray-900 leading-tight tracking-tight group-hover:text-gray-700 transition-colors break-words flex-1">
                      <em>{pub.title}</em>
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-gray-600 font-light text-sm italic">
                      {pub.venue}
                    </span>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-light rounded">
                      {pub.year}
                    </span>
                  </div>
                  {pub.notes && (
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      ✓ {pub.notes}
                    </p>
                  )}
                </div>
                {pub.link && (
                  <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300 pt-1">
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* See More Button */}
        {filteredPublications.length > INITIAL_VISIBLE && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-8 py-3 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-900 transition-all duration-300 font-light tracking-wide group"
            >
              <span>{isExpanded ? 'Show Less' : 'See More'}</span>
              <FaChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                  }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
