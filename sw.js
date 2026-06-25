/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-2ae722a1'], (function (workbox) { 'use strict';

  importScripts("/push-sw.js");
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "push-sw.js",
    "revision": "6aaf43a635f5c7c3f5a625cedff4a5ce"
  }, {
    "url": "og-image.png",
    "revision": "d97658dfc0850c820abdf0cdef2e917c"
  }, {
    "url": "logo.png",
    "revision": "9df985c28c53d36d2540372db65777a9"
  }, {
    "url": "index.html",
    "revision": "6694f4390d8e73bcd659db50e1fd6e8c"
  }, {
    "url": "assets/weight-C8mWGH8T.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-B9mMgu0B.js",
    "revision": null
  }, {
    "url": "assets/vendor-motion-BV6B0_ur.js",
    "revision": null
  }, {
    "url": "assets/utensils-Dr-wRWmH.js",
    "revision": null
  }, {
    "url": "assets/user-F4MpMhZ0.js",
    "revision": null
  }, {
    "url": "assets/useEscapeKey-epIzhsqu.js",
    "revision": null
  }, {
    "url": "assets/useComputedData-a_B6k4Dr.js",
    "revision": null
  }, {
    "url": "assets/useAthleteData-DUjbTqPK.js",
    "revision": null
  }, {
    "url": "assets/useAnalytics-40mKpmlz.js",
    "revision": null
  }, {
    "url": "assets/trophy-BVN0MwL-.js",
    "revision": null
  }, {
    "url": "assets/triangle-alert-CK_oAI3f.js",
    "revision": null
  }, {
    "url": "assets/trending-up-BPAL7Dyh.js",
    "revision": null
  }, {
    "url": "assets/trash-2-JuZU0bPE.js",
    "revision": null
  }, {
    "url": "assets/timer-Cew4szvJ.js",
    "revision": null
  }, {
    "url": "assets/target-DkcXZuei.js",
    "revision": null
  }, {
    "url": "assets/subDays-C0FPHTga.js",
    "revision": null
  }, {
    "url": "assets/send-BDeWKNKp.js",
    "revision": null
  }, {
    "url": "assets/search-D1RH52YG.js",
    "revision": null
  }, {
    "url": "assets/save-DTRboDpd.js",
    "revision": null
  }, {
    "url": "assets/repeat-DF6Ry1OM.js",
    "revision": null
  }, {
    "url": "assets/play-Bx3E0EiF.js",
    "revision": null
  }, {
    "url": "assets/pdf.worker-B4IDxXWI.js",
    "revision": null
  }, {
    "url": "assets/pdf-DfaD4CCm.js",
    "revision": null
  }, {
    "url": "assets/package-Bf9yppn7.js",
    "revision": null
  }, {
    "url": "assets/minus-BNrpbiVi.js",
    "revision": null
  }, {
    "url": "assets/mail-Bj1lc8cq.js",
    "revision": null
  }, {
    "url": "assets/list-checks-B76ha_CC.js",
    "revision": null
  }, {
    "url": "assets/layers-BByZMiqk.js",
    "revision": null
  }, {
    "url": "assets/isToday-IX23PNsG.js",
    "revision": null
  }, {
    "url": "assets/isSameDay-BIgfaTxX.js",
    "revision": null
  }, {
    "url": "assets/isBefore-l4ZhEegG.js",
    "revision": null
  }, {
    "url": "assets/index-By8FrbOb.js",
    "revision": null
  }, {
    "url": "assets/index-7E0ryrcy.css",
    "revision": null
  }, {
    "url": "assets/heart-pulse-C1iZpWaj.js",
    "revision": null
  }, {
    "url": "assets/heart-oVbWcnhK.js",
    "revision": null
  }, {
    "url": "assets/graphicalItemSelectors-B1KznBQa.js",
    "revision": null
  }, {
    "url": "assets/getDay-SHlw9liw.js",
    "revision": null
  }, {
    "url": "assets/gauge-ChQ9PITw.js",
    "revision": null
  }, {
    "url": "assets/formatDistanceToNow-JzUHo9Xf.js",
    "revision": null
  }, {
    "url": "assets/flame-DLJVKDxn.js",
    "revision": null
  }, {
    "url": "assets/filter-D-tVmghR.js",
    "revision": null
  }, {
    "url": "assets/file-up-DSgGclb0.js",
    "revision": null
  }, {
    "url": "assets/file-text-DOotg0F7.js",
    "revision": null
  }, {
    "url": "assets/eye-DyC8EHJZ.js",
    "revision": null
  }, {
    "url": "assets/endOfMonth-Cy9I0zaX.js",
    "revision": null
  }, {
    "url": "assets/eachDayOfInterval-ltjrfoC9.js",
    "revision": null
  }, {
    "url": "assets/dollar-sign-Bbf8OkcG.js",
    "revision": null
  }, {
    "url": "assets/dateUtils-CNpx-a3P.js",
    "revision": null
  }, {
    "url": "assets/copy-B2UiZy2F.js",
    "revision": null
  }, {
    "url": "assets/constructNow-BPE3NFCv.js",
    "revision": null
  }, {
    "url": "assets/clock-CCiQqA69.js",
    "revision": null
  }, {
    "url": "assets/circle-x-B73mqgab.js",
    "revision": null
  }, {
    "url": "assets/circle-check-B1JEbhXi.js",
    "revision": null
  }, {
    "url": "assets/circle-BQ10hH4f.js",
    "revision": null
  }, {
    "url": "assets/chevron-up-CT7tOWBy.js",
    "revision": null
  }, {
    "url": "assets/chevron-left-DAEfgS1n.js",
    "revision": null
  }, {
    "url": "assets/camera-rEprLNHk.js",
    "revision": null
  }, {
    "url": "assets/calendar-plus-BNyPd3sN.js",
    "revision": null
  }, {
    "url": "assets/calendar-days-Z-R2FyPK.js",
    "revision": null
  }, {
    "url": "assets/calendar-UmRGPMe_.js",
    "revision": null
  }, {
    "url": "assets/blogPosts-BsK7JfEK.js",
    "revision": null
  }, {
    "url": "assets/bell-BLKYX6Qf.js",
    "revision": null
  }, {
    "url": "assets/arrow-left-OiA30FiX.js",
    "revision": null
  }, {
    "url": "assets/archive-BNBt6sxO.js",
    "revision": null
  }, {
    "url": "assets/addWeeks-CoK-WUED.js",
    "revision": null
  }, {
    "url": "assets/activity-Bya8jMks.js",
    "revision": null
  }, {
    "url": "assets/WorkoutSessionPage-BURrddEn.js",
    "revision": null
  }, {
    "url": "assets/WorkoutLogViewer-CD1AP5ZW.js",
    "revision": null
  }, {
    "url": "assets/WorkoutHistoryPage-BvLWGcI8.js",
    "revision": null
  }, {
    "url": "assets/WellnessCheckInsPage-VNmkVO5P.js",
    "revision": null
  }, {
    "url": "assets/WaitlistPage-BhY5dWmV.js",
    "revision": null
  }, {
    "url": "assets/UpgradePromptModal-Bf7816SD.js",
    "revision": null
  }, {
    "url": "assets/TermsPage-CPaq77OD.js",
    "revision": null
  }, {
    "url": "assets/StripeResultModal-Zp3NxYar.js",
    "revision": null
  }, {
    "url": "assets/Skeleton-wG2OJgPO.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-hv2pXqwd.js",
    "revision": null
  }, {
    "url": "assets/SessionPunchcard-fa0rGqsk.js",
    "revision": null
  }, {
    "url": "assets/ScheduleSessionModal-BVgD379K.js",
    "revision": null
  }, {
    "url": "assets/SchedulePage-BAvYfMEr.js",
    "revision": null
  }, {
    "url": "assets/ResourcesPage-DBZjc-Cx.js",
    "revision": null
  }, {
    "url": "assets/QuickCreateClientForm-Do5r96BZ.js",
    "revision": null
  }, {
    "url": "assets/ProgressPhotosPage-DsQUMAht.js",
    "revision": null
  }, {
    "url": "assets/ProgressChartsPage-Bflebzy7.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlocksPage-DaBqLcrF.js",
    "revision": null
  }, {
    "url": "assets/ProgrammingBlockEditorPage-DzB_0yLD.js",
    "revision": null
  }, {
    "url": "assets/PrivacyPage-4GZau9xu.js",
    "revision": null
  }, {
    "url": "assets/OnboardingModal-CH8thhpE.js",
    "revision": null
  }, {
    "url": "assets/NutritionPage-Doc1uMi4.js",
    "revision": null
  }, {
    "url": "assets/NotFoundPage-f97dNNVN.js",
    "revision": null
  }, {
    "url": "assets/MessagesPage-fIiKwKK2.js",
    "revision": null
  }, {
    "url": "assets/MessageThread-D5gIu2zs.js",
    "revision": null
  }, {
    "url": "assets/ManagePackageModal-CGrg7BTY.js",
    "revision": null
  }, {
    "url": "assets/ManageClientModal-CGuWV4MS.js",
    "revision": null
  }, {
    "url": "assets/LogSessionModal-CIJvxNjJ.js",
    "revision": null
  }, {
    "url": "assets/LineChart-C71d7IJf.js",
    "revision": null
  }, {
    "url": "assets/InviteAcceptPage-CW0vecFq.js",
    "revision": null
  }, {
    "url": "assets/HabitTrackingPage-jS2lLy5i.js",
    "revision": null
  }, {
    "url": "assets/GymsPage-CDGG9Ntp.js",
    "revision": null
  }, {
    "url": "assets/GymFeedPage-A6E_kWPa.js",
    "revision": null
  }, {
    "url": "assets/GhostDrafterModal-CyMxHb4H.js",
    "revision": null
  }, {
    "url": "assets/ExportModal-rej-_tVK.js",
    "revision": null
  }, {
    "url": "assets/ExerciseLibraryPage-BlTuhhI8.js",
    "revision": null
  }, {
    "url": "assets/EmptyState-CWjBRoK6.js",
    "revision": null
  }, {
    "url": "assets/EmailLoginPage-CPvvvpEU.js",
    "revision": null
  }, {
    "url": "assets/DinoQuizPage-dmjVK5jb.js",
    "revision": null
  }, {
    "url": "assets/DayDetail-BiPGY5VR.js",
    "revision": null
  }, {
    "url": "assets/CsvClientImportModal-DpU1DL5a.js",
    "revision": null
  }, {
    "url": "assets/ContactTimeline-BGtTM0pB.js",
    "revision": null
  }, {
    "url": "assets/CommandPalette-Cn4H3QHM.js",
    "revision": null
  }, {
    "url": "assets/CoachSettingsModal-tX5PmY5_.js",
    "revision": null
  }, {
    "url": "assets/CoachMessagesPage-CHMnhm5F.js",
    "revision": null
  }, {
    "url": "assets/ClientsListPage-u_QC4iDr.js",
    "revision": null
  }, {
    "url": "assets/ClientRouteSync-iOchIcIr.js",
    "revision": null
  }, {
    "url": "assets/ClientDashboard-CfjZaGW5.js",
    "revision": null
  }, {
    "url": "assets/ChecklistPage-B9dAjWOt.js",
    "revision": null
  }, {
    "url": "assets/Card-D7tOBqM_.js",
    "revision": null
  }, {
    "url": "assets/Button-BKUlnUbz.js",
    "revision": null
  }, {
    "url": "assets/BulkImportModal-zGY5d3Ld.js",
    "revision": null
  }, {
    "url": "assets/BlogPostPage-D0z-Gl5M.js",
    "revision": null
  }, {
    "url": "assets/BlogListPage-C4b1aeM4.js",
    "revision": null
  }, {
    "url": "assets/AthleteOnboardingModal-ColgL2Jc.js",
    "revision": null
  }, {
    "url": "assets/AthleteLayout-CbAXGEXM.js",
    "revision": null
  }, {
    "url": "assets/AthleteGymPerformancePage-DZ0x9AlY.js",
    "revision": null
  }, {
    "url": "assets/AthleteDashboard-BaSoglZQ.js",
    "revision": null
  }, {
    "url": "assets/AnnouncementsPage-CxsZw4xo.js",
    "revision": null
  }, {
    "url": "assets/AnimatedModal-QPbfrQ_P.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsPanel-llOlJuyq.js",
    "revision": null
  }, {
    "url": "assets/AnalyticsDashboardPage-2UY14QKl.js",
    "revision": null
  }, {
    "url": "assets/AiPromptsPage-CEypmYEE.js",
    "revision": null
  }, {
    "url": "assets/AiProgramModal-DKDkWkdf.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/^\/api\//, /\/assets\/.*\.js$/, /\/assets\/.*\.css$/]
  }));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    })]
  }), 'GET');

}));
