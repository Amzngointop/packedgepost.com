import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pack Vocab — Travel Packing Glossary | PackEdgePost',
  description: 'The complete travel packing glossary — from TSA 3-1-1 to compression packing, RFID blocking, and carry-on compliance. Know the terms before you pack.',
}

const terms = [
  {
    term: '3-1-1 Rule',
    definition: 'The TSA liquids rule that governs what you can carry in an airplane cabin. Each liquid, gel, cream, or paste must be in a container of 3.4 oz (100ml) or smaller. All containers must fit in a single quart-size, clear, zip-top plastic bag. Each passenger is limited to one such bag. The rule exists because a 2006 foiled plot revealed that liquid explosives could be disguised as everyday toiletries. Containers must be the right size — a 6oz bottle that\'s half empty does not comply. The container size, not the fill level, determines compliance.',
    related: ['Quart-Size Bag', 'TSA PreCheck'],
  },
  {
    term: 'Carry-On Compliance',
    definition: 'The requirement that a carry-on bag falls within an airline\'s published size and weight limits for overhead bin placement. Domestic US airlines typically allow bags up to 22×14×9 inches including wheels and handles. International carriers often have tighter limits — Ryanair and easyJet are notably restrictive. Weight limits on carry-ons are rarely enforced in the US but strictly enforced on European budget carriers. A bag can be carry-on compliant on one airline and require gate-checking on another. Always check your specific carrier\'s current policy — rules change and vary by route, aircraft, and fare class.',
    related: ['Personal Item', 'Checked Bag Fee'],
  },
  {
    term: 'Compression Packing',
    definition: 'A technique for reducing the volume of packed clothing using dual-zipper packing cubes that physically squeeze the cube\'s panels together after filling. A compression cube has two zippers: the main zipper seals the cube at normal volume, and the compression zipper — run after the main zipper is closed — pulls the front and back panels together, reducing cube depth by 20-40%. Compression is most effective on casual fabrics (cotton, synthetics, athletic wear) and least effective on structured garments like suits and dress shirts, which should be packed flat to preserve shape. Compression does not wrinkle-proof garments — it compresses them.',
    related: ['Packing Cubes', 'Dead Weight'],
  },
  {
    term: 'Dead Weight',
    definition: 'Items packed on a trip that are never used — the enemy of every carry-on traveler and the primary cause of overweight bags. Dead weight typically includes: the "just in case" outfit that never gets worn, the full-size toiletry products you brought alongside hotel amenities, the third pair of shoes for an occasion that didn\'t materialize, and books you didn\'t read. Experienced packers perform a dead weight audit after every trip: any item returned with tags still on or still sealed gets removed from the packing list permanently. The cure for dead weight is honest trip planning rather than "what if" packing.',
    related: ['Carry-On Compliance', 'Compression Packing'],
  },
  {
    term: 'RFID Blocking',
    definition: 'A technology embedded in wallets, passport holders, and bags that prevents unauthorized reading of RFID (Radio Frequency Identification) chips in contactless payment cards and e-passports. The blocking material creates a Faraday cage — a conductive enclosure that reflects or absorbs electromagnetic signals before they reach the embedded chip. Effective RFID blocking requires complete coverage of all sides of the protected item. RFID skimming of contactless payment cards is a real but relatively uncommon threat — modern contactless cards transmit only single-use transaction codes, not complete account numbers. E-passport chips store personal biometric data and are a more meaningful protection target.',
    related: ['Passport Holders', 'Travel Security'],
  },
  {
    term: 'TSA PreCheck',
    definition: 'An expedited security screening program operated by the Transportation Security Administration (TSA) that allows enrolled travelers to use dedicated, faster security lanes at over 200 US airports. PreCheck members do not need to remove shoes, belts, laptops, or liquids from bags during screening. Enrollment requires a background check, in-person appointment at a TSA enrollment center, and a $78 fee valid for 5 years. PreCheck consistently reduces security wait times from the standard 30-60 minute process to under 10 minutes at most domestic airports. Several premium credit cards reimburse the enrollment fee as a cardholder benefit.',
    related: ['3-1-1 Rule', 'Carry-On Compliance'],
  },
  {
    term: 'Personal Item',
    definition: 'The second bag allowed on most commercial flights, distinct from the overhead bin carry-on. Personal items are meant to fit under the seat in front of you — typically a bag no larger than 18×14×8 inches. Common personal items include: structured laptop bags, small backpacks, purses, tote bags, and briefcases. Most airlines do not strictly enforce personal item size, but budget carriers (Spirit, Frontier, Ryanair, easyJet) charge fees for bags that exceed their specific personal item limits. Understanding the personal item allowance is key to carry-on-only travel: using both your overhead bin carry-on and a personal item effectively doubles your packing capacity without paying checked bag fees.',
    related: ['Carry-On Compliance', 'Checked Bag Fee'],
  },
  {
    term: 'Capsule Wardrobe',
    definition: 'A minimal clothing system designed so that every item coordinates with every other item, allowing multiple outfit combinations from a small number of garments. For travel, a capsule wardrobe typically follows a formula like 5-4-3-2-1: five tops, four bottoms, three shoes, two layering pieces, one statement item. Every item is chosen in a consistent, coordinating color palette — typically neutrals with one or two accent colors — so that any top can be paired with any bottom without creating a visually inconsistent outfit. Travel capsule wardrobes are built around fabric choices as much as garment choices: wrinkle-resistant synthetics and merino wool are preferred over cotton in travel contexts.',
    related: ['Dead Weight', 'Compression Packing'],
  },
  {
    term: 'Dopp Kit',
    definition: 'A toiletry bag, particularly as used by men, named after the Dopp Company — a New York leather goods manufacturer that popularized the standardized toiletry bag format in the 1940s through a US Army contract. During World War II, the US government issued Dopp Kit Company bags to millions of soldiers, establishing the format as the standard male toiletry carrier. The term became genericized in American English and now refers to any structured, flat-bottomed rectangular bag used for toiletries, regardless of whether it has a hanging hook. A hanging dopp kit combines the traditional flat-bottomed format with a hook for hotel bathroom use.',
    related: ['Hanging Toiletry Bags', 'TSA 3-1-1 Rule'],
  },
  {
    term: 'Garment Bag',
    definition: 'A long, narrow protective bag designed specifically for transporting suits, dresses, and formal wear in a hanging position to prevent wrinkles. Garment bags are typically 40-45 inches long — long enough to accommodate a full suit jacket and trousers or a formal dress without folding. Most have a hanger hook at the top that threads through a hole in the bag\'s hanging loop, and a fold-and-carry handle at the midpoint for transport. When flying, garment bags are folded in half at the midpoint and placed in the overhead bin or hung in garment closets available on some aircraft. High-quality garment bags include shoe pockets at the bottom and interior organization pockets for accessories.',
    related: ['Compression Packing', 'Carry-On Compliance'],
  },
  {
    term: 'Packing Cubes',
    definition: 'Fabric organizer compartments — typically a zippered rectangular cube with a mesh or solid top panel — used to separate and organize clothing within a suitcase or travel backpack. Packing cubes come in sizes from XS (for socks and underwear) to XL (for multiple bulky garments). They improve packing efficiency primarily through organization — knowing exactly where each clothing category is without unpacking — rather than through compression alone. Compression packing cubes add a second zipper that physically reduces cube volume by 20-40%. The most effective packing cube systems use a consistent categorization method across trips: by clothing type, by outfit, by person (for family travel), or by activity.',
    related: ['Compression Packing', 'Dead Weight'],
  },
  {
    term: 'Hardside Luggage',
    definition: 'Suitcases with rigid shells made from polycarbonate, ABS plastic, aluminum, or polypropylene, as opposed to fabric-sided softside luggage. Hardside luggage is more resistant to compression damage (protecting fragile contents), fully water-resistant, and generally more durable against rough baggage handling. The trade-off: hardside bags have fixed maximum capacity and can crack under extreme impact, whereas softside bags flex and expand slightly. Modern polycarbonate hardside luggage has mostly addressed the cracking concern through improved materials engineering. For travelers who check bags with fragile contents or pack precisely to size limits, hardside provides meaningful advantages over softside alternatives.',
    related: ['Carry-On Compliance', 'Spinner Wheels'],
  },
  {
    term: 'Spinner Wheels',
    definition: 'Luggage wheels mounted on 360-degree rotating axles, as opposed to two fixed inline wheels (which only roll forward and backward). Spinner wheels allow a suitcase to be rolled in any direction — sideways along a narrow aisle, pushed straight ahead, or maneuvered around tight corners — using a single hand. The four-wheel configuration distributes bag weight directly onto the floor rather than partially onto the wrist, making spinner bags feel significantly lighter when rolling than equivalent two-wheeled bags. The trade-off: spinner wheels protrude from the bag sides and are more vulnerable to breakage than recessed inline wheels, particularly in overhead bins where bags are jostled by other luggage.',
    related: ['Hardside Luggage', 'Carry-On Compliance'],
  },
  {
    term: 'TSA Lock',
    definition: 'A luggage lock that incorporates a secondary keyway allowing Transportation Security Administration agents to open the lock with a universal master key during bag inspection, without cutting the lock. TSA locks meet the Travel Sentry or Safe Skies certification standards, which specify the master key dimensions. Checked bags may be opened and inspected by TSA even after check-in — a locked bag that doesn\'t accept a TSA master key will have the lock cut off. TSA locks prevent casual opportunistic theft from baggage carousels and provide a visual deterrent, but do not prevent sophisticated or determined theft. For high-value items, additional insurance or in-carry-on storage is more effective than TSA locks alone.',
    related: ['Hardside Luggage', 'Checked Bag Fee'],
  },
  {
    term: 'Compression Socks',
    definition: 'Graduated compression hosiery that applies controlled pressure to the legs — tightest at the ankle, gradually decreasing toward the knee — designed to improve circulation and reduce the risk of deep vein thrombosis (DVT) during prolonged periods of immobility such as long-haul flights. DVT, the formation of blood clots in deep leg veins, is a documented (though statistically rare) risk in economy class seats during flights over 6-8 hours. Medical-grade compression socks (compression class 2, 20-30 mmHg) are most effective; fashion compression socks provide less therapeutic benefit. Travelers with existing circulatory conditions should consult a physician before selecting compression level.',
    related: ['Travel Neck Pillows', 'Carry-On Compliance'],
  },
  {
    term: 'Layover Strategy',
    definition: 'The planning framework for managing connecting flights, including minimum connection times, bag transfer logistics, airport navigation, and contingency handling. A layover strategy accounts for: connection time requirements (most airlines recommend 60-90 minutes minimum domestic, 2+ hours international), whether a checked bag transfers automatically or requires re-checking at the connection airport, whether the connection requires leaving and re-entering a secure zone (which requires repeating security), and lounge access for longer connections. Short connections are risky; long connections (4+ hours) benefit from lounge access and planned activities. The most important layover planning decision: whether to book connections with sufficient buffer time or save money on tight connections that risk missed flights.',
    related: ['Personal Item', 'Carry-On Compliance'],
  },
  {
    term: 'Checked Bag Fee',
    definition: 'The surcharge airlines levy for bags transported in the aircraft cargo hold rather than the passenger cabin. US domestic checked bag fees typically run $30-45 for the first bag and $40-65 for the second bag, each way — meaning a round-trip with one checked bag costs $60-90. International fees vary by carrier and fare class. Premium and business class tickets typically include checked bags. Certain airline co-branded credit cards include one free checked bag as a cardholder benefit — worth calculating against the annual card fee. The consistent motivation for carry-on-only travel is avoiding checked bag fees across multiple annual trips: a traveler taking 10 round-trips per year at $70/trip is spending $700 annually on bag fees alone.',
    related: ['Carry-On Compliance', 'Personal Item'],
  },
  {
    term: 'Quart-Size Bag',
    definition: 'The clear, zip-top plastic bag required by TSA for carrying liquids in carry-on luggage. A quart-size bag measures approximately 7×8 inches — the volume of one US liquid quart (approximately 946ml). Each passenger is limited to one quart-size bag, which must contain all liquids, gels, creams, aerosols, and pastes in 3.4oz or smaller containers. The bag must close completely — not merely be held shut — and must be removed from the carry-on bag for separate X-ray screening in standard security lanes. TSA PreCheck members are not required to remove the quart bag for screening. Dedicated TSA toiletry bags with durable zippers and correct dimensions outperform generic grocery store bags, which tend to tear and split under repeated use.',
    related: ['3-1-1 Rule', 'TSA PreCheck'],
  },
  {
    term: 'Wrinkle Release Spray',
    definition: 'A fabric conditioning spray that relaxes fabric fibers, releasing travel wrinkles without ironing. The product is applied to the wrinkled garment, which is then gently stretched or pulled taut and allowed to dry for 2-5 minutes. Popular commercial versions include Downy Wrinkle Releaser and similar products from multiple brands. Effectiveness varies by fabric: polyester and polyester blends respond well; heavy cotton and linen show moderate improvement; wool and silk show minimal benefit from sprays alone and are better served by steam. Travel-size wrinkle spray containers are available in 3oz TSA-compliant sizes. The spray works by temporarily softening the hydrogen bonds in fabric fibers that cause wrinkle-set, allowing the weight and stretch of the garment to smooth the fabric.',
    related: ['Garment Bag', 'Capsule Wardrobe'],
  },
  {
    term: 'Expandable Suitcase',
    definition: 'A suitcase with a hidden zipper section that, when unzipped, adds additional packing depth — typically 1-2 inches — increasing the bag\'s total capacity by 15-25%. Expandable suitcases are practical for travelers who pack light for outbound travel and acquire items at the destination (purchases, gifts, samples), then need extra capacity for the return trip. The trade-off: an expanded suitcase may exceed carry-on size limits that the unexpanded bag meets, forcing a gate check on the return. Expanded suitcases are also heavier to carry, as the additional depth adds weight even when the expansion volume isn\'t fully utilized. The expansion zipper is a mechanical failure point and requires periodic care to prevent splitting under load.',
    related: ['Hardside Luggage', 'Carry-On Compliance'],
  },
]

