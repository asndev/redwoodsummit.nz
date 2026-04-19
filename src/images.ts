// Placeholder imagery sourced from Unsplash (free to use under the Unsplash License).
// Swap these URLs with real property renders / photography as they become available.
// Centralized here so replacement is a single-file edit.

const u = (id: string, w = 1920, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  hero: u('1441974231531-c6227db76b6e', 2400),              // moody forest canopy
  heroMobile: u('1441974231531-c6227db76b6e', 1200),

  forestTrail: u('1448375240586-882707db888b', 1600),       // trail through redwoods
  mtbAction: u('1544191696-102dbdaeeaa0', 1600),            // MTB action shot
  mtbDirt: u('1516685125522-3c528b8046ee', 1600),           // rider on trail
  lodgeExterior: u('1449844908441-8829872d2607', 1600),     // timber lodge exterior
  lodgeInterior: u('1618221195710-dd6b41faaea6', 1600),     // warm premium interior
  spa: u('1571902943202-507ec2618e8f', 1600),               // hot tub / spa
  bikeVault: u('1485965120184-e220f721d03e', 1600),         // bikes in storage
  bikeWash: u('1486572788966-cfd3df1f5b42', 1600),          // wash / workshop
  cottage: u('1470770841072-f978cf4d019e', 1600),           // smaller cabin
  forestMorning: u('1511497584788-876760111969', 1600),     // forest morning light
  forestMist: u('1500382017468-9049fed747ef', 1600),        // foggy forest
  galleryA: u('1476231682828-37e571bc172f', 1200),
  galleryB: u('1493246507139-91e8fad9978e', 1200),
  galleryC: u('1516214104703-d870798883c5', 1200),
  galleryD: u('1464822759023-fed622ff2c3b', 1200),
};
