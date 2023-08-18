'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d651e5ab45b1c4225e589003d81fe1ea",
"index.html": "78114ea2524c6fa2f35136d8b19f049f",
"/": "78114ea2524c6fa2f35136d8b19f049f",
"main.dart.js": "c36dd065db81765a35dd57786040f9c9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "514cf6fbc629176961026cc4b125283d",
".git/config": "2188a019d04b3b4f9f17505446536e7c",
".git/objects/0d/3c9e2952d13e21ddab0be595c999f55bdafb52": "943f838e5439303c9476c98269230892",
".git/objects/0c/40edb77ddf37f86bd01240804d40469c8cb0d1": "6666307567be8de1209b23d74a3e35f5",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/58/5aedd99c0888329805b4f3e8b12dde8524432b": "f8850df40f7c76148f131131c90394e2",
".git/objects/a3/4426a5485f2a49eeaeb683b8bc3e19aa3b23bf": "25004906476110142885c6728734f505",
".git/objects/d9/034e68ad14dc9da92dd04e0b2638bda26f72b1": "65efb54e40fefc5b6178a73fa07079a7",
".git/objects/bb/7f42b55044d3cd19e75c570068d6db9c08bf96": "86cf176d28b1d0cf041e7d117804e83a",
".git/objects/d7/50b252387747c0453562711e4f8511eb60972d": "584a6d5be1c9160c2fcb53e68b2a9018",
".git/objects/df/c7ba638fce5561f9d7354a8ae73bce0f68b849": "2d6b35d402ad43858952851419459ac1",
".git/objects/a5/f57fbb94ba1ffe106a3ca61fd01dd2d22a5652": "f46a03a028f31c650f015ef8f6f1df39",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/257dbb677b4011fbdd83ef50279bb1961ea6fc": "cacee04594ce8a1d0737be16f18cf390",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a7a51ed44d87bef22f59898251ec57dcfb57f9": "e84e57355d2092fec53f2b6e414f8bee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/53921397a80ae4a04c30b202d4dc7697769c23": "c93626aef3bd794499095aa7388afd58",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/fd/172a4b66f6dd1ab6dbcb8b3eca34361011dba8": "aab8bd02e91895adc0ac9119031e56e7",
".git/objects/f5/e50b09106cb018c84d248e88366c989e41ed56": "fd8d102fc73fdc93c626606782ea873c",
".git/objects/fb/a21ac76f881581bad111ce3eb6ca06d3221ed2": "6b2e0f8e303cf3fdd99c870a1486add9",
".git/objects/ed/437c3ad56eff189bee645808f597481203679c": "df6e5043b8575ee27aaa254036c00b50",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/ec/37550a8e29235c9621aaee93ffdb99af9bd973": "5bb23f813d5547d27da309876cc5a1ea",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/114c030475c9e3f4be4f4d275f78c2a7ae5274": "82c01f7bc07fa3a9e14ca01361aa469a",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a5d1214ebf251396ce96ca4dfdc7fd0cbea090": "c69d276804290c82a6b973cef1f1fee6",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/54/3a5ed2b4b10efa0b60e369f8973eb879ae1994": "bee144d75c8e9aa08c235adcf97cadce",
".git/objects/53/3382c7c9d7cd1805cc91e736edaa1a9cc3514e": "d44acef5af55d3ae49cf62f2ccf825dc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/d29fe83f71e1f73f573025d276b5c9568a3b5e": "94950125be01da7c018f802b560524af",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/a9/4fe7aff1a0108dbd02f4acaaa7c945f2146aa9": "bc5eb86dd89d43e4ab909098dc53baf6",
".git/objects/af/12223bd72a5cb292328abf99489df6dc59fe3d": "6ea452baac5a20364dcfe083a28dbc1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c5e9f3d96507fff063df1049a1aa7626a50374": "b4194b4c9bbdc1fb13da928496d6214b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/d492653af7bbe2cf837d19114eeeb4b8bd68b3": "689aa303508bdd6ae6bbaea9ad540413",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e8/dd199fa8ac48e5a85410bfe53e384fb6e9687e": "8a39985a8ab5deb4bcd8b7607935d85d",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/caae512842ece5518f0cc95dfe471266b93964": "00e55a5d2fdf1e122418d138ef632b06",
".git/objects/2d/98f2f600c105a111c55b18a060f2f58640642a": "67f7b80c577c9a5c55117707992bbd0f",
".git/objects/1b/b82e2e1524c4785fb1ebab9c392147e1ef53f0": "8d0dad16121674285048d961ec9fca30",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/1e/a18128010d294e37a945968ac690f758aa2ab6": "5b57fd1f40771378cf0fb9e330661935",
".git/objects/8d/fa6787c005cb15292035f530c05468611fb449": "8c523a46d297f9d27294c15baa1e2cd6",
".git/objects/8d/e8407454ce10c3c2d81de035c0733f1e50a989": "7960d234c0e03d7d6a8c554f9eafb1b5",
".git/objects/1d/6f31db8d1bb997f5caa00a330952ba15e50886": "be78ca6de2d52bb87b77dc6d4c73d6e5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/f6d481acf41c338041df4131da3889872dbacd": "5944fd67220e29c711e36b4cf769ca3f",
".git/HEAD": "0ce6403a6ce600a65449f58beb160a0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a06562169473792ecd491719a25f9d4",
".git/logs/refs/heads/test": "663bdee45499f747311487e0848dac79",
".git/logs/refs/heads/main": "c6716c3af7cfa72948fd303adfeb2bea",
".git/logs/refs/remotes/origin/main": "68ecabf1626449de90e36421a8512a4b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test": "0db894a6be5e12d4069e91affed2b1ee",
".git/refs/heads/main": "0db894a6be5e12d4069e91affed2b1ee",
".git/refs/remotes/origin/main": "c33c5fe8c8249e6953cc779be688308b",
".git/index": "ef7c9ae346b22fae80288e67de650676",
".git/COMMIT_EDITMSG": "b7bce4f9bcbf7f1fbd5aaca414fdeea3",
"assets/AssetManifest.json": "d3c6d9ca643439a330ae646f2fd19bb5",
"assets/NOTICES": "f02c41ee7806244890645b3a954ba3ee",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "e143e657557479947f17198aad7f883d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/thingsboard.svg": "836e7885f3f1c2538223aae918045b38",
"assets/assets/images/google-logo.svg": "57e5e70bb3f21422473eda8f2c4d6f10",
"assets/assets/images/thingsboard.png": "02b2a28fd7dac2ea4ad908c24d03643a",
"assets/assets/images/device-profile-placeholder.svg": "674052043b6ee4b13771082d197bebb8",
"assets/assets/images/thingsboard_outer.svg": "869ec0274ccfd50da0cc3e00334c14f1",
"assets/assets/images/github-logo.svg": "6e52652fb0c0f5734105cfc38f7ed984",
"assets/assets/images/dashboard-placeholder.svg": "16fe793f96ac5a0aba21519274dc02c1",
"assets/assets/images/thingsboard_center.svg": "c7f6179f11d19d28957fc0a77eca8fdc",
"assets/assets/images/apple-logo.svg": "3f5b7973141dc64a64c7041c00a2bf53",
"assets/assets/images/facebook-logo.svg": "29cab6e8c86cd55c6a3e510c34ca6427",
"assets/assets/images/thingsboard_with_title.svg": "33a55c2a8ad573f30d7d4066a6772f7c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