export default function PackVocabPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Pack Vocab</span>
      </nav>

      <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-2">Glossary</span>
      <h1 className="font-heading text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
        Pack Vocab
      </h1>
      <p className="font-body text-base text-gray-600 dark:text-gray-500 mb-12 max-w-2xl">
        The complete travel packing glossary — every term you need to pack smarter, move faster, and travel lighter.
      </p>

      <div className="columns-1 md:columns-2 gap-6">
        {terms.map(item => (
          <div
            key={item.term}
            className="break-inside-avoid mb-6 border-l-4 border-[#E8380D] pl-5 py-2"
          >
            <h2 className="font-heading text-base font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-2">
              {item.term}
            </h2>
            <p className="font-body text-sm text-gray-600 dark:text-gray-500 leading-relaxed">
              {item.definition}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-dashed border-[#d4d4d4] dark:border-gray-700 pt-8">
        <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
          Learn More
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/guides/tsa-311-liquids-rule-guide" className="font-body text-sm text-[#E8380D] hover:underline">
            TSA 3-1-1 Liquids Rule — Complete Guide →
          </Link>
          <Link href="/guides/pack-carry-on-two-weeks" className="font-body text-sm text-[#E8380D] hover:underline">
            How to Pack a Carry-On for 2 Weeks →
          </Link>
          <Link href="/guides/how-to-use-packing-cubes" className="font-body text-sm text-[#E8380D] hover:underline">
            How to Use Packing Cubes →
          </Link>
        </div>
      </div>
    </div>
  )
}
