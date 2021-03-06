let Location = require("../models/Location.model");
const mongoose = require("mongoose");

require("../db");

const myLocations = [
  {
    name: "Courchevel",
    location: "France",
    locPicture: [
      "./ValdIsere1.jpg",
      "./images/locations/courchevel2.jpg",
      "./images/locations/courchevel3.jpg",
      "./images/locations/courchevel4.jpg",
    ],
    website: "www.courchevel.com",
    description: `Courchevel is the largest and most famous of the several interlinked ski resorts known as Les Trois Vallées (Three Valleys), which form the largest ski domain in Europe. In addition to the 150 kilometers of alpine runs you can reach from Courchevel's own 60 lifts, these link into access to a total of 600 kilometers of interconnected ski runs, plus four glaciers. The entire area is spread across 10 summits, with altitudes above 2,500 meters. Add to these superlative statistics the fact that the resorts get an annual snowfall of four meters and have state-of-the-art grooming to keep their runs in top condition. Although Courchevel is a favorite of experts for its superb off-piste terrain, tree skiing, couloirs, mogul-studded steeps, each of Courchevel's five separate villages has good terrain for beginners and intermediates; about one-fourth of Courchevel's pistes are for beginners and one-third for intermediates.
  Courchevel is especially family-friendly: free chairlifts serve the beginner areas, and magnetic safety vests for children are provided on lifts. In addition to its superlative skiing, Courchevel is renowned for its luxury accommodations and fine dining at several Michelin-starred restaurants.`,
  },
  {
    name: "Zermatt",
    location: "Switzerland",
    locPicture: [
      "./public/images/locations/zermatt1.jpg",
      "./public/images/locations/zermatt2.jpg",
      "./public/images/locations/zermatt3.jpg",
      "./public/images/locations/zermatt4.jpg",
    ],
    website: "www.zermatt.ch",
    description: `With Switzerland's greatest vertical drop and skiable terrain at altitudes as high as 3,900 meters, the highest winter sports area in the Alps has a lot more going for it than just a pretty face. But having the iconic landmark of the Matterhorn as a backdrop puts Zermatt and the mountainsides behind it on the top of most skiers' wish lists. Not only does the Matterhorn give the town the most scenic setting of any in Europe, its distinctive profile is visible from much of the 350-kilometer trail system connected to Zermatt.
  Zermatt is known for its long runs, some of which end right in the village - you can literally ski home. The Matterhorn Glacier Ride, which opened for the 2019 season, is the world's highest 3S cableway and carries 2,000 skiers an hour to the glacier. At an altitude of 3,883 meters, the glacier makes year-round skiing possible. The 10-person Kumme gondola to the Unterrothorn area begins operating in December 2020, the first gondola in Switzerland that can run without staff.
  To make this immense trail network safer and more accessible, skiers can download a free app, which uses GPS and adjusts for ability, weather, and snow conditions, as well as lift operations to guide skiers safely between locations.
  For less experienced skiers, Wolli's Park, at the top of the Sunnegga funicular, offers gentler terrain with the same smashing views. The southern face of the Matterhorn is in Italy, and experienced skiers can ski both countries in one day by skiing over the Theodul Pass and down into the Italian trail system.`,
  },
  {
    name: "Val d'Isere",
    location: "France",
    locPicture: [
      "./public/images/locations/ValdIsere1.jpg",
      "./public/images/locations/ValdIsere2.jpg",
      "./public/images/locations/ValdIsere3.jpg",
      "./public/images/locations/ValdIsere4.jpg",
    ],
    website: "www.valdisere.com/en",
    description: `Sharing a high valley surrounded by 3,000-meter peaks, Val d'Isère and neighboring Tignes offer 300 kilometers of skiable terrain served by more than 150 ski lifts. This comprises the vast Espace Killy, named for Olympic triple gold medal winner Jean-Claude Killy, a native of Val d'Isère. The lowest terrain is at an altitude of 1,550 meters, and the highest reaches to 3,450 meters, which helps keep the season open into May. You can usually be sure of skiing on the Glacier du Pisaillas into June or July.
  There's terrain for all skill levels, including slopes for children and beginners. Youngsters can ride covered magic-carpet lifts to gentle downhill slopes, and ski instruction here is among the best. A new Travelator, an enclosed magic-carpet from the top of a gondola, accesses a gentle high-altitude slope, so even beginning skiers can enjoy the thrill - and the views - of high-altitude skiing. The layout of the lifts is very skier-friendly, connecting skiers to different areas without long, level catwalk trails. The town itself is appealing, car-free, and known for its good restaurants.`,
  },
  {
    name: "Cortina d'Ampezzo",
    location: "Italy",
    locPicture: [
      "/public/images/locations/CortinadAmpezzo1.jpg",
      "/public/images/locations/CortinadAmpezzo2.jpg",
      "/public/images/locations/CortinadAmpezzo3.jpg",
      "/public/images/locations/CortinadAmpezzo4.jpg",
    ],
    website: "https://www.dolomiti.org/en/cortina/",
    description: `High in the Italian Dolomites, the five ragged peaks of the Cinque Torri provide the chic town of Cortina D'Ampezzo a beautiful setting, as well as superb ski terrain. After the Winter Olympics were held here in 1956, the beautiful people followed, making Cortina, for many years, the preferred winter resort of the jet-setters. Although it now has a much broader clientele, it still has the chic shops and stylish entertainment venues you'd expect of a smart European ski resort.
  But skiing is still the big draw. For all its Olympic-grade steeps and high-altitude snowfields, about half the skiable terrain is intermediate, and there is plenty of snow for beginners, too. Along with downhill skiing, Cortina offers miles of scenic cross-country ski trails, a bobsled run that is floodlit at night, and the Olympic rink for ice skaters.
  Cortina is far from alone in the Dolomites, where a dozen resorts share a single Dolomiti Superski Pass that gives access to the lifts and trails of all of them. This includes smaller, more intimate resorts like Val Gardena, one of the several ski towns in adjacent valleys between the peaks known as the Gruppo del Sella. Trails and lifts link nearly 400 kilometers of interconnected skiing, including the Marmolada Glacier. The entire area has been named a UNESCO World Heritage Site.`,
  },
  {
    name: "Chamonix",
    location: "France",
    locPicture: [
      "/public/images/locations/Chamonix1.jpg",
      "/public/images/locations/Chamonix2.jpg",
      "/public/images/locations/Chamonix3.jpg",
      "/public/images/locations/Chamonix4.jpg",
    ],
    website: "www.chamonix.com",
    description: `Its setting on snow-capped Mont Blanc, Europe's tallest peak at 4,807 meters, would make Chamonix a skiing icon, even without the quintessential French Alpine village that lies at its base. The altitude of the mountain and the glaciers around Chamonix have a cooling effect that preserves the snow, assuring it some of the best and longest lasting snow conditions in the Alps.
  Chamonix gained international fame as the site of the first Winter Olympics, fame which continued because it has some of the world's most challenging terrain. You can ski slopes with the world's greatest height differential at Grands Montets, one of the six different ski areas of Chamonix. The Verte piste, 3.5 kilometers of steeps and jumps, is used for World Cup races.
  Less experienced skiers will like Brévent - Flégère areas, where they'll find slopes for all skiing levels, along with spectacular panoramic views from some of the trails.
  Beginners will enjoy the gentle runs of the Balme - Vallorcine ski area, and families will find good learning facilities at Domaine Skiable des Planards or La Vormaine areas.`,
  },
  {
    name: "St. Anton am Arlberg",
    location: "Austria",
    locPicture: [
      "/public/images/locations/StAntonamArlberg1.jpg",
      "/public/images/locations/StAntonamArlberg2.jpg",
      "/public/images/locations/StAntonamArlberg3.jpg",
      "/public/images/locations/StAntonamArlberg4.jpg",
    ],
    website: "www.Stantonamarlberg.com",
    description: `Serious skiers head to Austria's Arlberg region for no-nonsense high-challenge skiing, which they find on the more than a dozen super-expert runs at St. Anton. The longest of these is the demanding 10-kilometer Valluga-St. Anton, with an elevation differential of 1,347 meters.
  But even the red-marked pistes here are well above the difficulty of other Alpine resorts. St. Anton is especially known for its roughly 200 off-piste options for advanced skiers - many are places to go with a guide - and its mega-moguls, especially on Schindler Kar.
  Recently added lifts link St. Anton to ski pistes on the other side of the Flexen Pass, uniting it to the main resorts in the Arlberg: Lech, St. Christoph, Zürs, Stuben, and others for a combined total of 340 kilometers of pistes. These are all included in the regional Arlberg lift pass.
  You can board lifts right from the village, a traffic-free cluster of traditional Tyrolean lodges and inns, normally known for its lively après-ski scene.`,
  },
  {
    name: "Kitzbühel",
    location: "Austria",
    locPicture: [
      "/public/images/locations/Kitzbühel1.jpg",
      "/public/images/locations/Kitzbühel2.jpg",
      "/public/images/locations/Kitzbühel3.jpg",
      "/public/images/locations/Kitzbühel4.jpg",
    ],
    website: "www.kitzbuehel.com",
    description: `Ski towns don't get any prettier or more romantic than the walled village of Kitzbühel, in the Austrian Alps, not far from Innsbruck and Salzburg. Although its colorful, frescoed buildings house deluxe hotels and pricey shops like those of Cortina or St. Moritz, Kitzbühel also welcomes families and budget travelers with small family-run inns.
  There's also something for all skiers in Kitzbühel's 170 kilometers of skiable pistes, and in the adjoining SkiWelt, where 280 more kilometers are served by 90 lifts.
  The most challenging of all downhill races is held here annually, the notorious Hahnenkamm, on terrain as steep as 85 percent vertical in places. The small Bichlalm area is especially designed for riders and freestylers. Kitzbühel and the SkiWelt are connected by bus, and both are part of the Kitzbühel Alps AllStarCard, which includes nine different ski areas in Austria.`,
  },
  {
    name: "St. Moritz",
    location: "Switzerland",
    locPicture: ["", "", "", ""],
    website: "https://www.stmoritz.ch",
    description: `The number of world ski competitions that have been hosted at St. Moritz should tell you something about this famous resort: this is world-class skiing. The Winter Olympics were held here in 1928 and 1948, and St. Moritz hosts the biennial Alpine World Ski Championship. You can often see competitions at its Olympic ski-jump.
  There's plenty of ski terrain for non-Olympians, too. St. Moritz is known for its long intermediate runs and other outstanding intermediate terrain, and with more than 20 lifts to choose from, you'll find slopes and pistes for every skill level. Above St. Moritz and reached from town by the Corviglia Funicular, trails from the 2,486-meter town of Corviglia have magnificent Alpine views.
  St. Moritz is one of Europe's first - some claim the first - winter resorts, and it still has a smart clientele and distinct air of luxury. There are plenty of things to do besides skiing: ice skating, tobogganing, Nordic skiing, bobsledding, and kite skiing. The St. Moritz Ice Cricket event will be held as scheduled, February 18-20, 2021.`,
  },
  {
    name: "Val Gardena",
    location: "Italy",
    locPicture: [
      "/public/images/locations/StMoritz1.jpg",
      "/public/images/locations/StMoritz2.jpg",
      "/public/images/locations/StMoritz3.jpg",
      "/public/images/locations/StMoritz4.jpg",
    ],
    website: "https://www.valgardena.it",
    description: `With the same world-class skiing as its neighboring Dolomite resort Cortina D'Ampezzo, but without the glitz or prices, the villages of Val Gardena offer a more casual, low-key experience.
  Val Gardena's 160 kilometers of trails and lifts connect with those in several adjacent valleys between the peaks of the Gruppo del Sella, creating nearly 400 kilometers of interconnected skiing that includes the Marmolada Glacier. Nearly two-thirds of the terrain reached from Val Gardena is for advanced and expert skiers, one of the highest percentages in the Dolomites. But beginning and intermediate skiers still have more than 130 kilometers to enjoy.
  Don't expect a vibrant nightlife in the villages of Ortisei, Santa Cristina, and Selva Val Gardena. Go to Cortina for that. Instead, you'll find a relaxing and friendly atmosphere of authentic Alpine hospitality, as well as small lodges and traditional inns serving local cuisine.
  People come here for the skiing experiences, such as skiing four runs used for the men's and women's downhill and giant slalom World Championship races, with average gradients of more than 25 percent.
  Along with ample natural snow and state-of-the art grooming. Val Gardena's infrastructure is top-of-the-line. Its 81 lifts include Italy's first eight-seater chairlift with heated seats, on the Piz Sella, offering a direct connection to the Sellaronda route. Val Gardena is included in the Dolomiti SuperSki pass, allowing access to 11 other resorts in the region.`,
  },
  {
    name: "Zugspitze",
    location: "Germany",
    locPicture: [
      "/public/images/locations/Zugspitze1.jpg",
      "/public/images/locations/Zugspitze2.jpeg",
      "/public/images/locations/Zugspitze3.jpg",
      "/public/images/locations/Zugspitze4.jpg",
    ],
    website: "http://zugspitze.de/en/winter/skiarea",
    description: `Rising to 2,962 meters, Zugspitze is Germany's highest mountain, and its popularity with skiers is enhanced by the beautiful Bavarian town of Garmisch-Partenkirchen at its foot. From its summit, which can now be accessed by a new cable car, extends a 360-degree panorama that reaches as far as 250 kilometers and includes mountain peaks in four countries.
  From the top of the lifts, you can ski the glacier, 2,700 meters above sea level - so high that it is often above clouds that cover the valley skies.
  All levels of skiers will find plenty of choices in the 40 kilometers of trails at the Garmisch-Classic ski area, interlinked across three mountains: Hausberg, Kreuzeck, and Alpspitze. For extreme challenges, there's the famed Kandahar Downhill and other courses that were used in the 1936 Winter Olympics and since then for the International Alpine Skiing Championships.
  A popular Olympic legacy is the Ice Stadium used for the 1936 winter games, now open for public skating. You can take lessons here at all levels, including speed skating and ice dancing. The area around Garmisch-Partenkirchen is networked with cross-country ski and snowshoe trails, and surrounded by spectacular Alpine views.`,
  },
  {
    name: "Courmayeur",
    location: "Italy",
    locPicture: [
      "/public/images/locations/Courmayeur1.jpg",
      "/public/images/locations/Courmayeur2.jpg",
      "/public/images/locations/Courmayeur3.jpeg",
      "/public/images/locations/Courmayeur4.jpg",
    ],
    website: "https://www.courmayeur-montblanc.com/",
    description: `Combining the challenges of terrain best suited to experts and intermediates with the glamour of the most haute Swiss and French ski resorts, Courmayeur is the place to be seen for the upscale ski set from Milan and Turin. The scene will be more subdued this year, with most or all après-ski venues closed.
  The setting - and skiing - on the flank of Mont Blanc, the Alps' highest mountain, is an undeniable draw. With or without skis, ride the Funivie Monte Bianco cable car to the ridgeline for views from the top of Europe. The expert-only pistes from the Arp are unmarked and when they are open at all, you can only ski them with a guide; the same goes for Courmayeur's abundant off-piste ski terrain. In nearby Dolonne are slopes suitable for beginners, but this region is better suited to experienced skiers. Nordic skiers, however will love the 20-kilometer network of cross-country trails beginning in Val Ferret, just outside Courmayeur. The surrounding scenery doesn't get much better. As you might imagine from the clientele, lodging and dining in Courmayeur is pricey.`,
  },
  {
    name: "Grindelwald-Wengen",
    location: "Switzerland",
    locPicture: [
      "/public/images/locations/GrindelwaldWengen1.jpg",
      "/public/images/locations/GrindelwaldWengen2.jpg",
      "/public/images/locations/GrindelwaldWengen3.jpg",
      "/public/images/locations/GrindelwaldWengen4.jpg",
    ],
    website: "https://jungfrauregion.ch/en/",
    description: `The multiple 400-meter-plus peaks of the Jungfrau massif can depend on reliably deep snow, and the ski resorts here are famed for their long runs. The steep slopes and high-altitude valleys offer skiers and boarders a combined total of 206 kilometers of ski runs, with idyllic little Alpine villages of chalets and lodges to come home to after a day in the snow.
  From Lauterbrunnen or Grindelwald, you can ride to the Kleine Scheidegg to take the Jungfraubahn railway to the highest railroad station in Europe at 3,454 meters, or ride the funicular and narrow-gauge railroad from Lauterbrunnen to the car-free little village of Mürren for the even more challenging terrain of the Schilthorn, best known for its black-diamond Inferno run.
  This is the site of the annual Inferno Race, the world's biggest amateur ski competition. Dozens of cable cars and lifts will take you to runs as long as 12 kilometers. It's not all white-knuckle steeps. Slopes close to the Alpine town of Wengen are good for beginning skiers and intermediates, while freestylers will find thrills at the Grindelwald-First superpipe and off-piste terrain.`,
  },
];

Location.create(myLocations)
  .then(() => {
    console.log("locations created", myLocations);
    mongoose.connection.close();
  })
  .catch((err) => {
    mongoose.connection.close();
  });
