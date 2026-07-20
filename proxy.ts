import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
  'https://www.amazon.com/NISHEL-Full-Sized-Conditioner-Travel-Size-Accessories/dp/B0CXCRZC7W?th=1&linkCode=ll2&tag=packedgepost-20&linkId=90e8e95a092067fe9674fd69fe85169f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BAGSMART-Lightweight-Accessories-Essentials-Toiletries/dp/B0CKYZWDPT?th=1&linkCode=ll2&tag=packedgepost-20&linkId=8e6c4a2afc835e1edd1493d79a096bac&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vorspack-Toiletry-Hanging-Resistant-Capacity/dp/B08NCD92ZM?th=1&psc=1&linkCode=ll2&tag=packedgepost-20&linkId=5c88e2cd630748dddcf873bb9fb8c3ab&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BAGSMART-Toiletry-Accessories-Repellent-Black-2pcs/dp/B0BFR2C7Y1?th=1&linkCode=ll2&tag=packedgepost-20&linkId=e88e9609b5d715db6a84797443345759&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BAGSMART-Organizer-Water-resistant-Toiletries-Accessories/dp/B084GS82RV?th=1&linkCode=ll2&tag=packedgepost-20&linkId=97603c3dc8fea9f03d816a84ccf08d54&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Icramsy-Toiletry-toiletry-Cosmetic-accessories/dp/B0CNPWMSXC?th=1&linkCode=ll2&tag=packedgepost-20&linkId=a8d8e2c7067c54ac203b8edb3c98ffa0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Carhartt-Durable-Toiletry-Organizer-Travel/dp/B0CVSFGMWY?th=1&linkCode=ll2&tag=packedgepost-20&linkId=a8f7868b1a20b06e065e65b24f75981c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vorspack-Toiletry-Hanging-Resistant-Capacity/dp/B08NC27SNG?th=1&linkCode=ll2&tag=packedgepost-20&linkId=e169cc2ae1886f3a25c749e201b8c33b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Traveling-Upgraded-Airplane-Headrest-Accessories/dp/B07SRRQS5B?th=1&linkCode=ll2&tag=packedgepost-20&linkId=5237cbf10aad9a7fc88c4c08af5ad434&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BCOZZY-Chin-Supporting-Travel-Pillow/dp/B01DODMU9I?th=1&linkCode=ll2&tag=packedgepost-20&linkId=3a35bc226a8ca938f34046855895f311&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SAIREIDER-Travel-Airplane-Traveling%E3%80%81Car%E3%80%81Home%E3%80%81Office%EF%BC%8CWashable-Cover%EF%BC%88Black%EF%BC%89/dp/B0CL9SXSBD?th=1&linkCode=ll2&tag=packedgepost-20&linkId=0e8da6c4a84aecf1dac5b380bd490041&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Trtl-Pillow-Scientifically-Support-Washable/dp/B00LB7REBE?th=1&linkCode=ll2&tag=packedgepost-20&linkId=cf7c3a3d6562093c7bfcdbe5314ec1b2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cirorld-Traveling-Airplanes-Adjustable-Accessories/dp/B0DB89GKLJ?th=1&linkCode=ll2&tag=packedgepost-20&linkId=8ed069fa15e4e0004cb93dc4aab6307e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Comfortable-Portable-Suitable-Self-Driving-Washable/dp/B0982TPZTW?th=1&linkCode=ll2&tag=packedgepost-20&linkId=3667df667ba7949c83fbcc7d2c23c9a4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Dot-Bendable-Airplane-26-Inch-Adjustable/dp/B01IEJHJWK?th=1&linkCode=ll2&tag=packedgepost-20&linkId=46470c32e605ed52a52edb02a03b9034&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FlyHugz%C2%AE-Comfort-Airplane-Compact-Ergonomic/dp/B0D9PH3FRB?th=1&linkCode=ll2&tag=packedgepost-20&linkId=b05e13dc81726532990611bda5a67ab7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Bedding-Toddler-Pillow-Sleeping/dp/B07P8NXQF4?th=1&linkCode=ll2&tag=packedgepost-20&linkId=9f9ce99058771ba95f7079f88f5ef02e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vzpeun-Travel-Pillow-Airplane-Accessories/dp/B0FF3XWN8H?th=1&linkCode=ll2&tag=packedgepost-20&linkId=9e386e34b53b59219c3cbdcd00a06ed4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BALEINE-Garment-Storage-Dresses-Essential/dp/B0C7BCV3XS?th=1&linkCode=ll2&tag=packedgepost-20&linkId=534b995e4ea566201c85c034cf824158&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Lazebox-Garment-Storage-Waterproof-Hanging/dp/B0C2Z537J3?th=1&linkCode=ll2&tag=packedgepost-20&linkId=74ad400a4f8e6dbc28f16398e08c8e26&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BALEINE-Foldable-Garment-Premium-Hanging/dp/B0CF5GHR47?th=1&linkCode=ll2&tag=packedgepost-20&linkId=d19c3ab7a624972aa964a8f068f17b75&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LXLOVESM-Garment-Bags-Hanging-Dress/dp/B0F3JHM26H?th=1&linkCode=ll2&tag=packedgepost-20&linkId=ff0bba9302b91bc11e0c5da42e709a61&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Liuoud-Garment-Hanging-Clothes-Gusseted/dp/B0CCJ77L5J?th=1&linkCode=ll2&tag=packedgepost-20&linkId=f6ec9d2ca63c48a41dfeb5a9d2dedf6f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MISSLO-Gusseted-Garment-Hanging-Clothes/dp/B0B318X4KN?th=1&linkCode=ll2&tag=packedgepost-20&linkId=4c47bbad910354230d843c1cc0cc1e98&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Garment-Breathable-Zipper-Clothes-Closet/dp/B078W4L1MX?th=1&linkCode=ll2&tag=packedgepost-20&linkId=20e806bfd3f1d1f6eea7bc8ddda52518&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LANDNEOO-Garment-Hanging-Clothes-Zippers/dp/B0DT3TV8YG?th=1&linkCode=ll2&tag=packedgepost-20&linkId=742cb90e40c07567fea71c7d8224a8e2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-Insulated-Stainless-BPA-Free-40-Ounce/dp/B0B6DCN2CJ?th=1&linkCode=ll2&tag=packedgepost-20&linkId=758682a43d2869af9ece941fe9e35131&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-Two-Way/dp/B0FK1CDVHB?th=1&linkCode=ll2&tag=packedgepost-20&linkId=744adb6e60a145baa41fb25c5c442e3d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-SmoothSip-Insulated-Stainless-Reusable/dp/B0DF4D97JB?th=1&linkCode=ll2&tag=packedgepost-20&linkId=b3d503f2b05e86d6e1bc246aa8054e4c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-Princess-Insulated-Stainless-Cinderella/dp/B0F2WMS7CC?th=1&linkCode=ll2&tag=packedgepost-20&linkId=9ae5de0f1e900f125809715bcc1db5d0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Toiletries-Approved-Containers-Conditioner-Essentials/dp/B0BZWMJM2F?th=1&linkCode=ll2&tag=packedgepost-20&linkId=7d88cedc973b06946a01fc4c130ea8bb&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mrsdry-Toiletries-Containers-Accessories-Conditioner/dp/B0BFWD2VML?th=1&linkCode=ll2&tag=packedgepost-20&linkId=fff25b4a42c936370364c0626edb8740&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Quatish-Containers-Toiletries-Conditioner-Essentials/dp/B0BY1FXVLZ?th=1&linkCode=ll2&tag=packedgepost-20&linkId=9aa5c7b1968685d003e657ef61eb8eec&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Contigo-Snapseal-Insulated-Travel-Sake/dp/B083TB53TJ?th=1&linkCode=ll2&tag=packedgepost-20&linkId=ae759df19dd96fc62191b5ad083ec6d2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Muslish-Toiletries-Leak-Proof-Containers-Conditioner/dp/B0D8J5DXWP?th=1&linkCode=ll2&tag=packedgepost-20&linkId=1772799d8b4676e4ea8acd01847d3b44&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Owala-FreeSip-Push-Button-25-Ounce-Marshmallow/dp/B085DTY4VS?th=1&linkCode=ll2&tag=packedgepost-20&linkId=1af8d05b2d2a602a021e2504e945758f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Eoehro-Passport-Essentials-Accessories-Holders/dp/B0D3G6KDWF?th=1&linkCode=ll2&tag=packedgepost-20&linkId=c9e87180b6bb58e153d1fac378cb5d42&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HERO-Neck-Wallet-Blocking-Pickpockets/dp/B07RV1L1F1?th=1&linkCode=ll2&tag=packedgepost-20&linkId=16038adeac9680a320d176e92679108c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Passport-Holder-Blocking-Leather-Accessories/dp/B07LG3TYJS?th=1&linkCode=ll2&tag=packedgepost-20&linkId=61b9afa4d6d30b274831cc89edba43cd&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOPBAG-Passport-Holder-Family-Waterproof/dp/B0C6TSCBDT?th=1&linkCode=ll2&tag=packedgepost-20&linkId=83166134e73301f3ddaed249a9ecaca3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Money-Travel-Blocking-Sleeves-Daily/dp/B0199S7IUS?th=1&linkCode=ll2&tag=packedgepost-20&linkId=9084315f249cfa005faeec0cfcd31615&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Melsbrinna-Passport-Waterproof-Wallet%EF%BC%8CID-organizer/dp/B091T3NMW3?th=1&linkCode=ll2&tag=packedgepost-20&linkId=1af96b83f11c711ab3a409a9ddb11c21&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TOURSUIT-Passport-Organizer-Vaccination-Protector/dp/B0B8X9KSHD?th=1&linkCode=ll2&tag=packedgepost-20&linkId=2f7e7c372ff16cc04a673a0809959236&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Taygeer-Backpack-Airplane-Approved-Lightweight/dp/B0CR9JFD7S?th=1&linkCode=ll2&tag=packedgepost-20&linkId=659322a59f622e6c707dbd25ecd15938&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Backpack-Business-Charging-Resistant-Computer/dp/B06XZTZ7GB?th=1&linkCode=ll2&tag=packedgepost-20&linkId=5af65b7004fc5fe1ea6c1fc776635fde&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Backpack-Expandable-Weekender-Resistant-Lightweight/dp/B07P1SFHK3?th=1&linkCode=ll2&tag=packedgepost-20&linkId=1f1fa81a95dd61606be49e6e1d351c83&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LOVEVOOK-Backpack-Airplanes-Waterproof-Essentials/dp/B0CJY9LHK4?th=1&linkCode=ll2&tag=packedgepost-20&linkId=eb3b46eca0d3d79710ecbb66a0be587f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/coowoz-Backpack-Waterproof-Rucksack-Compartment/dp/B0B426KSXP?th=1&linkCode=ll2&tag=packedgepost-20&linkId=2ddf721bf424827a87d1db8f629ee619&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Travel-Laptop-Backpack-Charging-Laptops/dp/B07V4R4Z77?th=1&linkCode=ll2&tag=packedgepost-20&linkId=f7d55168dfd7887a8f8a33de82e446b5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Uselike-Backpack-College-Resistant-Backpacks/dp/B0F84YCJ6Q?th=1&linkCode=ll2&tag=packedgepost-20&linkId=5b21c6e3017d7452b07866a4f9d03398&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Osprey-Daylite-Expandable-Travel-Night/dp/B0DF863NS2?&linkCode=ll2&tag=packedgepost-20&linkId=85cddc91fdb3f93170fbcd860e65fbca&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'dev'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

